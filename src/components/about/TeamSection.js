import React from 'react';
import TeamCard from '../common/TeamCard';

const TeamSection = () => {
    // Sample data for team members
    const teamMembers = [
        {
            name: "John Doe",
            role: "CEO",
            image: "images/resource/team1.jpg",
            email: "john.doe@example.com",
            phone: "+30 595 59 291 1"
        },
        {
            name: "Jane Smith",
            role: "CTO",
            image: "images/resource/team2.jpg",
            email: "jane.smith@example.com",
            phone: "+30 595 59 291 2"
        },
        {
            name: "Sam Wilson",
            role: "Project Manager",
            image: "images/resource/team3.jpg",
            email: "sam.wilson@example.com",
            phone: "+30 595 59 291 3"
        },
        // Add more team members as needed
    ];

    return (
        <div className="boxcar-team-section-two">
            <div className="boxcar-container">
                <div className="boxcar-title wow fadeInUp">
                    <h2>Our Team</h2>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            email={member.email}
                            phone={member.phone}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
