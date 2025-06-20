"use client";
import Link from "next/link";
import WhatsApp from "@/assets/images/WhatsApp.png";
import Insta from "@/assets/images/insta.png";
import { Mails, MapPinHouse } from "lucide-react";
import { useSearchParams } from "next/navigation";

function Links() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const links = [
    {
      name: "google",
      href: "https://www.google.com/search?client=safari&sca_esv=e833def03aa227c2&hl=en-de&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwtDwtVJFNf2JjcNlVQhtcxB8jQEZBttdb2eUUE7DotbMc6XSjlE7cbVWADj8XfXADS0pz1q2_RuuLJ5bcnJOxQzDOCGx3eD8Fk9ZzMC95H7EXTti39MSt6uWu2-VJ7sOMFb2Yy4Gigv7D_4RZpqrJiqtB92FgzyjZr4aVLDITEdZz9cY4UatycWfWkojzx-cYSexwTUosKFdqWxmJW23XWRYzGW&q=LB+Racket+Stringing+Services+-+Schl%C3%A4ger+bespannen/Besaitungsservice+f%C3%BCr+Tennis-,+Badminton-+und+Squashspieler+Reviews&sa=X&ved=2ahUKEwjBm6yPw7qNAxWSiv0HHRCdCWkQ0bkNegQIKxAE&biw=371&bih=701&dpr=3",
      slogan: { de: "Google\nRezensionen", en: "Google\nReviews" },
      img: null,
      icon: <MapPinHouse strokeWidth={1} className="size-12 md:size-18" />,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/lbracketstringingservices",
      slogan: { de: "Instagram\nProfil", en: "Instagram\nProfile" },
      img: Insta,
      icon: null,
    },
    {
      name: "whatsapp",
      href: "https://wa.me/4915253407173",
      slogan: { de: "WhatsApp\nBusiness", en: "WhatsApp\nBusiness" },
      img: WhatsApp,
      icon: null,
    },
    {
      name: "email",
      href: "mailto:lbracketstringingservices@gmail.com",
      slogan: { de: "Email\nAdresse", en: "Email\nAddress" },
      img: null,
      icon: <Mails strokeWidth={1} className="size-12 md:size-18 " />,
    },
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-12 md:gap-18 justify-items-center place-content-center">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="flex flex-col items-center justify-center gap-2"
        >
          {link.icon && link.icon}
          {link.img && (
            <img
              src={link.img.src}
              alt={link.name}
              className="size-12 md:size-18"
            />
          )}
          <span className="text-center text-xs md:text-sm whitespace-pre-line">
            {lang === "en" ? link.slogan.en : link.slogan.de}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Links;
