import Link from "next/link";

interface GameItemsProps{
    title : string;
    type : string;
    thumbnails : 'Thumbnail-1' | 'Thumbnail-2' | 'Thumbnail-3' | 'Thumbnail-4' | 'Thumbnail-5';
}

export default function GameItem(props : GameItemsProps) {
    const {title,type,thumbnails} = props;
     return (
                <div className="featured-game-card position-relative">
                    <Link href="details">
                    <a>
                        <div className="blur-sharp">
                            <img className="thumbnails" src={`/img/${thumbnails}.png`} width="205" height="270" alt=""/>
                        </div>
                        <div className="cover position-absolute bottom-0 m-32">
                            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                                <div className="game-icon mx-auto">
                                    <img src="/icon/console.svg" alt="console" width={54} height={36}  />
                                </div>
                                <div>
                                    <p className="fw-semibold text-white text-xl m-0">{title}</p>
                                    <p className="fw-light text-white m-0">{type}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    </Link>
                </div>
        )
}
