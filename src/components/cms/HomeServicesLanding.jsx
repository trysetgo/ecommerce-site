"use client";

import React from "react";
import PropTypes from "prop-types";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  ChevronRight,
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

const serviceIconMap = {
  cleaning: Sparkles,
  repair: Wrench,
  inspection: ShieldCheck,
  booking: CalendarCheck2,
};

const stepIconMap = {
  request: CalendarCheck2,
  match: BadgeCheck,
  delivery: Clock3,
};

const defaultTrustPoints = [
  "Verified professionals",
  "Transparent pricing",
  "Same-day availability",
];

const defaultServices = [
  {
    id: "service-1",
    icon: "cleaning",
    title: "Deep Home Cleaning",
    description:
      "Kitchen, bathroom, bedroom, and living area refresh with eco-safe supplies.",
    price: "Starts at $79",
  },
  {
    id: "service-2",
    icon: "repair",
    title: "Handyman Repairs",
    description:
      "Furniture fixes, wall-mounts, minor electrical work, and home touch-ups.",
    price: "Starts at $49",
  },
  {
    id: "service-3",
    icon: "inspection",
    title: "Appliance Servicing",
    description:
      "Preventive maintenance and issue diagnosis for ACs, washers, and kitchen gear.",
    price: "Starts at $59",
  },
  {
    id: "service-4",
    icon: "booking",
    title: "Move-in Setup",
    description:
      "Cleaning, utility setup support, furniture assembly, and first-day essentials.",
    price: "Starts at $129",
  },
];

const defaultSteps = [
  {
    id: "step-1",
    icon: "request",
    title: "Choose a Service",
    description:
      "Pick a category, time slot, and service details in under two minutes.",
  },
  {
    id: "step-2",
    icon: "match",
    title: "Get Matched Fast",
    description:
      "We assign a vetted professional based on location, skill, and availability.",
  },
  {
    id: "step-3",
    icon: "delivery",
    title: "Done Right, On Time",
    description:
      "Track arrival, review pricing, and manage follow-up directly from one place.",
  },
];

const defaultEstimateItems = [
  { id: "estimate-1", label: "Base visit", value: "$39" },
  { id: "estimate-2", label: "Service add-ons", value: "$25" },
  { id: "estimate-3", label: "Priority slot", value: "$15" },
];

export const homeServicesLandingDefaultProps = {
  accentTag: "On-demand trusted care",
  title: "Book Trusted Home Services",
  subtitle:
    "From cleaning and repairs to appliance servicing, schedule verified professionals with clear pricing and fast arrival windows.",
  heroImage:
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1800&q=80",
  heroOverlay:
    "linear-gradient(115deg, rgba(7, 33, 58, 0.9) 0%, rgba(7, 33, 58, 0.56) 48%, rgba(7, 33, 58, 0.14) 100%)",
  primaryCtaText: "Book Now",
  primaryCtaHref: "#book-now",
  secondaryCtaText: "Browse Services",
  secondaryCtaHref: "#services",
  heroPanelLabel: "Fast scheduling",
  heroPanelTitle: "Reliable home help without the call-center hassle",
  heroPanelText:
    "See popular services, expected arrival windows, and estimate pricing before you confirm a booking.",
  trustPoints: defaultTrustPoints,
  servicesTitle: "Popular Services",
  servicesSubtitle:
    "Choose from the most-booked categories for everyday fixes, seasonal upkeep, and move-in support.",
  services: defaultServices,
  stepsTitle: "How It Works",
  stepsSubtitle:
    "A straightforward booking flow designed for trust, speed, and clear communication from request to completion.",
  steps: defaultSteps,
  testimonialQuote:
    "Booking took less than five minutes, the technician arrived on time, and the final price matched the estimate exactly.",
  testimonialName: "Riya Sharma",
  testimonialRole: "Apartment Owner, Bangalore",
  testimonialImage:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
  estimateTitle: "Pricing Estimate",
  estimateSubtitle:
    "Use a simple starting estimate to understand what a standard booking could cost before extras.",
  estimateItems: defaultEstimateItems,
  estimateTotalLabel: "Estimated total",
  estimateTotalValue: "$79",
  ctaTitle: "Book Now",
  ctaSubtitle:
    "Reserve a trusted professional today and get real-time booking updates, arrival tracking, and easy rebooking.",
  ctaPrimaryText: "Schedule Service",
  ctaPrimaryHref: "#",
  ctaSecondaryText: "Talk to Support",
  ctaSecondaryHref: "#",
  background:
    "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 18%, #ffffff 18%, #ffffff 100%)",
  accentColor: "#f97316",
  headingColor: "#0f172a",
  textColor: "#475569",
  lightTextColor: "#64748b",
  surfaceColor: "#ffffff",
  softSurfaceColor: "#eff6ff",
  borderColor: "#dbeafe",
};

const externalTarget = (href) =>
  href && href.startsWith("http")
    ? { target: "_blank", rel: "noreferrer" }
    : {};

