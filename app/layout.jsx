import "./globals.css";

export const metadata = {
  title: "AEES Consulting",
  description: "Applied Energy & Environmental Solutions — energy compliance, assurance, audit, and utility infrastructure advisory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
