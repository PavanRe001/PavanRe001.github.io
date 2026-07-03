import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AvatarSection from '../components/AvatarSection'
import RightPanel from '../components/RightPanel'

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col w-full h-full relative">
      <Navbar />
      <main className="flex flex-col w-full flex-1 overflow-x-hidden overflow-y-visible lg:overflow-hidden pt-[64px] lg:pt-[72px]">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[48fr_30fr_22fr] gap-0 min-h-0">
          <div className="flex items-center min-h-0 py-4 lg:py-6 pl-4 sm:pl-6 lg:pl-10 xl:pl-16 pr-4 order-2 lg:order-1">
            <Hero />
          </div>
          <div className="flex lg:flex items-stretch min-h-0 w-full overflow-visible mt-8 lg:mt-0 order-1 lg:order-2">
            <AvatarSection />
          </div>
          <div className="hidden lg:flex flex-col items-start justify-center gap-4 min-h-0 pr-6 xl:pr-10 pl-2 order-3 lg:order-3">
            <RightPanel />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
