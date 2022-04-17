import { Footer } from "components/footer";
import { HeaderHome } from "components/headerHome";

export function LayoutWithoutSearch({ children }: any) {
    return (
        <div>
            <HeaderHome />
            {children}
            <Footer />
        </div>
    );
}
