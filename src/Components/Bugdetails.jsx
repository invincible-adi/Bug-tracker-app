import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://json-server-bug-tracker.onrender.com/api/bugs";

const BugDetails = () => {
    const { id } = useParams();
    const [bug, setBug] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                setBug(res.data);
            })
            .catch(() => setBug(null));
    }, [id]);

    if (!bug) return <p className="p-4">Loading...</p>;

    return (
        <>
            <div className="bg-gray-300 p-4 h-screen">
                <div className="p-6 max-w-6xl shadow-2xl bg-yellow-100 rounded-lg m-3 mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Bug Details</h2>
                    <div className="space-y-2">
                        <div><strong>Title:</strong> {bug.title}</div>
                        <div><strong>Description:</strong> {bug.description}</div>
                        <div><strong>Status:</strong> {bug.status}</div>
                        <div><strong>Priority:</strong> {bug.priority}</div>
                        <div><strong>Assigned To:</strong> {bug.assignedTo}</div>
                        <Link to={`/edit/${bug.id}`} className="inline-block mt-4 bg-yellow-500 text-white px-4 py-2 rounded">Edit</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BugDetails;