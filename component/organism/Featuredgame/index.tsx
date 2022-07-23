import GameItem from "../../molecules/GameItem"

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br/> Games This Year
            </h2>
            <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                data-aos="fade-up">
                <GameItem thumbnails="Thumbnail-1" title="Super Mechs" type="Mobile"/>
                <GameItem thumbnails="Thumbnail-2" title="Call of Duty: Modern" type="Mobile"/>
                <GameItem thumbnails="Thumbnail-3" title="Mobile Legends" type="Mobile"/>
                <GameItem thumbnails="Thumbnail-4" title="Clash of Clans" type="Mobile"/>
                <GameItem thumbnails="Thumbnail-5" title="Valorant" type="Desktop"/>
            </div>
        </div>
    </section>
  )
}
