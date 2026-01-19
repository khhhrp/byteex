import type { ButtonHTMLAttributes } from "react";
export type ButtonType = Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type">;
export type CallBack = () => void;
