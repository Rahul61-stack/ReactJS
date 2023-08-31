export function Items(props){
    return (
        <div class="pt-20">
            <div className="bg-cyan flex flex-row container mx-auto justify-center">
                <div className="basis-1/4 ">
                    <img src ="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY436_QL65_.jpg" width="200" heigth="100"/>
                </div>
                <div className="basis-2/4">
                        <ul>
                            <li>
                                <p className="font-serif text-xl font-bold">Apple iPhone 14 (128 GB) - Blue</p>                   
                            </li>
                            <li>
                                <p className="font-serif text-l font-bold">*****</p>                   
                            </li>
                            <li>
                                <p className="font-normal font-serif text-l">About this item</p>
                                <p className="font-serif text-s line-clamp-3">
                                15.40 cm (6.1-inch) Super Retina XDR display<br/>
                                Advanced camera system for better photos in any light<br/>
                                Cinematic mode now in 4K Dolby Vision up to 30 fps<br/>
                                Action mode for smooth, steady, handheld videos<br/>
                                Vital safety technology — Crash Detection calls for help when you can’t<br/>
                                All-day battery life and up to 20 hours of video playback<br/>
                                Industry-leading durability features with Ceramic Shield and water resistance<br/>
                                A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular<br/>
                                iOS 16 offers even more ways to personalise, communicate and share</p>                   
                            </li>
                            <li>
                                <p className="font-serif text-l font-bold">78000</p>
                            </li>
                            <li>
                                <p className="font-serif text-m font-bold">Available by<br/>Next week</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
}