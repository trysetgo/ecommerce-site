import React from "react";
import FashionScrollRevealLandingV1 from "../components/cms/FashionScrollRevealLandingV1.jsx";

export default function TestPage() {
  return (
    <>
      <FashionScrollRevealLandingV1
        global={JSON.parse(
          `{"theme":{"text":"#FFFFFF","muted":"#A3A3A3","accent":"#F43F5E","primary":"#0A0A0A","secondary":"#111111"},"typographyScale":"large"}`,
        )}
        sections={JSON.parse(
          `{"cta":{"title":"Join the Movement","ctaText":"Subscribe","enabled":true,"subtitle":"Exclusive access to limited drops and editorial content."},"hero":{"cta":"Explore Collection","image":"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80","title":"Crafted for Expression","enabled":true,"subtitle":"A new era of fashion built through movement and identity to attract youth's","overlayOpacity":0.5},"gallery":{"title":"Editorial","images":["https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&w=1000&q=80"],"enabled":true},"products":{"items":[{"name":"Oversized Trench","image":"https://images.unsplash.com/photo-1550614000-4b95d4ed89d2?auto=format&fit=crop&w=800&q=80","price":"$450"},{"name":"Leather Platform","image":"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80","price":"$290"},{"name":"Silk Slip Dress","image":"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80","price":"$320"},{"name":"Structured Blazer","image":"https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80","price":"$510"}],"title":"The Archive","enabled":true},"narrative":{"lines":["This is not fashion","This is identity","This is movement"],"enabled":true},"revealPanels":{"items":[{"image":"https://images.unsplash.com/photo-1509631179647-0c50006423ac?auto=format&fit=crop&w=2000&q=80","title":"Avant-Garde","subtitle":"FW 26 Collection"},{"image":"https://images.unsplash.com/photo-1434389678232-067660c6d70c?auto=format&fit=crop&w=2000&q=80","title":"Minimalist","subtitle":"Core Essentials"}],"enabled":true},"testimonials":{"quote":"Fashion is the armor to survive the reality of everyday life.","author":"Bill Cunningham","enabled":true}}`,
        )}
      ></FashionScrollRevealLandingV1>
    </>
  );
}
