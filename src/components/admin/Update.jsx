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
  const { loading, setLoading } = useContext(Context);

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

      const { data } = await axios.post(`${server}/api/v1/admin/add`, {
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
      });

      toast.success(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
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
      />
      <input
        className="my-2 form_input"
        value={price}
        onChange={e => setPrice(e.target.value)}
        type="text"
        placeholder="Price*"
      />
      <input
        className="my-2 form_input"
        value={discount}
        onChange={e => setDiscount(e.target.value)}
        type="text"
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
      >
        <option value="furniture">Furniture</option>
        <option value="kitchen-appliances">Kitchen Appliances</option>
        <option value="decoration">Home Decor</option>
      </select>
      <button
        type="submit"
        className="form_btn"
        disabled={loading}
        onClick={submitHandler}
      >
        Update
      </button>
    </form>
  );
};

export default Update;
