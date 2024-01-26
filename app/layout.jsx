import Navbar from "./components/Navbar";
import "./style/App.css";

export const metadata = {
  title: "Portafolio 2024",
  description: "Portfolio Michael Diaz 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/*  <header>
          <Hero />
        </header>
 */}
        {children}
      </body>
    </html>
  );
}