const HomeServicesLanding = (incomingProps) => {
  const props = { ...homeServicesLandingDefaultProps, ...incomingProps };
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
    heroPanelLabel,
    heroPanelTitle,
    heroPanelText,
    trustPoints = [],
    servicesTitle,
    servicesSubtitle,
    services = [],
    stepsTitle,
    stepsSubtitle,
    steps = [],
    testimonialQuote,
    testimonialName,
    testimonialRole,
    testimonialImage,
    estimateTitle,
    estimateSubtitle,
    estimateItems = [],
    estimateTotalLabel,
    estimateTotalValue,
    ctaTitle,
    ctaSubtitle,
    ctaPrimaryText,
    ctaPrimaryHref,
    ctaSecondaryText,
    ctaSecondaryHref,
    background,
    accentColor,
    headingColor,
    textColor,
    lightTextColor,
    surfaceColor,
    softSurfaceColor,
    borderColor,
  } = props;

  return (
    <section
      id={id}
      className={`w-full ${className}`}
      style={{ background, ...style }}
    >
      <style>{`
        .home-services-card {
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }
        .home-services-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(14, 30, 37, 0.12);
        }
      `}</style>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div
          className="relative overflow-hidden rounded-[34px] border bg-white"
          style={{ borderColor }}
        >
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover lg:block"
          />
          <div
            className="absolute inset-y-0 right-0 hidden w-1/2 lg:block"
            style={{ background: heroOverlay }}
          />
          <div className="relative grid gap-8 px-6 py-8 sm:px-8 lg:min-h-[620px] lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-12">
            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div
                  className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em]"
                  style={{
                    borderColor,
                    color: textColor,
                    backgroundColor: softSurfaceColor,
                  }}
                >
                  <BadgeCheck
                    className="h-4 w-4"
                    style={{ color: accentColor }}
                  />
                  {accentTag}
                </div>
                <div className="max-w-2xl space-y-4">
                  <h1
                    className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
                    style={{ color: headingColor }}
                  >
                    {title}
                  </h1>
                  <p
                    className="max-w-xl text-base leading-7 sm:text-lg"
                    style={{ color: textColor }}
                  >
                    {subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={primaryCtaHref}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg"
                    style={{ backgroundColor: accentColor }}
                    {...externalTarget(primaryCtaHref)}
                  >
                    {primaryCtaText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={secondaryCtaHref}
                    className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold"
                    style={{
                      borderColor,
                      color: headingColor,
                      backgroundColor: "#ffffff",
                    }}
                    {...externalTarget(secondaryCtaHref)}
                  >
                    {secondaryCtaText}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {trustPoints.map((point, index) => (
                  <div
                    key={`${point}-${index}`}
                    className="rounded-2xl border px-4 py-4"
                    style={{ borderColor, backgroundColor: "#ffffff" }}
                  >
                    <ShieldCheck
                      className="h-5 w-5"
                      style={{ color: accentColor }}
                    />
                    <p
                      className="mt-3 text-sm font-medium"
                      style={{ color: headingColor }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-end">
              <div
                className="home-services-card w-full max-w-md rounded-[28px] border p-6"
                style={{ borderColor, backgroundColor: surfaceColor }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.3em]"
                  style={{ color: accentColor }}
                >
                  {heroPanelLabel}
                </p>
                <h2
                  className="mt-4 text-2xl font-semibold"
                  style={{ color: headingColor }}
                >
                  {heroPanelTitle}
                </h2>
                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: textColor }}
                >
                  {heroPanelText}
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    { label: "Response window", value: "Under 30 mins" },
                    { label: "Average rating", value: "4.9 / 5" },
                    { label: "Support", value: "7 days a week" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border px-4 py-3"
                      style={{ borderColor, backgroundColor: softSurfaceColor }}
                    >
                      <p className="text-sm" style={{ color: lightTextColor }}>
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: headingColor }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="services"
          className="rounded-[32px] bg-white px-6 py-8 shadow-[0_28px_80px_rgba(14,30,37,0.08)] sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: accentColor }}
            >
              Service grid
            </p>
            <h2
              className="mt-3 text-3xl font-semibold"
              style={{ color: headingColor }}
            >
              {servicesTitle}
            </h2>
            <p className="mt-3 text-sm leading-7" style={{ color: textColor }}>
              {servicesSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon] || Wrench;
              return (
                <article
                  key={service.id}
                  className="home-services-card rounded-[24px] border px-5 py-6"
                  style={{ borderColor, backgroundColor: surfaceColor }}
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: softSurfaceColor }}
                  >
                    <Icon className="h-6 w-6" style={{ color: accentColor }} />
                  </div>
                  <h3
                    className="mt-5 text-lg font-semibold"
                    style={{ color: headingColor }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: textColor }}
                  >
                    {service.description}
                  </p>
                  <div
                    className="mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: softSurfaceColor,
                      color: headingColor,
                    }}
                  >
                    {service.price}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="rounded-[32px] border bg-white px-6 py-8 shadow-[0_28px_80px_rgba(14,30,37,0.08)] sm:px-8"
            style={{ borderColor }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: accentColor }}
            >
              How it works
            </p>
            <h2
              className="mt-3 text-3xl font-semibold"
              style={{ color: headingColor }}
            >
              {stepsTitle}
            </h2>
            <p className="mt-3 text-sm leading-7" style={{ color: textColor }}>
              {stepsSubtitle}
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => {
                const Icon = stepIconMap[step.icon] || CalendarCheck2;
                return (
                  <div
                    key={step.id}
                    className="home-services-card rounded-[24px] border px-5 py-5"
                    style={{
                      borderColor,
                      backgroundColor:
                        index === 1 ? softSurfaceColor : surfaceColor,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: "#ffffff" }}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: accentColor }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.24em]"
                          style={{ color: lightTextColor }}
                        >
                          Step {index + 1}
                        </p>
                        <h3
                          className="mt-2 text-lg font-semibold"
                          style={{ color: headingColor }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="mt-2 text-sm leading-7"
                          style={{ color: textColor }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="rounded-[32px] border bg-white px-6 py-6 shadow-[0_28px_80px_rgba(14,30,37,0.08)]"
              style={{ borderColor }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: accentColor }}
              >
                Testimonial
              </p>
              <p
                className="mt-4 text-lg leading-8"
                style={{ color: headingColor }}
              >
                "{testimonialQuote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonialImage}
                  alt={testimonialName}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold" style={{ color: headingColor }}>
                    {testimonialName}
                  </p>
                  <p className="text-sm" style={{ color: lightTextColor }}>
                    {testimonialRole}
                  </p>
                </div>
              </div>
              <div
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium"
                style={{ color: accentColor }}
              >
                <Star className="h-4 w-4 fill-current" />
                4.9 average satisfaction
              </div>
            </div>

            <div
              className="rounded-[32px] border bg-white px-6 py-6 shadow-[0_28px_80px_rgba(14,30,37,0.08)]"
              style={{ borderColor }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: accentColor }}
              >
                Pricing estimate
              </p>
              <h3
                className="mt-3 text-2xl font-semibold"
                style={{ color: headingColor }}
              >
                {estimateTitle}
              </h3>
              <p
                className="mt-3 text-sm leading-7"
                style={{ color: textColor }}
              >
                {estimateSubtitle}
              </p>
              <div className="mt-6 space-y-3">
                {estimateItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-2xl border px-4 py-3"
                    style={{ borderColor, backgroundColor: softSurfaceColor }}
                  >
                    <p className="text-sm" style={{ color: textColor }}>
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: headingColor }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="mt-6 flex items-center justify-between rounded-[24px] px-4 py-4"
                style={{ backgroundColor: "#0f172a" }}
              >
                <p className="text-sm" style={{ color: "#cbd5e1" }}>
                  {estimateTotalLabel}
                </p>
                <p className="text-xl font-semibold text-white">
                  {estimateTotalValue}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="book-now"
          className="rounded-[34px] border px-6 py-8 sm:px-8 lg:px-10"
          style={{ borderColor, backgroundColor: "#0f172a" }}
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: accentColor }}
              >
                Book now
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                {ctaTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                {ctaSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={ctaPrimaryHref}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: accentColor }}
                {...externalTarget(ctaPrimaryHref)}
              >
                {ctaPrimaryText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={ctaSecondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white"
                {...externalTarget(ctaSecondaryHref)}
              >
                {ctaSecondaryText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HomeServicesLanding.propTypes = {
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
  heroPanelLabel: PropTypes.string,
  heroPanelTitle: PropTypes.string,
  heroPanelText: PropTypes.string,
  trustPoints: PropTypes.arrayOf(PropTypes.string),
  servicesTitle: PropTypes.string,
  servicesSubtitle: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
    }),
  ),
  stepsTitle: PropTypes.string,
  stepsSubtitle: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  testimonialQuote: PropTypes.string,
  testimonialName: PropTypes.string,
  testimonialRole: PropTypes.string,
  testimonialImage: PropTypes.string,
  estimateTitle: PropTypes.string,
  estimateSubtitle: PropTypes.string,
  estimateItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  estimateTotalLabel: PropTypes.string,
  estimateTotalValue: PropTypes.string,
  ctaTitle: PropTypes.string,
  ctaSubtitle: PropTypes.string,
  ctaPrimaryText: PropTypes.string,
  ctaPrimaryHref: PropTypes.string,
  ctaSecondaryText: PropTypes.string,
  ctaSecondaryHref: PropTypes.string,
  background: PropTypes.string,
  accentColor: PropTypes.string,
  headingColor: PropTypes.string,
  textColor: PropTypes.string,
  lightTextColor: PropTypes.string,
  surfaceColor: PropTypes.string,
  softSurfaceColor: PropTypes.string,
  borderColor: PropTypes.string,
};

export default HomeServicesLanding;
