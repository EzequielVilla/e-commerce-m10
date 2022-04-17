import { Footer } from "components/footer";
import { Header } from "components/header";

export function Layout({ children }: any) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
