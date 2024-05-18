export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className='full-container'>
      <section className='container flex flex-col gap-4'>
        <h1>Layout for dashboard page</h1>
        {children}
      </section>
    </section>
  )
}
