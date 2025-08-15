import React from "react";
import "./style.css";

interface ContainerProps {
  children: React.ReactNode;
  style?: string;
  classname?: string;
}
export const ContainerMain: React.FC<ContainerProps> = ({
  children,
  classname,
}) => {
  return <div className={`flex-col-start ${classname || ""}`}>{children}</div>;
};
