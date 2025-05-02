import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = "https://json-server-bug-tracker.onrender.com/api/bugs";

const schema = yup.object().shape({
    title: yup.string().required("Title is required").min(3, "Min 3 characters"),
    description: yup.string().required("Description is required"),
    status: yup.string().oneOf(["Open", "In Progress", "Closed"]).required(),
    priority: yup.string().oneOf(["Low", "Medium", "High"]).required(),
    assignedTo: yup.string().required("Assigned to anyone").min(3, "Min 3 characters"),
});

const EditBug = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            description: "",
            status: "Open",
            priority: "Medium",
            assignedTo: "",
        },
    });

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then(res => reset(res.data))
            .catch(() => toast.error("Bug not found"));
    }, [id, reset]);

    const onSubmit = data => {
        axios.put(`${API_URL}/${id}`, data)
            .then(() => {
                toast.success("Bug updated successfully");
                navigate("/");
            })
            .catch(() => toast.error("Update failed"));
    };

    return (
        <div className="bg-gray-300 p-4 h-screen">
            <div className="p-6 max-w-6xl shadow-2xl bg-yellow-100 rounded-lg m-3 mx-auto">
                <h2 className="text-2xl font-bold mb-4">Edit Bug</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block">Title</label>
                        <input {...register("title")} className="w-full p-2 border rounded" />
                        <p className="text-red-500 text-sm">{errors.title?.message}</p>
                    </div>

                    <div>
                        <label className="block">Description</label>
                        <input {...register("description")} className="w-full p-2 border rounded" />
                        <p className="text-red-500 text-sm">{errors.description?.message}</p>
                    </div>

                    <div>
                        <label className="block">Status</label>
                        <select {...register("status")} className="w-full p-2 border rounded">
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                        </select>
                        <p className="text-red-500 text-sm">{errors.status?.message}</p>
                    </div>

                    <div>
                        <label className="block">Priority</label>
                        <select {...register("priority")} className="w-full p-2 border rounded">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <p className="text-red-500 text-sm">{errors.priority?.message}</p>
                    </div>

                    <div>
                        <label className="block">Assigned To</label>
                        <input {...register("assignedTo")} className="w-full p-2 border rounded" />
                        <p className="text-red-500 text-sm">{errors.assignedTo?.message}</p>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditBug;
