import type { NextPage } from 'next';
import AOS from 'aos';
import { useEffect } from 'react';
import Navbar from '../component/organism/Navbar';
import MainBanner from '../component/organism/MainBanner';
import TransactionStep from '../component/organism/Transactionstep';
import FeaturedGame from '../component/organism/Featuredgame';
import Reached from '../component/organism/Reached';
import Story from '../component/organism/story';
import Footer from '../component/organism/Footer';
const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <>
    <Navbar/>
    <MainBanner />
    <TransactionStep/>
    <FeaturedGame/>
    <Reached />
    <Story/>
    <Footer/>
    </>
  )
}

export default Home
