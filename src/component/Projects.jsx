import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">
        <span className="green">#</span> Projects
      </h2>
    <br />
      <div className="project-grid">

        <div className="project-card">
          <h3 className="blue">B2B Supplier Platform</h3>
          <p>
            A verified supplier marketplace built with MERN + PostgreSQL.
            Subscription-based model with supplier ranking system.
          </p>
          <span className="yellow">React • Node • Prisma • Docker</span>

          <div className="card-icons">
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaPen />
            </a>
          </div>
        </div>
                <br />
        <div className="project-card">
            
          <h3 className="blue">Web3 Wallet Dashboard</h3>
          <p>
            Decentralized wallet interface with smart contract interaction.
            Real-time blockchain data using Web3.
          </p>
          <span className="yellow">Web3 • Solidity • Redis • Kubernetes</span>

          <div className="card-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaPen /></a>
          </div>
        </div>
        <br />
        <div className="project-card">
            
          <h3 className="blue">SSC Study Tracker</h3>
          <p>
            Productivity dashboard with analytics, performance tracking,
            and smart progress visualization.
          </p>
          <span className="yellow">React • Chart.js • LocalStorage</span>

          <div className="card-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaPen /></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;