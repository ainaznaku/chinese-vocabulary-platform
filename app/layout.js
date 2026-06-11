import '../globals.css';

export const metadata = {
  title: 'Chinese Vocabulary',
  description: 'Chinese vocabulary learning app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
