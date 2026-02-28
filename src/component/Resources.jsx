import React from "react";
import "./resources.css";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaDocker,
  FaAws
} from "react-icons/fa";

import {
  SiJavascript,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiWeb3Dotjs
} from "react-icons/si";

const resourcesData = [
  {
    icon: <FaReact />,
    title: "React Docs",
    desc: "Master modern UI development with hooks, routing and state management."
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js Guide",
    desc: "Backend fundamentals, REST APIs and scalable server architecture."
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript Deep Dive",
    desc: "Closures, async patterns, memory model and execution context."
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    desc: "Version control, collaboration workflows and branching strategies."
  },
  {
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    desc: "Relational database design, indexing and performance optimization."
  },
  {
    icon: <SiRedis />,
    title: "Redis",
    desc: "In-memory caching, pub/sub systems and performance tuning."
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    desc: "Containerization, image building and production-ready deployment."
  },
  {
    icon: <SiKubernetes />,
    title: "Kubernetes",
    desc: "Container orchestration, scaling systems and microservices control."
  },
  {
    icon: <FaAws />,
    title: "AWS Cloud",
    desc: "Cloud infrastructure, EC2, S3, deployment and DevOps workflow."
  },
  {
    icon: <SiWeb3Dotjs />,
    title: "Web3",
    desc: "Blockchain integration, smart contracts and decentralized apps."
  }
];

const Resources = () => {
  return (
    <section className="resources">
      <h2>Resources & Technologies</h2>

      <div className="resource-grid">
        {resourcesData.map((item, index) => (
          <div className="resource-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;