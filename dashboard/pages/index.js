import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}
