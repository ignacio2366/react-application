import React from "react";
import "./style.css";
interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  classname?: string;
}
export const ContainerWrapper: React.FC<ContainerProps> = ({
  children,
  style,
  classname,
}) => {
  return (
    <div className={`flex-col-start ${classname || ""}`} style={style}>
      {children}
    </div>
  );
};
