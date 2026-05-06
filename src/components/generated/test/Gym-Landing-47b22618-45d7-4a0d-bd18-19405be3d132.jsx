import React from "react";
import PropTypes from "prop-types";
import {
  ArrowRight,
  Check,
  Clock3,
  Dumbbell,
  Flame,
  HeartPulse,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const statIconMap = {
  members: Users,
  trainers: Trophy,
  classes: Flame,
  success: Star,
};

const programIconMap = {
  strength: Dumbbell,
  conditioning: Flame,
  recovery: HeartPulse,
  coaching: Trophy,
};

const defaultStats = [
  { id: "members", icon: "members", value: "10K+", label: "Members" },
  { id: "trainers", icon: "trainers", value: "50+", label: "Trainers" },
];

const defaultPrograms = [
  {
    id: "program-1",
    icon: "strength",
    title: "Strength Lab",
    subtitle: "Build lean strength with guided progressive overload.",
    duration: "4 sessions / week",
  },
  {
    id: "program-2",
    icon: "conditioning",
    title: "HIIT Burn",
    subtitle: "Fast-paced conditioning classes for endurance and fat loss.",
    duration: "45 min classes",
  },
  {
    id: "program-3",
    icon: "recovery",
    title: "Mobility Reset",
    subtitle: "Improve recovery, flexibility, and movement quality.",
    duration: "Recovery studio",
  },
];

const defaultTrainers = [
  {
    id: "trainer-1",
    name: "Maya Kapoor",
    role: "Strength Coach",
    specialty: "Barbell strength and body recomposition",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "trainer-2",
    name: "Ryan Cole",
    role: "Performance Trainer",
    specialty: "Athletic conditioning and speed work",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "trainer-3",
    name: "Lina Fernandes",
    role: "Mobility Specialist",
    specialty: "Recovery, posture, and joint health",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
];

const defaultTransformations = [
  {
    id: "transform-1",
    label: "12 Week Cut",
    beforeImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    result: "Lost 11 kg and improved conditioning.",
  },
  {
    id: "transform-2",
    label: "Strength Rebuild",
    beforeImage:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80",
    result: "Added muscle mass and rebuilt movement confidence.",
  },
];

const defaultPlans = [
  {
    id: "plan-1",
    name: "Starter",
    price: "Rs 1999/mo",
    description: "Best for first-time members getting into a routine.",
    featured: false,
    features: [
      "Gym floor access",
      "2 group classes / week",
      "Fitness onboarding",
    ],
  },
  {
    id: "plan-2",
    name: "Unlimited",
    price: "Rs 3499/mo",
    description:
      "Train anytime with full class access and monthly coach review.",
    featured: true,
    features: [
      "Unlimited classes",
      "Priority slots",
      "Monthly body assessment",
    ],
  },
  {
    id: "plan-3",
    name: "Elite Coaching",
    price: "Rs 6999/mo",
    description:
      "Premium coaching, nutrition guidance, and personal programming.",
    featured: false,
    features: [
      "Weekly trainer check-in",
      "Custom program",
      "Nutrition support",
    ],
  },
];

export const gymLandingDefaultProps = {
  accentTag: "High-performance fitness",
  title: "Transform Your Body Today",
  subtitle:
    "Train with elite coaches, recovery-first programming, and a gym experience designed to keep momentum high from day one.",
  heroImage:
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80",
  heroOverlay:
    "linear-gradient(120deg, rgba(5,10,19,0.9) 0%, rgba(5,10,19,0.55) 45%, rgba(5,10,19,0.15) 100%)",
  primaryCtaText: "Book Free Workout",
  primaryCtaHref: "#pricing",
  secondaryCtaText: "Watch Tour",
  secondaryCtaHref: "#programs",
  heroCardLabel: "Fastest growing club",
  heroCardTitle: "Results that feel engineered",
  heroCardText:
    "Strength, conditioning, recovery, and coaching in one focused training ecosystem.",
  heroCardMetrics: ["24/7 access", "Coach-led programs", "Recovery zone"],
  stats: defaultStats,
  programsTitle: "Our Programs",
  programsSubtitle:
    "Structured coaching tracks for fat loss, strength, athletic performance, and sustainable recovery.",
  programs: defaultPrograms,
  trainersTitle: "Trainer Grid",
  trainersSubtitle:
    "Work with specialists who combine motivation, technical coaching, and measurable progress tracking.",
  trainers: defaultTrainers,
  galleryTitle: "Before & After Gallery",
  gallerySubtitle:
    "Real member transformations built through consistency, coaching, and a smarter training environment.",
  transformations: defaultTransformations,
  pricingTitle: "Pricing Table",
  pricingSubtitle:
    "Choose the plan that matches your training frequency, support level, and transformation goals.",
  plans: defaultPlans,
  ctaTitle: "Start Your Free Trial",
  ctaSubtitle:
    "Claim a complimentary training session, tour the club, and get a starter roadmap from our team.",
  ctaPrimaryText: "Start Free Trial",
  ctaPrimaryHref: "#",
  ctaSecondaryText: "Talk to Membership",
  ctaSecondaryHref: "#",
  background:
    "linear-gradient(180deg, #050816 0%, #0b1120 30%, #0f172a 60%, #f8fafc 60%, #ffffff 100%)",
  accentColor: "#f97316",
  headingColor: "#f8fafc",
  darkTextColor: "#94a3b8",
  lightHeadingColor: "#0f172a",
  lightTextColor: "#475569",
  surfaceColor: "rgba(15,23,42,0.74)",
  lightSurfaceColor: "#ffffff",
  borderColor: "rgba(255,255,255,0.1)",
};

const externalTarget = (href) =>
  href && href.startsWith("http")
    ? { target: "_blank", rel: "noreferrer" }
    : {};

const GymLanding = (incomingProps) => {
  const props = { ...gymLandingDefaultProps, ...incomingProps };
  const {
    id,
    className = "",
    style = {},
    accentTag,
    title,
    subtitle,
    heroImage,
    heroOverlay,
    primaryCtaText,
    primaryCtaHref,
    secondaryCtaText,
    secondaryCtaHref,
    heroCardLabel,
    heroCardTitle,
    heroCardText,
    heroCardMetrics = [],
    stats = [],
    programsTitle,
    programsSubtitle,
    programs = [],
    trainersTitle,
    trainersSubtitle,
    trainers = [],
    galleryTitle,
    gallerySubtitle,
    transformations = [],
    pricingTitle,
    pricingSubtitle,
    plans = [],
    ctaTitle,
    ctaSubtitle,
    ctaPrimaryText,
    ctaPrimaryHref,
    ctaSecondaryText,
    ctaSecondaryHref,
    background,
    accentColor,
    headingColor,
    darkTextColor,
    lightHeadingColor,
    lightTextColor,
    surfaceColor,
    lightSurfaceColor,
    borderColor,
  } = props;

  return (
    <section
      id={id}
      className={`w-full ${className}`}
      style={{ background, ...style }}
    >
      <style>{`
        .gym-landing-card {
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }
        .gym-landing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 26px 60px rgba(2, 6, 23, 0.28);
        }
      `}</style>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div
          className="relative overflow-hidden rounded-[34px] border"
          style={{ borderColor }}
        >
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: heroOverlay }}
          />
          <div
            className="absolute -right-10 top-10 h-56 w-56 rounded-full blur-3xl"
            style={{ backgroundColor: `${accentColor}55` }}
          />
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-8 px-5 py-6 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:px-12 lg:py-14">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90"
                style={{
                  borderColor,
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                {accentTag}
              </div>

              <h1
                className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
                style={{ color: headingColor }}
              >
                {title}
              </h1>
              <p
                className="mt-4 max-w-2xl text-base leading-7 sm:text-lg"
                style={{ color: darkTextColor }}
              >
                {subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {primaryCtaText ? (
                  <a
                    href={primaryCtaHref || "#"}
                    {...externalTarget(primaryCtaHref)}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    {primaryCtaText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : null}
                {secondaryCtaText ? (
                  <a
                    href={secondaryCtaHref || "#"}
                    {...externalTarget(secondaryCtaHref)}
                    className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white"
                    style={{
                      borderColor,
                      backgroundColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <Play className="h-4 w-4" />
                    {secondaryCtaText}
                  </a>
                ) : null}
              </div>
            </div>

            <div
              className="gym-landing-card rounded-[28px] border p-5 backdrop-blur-sm"
              style={{ borderColor, backgroundColor: surfaceColor }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: accentColor }}
              >
                {heroCardLabel}
              </p>
              <h3
                className="mt-3 text-2xl font-semibold"
                style={{ color: headingColor }}
              >
                {heroCardTitle}
              </h3>
              <p
                className="mt-3 text-sm leading-6"
                style={{ color: darkTextColor }}
              >
                {heroCardText}
              </p>
              <div className="mt-5 space-y-3">
                {heroCardMetrics.map((metric, index) => (
                  <div
                    key={`${metric}-${index}`}
                    className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm"
                    style={{
                      borderColor,
                      color: headingColor,
                      backgroundColor: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <ShieldCheck
                      className="h-4 w-4"
                      style={{ color: accentColor }}
                    />
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = statIconMap[stat.icon] || Users;
            return (
              <div
                key={stat.id || `${stat.label}-${index}`}
                className="gym-landing-card rounded-[24px] border p-5"
                style={{ borderColor, backgroundColor: surfaceColor }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="text-3xl font-semibold"
                      style={{ color: headingColor }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: darkTextColor }}
                    >
                      {stat.label}
                    </p>
                  </div>
                  <div
                    className="rounded-2xl p-3"
                    style={{
                      backgroundColor: `${accentColor}1f`,
                      color: accentColor,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          id="programs"
          className="rounded-[30px] border p-5 sm:p-7"
          style={{ borderColor, backgroundColor: surfaceColor }}
        >
          <div className="max-w-2xl">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: accentColor }}
            >
              Training tracks
            </p>
            <h2
              className="mt-3 text-3xl font-semibold sm:text-4xl"
              style={{ color: headingColor }}
            >
              {programsTitle}
            </h2>
            <p
              className="mt-3 text-base leading-7"
              style={{ color: darkTextColor }}
            >
              {programsSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = programIconMap[program.icon] || Dumbbell;
              return (
                <article
                  key={program.id || `${program.title}-${index}`}
                  className="gym-landing-card rounded-[26px] border p-5"
                  style={{
                    borderColor,
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="rounded-2xl p-3 w-fit"
                    style={{
                      backgroundColor: `${accentColor}1f`,
                      color: accentColor,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="mt-5 text-xl font-semibold"
                    style={{ color: headingColor }}
                  >
                    {program.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: darkTextColor }}
                  >
                    {program.subtitle}
                  </p>
                  <div
                    className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{ borderColor, color: headingColor }}
                  >
                    <Clock3
                      className="h-4 w-4"
                      style={{ color: accentColor }}
                    />
                    {program.duration}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className="rounded-[30px] border p-5 sm:p-7"
          style={{ borderColor, backgroundColor: lightSurfaceColor }}
        >
          <div className="max-w-2xl">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: accentColor }}
            >
              Coaching team
            </p>
            <h2
              className="mt-3 text-3xl font-semibold sm:text-4xl"
              style={{ color: lightHeadingColor }}
            >
              {trainersTitle}
            </h2>
            <p
              className="mt-3 text-base leading-7"
              style={{ color: lightTextColor }}
            >
              {trainersSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trainers.map((trainer, index) => (
              <article
                key={trainer.id || `${trainer.name}-${index}`}
                className="gym-landing-card overflow-hidden rounded-[26px] border"
                style={{
                  borderColor: "rgba(15,23,42,0.08)",
                  backgroundColor: "#ffffff",
                }}
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-72 w-full object-cover"
                />
                <div className="p-5">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: lightHeadingColor }}
                  >
                    {trainer.name}
                  </h3>
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: accentColor }}
                  >
                    {trainer.role}
                  </p>
                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: lightTextColor }}
                  >
                    {trainer.specialty}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="rounded-[30px] border p-5 sm:p-7"
          style={{ borderColor, backgroundColor: lightSurfaceColor }}
        >
          <div className="max-w-2xl">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: accentColor }}
            >
              Member stories
            </p>
            <h2
              className="mt-3 text-3xl font-semibold sm:text-4xl"
              style={{ color: lightHeadingColor }}
            >
              {galleryTitle}
            </h2>
            <p
              className="mt-3 text-base leading-7"
              style={{ color: lightTextColor }}
            >
              {gallerySubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {transformations.map((item, index) => (
              <div
                key={item.id || `${item.label}-${index}`}
                className="gym-landing-card rounded-[26px] border p-4"
                style={{
                  borderColor: "rgba(15,23,42,0.08)",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p
                      className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: accentColor }}
                    >
                      Before
                    </p>
                    <img
                      src={item.beforeImage}
                      alt={`${item.label} before`}
                      className="h-64 w-full rounded-[18px] object-cover"
                    />
                  </div>
                  <div>
                    <p
                      className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: accentColor }}
                    >
                      After
                    </p>
                    <img
                      src={item.afterImage}
                      alt={`${item.label} after`}
                      className="h-64 w-full rounded-[18px] object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: lightHeadingColor }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: lightTextColor }}
                  >
                    {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="pricing"
          className="rounded-[30px] border p-5 sm:p-7"
          style={{ borderColor, backgroundColor: lightSurfaceColor }}
        >
          <div className="max-w-2xl">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: accentColor }}
            >
              Memberships
            </p>
            <h2
              className="mt-3 text-3xl font-semibold sm:text-4xl"
              style={{ color: lightHeadingColor }}
            >
              {pricingTitle}
            </h2>
            <p
              className="mt-3 text-base leading-7"
              style={{ color: lightTextColor }}
            >
              {pricingSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.id || `${plan.name}-${index}`}
                className="gym-landing-card rounded-[26px] border p-6"
                style={{
                  borderColor: plan.featured
                    ? `${accentColor}66`
                    : "rgba(15,23,42,0.08)",
                  backgroundColor: plan.featured ? "#fff7ed" : "#ffffff",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: lightHeadingColor }}
                  >
                    {plan.name}
                  </h3>
                  {plan.featured ? (
                    <div
                      className="rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      Popular
                    </div>
                  ) : null}
                </div>
                <p
                  className="mt-4 text-3xl font-semibold"
                  style={{ color: lightHeadingColor }}
                >
                  {plan.price}
                </p>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: lightTextColor }}
                >
                  {plan.description}
                </p>
                <div className="mt-5 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={`${feature}-${featureIndex}`}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: lightHeadingColor }}
                    >
                      <div
                        className="rounded-full p-1"
                        style={{
                          backgroundColor: `${accentColor}1f`,
                          color: accentColor,
                        }}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="rounded-[30px] border p-6 sm:p-8"
          style={{ borderColor, backgroundColor: surfaceColor }}
        >
          <div className="max-w-3xl">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: accentColor }}
            >
              Trial CTA
            </p>
            <h2
              className="mt-3 text-3xl font-semibold sm:text-4xl"
              style={{ color: headingColor }}
            >
              {ctaTitle}
            </h2>
            <p
              className="mt-3 text-base leading-7"
              style={{ color: darkTextColor }}
            >
              {ctaSubtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {ctaPrimaryText ? (
              <a
                href={ctaPrimaryHref || "#"}
                {...externalTarget(ctaPrimaryHref)}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: accentColor }}
              >
                {ctaPrimaryText}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
            {ctaSecondaryText ? (
              <a
                href={ctaSecondaryHref || "#"}
                {...externalTarget(ctaSecondaryHref)}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold text-white"
                style={{
                  borderColor,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                {ctaSecondaryText}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

GymLanding.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  accentTag: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heroImage: PropTypes.string,
  heroOverlay: PropTypes.string,
  primaryCtaText: PropTypes.string,
  primaryCtaHref: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaHref: PropTypes.string,
  heroCardLabel: PropTypes.string,
  heroCardTitle: PropTypes.string,
  heroCardText: PropTypes.string,
  heroCardMetrics: PropTypes.arrayOf(PropTypes.string),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  programsTitle: PropTypes.string,
  programsSubtitle: PropTypes.string,
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      duration: PropTypes.string,
    }),
  ),
  trainersTitle: PropTypes.string,
  trainersSubtitle: PropTypes.string,
  trainers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      specialty: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  galleryTitle: PropTypes.string,
  gallerySubtitle: PropTypes.string,
  transformations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      beforeImage: PropTypes.string,
      afterImage: PropTypes.string,
      result: PropTypes.string,
    }),
  ),
  pricingTitle: PropTypes.string,
  pricingSubtitle: PropTypes.string,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
      featured: PropTypes.bool,
      features: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  ctaTitle: PropTypes.string,
  ctaSubtitle: PropTypes.string,
  ctaPrimaryText: PropTypes.string,
  ctaPrimaryHref: PropTypes.string,
  ctaSecondaryText: PropTypes.string,
  ctaSecondaryHref: PropTypes.string,
  background: PropTypes.string,
  accentColor: PropTypes.string,
  headingColor: PropTypes.string,
  darkTextColor: PropTypes.string,
  lightHeadingColor: PropTypes.string,
  lightTextColor: PropTypes.string,
  surfaceColor: PropTypes.string,
  lightSurfaceColor: PropTypes.string,
  borderColor: PropTypes.string,
};

GymLanding.defaultProps = gymLandingDefaultProps;

export default GymLanding;
