import React, { useState } from 'react';
import './AgentList.css';
import agents from './agentsdata'; // Adjust the path as needed

const AgentList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter agents based on search query
  const filteredAgents = agents.filter(agent =>
    agent.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="agent-list-container">
      <input
        type="text"
        placeholder="Search agents by description..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="agent-list">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="agent-contact">
            <img src={agent.image} alt={agent.name} className="agent-image" />
            <div className="agent-details">
              <h2 className="agent-name">{agent.name}</h2>
              <p className="agent-fee">Consultation Fee: {agent.fee}</p>
              <p className="agent-contact">
                Contact: <a href={`mailto:${agent.contact}`}>{agent.contact}</a>
              </p>
              <p className="agent-phone">Phone: {agent.phone}</p>
              <p className="agent-description">{agent.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;
