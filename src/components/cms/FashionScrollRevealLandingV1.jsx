"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const fashionScrollRevealLandingV1DefaultProps = {
  global: {
    theme: {
      primary: "#0A0A0A",
      secondary: "#111111",
      accent: "#F43F5E",
      text: "#FFFFFF",
      muted: "#A3A3A3",
    },
    typographyScale: "large",
  },
  sections: {
    hero: {
      enabled: true,
      title: "Crafted for Expression",
      subtitle: "A new era of fashion built through movement and identity",
      cta: "Explore Collection",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80",
      overlayOpacity: 0.5,
    },
    narrative: {
      enabled: true,
      lines: ["This is not fashion", "This is identity", "This is movement"],
    },
    revealPanels: {
      enabled: true,
      items: [
        {
          title: "Avant-Garde",
          subtitle: "FW 26 Collection",
          image:
            "https://images.unsplash.com/photo-1509631179647-0c50006423ac?auto=format&fit=crop&w=2000&q=80",
        },
        {
          title: "Minimalist",
          subtitle: "Core Essentials",
          image:
            "https://images.unsplash.com/photo-1434389678232-067660c6d70c?auto=format&fit=crop&w=2000&q=80",
        },
      ],
    },
    products: {
      enabled: true,
      title: "The Archive",
      items: [
        {
          name: "Oversized Trench",
          price: "$450",
          image:
            "https://images.unsplash.com/photo-1550614000-4b95d4ed89d2?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Leather Platform",
          price: "$290",
          image:
            "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Silk Slip Dress",
          price: "$320",
          image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "Structured Blazer",
          price: "$510",
          image:
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    gallery: {
      enabled: true,
      title: "Editorial",
      images: [
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&w=1000&q=80",
      ],
    },
    testimonials: {
      enabled: true,
      quote: "Fashion is the armor to survive the reality of everyday life.",
      author: "Bill Cunningham",
    },
    cta: {
      enabled: true,
      title: "Join the Movement",
      subtitle: "Exclusive access to limited drops and editorial content.",
      ctaText: "Subscribe",
    },
  },
};

const FadeInUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const FashionScrollRevealLandingV1 = (incomingProps) => {
  const props = incomingProps.props || incomingProps;
  const { isPreviewing, isEditable } = incomingProps;

  const mergedProps = {
    global: {
      ...fashionScrollRevealLandingV1DefaultProps.global,
      ...(props.global || {}),
      theme: {
        ...fashionScrollRevealLandingV1DefaultProps.global.theme,
        ...(props.global?.theme || {}),
      },
    },
    sections: {
      hero: {
        ...fashionScrollRevealLandingV1DefaultProps.sections.hero,
        ...(props.sections?.hero || {}),
      },
      narrative: {
        ...fashionScrollRevealLandingV1DefaultProps.sections.narrative,
        ...(props.sections?.narrative || {}),
      },
      revealPanels: {
        ...fashionScrollRevealLandingV1DefaultProps.sections.revealPanels,
        ...(props.sections?.revealPanels || {}),
      },
      products: {
        ...fashionScrollRevealLandingV1DefaultProps.sections.products,
        ...(props.sections?.products || {}),
      },
      gallery: {
        ...fashionScrollRevealLandingV1DefaultProps.sections.gallery,
        ...(props.sections?.gallery || {}),
      },
      testimonials: {
        ...fashionScrollRevealLandingV1DefaultProps.sections.testimonials,
        ...(props.sections?.testimonials || {}),
      },
      cta: {
        ...fashionScrollRevealLandingV1DefaultProps.sections.cta,
        ...(props.sections?.cta || {}),
      },
    },
  };

  const { global, sections } = mergedProps;
  const narrativeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: narrativeRef,
    offset: ["start start", "end end"],
  });

  const narrativeOpacity1 = useTransform(scrollYProgress, [0, 0.25, 0.3], [0, 1, 0]);
  const narrativeOpacity2 = useTransform(scrollYProgress, [0.33, 0.58, 0.63], [0, 1, 0]);
  const narrativeOpacity3 = useTransform(scrollYProgress, [0.66, 0.91, 1], [0, 1, 1]);
  
  const narrativeY1 = useTransform(scrollYProgress, [0, 0.25], [50, 0]);
  const narrativeY2 = useTransform(scrollYProgress, [0.33, 0.58], [50, 0]);
  const narrativeY3 = useTransform(scrollYProgress, [0.66, 0.91], [50, 0]);

  const preventInteraction = (e) => {
    if (isEditable && !isPreviewing) {
      e.preventDefault();
    }
  };

  return (
    <div
      className="w-full font-sans antialiased overflow-hidden"
      style={{
        backgroundColor: global.theme.primary,
        color: global.theme.text,
      }}
    >
      {/* 1. HERO */}
      {sections.hero.enabled && (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sections.hero.image})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: `rgba(0,0,0,${sections.hero.overlayOpacity})`,
            }}
          />
          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-8xl lg:text-[8rem] font-light uppercase tracking-tighter mb-6"
            >
              {sections.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-2xl text-white/80 max-w-2xl font-light mb-12"
            >
              {sections.hero.subtitle}
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              onClick={preventInteraction}
              className="px-10 py-4 border border-white/40 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              {sections.hero.cta}
            </motion.button>
          </div>
        </section>
      )}

      {/* 2. NARRATIVE SCROLL */}
      {sections.narrative.enabled && sections.narrative.lines?.length >= 3 && (
        <section
          ref={narrativeRef}
          className="relative w-full h-[300vh]"
          style={{ backgroundColor: global.theme.secondary }}
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 text-center overflow-hidden">
            <motion.h2
              className="absolute text-4xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight"
              style={{ opacity: narrativeOpacity1, y: narrativeY1 }}
            >
              {sections.narrative.lines[0]}
            </motion.h2>
            <motion.h2
              className="absolute text-4xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight"
              style={{ opacity: narrativeOpacity2, y: narrativeY2 }}
            >
              {sections.narrative.lines[1]}
            </motion.h2>
            <motion.h2
              className="absolute text-4xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight"
              style={{ opacity: narrativeOpacity3, y: narrativeY3 }}
            >
              {sections.narrative.lines[2]}
            </motion.h2>
          </div>
        </section>
      )}

      {/* 3. REVEAL PANELS */}
      {sections.revealPanels.enabled && (
        <section className="w-full flex flex-col" style={{ backgroundColor: global.theme.primary }}>
          {sections.revealPanels.items.map((panel, idx) => (
            <div key={idx} className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${panel.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/20" />
              <FadeInUp className="relative z-10 text-center px-4">
                <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/80">
                  {panel.subtitle}
                </p>
                <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter">
                  {panel.title}
                </h2>
              </FadeInUp>
            </div>
          ))}
        </section>
      )}

      {/* 4. PRODUCTS GRID */}
      {sections.products.enabled && (
        <section className="py-32 px-4 md:px-12 max-w-screen-2xl mx-auto" style={{ backgroundColor: global.theme.primary }}>
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl uppercase tracking-widest font-light mb-16 border-b border-white/10 pb-8 text-center md:text-left">
              {sections.products.title}
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.products.items.map((product, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button
                      onClick={preventInteraction}
                      className="px-6 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <h3 className="text-lg uppercase tracking-wide font-light text-white/90">
                    {product.name}
                  </h3>
                  <span className="text-md font-light" style={{ color: global.theme.muted }}>
                    {product.price}
                  </span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>
      )}

      {/* 5. EDITORIAL GALLERY */}
      {sections.gallery.enabled && (
        <section className="py-24 overflow-hidden" style={{ backgroundColor: global.theme.secondary }}>
          <FadeInUp className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.4em] text-white/50">{sections.gallery.title}</h2>
          </FadeInUp>
          <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12">
            {sections.gallery.images.map((img, idx) => (
              <FadeInUp key={idx} delay={idx * 0.2} className={`relative overflow-hidden group flex-1 ${idx === 1 ? 'md:-translate-y-12' : ''}`}>
                <img
                  src={img}
                  alt={`Editorial ${idx}`}
                  className="w-full h-[60vh] md:h-[80vh] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </FadeInUp>
            ))}
          </div>
        </section>
      )}

      {/* 6. TESTIMONIALS */}
      {sections.testimonials.enabled && (
        <section className="py-32 md:py-48 px-4 flex items-center justify-center text-center" style={{ backgroundColor: global.theme.primary }}>
          <FadeInUp className="max-w-5xl">
            <p className="text-3xl md:text-6xl font-light uppercase tracking-tight leading-tight mb-12 text-white/90">
              "{sections.testimonials.quote}"
            </p>
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: global.theme.accent }}>
              — {sections.testimonials.author}
            </p>
          </FadeInUp>
        </section>
      )}

      {/* 7. FINAL CTA */}
      {sections.cta.enabled && (
        <section
          className="relative py-32 md:py-48 px-4 text-center overflow-hidden flex flex-col items-center justify-center"
          style={{ backgroundColor: global.theme.accent }}
        >
          <FadeInUp className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-6 text-white">
              {sections.cta.title}
            </h2>
            <p className="text-lg md:text-2xl text-white/80 font-light mb-12 max-w-2xl">
              {sections.cta.subtitle}
            </p>
            <button
              onClick={preventInteraction}
              className="px-12 py-5 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500 font-bold"
            >
              {sections.cta.ctaText}
            </button>
          </FadeInUp>
        </section>
      )}
    </div>
  );
};

export default FashionScrollRevealLandingV1;