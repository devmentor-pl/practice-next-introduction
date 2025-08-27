import styles from "./layout.module.css";
import "./globals.css";
import { Menu } from "./Menu";

const menuItems = [
  {
    text: "strona główna",
    url: "/",
    children: [
      {
        text: "o mnie",
        url: "/about-me",
      },
    ],
  },
  {
    text: "kontakt",
    url: "/contact",
  },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Menu items={menuItems} />
        </header>

        <main className="styles.main">{children}</main>
        <footer className={styles.footer}>
          <Menu items={menuItems} />
        </footer>
      </body>
    </html>
  );
}
