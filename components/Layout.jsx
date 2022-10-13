import Head from "next/head"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useState } from 'react';
function Layout({children}) {
  const [open, setOpen] = useState(false)
  return (
    <>
        <Head>
            <title>Grabby- Dashboard</title>
            <meta name="description" content="Create Dashboard with Next.js and Tailwind CSS" />

        </Head>
        <>
            <Sidebar open={open} setOpen={setOpen}/>
            <Header open={open} setOpen={setOpen}/>
            <main className="ml-4 lg:ml-64 mt-20 xl:mt-0 2xl:text-3xl">
                {children}
            </main>
        </>
    </>
  )
}

export default Layout