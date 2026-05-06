import React from "react";
import GymLanding from "../components/cms/GymLanding.jsx";

export default function TestPage() {
  return (
    <>
      <GymLanding
        plans={JSON.parse(
          `[{"id":"plan-1","name":"Starter","price":"Rs 1999/mo","featured":false,"features":["Gym floor access","2 group classes / week","Fitness onboarding"],"description":"Best for first-time members getting into a routine."},{"id":"plan-2","name":"Unlimited","price":"Rs 3499/mo","featured":true,"features":["Unlimited classes","Priority slots","Monthly body assessment"],"description":"Train anytime with full class access and monthly coach review."},{"id":"plan-3","name":"Elite Coaching","price":"Rs 6999/mo","featured":false,"features":["Weekly trainer check-in","Custom program","Nutrition support"],"description":"Premium coaching, nutrition guidance, and personal programming."}]`,
        )}
        stats={JSON.parse(
          `[{"id":"members","icon":"members","label":"Members","value":"10K+"},{"id":"trainers","icon":"trainers","label":"Trainers","value":"50+"}]`,
        )}
        title="Transform Your Body Today"
        ctaTitle="Start Your Free Trial"
        programs={JSON.parse(
          `[{"id":"program-1","icon":"strength","title":"Strength Lab","duration":"4 sessions / week","subtitle":"Build lean strength with guided progressive overload."},{"id":"program-2","icon":"conditioning","title":"HIIT Burn","duration":"45 min classes","subtitle":"Fast-paced conditioning classes for endurance and fat loss."},{"id":"program-3","icon":"recovery","title":"Mobility Reset","duration":"Recovery studio","subtitle":"Improve recovery, flexibility, and movement quality."}]`,
        )}
        subtitle="Train with elite coaches, recovery-first programming, and a gym experience designed to keep momentum high from day one."
        trainers={JSON.parse(
          `[{"id":"trainer-1","name":"Maya Kapoor","role":"Strength Coach","image":"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80","specialty":"Barbell strength and body recomposition"},{"id":"trainer-2","name":"Ryan Cole","role":"Performance Trainer","image":"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80","specialty":"Athletic conditioning and speed work"},{"id":"trainer-3","name":"Lina Fernandes","role":"Mobility Specialist","image":"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80","specialty":"Recovery, posture, and joint health"}]`,
        )}
        accentTag="High-performance fitness"
        heroImage="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80"
        background="linear-gradient(180deg, #050816 0%, #0b1120 30%, #0f172a 60%, #f8fafc 60%, #ffffff 100%)"
        accentColor="#f97316"
        borderColor="rgba(255,255,255,0.1)"
        ctaSubtitle="Claim a complimentary training session, tour the club, and get a starter roadmap from our team."
        heroOverlay="linear-gradient(120deg, rgba(5,10,19,0.9) 0%, rgba(5,10,19,0.55) 45%, rgba(5,10,19,0.15) 100%)"
        galleryTitle="Before & After Gallery"
        headingColor="#f8fafc"
        heroCardText="Strength, conditioning, recovery, and coaching in one focused training ecosystem."
        pricingTitle="Pricing Table"
        surfaceColor="rgba(15,23,42,0.74)"
        darkTextColor="#94a3b8"
        heroCardLabel="Fastest growing club"
        heroCardTitle="Results that feel engineered"
        programsTitle="Our Programs"
        trainersTitle="Trainer Grid"
        ctaPrimaryHref="#"
        ctaPrimaryText="Start Free Trial"
        lightTextColor="#475569"
        primaryCtaHref="#pricing"
        primaryCtaText="Book Free Workout"
        gallerySubtitle="Real member transformations built through consistency, coaching, and a smarter training environment."
        heroCardMetrics={JSON.parse(
          `["24/7 access","Coach-led programs","Recovery zone"]`,
        )}
        pricingSubtitle="Choose the plan that matches your training frequency, support level, and transformation goals."
        transformations={JSON.parse(
          `[{"id":"transform-1","label":"12 Week Cut","result":"Lost 11 kg and improved conditioning.","afterImage":"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80","beforeImage":"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"},{"id":"transform-2","label":"Strength Rebuild","result":"Added muscle mass and rebuilt movement confidence.","afterImage":"https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80","beforeImage":"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80"}]`,
        )}
        ctaSecondaryHref="#"
        ctaSecondaryText="Talk to Membership"
        programsSubtitle="Structured coaching tracks for fat loss, strength, athletic performance, and sustainable recovery."
        secondaryCtaHref="#programs"
        secondaryCtaText="Watch Tour"
        trainersSubtitle="Work with specialists who combine motivation, technical coaching, and measurable progress tracking."
        lightHeadingColor="#0f172a"
        lightSurfaceColor="#ffffff"
      ></GymLanding>
    </>
  );
}
