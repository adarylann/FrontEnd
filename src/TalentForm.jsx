import "./TalentForm.css";
import React, { useState } from "react";

const TalentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        talent: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.talent) {
            alert("Please select a talent before submitting!");
            return;
        }

        console.log("Form submitted: ", formData);

        setFormData({
            name: "",
            age: "",
            email: "",
            talent: ""
        });
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h1>Student Information System for PUPBC</h1>
                <p>Ensure all details are correct and final before submitting.</p>

                <form onSubmit={handleSubmit}>

                    {/* Name input field */}
                    <div className="form-field">
                        <label htmlFor="name">Name: </label> 
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

                    {/* Age input field */}
                    <div className="form-field">
                        <label htmlFor="age">Age: </label> 
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

                    {/* Email input field */}
                    <div className = "form-field">
                        <label htmlform="email">Email: </label>
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

                    {/* Talent input field */}
                    <div className = "form-field">
                        <label htmlform="talent">Course: </label>
                        <select
                            id="talent"
                            name="talent"
                            value={formData.talent}
                            onChange={handleChange}
                            required
                        >
                            <option value ="disabled">
                                Select course
                            </option>
                            <option value="singing">Bachelor of Science in Computer Engineering</option>
                            <option value="singing">Bachelor of Science in Industrial Engineering</option>
                            <option value="singing">Bachelor of Science in Information Technology</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="Submit-button">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
};

export default TalentForm;