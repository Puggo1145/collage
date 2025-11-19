import type { ComponentProps } from "react";

const TitleBar = ({ children, ...props }: ComponentProps<'div'>) => {
    return (
        <div className="drag-region w-full h-12 bg-transparent" {...props}>
            {children}
        </div>
    );
};

export default TitleBar;