import React from 'react';

const ProjectCard = ({ title, description, category, image, link }) => {
    return (
        <section className="w-full bg-slate-900 py-16 px-4 flex items-center justify-center">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                    {category.map((cat, index) => (
                        <span key={index} className="inline-block bg-blue-500 text-white text-xs px-2 py-1 mr-2">
                            {cat}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default ProjectCard;