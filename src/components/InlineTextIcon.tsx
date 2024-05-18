import React, { ReactNode } from "react";

interface InlineTextIcon {
  classes?: string;
  text: string | number;
  icon: ReactNode;
  iconClass?: string;
}

const InlineTextIcon = ({
  classes = "",
  text,
  icon,
  iconClass = "",
}: InlineTextIcon) => {
  return (
    <div className={`flex items-center text-green ${classes}`}>
      <span className={`mr-2 ${iconClass}`}>{icon}</span>
      <span className="text-center text-xs font-bold">{text}</span>
    </div>
  );
};

export default InlineTextIcon;
