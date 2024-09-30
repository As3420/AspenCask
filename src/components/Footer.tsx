import React from "react";
import logo from "../assets/images/companylogo.png";
import "./Footer.css"; // Make sure to create this file for your styles
import { ctaData } from "./footer/model/footer.model";

// type CtaType = {
//   title: string;
//   ctaContent: {
//     href: string;
//     Content: string;
//   }[];
// };

// const ctaData: CtaType[] = [
//   {
//     title: "Tools",
//     ctaContent: [
//       { href: "/analytics", Content: "Analytics" },
//       { href: "/seo-tools", Content: "SEO Tools" },
//       { href: "/projects", Content: "Projects" },
//       { href: "/affiliates", Content: "Affiliate Program" },
//     ],
//   },
//   {
//     title: "Help",
//     ctaContent: [
//       { href: "/knowledge-base", Content: "Knowledge Base" },
//       { href: "/api", Content: "API" },
//       { href: "/support", Content: "Support" },
//     ],
//   },
// ];
{
  /* {ctaData.map((cta) => (
              <div key={cta.title}>
                <h4>{cta.title}</h4>
                <ul>
                  {cta.ctaContent.map((ctaItem) => (
                    <li key={ctaItem.Content}>
                      <a href={ctaItem.href}>{ctaItem.Content}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))} */
}
{
  /* 
            TODO: Do using map and create your own data
             */
}
// ctaData;
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
          <address>
            <p>Raj bagh, Ghaziyabad, uttarpradesh</p>
            <p>ashish.cliqtech@gmail.com</p>
          </address>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              {/* 
              TODO: Do using map
            */}
              {/* {
                ctaData.map((cta) => (
                  <li key={cta.content}>
                ))
              } */}
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/news">Newsroom</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/legal">Legal Info</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Tools</h4>
            <ul>
              <li>
                <a href="/analytics">Analytics</a>
              </li>
              <li>
                <a href="/seo-tools">SEO Tools</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/affiliates">Affiliate Program</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="/knowledge-base">Knowledge Base</a>
              </li>
              <li>
                <a href="/api">API</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
