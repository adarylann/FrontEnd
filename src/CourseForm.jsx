import "./CourseForm.css";
import React, { useState } from "react";

const CourseForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        course: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.course) {
            alert("Please select a course before submitting!");
            return;
        }

        try {
            const response = await fetch(
                "https://express-node-agms43tx1-adarylanns-projects.vercel.app/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                const result = await response.json();
                alert("Form submitted successfully!");
                console.log("API Response:", result);

                setFormData({
                    name: "",
                    age: "",
                    email: "",
                    course: "",
                });
            } else {
                alert("Failed to submit form. Please try again.");
                console.error("API Error:", response.statusText);
            }
        } catch (error) {
            alert("An error occurred while submitting the form.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h1>Student Information System for PUPBC</h1>
                <p>Ensure all details are correct and final before submitting.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="course">Course:</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select course</option>
                            <option value="computer-engineering">
                                Bachelor of Science in Computer Engineering
                            </option>
                            <option value="industrial-engineering">
                                Bachelor of Science in Industrial Engineering
                            </option>
                            <option value="information-technology">
                                Bachelor of Science in Information Technology
                            </option>
                        </select>
                    </div>

                    <button type="submit" className="Submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CourseForm;