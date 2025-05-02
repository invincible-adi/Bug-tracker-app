import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const API_URL = "https://json-server-bug-tracker.onrender.com/api/bugs";

const BugList = () => {
    const [bugs, setBugs] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");

    const fetchBugs = () => {
        axios.get(API_URL).then(res => setBugs(res.data));
    };

    useEffect(() => {
        fetchBugs();
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                axios.delete(`${API_URL}/${id}`)
                    .then(() => {
                        toast.success("Bug deleted successfully");
                        fetchBugs();
                    });
            }
        });
    };

    const filtered = bugs.filter(bug =>
        bug.title.toLowerCase().includes(search.toLowerCase()) &&
        (statusFilter ? bug.status === statusFilter : true) &&
        (priorityFilter ? bug.priority === priorityFilter : true)
    );

    return (
        <>
            <div className="bg-gray-300 p-4 h-screen">
                <div className="p-6 max-w-6xl h-96 shadow-2xl bg-yellow-100 rounded-lg m-3 mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Bug List</h2>
                        <Link to="/add" className="bg-blue-100 text-blue-900 font-bold px-4 py-2 rounded hover:bg-blue-500 hover:text-white ">Add Bug</Link>
                    </div>

                    <div className="flex gap-4 mb-4">
                        <input type="text" placeholder="Search by title" value={search} onChange={e => setSearch(e.target.value)} className="border p-2 rounded w-1/3" />
                        <select onChange={e => setStatusFilter(e.target.value)} className="border p-2 rounded">
                            <option value="">All Status</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                        </select>
                        <select onChange={e => setPriorityFilter(e.target.value)} className="border p-2 rounded">
                            <option value="">All Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2">Title</th>
                                <th className="p-2">Priority</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Assigned To</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(bug => (
                                <tr key={bug.id} className="border-t text-center">
                                    <td className="p-2">{bug.title}</td>
                                    <td className="p-2">{bug.priority}</td>
                                    <td className="p-2">{bug.status}</td>
                                    <td className="p-2">{bug.assignedTo}</td>
                                    <td className="p-2 space-x-2 py-3">
                                        <Link to={`/bug/${bug.id}`} className="text-white p-2 rounded bg-blue-600">View</Link>
                                        <Link to={`/edit/${bug.id}`} className="text-white p-2 rounded bg-yellow-600">Edit</Link>
                                        <button onClick={() => handleDelete(bug.id)} className="text-white p-2 rounded bg-red-600">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default BugList;