"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Users, Briefcase, Calendar, Heart, ArrowRight } from 'lucide-react';
import styles from '../styles/InfoSection.module.css';

interface CardProps {
  title: string;
  description: string;
  members: number;
  projects: number;
  year: number;
  imageUrl: string;
}

const Card = ({ title, description, members, projects, year, imageUrl }: CardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            className={styles.cardImage} 
            width={400} 
            height={400} 
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <Briefcase size={40} color="#94a3b8" strokeWidth={1} />
          </div>
        )}

        <span className={`${styles.featuredBadge} ${isLiked ? styles.showBadge : ''}`}>
          Destacado
        </span>
        
        <button 
          className={styles.heartBtn} 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          aria-label="Like"
        >
          <Heart 
            size={22} 
            fill={isLiked ? "#ff4d4d" : "rgba(0,0,0,0.2)"} 
            color={isLiked ? "#ff4d4d" : "white"} 
            className={styles.heartIcon}
          />
        </button>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        
       <div className={styles.cardFooter}>
        <div className={styles.footerItem}>
            <Users size={16} />
            <span>{members} Miembros</span>
        </div>
        <div className={styles.footerItem}>
            <Briefcase size={16} />
            <span>{projects} Proyectos</span>
        </div>
        <div className={styles.footerItem}>
            <Calendar size={16} />
            <span>Año {year}</span>
        </div>
        </div>

        <button className={styles.viewMoreBtn}>
          Ver detalles <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

const InfoSection = () => {
  const data = [
    { id: 1, title: "Semillero de Investigación", desc: "Explora nuevas fronteras científicas con metodologías ágiles y experimentación real.", m: 8, p: 3, y: 2024, img: "" },
    { id: 2, title: "Innovación Digital", desc: "Desarrollo de soluciones tecnológicas orientadas a resolver problemas del entorno actual.", m: 12, p: 5, y: 2023, img: "" },
    { id: 3, title: "Emprendimiento Social", desc: "Creamos impacto positivo a través de proyectos sostenibles y con propósito humano.", m: 6, p: 2, y: 2025, img: "" },
  ];

  return (
    <section className={styles.sectionContainer}>
      <header className={styles.header}>
        <h2 className={styles.mainTitle}>Nuestros Semilleros</h2>
        <div className={styles.titleUnderline}></div>
        <p className={styles.mainSubtitle}>
          Descubre los grupos de trabajo que están transformando el futuro hoy mismo.
        </p>
      </header>

      <div className={styles.cardsGrid}>
        {data.map(item => (
          <Card 
            key={item.id} 
            title={item.title} 
            description={item.desc} 
            members={item.m} 
            projects={item.p} 
            year={item.y} 
            imageUrl={item.img} 
          />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;