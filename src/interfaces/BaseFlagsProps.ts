import { MouseEventHandler } from "react";

export default interface BaseFlagProps {
    code: string,
    src: string,
    onClick: Function,
    isActive: boolean
  };