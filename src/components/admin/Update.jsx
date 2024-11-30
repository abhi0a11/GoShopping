import React from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Context, server } from "../../main";
import axios from "axios";
import "./add.css";
import { uploadFiles } from "../../utils/upload";

const Update = ({ Name }) => {
  const [name, setName] = useState(Name);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [warranty, setWarranty] = useState("");
  const [color, setColor] = useState("");
  const [wood, setWood] = useState("");
  const [cloth, setCloth] = useState("");
  const [category, setCategory] = useState("furniture");
  const [files, setFiles] = useState([]);
  const [stock, setStock] = useState();
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const filesHandler = e => {
    if (!e.target.files) {
      toast.error("No files Selected");
      return [];
    }
    let images = Array.from(e.target.files);
    let newImages = [];
    images.forEach(file => {
      if (
        file.type !== "image/heic" &&
        file.type !== "image/png" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/gif" &&
        file.type !== "image/webp" &&
        file.type !== "image/webm"
      ) {
        images = images.filter(item => item.name !== file.name);
      } else if (file.size > 1024 * 1024 * 15) {
        images = images.filter(item => item.name !== file.name);
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
          newImages.push({
            file: file,
            fileData: e.target.result,
          });
        };
      }
    });
    setFiles(newImages);
  };
  const createPayload = (c, w, cl, uploaded_files) => {
    const obj = {};
    if (price) obj.price = price;
    if (discount) obj.discount = discount;
    if (description) obj.description = description;
    if (warranty) obj.warranty = warranty;
    if (c.length) obj.color = c;
    if (w.length) obj.wood = w;
    if (cl.length) obj.cloth = cl;
    if (uploaded_files.length) obj.files = uploaded_files;
    if (stock) obj.stock = stock;
    return obj;
  };
  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // upload files
      const uploaded_files = await uploadFiles(files);
      console.log("adter uploading", uploaded_files);
      // break input string into array
      let c = color.length ? color.split(",").map(item => item.trim()) : [];
      let w = wood.length ? wood.split(",").map(item => item.trim()) : [];
      let cl = cloth.length ? cloth.split(",").map(item => item.trim()) : [];

      const payload = createPayload(c, w, cl, uploaded_files);
      // console.log(payload);

      const { data } = await axios.put(
        `${server}/api/v1/admin/update/${Name}`,
        payload,
        {
          withCredentials: true,
        }
      );

      toast.success(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      error?.response?.data?.auth &&
        setIsAuthenticated(error.response.data.auth);
      toast.error(error.response.data.message);
    }
    setName("");
    setPrice("");
    setDiscount("");
    setFiles("");
    setDescription("");
    setWarranty("");
    setColor("");
    setCloth("");
    setWood("");
    setStock("");
  };
  return (
    <form
      className="d-flex flex-column w-100 rounded-5"
      onSubmit={submitHandler}
    >
      <h1 className="head display-6">Enter Updated Product details</h1>
      <input
        className="my-2 form_input"
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        placeholder="Name*"
        disabled={true}
      />
      <input
        className="my-2 form_input"
        value={price}
        onChange={e => setPrice(e.target.value)}
        type="number"
        placeholder="Price*"
      />
      <input
        className="my-2 form_input"
        value={discount}
        onChange={e => setDiscount(e.target.value)}
        type="number"
        placeholder="Discount (optional)"
      />
      <input
        className="my-2 form_input"
        value={description}
        onChange={e => setDescription(e.target.value)}
        type="text"
        placeholder="Description*"
      />
      <input
        className="my-2 form_input"
        value={warranty}
        onChange={e => setWarranty(e.target.value)}
        type="text"
        placeholder="Warranty (optional, eg- 1 year 2 month)"
      />
      <input
        className="my-2 form_input"
        value={wood}
        onChange={e => setWood(e.target.value)}
        type="text"
        placeholder="Wood Material (eg- Oak, neem, sagwan)"
      />
      <input
        className="my-2 form_input"
        value={cloth}
        onChange={e => setCloth(e.target.value)}
        type="text"
        placeholder="Cloth Material"
      />
      <input
        className="my-2 form_input"
        value={color}
        onChange={e => setColor(e.target.value)}
        type="text"
        placeholder="Color (eg- red, greem, blue)"
      />
      <input
        className="my-2 form_input"
        value={stock}
        onChange={e => setStock(e.target.value)}
        type="number"
        placeholder="Stock"
      />
      <input
        className="my-2 form_input"
        onChange={filesHandler}
        required
        multiple
        accept="image/*"
        type="file"
      />

      <select
        name="category"
        id="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="my-2 form_input"
        disabled={true}
      >
        <option value="furniture">Furniture</option>
        <option value="kitchen-appliances">Kitchen Appliances</option>
        <option value="decoration">Home Decor</option>
      </select>
      <button
        type="submit"
        className="form_btn btn btn-outline-success"
        disabled={loading}
        onClick={submitHandler}
      >
        Update
      </button>
    </form>
  );
};

export default Update;
