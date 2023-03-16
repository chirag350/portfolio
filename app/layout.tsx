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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hi! I am chirag, a fullstack developer from India. Also, I'm currently a student" />
        <link rel="icon" href="/favicon.ico" />
        <title>Chirag L.</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@900&family=Space+Grotesk&family=Tilt+Neon&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
