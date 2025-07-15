import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CareU",
  description: "Ứng dụng hỗ trợ đăng ký và tìm kiếm nhân viên vệ sinh",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="515*485" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z8KMS6S66K"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z8KMS6S66K');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <script src="https://subbot.io.vn/widget.js" api-key={`${process.env.AI_API_KEY}`}></script>
      </body>
    </html>
  )
}
