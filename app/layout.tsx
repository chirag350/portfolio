import '../styles/globals.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@900&family=Space+Grotesk&family=Tilt+Neon&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
