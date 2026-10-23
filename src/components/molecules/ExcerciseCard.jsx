import React from "react";

export const ExerciseCard = ({image, title, subtitle}) =>{
    return (
        <div className="exercise-card">
            <img src={image} alt={title} className="exercise-image"/>
            <div className="exercise-info">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <span className="arrow-icon">&gt;</span>
        </div>

    );
};