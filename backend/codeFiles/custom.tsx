import axios from "axios";
import React, { useEffect, useState } from "react";
const Dashboard: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        axios.get("https://api.example.com/data").then(response => {
            setData(response.data);
            setLoading(false);
        }).catch(error => {
            setError("Error fetching data");
            setLoading(false);
        });
    }, []);
    const handleClick = (id: number) => {
        alert(`Item clicked: ${id}`);
    };
    return (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
            <h1 style={{ textAlign: "center", color: "#333" }}>Dashboard</h1>
            {loading
                ? <p>Loading...</p>
                : error
                ? <p style={{ color: "red" }}>{error}</p>
                : (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {data.map(item => (
                            <li
                                key={item.id}
                                style={{
                                    background: "#fff",
                                    margin: "10px 0",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <span>{item.name}</span>
                                <button
                                    onClick={() => handleClick(item.id)}
                                    style={{
                                        background: "#007bff",
                                        color: "#fff",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "3px",
                                        cursor: "pointer",
                                    }}
                                >
                                    View
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
};
export default Dashboard;
