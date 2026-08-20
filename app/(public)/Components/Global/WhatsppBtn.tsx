import React from "react";

interface WhatsAppButtonProps {
  value?: string | null;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  value,
  className = "",
}) => {
  const getHref = (value?: string | null): string => {
    if (!value?.trim()) {
      return "#";
    }

    const trimmedValue = value.trim();

    // If it's already a URL, use it directly
    if (/^https?:\/\//i.test(trimmedValue)) {
      return trimmedValue;
    }

    // Otherwise, treat it as a WhatsApp number
    return `https://wa.me/${trimmedValue}`;
  };

  return (
    <a
      href={getHref(value)}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 text-white ${className}`}
    >
      <img
        src="/whatsapp-btn.png"
        alt="WhatsApp"
        className="h-[69px]"
      />
    </a>
  );
};

export default WhatsAppButton;