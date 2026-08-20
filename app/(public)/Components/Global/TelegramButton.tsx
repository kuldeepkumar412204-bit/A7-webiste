import React from "react";

interface TelegramButtonProps {
  value?: string | null;
  className?: string;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({
  value,
  className = "",
}) => {

  return (
    <a
      href={value?value.trim():"#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 text-white font-black transition-all duration-150 ${className}`}
    >
      <img
        src="/telegram-btn.png"
        alt="Telegram"
        className="h-[69px]"
      />
    </a>
  );
};

export default TelegramButton;