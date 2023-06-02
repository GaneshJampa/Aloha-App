import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Categories from '@/components/Categories'
import Guide from '@/components/Guide'
import Footer from '@/components/Footer'
import { getCategories, getHighlights } from '@/services/services'
import { Category, Highlight } from '@/types/types'

const Home = async () => {

  const highlights: Highlight[] = await getHighlights();
  const categories: Category[] = await getCategories();

  return (
    <>
      <Header highlights={highlights}/>
      <Hero />
      <Highlights highlights={highlights}/>
      <div className="w-full bg-[#E6F2F2]">
        <div className="xl:px-24 lg:px-4 py-12 mx-auto lg:max-w-screen-xl">
          <div className="flex flex-col lg:flex-row justify-center">
            <Categories categories={categories}/>
            <Guide />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;