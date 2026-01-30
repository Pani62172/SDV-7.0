import { SponsorCard } from './SponsorCard';

const sponsors = [
  {
    name: "The Dopamine Store",
    logo: "https://i.ibb.co/DDPwjXk/sponsorlogo.png",
    description: "We are excited to announce The Dopamine Store as the official title sponsor of SDV 6.0, hosted by Team SAEINDIA, NIT Durgapur. The Dopamine Store is known for its vibrant range of mood-boosting products that bring joy and energy to everyday life. From quirky gifts to unique lifestyle items, their collection is crafted to uplift spirits and create moments of happiness. They focus on enhancing well-being through thoughtful, creative, and functional products. This positive and innovative approach aligns perfectly with the spirit of SDV 6.0, and we're thrilled to have them as our partner.",
    instagram : "https://www.instagram.com/dop.aminestore?igsh=cTF1NDNsdG1vNHFq",
    linkedin : "#",
    facebook : "#",
  },
];

function Sponsor() {
  return (
    <div className="min-h-screen px-4 flex items-center justify-center md:mt-0 sm:mt-12">
      <div className="max-w-xl w-full">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sansation:wght@300;400;700&display=swap');

          .announcement-text {
            font-family: 'Sansation', 'Samsung Sharp Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 2.5rem;
            font-weight: 400;
            text-align: center;
            margin: 4rem 0;
            background: linear-gradient(90deg, #C10000 0%, #FF6B6B 25%, #FFB199 50%, #FF6B6B 75%, #C10000 100%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: shine 3s linear infinite;
            letter-spacing: 1px;
          }

          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }

          .dots {
            display: inline-flex;
            gap: 0.4rem;
            margin-left: 0.5rem;
            align-items: center;
          }

          .dot {
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, #C10000, #FF6B6B);
            border-radius: 50%;
            animation: dotBounce 1.4s ease-in-out infinite;
          }

          .dot:nth-child(2) {
            animation-delay: 0.2s;
          }

          .dot:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes dotBounce {
            0%, 80%, 100% {
              opacity: 0.4;
              transform: scale(0.8);
            }
            40% {
              opacity: 1;
              transform: scale(1.3);
            }
          }

          @media (max-width: 768px) {
            .announcement-text {
              font-size: 1.8rem;
            }
          }

          @media (max-width: 480px) {
            .announcement-text {
              font-size: 1.4rem;
            }
          }
        `}</style>

        <h1 className="text-6xl font-bold text-red-500 mb-8 text-center">
          Our Sponsor
        </h1>

        {/* Uncomment this when you want to show the announcement */}
        { <div className="announcement-text">
          To Be Announced Soon
          <span className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
        </div>}

        {/* Rendering the sponsor dynamically from the sponsors array */}
        <div className="cards" style={{marginBottom: '50px'}}>
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))} 
        </div>
      </div>
    </div>
  );
}

export default Sponsor;