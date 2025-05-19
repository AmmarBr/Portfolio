import React, { useState } from 'react'
import { cn } from '../lib/utils';
const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Figma", level: 75, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];

const categorios = ["all", "frontend", "tools"]

export default function SkillsSec() {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory == "all" || skill.category === activeCategory)
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id='skills'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'>Skills</span>
                </h2>
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categorios.map((e, i) => (
                        <button
                            key={i}
                            className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize'
                                , activeCategory === e ? "bg-primary text-primary-foreground" : "bg-primary-foreground/50 text-foreground hover:bg-primary"
                            )}
                            onClick={() => setActiveCategory(e)}
                        >
                            {e}
                        </button>
                    ))}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredSkills.map((e, i) => (
                        <div key={i} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className='text-left mb-4'>
                                <h3 className='font-semibold text-lg'>{e.name}</h3>
                            </div>
                            <div className='w-full bg-primary-foreground/50 h-2 rounded-full overflow-hidden'>
                                <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                                    style={{
                                        width: e.level + "%",
                                    }}
                                />
                            </div>
                            <div className='text-right mt-1'>
                                <span className='text-sm text-primary-foreground'>{e.level}%</span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
