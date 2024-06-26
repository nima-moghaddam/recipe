import React, { ReactNode } from "react";

interface InlineTextIcon {
  classes?: string;
  text?: string | number | ReactNode;
  icon: ReactNode;
  iconClass?: string;
  textClass?: string;
}

const InlineTextIcon = ({
  classes = "",
  text = "",
  icon,
  iconClass = "",
  textClass = "",
}: InlineTextIcon) => {
  return (
    <div className={`flex items-center text-secondary ${classes}`}>
      <span className={`mr-2 ${iconClass}`}>{icon}</span>
      <span className={`text-xs font-bold ${textClass}`}>
        {text}
      </span>
    </div>
  );
};

export default InlineTextIcon;
