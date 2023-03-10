import Head from 'next/head'
import Body from '../components/organisms/Home/Body'
import Header from '../components/organisms/Home/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className='container mx-auto overflow-hidden'>
				<Header />
				<Body />
			</main>
		</>
	)
}
