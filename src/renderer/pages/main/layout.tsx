import TitleBar from "../../components/shared/title-bar";
import type { ComponentProps } from "react";

const MainLayout = ({ children }: ComponentProps<'main'>) => {
    return (
        <main>
            <TitleBar></TitleBar>
            {children}
        </main>
    );
};

export default MainLayout;