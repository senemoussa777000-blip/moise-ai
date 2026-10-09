import "./globals.css";

export const metadata = {
  title: "MØISE AI — Assistant intelligent",
  description:
    "MØISE AI, ton assistant intelligent pour apprendre, créer et travailler.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
