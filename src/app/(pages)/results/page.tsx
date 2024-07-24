"use client";
import React, { useState, useEffect } from 'react';
import { teamsData } from '../../../../public/results';
import Navbar from '@/components/common/Navbar';
import { turret } from '@/components/Countdown';

type Gender = 'M' | 'F';
type Role = 'Team Leader' | 'Team Member';

interface TeamMember {
  name: string;
  role: Role;
  email: string;
  college: string;
  gender: Gender;
}

interface Team {
  teamId: string;
  teamName: string;
  teamLeader: string;
  teamMembers: string[];
  college: string;
}

const TeamTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
  const teamsPerPage = 10;

  useEffect(() => {
    const results = teamsData.filter(team =>
      team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.teamLeader.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.teamMembers.some(member => member.toLowerCase().includes(searchTerm.toLowerCase())) ||
      team.college.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTeams(results);
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
  const currentTeams = filteredTeams.slice(indexOfFirstTeam, indexOfLastTeam);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className='pt-20'>
        <h1 className={`text-2xl text-center md:text-5xl font-bold py-2 md:py-8 ${turret.className} text-primary-heading`}>
          Shortlisted Teams
        </h1>
        <div className='w-11/12 md:w-10/12 flex items-center gap-5 md:gap-10 mx-auto'>
          <h1>Search by team name</h1>
          <input
            type="text"
            placeholder="Search teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 p-2 border rounded text-black"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full mx-auto border text-center border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Team Name</th>
                <th className="py-2 px-4 border">Team Leader</th>
                <th className="py-2 px-4 border">Team Members</th>
                <th className="py-2 px-4 border">College</th>
              </tr>
            </thead>
            <tbody>
              {currentTeams.map((team) => (
                <tr key={team.teamId}>
                  <td className="py-2 px-4 border">{team.teamName}</td>
                  <td className="py-2 px-4 border">{team.teamLeader}</td>
                  <td className="py-2 px-4 border">{team.teamMembers.join(", ")}</td>
                  <td className="py-2 px-4 border">{team.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4 flex-wrap">
          {Array.from({ length: Math.ceil(filteredTeams.length / teamsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 border text-black rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamTable;
