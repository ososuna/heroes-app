import { Route, Routes } from "react-router-dom"

import { Navbar } from "../components/shared/Navbar"
import { DcPage } from "../components/dc/DcPage"
import { MarvelPage } from "../components/marvel/MarvelPage"
import { SearchPage } from "../components/search/SearchPage"
import { HeroPage } from "../components/hero/HeroPage"

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={ <MarvelPage /> } />
          <Route path="dc" element={ <DcPage /> } />
          
          <Route path="search" element={ <SearchPage /> } />
          <Route path="hero/:id" element={ <HeroPage /> } />
          
          <Route path="/" element={ <MarvelPage /> } />
        </Routes>
      </div>
    </>
  )
}
