import { Footer } from "components/footer";
import { HeaderHome } from "components/header-home";

export function LayoutWithoutSearch({ children }: any) {
  return (
    <div>
      <HeaderHome />
      {children}
      <Footer />
    </div>
  );
}
