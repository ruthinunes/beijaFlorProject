import "./globals.css";

export const metadata = {
  title:
    "Portal Beija-Flor - Chalés em Santuário Ecológico na Chapada dos Veadeiros: silêncio, vegetarianismo e bem estar",
  description:
    "Chalés em Santuário Ecológico na Chapada dos Veadeiros: silêncio, vegetarianismo e bem estar",
};
import "./components/Slider/Slider.css";
import Sidebar from "./components/SideBar/SideBar";
import { SidebarProvider } from "./contexts/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta
          name="google-site-verification"
          content="jICMuv_H_t2KD1CklOBkUELmLzhOEhrLOdnKOw5ra_c"
        />
      </head>
      <body>
        <SidebarProvider>
          <Sidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
