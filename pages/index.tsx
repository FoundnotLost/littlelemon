import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div className='bg-[#495e57] h-screen'>
      <Head>
        <title>Little Lemon</title>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="description" content="Family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist"/>
        <meta name="og:description" content="Little Lemon is a family owned Mediterranean restaurant"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      {/* Nav Menu */}
      <Header/>

      {/* Hero Home Page with logo */}
      <section id='hero'>
        <Hero />
      </section>
      {/* Menu */}

      {/* Book */}

      {/* About */}

      
    </div>
  )
}
