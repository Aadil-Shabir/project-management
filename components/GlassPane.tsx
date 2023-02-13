import React from "react";
import clsx from "clsx";

interface GlassPaneProps {
    children: React.ReactNode;
    className: String;
}

const GlassPane = ({ children, className }: GlassPaneProps) => {
    return <div className={clsx("glass rounded-2xl border-solid border-2 border-gray-200", className)}>{children}</div>;
};

export default GlassPane;
