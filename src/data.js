import ChromeLogo from "./assets/images/logo-chrome.svg"
import FirefoxLogo from "./assets/images/logo-firefox.svg"
import OperaLogo from "./assets/images/logo-opera.svg"

export const data = {
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