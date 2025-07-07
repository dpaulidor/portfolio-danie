import React, { useState, useEffect } from 'react';
import  '../styles/Competences.css';


const Competences = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateBars, setAnimateBars] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Icônes SVG intégrées
  const svgIcons = {
    html5: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L4.14 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L4.14 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
    js: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-1.01-.402-1.61-.298-.859.15-1.415.822-1.491 1.671-.156 1.51.861 2.059 2.464 2.477.923.271 1.81.451 1.98 1.025.192.676-.129 1.09-.964 1.336-.845.25-1.663-.157-2.038-.836-.302-.506-.528-1.12-.986-1.555-.165-.18-.805-.396-1.23-.256-.43.146-.69.596-.586 1.35.174 1.13 1.395 1.562 2.57 1.63 1.023.06 1.962-.248 2.595-1.127.22-.33.363-.75.42-1.205.13-1.17-.44-1.73-1.58-2.33z"/>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M14.4 12a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z" />
        <path d="M12 20.4c-2.65 0-5.4-1.35-7.2-4.05-1.8-2.7-1.8-6.3 0-9C6.6 4.65 9.35 3.6 12 3.6c2.65 0 5.4 1.05 7.2 3.75 1.8 2.7 1.8 6.3 0 9-1.8 2.7-4.55 4.05-7.2 4.05zm0-15c-2.1 0-4.25.9-5.85 2.7-1.6 1.8-2.1 4.05-1.35 5.85.75 1.8 2.55 3 4.95 3.3 2.4.3 4.8-.45 6.3-2.1 1.5-1.65 1.95-4.05 1.2-6.15-.75-2.1-2.55-3.6-5.25-3.6z" />
      </svg>
    ),
    node: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M11.998 24c-2.246 0-4.488-.228-6.708-.684-1.827-.36-3.156-1.841-3.156-3.66V4.344c0-1.936 1.536-3.456 3.456-3.456 1.104 0 2.184.456 2.952 1.26l1.248 1.44c.6.66 1.464 1.032 2.388 1.032.936 0 1.8-.384 2.388-1.032l1.248-1.44c.768-.804 1.86-1.26 2.952-1.26 1.92 0 3.456 1.52 3.456 3.456v15.312c0 1.812-1.332 3.3-3.156 3.66-2.22.456-4.458.684-6.704.684zM5.79 2.4c-.792 0-1.44.648-1.44 1.44v15.312c0 .6.456 1.176 1.08 1.296 2.04.408 4.152.612 6.264.612 2.112 0 4.224-.204 6.264-.612.624-.12 1.08-.696 1.08-1.296V3.84c0-.792-.648-1.44-1.44-1.44-.408 0-.804.168-1.08.456l-1.464 1.68c-.96 1.104-2.352 1.728-3.792 1.728-1.44 0-2.832-.624-3.792-1.728L6.87 2.856c-.276-.288-.672-.456-1.08-.456z" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M9.584 11.992a1.414 1.414 0 100-2.828 1.414 1.414 0 000 2.828zM14.408 11.992a1.414 1.414 0 100-2.828 1.414 1.414 0 000 2.828z" />
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.176 16.794c-.448 1.193-1.5 1.678-2.98 1.907-1.5.228-3.6.129-4.678-.129-1.35-.322-1.971-.966-1.971-2.129V8.23h-1.5V6.23h4.5V4.23h3v2h4.5v2h-1.5v7.17c0 .322.322.644.644.644.322 0 .644-.322.644-.644v-5.38h-3v7.348c0 .322.322.644.644.644.322 0 .644-.322.644-.644v-5.38h-3v8.476c0 .966.645 1.5 1.5 1.5.966 0 1.5-.645 1.5-1.5v-5.38h3v4.475c0 .966-.645 1.5-1.5 1.5-.966 0-1.5-.645-1.5-1.5v-1.5h-3v2.25c0 1.5 1.286 2.25 2.679 2.25 1.393 0 2.679-.75 2.679-2.25v-1.5h-3v-3h5.25v1.5h-1.5v4.475c0 1.164-.621 1.807-1.971 2.129-1.078.258-3.178.357-4.678.129-1.48-.229-2.532-.714-2.98-1.907-.448-1.193-.448-3.214-.448-4.794s0-3.6.448-4.794c.448-1.193 1.5-1.678 2.98-1.907 1.5-.228 3.6-.129 4.678.129 1.35.322 1.971.966 1.971 2.129v7.17c0 1.164.621 1.807 1.971 2.129 1.078.258 3.178.357 4.678.129 1.48-.229 2.532-.714 2.98-1.907.448-1.193.448-3.214.448-4.794s0-3.6-.448-4.794c-.448-1.193-1.5-1.678-2.98-1.907-1.5-.228-3.6-.129-4.678.129-1.35.322-1.971.966-1.971 2.129v1.5h-3V7.23c0-1.164.621-1.807 1.971-2.129 1.078-.258 3.178-.357 4.678-.129 1.48.229 2.532.714 2.98 1.907.448 1.193.448 3.214.448 4.794s0 3.6-.448 4.794z" />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 002 2 2 2 0 002-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 00-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82z" />
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M12 12a4 4 0 118 0 4 4 0 01-8 0z" />
        <path d="M12 2a4 4 0 014 4v4H8V6a4 4 0 014-4z" />
        <path d="M12 22a4 4 0 01-4-4v-4h8v4a4 4 0 01-4 4z" />
        <path d="M2 12a4 4 0 014-4h4v8H6a4 4 0 01-4-4z" />
        <path d="M10 2a4 4 0 00-4 4v4h4V6a4 4 0 014-4H10z" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M14.4 6L13 4.6 19.4 12 13 19.4 14.4 21 22 12 14.4 6zm-4.8 0L2 12l7.6 6 1.4-1.4L6.8 12l4.2-4.6L9.6 6z" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M21.71 20.29l-3.4-3.39A7.92 7.92 0 0020 12a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1 1 0 001.42 0 1 1 0 000-1.42zM12 18a6 6 0 116-6 6 6 0 01-6 6z"/>
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M19.54 5.08A10.61 10.61 0 0011.91 2a10 10 0 00-.05 20 2.58 2.58 0 002.53-1.89 2.52 2.52 0 00-.57-2.28.5.5 0 01.37-.83h1.65A6.15 6.15 0 0022 11.33a8.48 8.48 0 00-2.46-6.25zM15.88 15h-1.65a2.49 2.49 0 00-1.87 4.15.49.49 0 01.12.49c-.05.21-.28.34-.59.36a8 8 0 01-7.82-9.11A8.1 8.1 0 0111.92 4H12a8.47 8.47 0 016.1 2.48 6.5 6.5 0 011.9 4.77A4.17 4.17 0 0115.88 15z" />
        <circle cx="12" cy="6.5" r="1.5" />
        <path d="M15.25 7.2a1.5 1.5 0 102.05.55 1.5 1.5 0 00-2.05-.55zM8.75 7.2a1.5 1.5 0 11-.55 2.05 1.5 1.5 0 01.55-2.05zM6.16 11.26a1.5 1.5 0 102.05.55 1.5 1.5 0 00-2.05-.55z" />
      </svg>
    ),
    server: (
      <svg viewBox="0 0 24 24" className="skill-icon">
        <path d="M20 3H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2zm0 6H4V5h16z" />
        <path d="M20 11H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2zm0 6H4v-4h16z" />
        <circle cx="8" cy="8" r="1" />
        <circle cx="8" cy="16" r="1" />
      </svg>
    )
  };

  const skillsData = [
    {
      id: 'frontend',
      name: 'Développement Frontend',
      icon: svgIcons.code,
      description: 'Création d\'interfaces utilisateur interactives et responsives',
      skills: [
        { name: 'HTML5', icon: svgIcons.html5, level: 95 },
        { name: 'CSS3/SASS', icon: svgIcons.css3, level: 90 },
        { name: 'JavaScript', icon: svgIcons.js, level: 92 },
        { name: 'React.js', icon: svgIcons.react, level: 88 },
        { name: 'TypeScript', icon: svgIcons.code, level: 85 },
        { name: 'Responsive Design', icon: svgIcons.code, level: 90 },
      ]
    },
    {
      id: 'backend',
      name: 'Développement Backend',
      icon: svgIcons.server,
      description: 'Construction d\'API robustes et gestion de bases de données',
      skills: [
        { name: 'Node.js', icon: svgIcons.node, level: 85 },
        { name: 'Express', icon: svgIcons.code, level: 80 },
        { name: 'API REST', icon: svgIcons.code, level: 88 },
        { name: 'MongoDB', icon: svgIcons.code, level: 75 },
        { name: 'SQL', icon: svgIcons.code, level: 70 },
        { name: 'Python', icon: svgIcons.python, level: 65 },
      ]
    },
    {
      id: 'design',
      name: 'Design UI/UX',
      icon: svgIcons.palette,
      description: 'Conception d\'expériences utilisateur intuitives et esthétiques',
      skills: [
        { name: 'Figma', icon: svgIcons.figma, level: 85 },
        { name: 'UI Design', icon: svgIcons.palette, level: 80 },
        { name: 'UX Research', icon: svgIcons.palette, level: 75 },
        { name: 'Prototypage', icon: svgIcons.palette, level: 78 },
        { name: 'Design System', icon: svgIcons.palette, level: 72 },
      ]
    },
    {
      id: 'tools',
      name: 'Outils & Méthodes',
      icon: svgIcons.tools,
      description: 'Gestion de projet et outils de développement moderne',
      skills: [
        { name: 'Git & GitHub', icon: svgIcons.git, level: 90 },
        { name: 'Agile/Scrum', icon: svgIcons.tools, level: 85 },
        { name: 'Webpack', icon: svgIcons.tools, level: 75 },
        { name: 'Docker', icon: svgIcons.tools, level: 65 },
        { name: 'Jest', icon: svgIcons.tools, level: 70 },
        { name: 'CI/CD', icon: svgIcons.tools, level: 68 },
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateBars(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredCategories = activeFilter === 'all' 
    ? skillsData 
    : skillsData.filter(category => category.id === activeFilter);

  const toggleCategory = (id) => {
    if (activeCategory === id) {
      setActiveCategory(null);
    } else {
      setActiveCategory(id);
    }
  };

  const renderStars = (level) => {
    const stars = [];
    const fullStars = Math.floor(level / 20);
    const emptyStars = 5 - fullStars;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="competences-page">
      <div className="competences-header">
        <h1>Mes Compétences</h1>
        <p>Découvrez mon expertise technique et mes domaines de maîtrise</p>
      </div>

      <div className="filters-container">
        <div className="filters">
          <button 
            className={activeFilter === 'all' ? 'active' : ''} 
            onClick={() => setActiveFilter('all')}
          >
            Toutes
          </button>
          {skillsData.map(category => (
            <button 
              key={category.id}
              className={activeFilter === category.id ? 'active' : ''} 
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="category-icon">{category.icon}</span> {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="categories-container">
        {filteredCategories.map(category => (
          <div 
            key={category.id} 
            className={`skill-category ${activeCategory === category.id ? 'expanded' : ''}`}
          >
            <div 
              className="category-header" 
              onClick={() => toggleCategory(category.id)}
            >
              <div className="category-title">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.name}</h2>
              </div>
              <p className="category-description">{category.description}</p>
              <span 
                className={`toggle-icon ${activeCategory === category.id ? 'open' : ''}`}
              >›</span>
            </div>
            
            <div className="skills-container">
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-content">
                      <h3>{skill.name}</h3>
                      
                      <div className="skill-level">
                        <div className="level-bar">
                          <div 
                            className={`level-fill ${animateBars ? 'animate' : ''}`}
                            style={{ width: animateBars ? `${skill.level}%` : '0%' }}
                          ></div>
                        </div>
                        <span className="level-percent">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-stars">
                        {renderStars(skill.level)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <div className="summary-card">
          <h3>5+</h3>
          <p>Années d'expérience</p>
        </div>
        <div className="summary-card">
          <h3>24+</h3>
          <p>Compétences maîtrisées</p>
        </div>
        <div className="summary-card">
          <h3>50+</h3>
          <p>Projets réalisés</p>
        </div>
      </div>
    </div>
  );
};

export default Competences;