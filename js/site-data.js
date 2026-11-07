/*
 * Site content. Edit this file to change what the Art Store, Unity Tools
 * and Games sections show — no HTML changes needed.
 */
window.SITE_DATA = {
    artStore: {
        categories: [
            {
                title: "3D Models",
                images: [
                    "Images/artstore/t1.jpg",
                    "Images/artstore/t8.jpg",
                    "Images/artstore/t9.jpg",
                    "Images/artstore/t10.jpg",
                    "Images/artstore/t11.jpg",
                    "Images/artstore/t5.jpg",
                    "Images/artstore/t7.jpg"
                ]
            },
            {
                title: "Paintings",
                images: [
                    "Images/artstore/p1.jpg",
                    "Images/artstore/p2.jpg",
                    "Images/artstore/p3.jpg",
                    "Images/artstore/p5.jpg",
                    "Images/artstore/p7.jpg",
                    "Images/artstore/p8.jpg",
                    "Images/artstore/p9.jpg",
                    "Images/artstore/p10.jpg",
                    "Images/artstore/p4.jpg"
                ]
            },
            {
                title: "Designs",
                images: [
                    "Images/artstore/d1.png",
                    "Images/artstore/d2.jpg",
                    "Images/artstore/d9.png",
                    "Images/artstore/d3.jpg",
                    "Images/artstore/d4.jpg",
                    "Images/artstore/d5.png",
                    "Images/artstore/d6.png",
                    "Images/artstore/d7.png",
                    "Images/artstore/d8.png"
                ]
            }
        ],
        banner: {
            text: "View more 3d models and buy them here",
            link: "https://www.turbosquid.com/Search/Artists/AG-ArtStudio?referral=AG-ArtStudio",
            icon: "Images/ts_icon_trans.png"
        }
    },

    // The section layout shows one featured tool: the first entry.
    tools: [
        {
            name: "GVX",
            logo: "Images/Colored GVX logo.png",
            tagline: "real time visual effects generator for unity 3d",
            downloadText: "Download Here",
            downloadLink: "http://u3d.as/1RiV",
            description:
                "Visual effects are essential to make cool and fun games. And there are so many different " +
                "variations and a countless number of effects needed which makes it complicated and time-consuming to get the " +
                "right look. " +
                "GVX is a tool that helps you generate cool visual effects by composing multiple customizable and " +
                "editable presets that we call sub-effects. We gathered several advanced shaders and common VFX " +
                "techniques like particles system shaders, decals, distortions and many more. All of these techniques " +
                "have been implemented in a way that makes it easy to customize with minimal effort, mix and match with " +
                "others, combine them in a time-line and finally add your own sub-effects. " +
                "While you can use it to develop the Visual effects you need. The VFX enthusiasts can use it to prototype " +
                "or extend the sub-effects library. And with a bigger sub-effects library in the future, " +
                "the capabilities will grow more and more.",
            screenshots: [
                { src: "Images/tool-shots/lightening.png", title: "Many Subeffects" },
                { src: "Images/tool-shots/smoke.png", title: "Edit" },
                { src: "Images/tool-shots/options.png", title: "Customize" },
                { src: "Images/tool-shots/sheild.png", title: "Compose" },
                { src: "Images/tool-shots/shieldcompos.png", title: "Time" }
            ]
        }
    ],

    // The section layout shows one featured game: the first entry.
    games: [
        {
            title: "Pen Booms",
            highlight: "Pen",          // part of the title drawn in orange
            downloadText: "Soon",
            downloadLink: "",          // leave empty while the game isn't out
            paragraphs: [
                "Have U ever played PEN FIGHTING in school ? U can play online now!",
                "When we were in school and had time between classes, we used to play SUMO... but with pens. " +
                "Whoever knocks the opponent's pen off the table, wins. Some even bought specific pens just for fighting. " +
                "now it's time for you to live the experience with a small twist to the rules. " +
                "Play online with strangers or with your friends. Win by knocking their pen off the table or by scoring a goal!"
            ],
            mainImage: "Images/games/pb-1.jpg",
            thumbnails: [
                "Images/games/pb-2.jpg",
                "Images/games/pb-3.jpg",
                "Images/games/pb-6.jpg"
            ]
        }
    ]
};
