import React from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Context, server } from "../../main";
import axios from "axios";
import "./add.css";
import { uploadFiles } from "../../utils/upload";
import { Navigate } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
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

  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // upload files
      const uploaded_files = await uploadFiles(files);
      // break input string into array
      let c = color.split(",").map(item => item.trim());
      let w = wood.split(",").map(item => item.trim());
      let cl = cloth.split(",").map(item => item.trim());

      const { data } = await axios.post(
        `${server}/api/v1/admin/add`,
        {
          name,
          price,
          discount,
          pictures: uploaded_files,
          description,
          warranty,
          color: c,
          wood: w,
          cloth: cl,
          category,
          stock,
        },
        {
          withCredentials: true,
        }
      );

      toast.success(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      error.response?.data?.auth == 0 &&
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
  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <form
      className="d-flex flex-column w-100 rounded-5 add_form"
      onSubmit={submitHandler}
    >
      <h1 className="head display-6">Enter your Product details</h1>
      <input
        className="my-2 form_input1"
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        placeholder="Name*"
        required
      />
      <input
        className="my-2 form_input1"
        value={price}
        onChange={e => setPrice(e.target.value)}
        type="number"
        placeholder="Price"
        required
      />
      <input
        className="my-2 form_input1"
        value={discount}
        onChange={e => setDiscount(e.target.value)}
        type="number"
        placeholder="Discount (optional in percentage)"
      />
      <input
        className="my-2 form_input1"
        value={description}
        onChange={e => setDescription(e.target.value)}
        type="text"
        placeholder="Description*"
        required
      />
      <input
        className="my-2 form_input1"
        value={warranty}
        onChange={e => setWarranty(e.target.value)}
        type="text"
        placeholder="Warranty (optional, eg- 1 year 2 month)"
      />
      <input
        className="my-2 form_input1"
        value={wood}
        onChange={e => setWood(e.target.value)}
        type="text"
        placeholder="Wood Material (eg- Oak, neem, sagwan)"
      />
      <input
        className="my-2 form_input1"
        value={cloth}
        onChange={e => setCloth(e.target.value)}
        type="text"
        placeholder="Cloth Material"
      />
      <input
        className="my-2 form_input1"
        value={color}
        onChange={e => setColor(e.target.value)}
        type="text"
        placeholder="Color (eg- red, greem, blue)"
      />
      <input
        className="my-2 form_input1"
        value={stock}
        onChange={e => setStock(e.target.value)}
        type="number"
        placeholder="stock available"
      />
      <input
        className="my-2 form_input1"
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
        className="my-2 form_input1"
      >
        <option value="furniture">Furniture</option>
        <option value="kitchen-appliances">Kitchen Appliances</option>
        <option value="decoration">Home Decor</option>
        required
      </select>
      <button
        type="submit"
        className="form_btn btn btn-outline-primary"
        disabled={loading}
        onClick={submitHandler}
      >
        Add product
      </button>
    </form>
  );
};

export default Add;
