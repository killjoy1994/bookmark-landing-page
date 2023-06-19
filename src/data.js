import ChromeLogo from "./assets/images/logo-chrome.svg"
import FirefoxLogo from "./assets/images/logo-firefox.svg"
import OperaLogo from "./assets/images/logo-opera.svg"
import tab1Image from "./assets/images/illustration-features-tab-1.svg"
import tab2Image from "./assets/images/illustration-features-tab-2.svg"
import tab3Image from "./assets/images/illustration-features-tab-3.svg"

export const data = {
    features: [
        {
            id: 1,
            img: tab1Image,
            title: "Bookmark in one click",
            desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites"
        },
        {
            id:2,
            img: tab2Image,
            title: "Intelligent search",
            desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        {
            id:3,
            img: tab3Image,
            title: "Share your bookmarks",
            desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        }
    ],
    extensions: [
        {
            id: 1,
            imgSrc: ChromeLogo,
            title: "Add to Chrome",
            desc: "Minimum version 62" 
        },
        {
            id: 2,
            imgSrc: FirefoxLogo,
            title: "Add to Firefox",
            desc: "Minimum version 55"
        }
        ,{
            id: 3,
            imgSrc: OperaLogo,
            title: "Add to Opera",
            desc: "Minimum version 46" 
        }
    ]
}