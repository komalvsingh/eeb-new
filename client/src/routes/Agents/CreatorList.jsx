import React, { useState } from 'react';
import './CreatorList.css'; // Ensure this path is correct
import creators from './creatorsdata'; // Adjust the path as needed

function CreatorList() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter creators based on search query
  const filteredCreators = creators.filter(creator =>
    creator.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="agent-list-container">
      <h1 className="page-title">
        Explore Content Creators <img src="content.gif" alt="Animation" className="gifAnimation" />
      </h1>
      <h5 className="tagline">Discover your next favorite creator in just a few clicks! Explore a diverse range of talents, from artists to influencers, and connect with the creative minds shaping our world.</h5>
    

      <input
        type="text"
        placeholder="Search creators by bio..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      
      <div className="agent-list">
        {filteredCreators.map((creator) => (
          <div key={creator.id} className="agent-card">
            <img src={creator.image} alt={creator.name} className="agent-image" />
            <div className="agent-details">
              <h2 className="agent-name">{creator.name}</h2>
              <p className="agent-bio">{creator.bio}</p>
              <p className="agent-social">Follow: 
                <a 
                  href={`https://www.${creator.platform.toLowerCase()}.com/${creator.socialMedia}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {creator.socialMedia}
                </a>
              </p>
              <p className="agent-followers">Followers: {creator.followers}</p>
              <p className="agent-reviews">Reviews: {creator.reviews}</p>
              <p className="agent-contact">Contact: 
                <a href={`mailto:${creator.contact}`}>{creator.contact}</a>
              </p>
              <p className="agent-phone">📞 {creator.phone}</p>

              {creator.highlights && (
                <h6 className="agent-highlights">Highlights: {creator.highlights.join(', ')}</h6>
              )}
              {/* Check if rating and highlights exist */}
              {creator.rating && (
                <p className="agent-rating">Rating: {'⭐'.repeat(creator.rating)}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatorList;
