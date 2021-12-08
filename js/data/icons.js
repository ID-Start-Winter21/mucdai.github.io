/* icons data */
var icons = {
    /* icon data */
    github: {
        id: 0, title: "Github", class: "", width: 36, height: 36, paths:
            [
                { fill: "#bdbdbd", opacity: 1.0, path: "M12 2.24226C10.6868 2.24226 9.38642 2.50091 8.17317 3.00346C6.95991 3.50601 5.85752 4.2426 4.92893 5.17119C3.05357 7.04655 2 9.59009 2 12.2423C2 16.6623 4.87 20.4123 8.84 21.7423C9.34 21.8223 9.5 21.5123 9.5 21.2423C9.5 21.0123 9.5 20.3823 9.5 19.5523C6.73 20.1523 6.14 18.2123 6.14 18.2123C5.68 17.0523 5.03 16.7423 5.03 16.7423C4.12 16.1223 5.1 16.1423 5.1 16.1423C6.1 16.2123 6.63 17.1723 6.63 17.1723C7.5 18.6923 8.97 18.2423 9.54 18.0023C9.63 17.3523 9.89 16.9123 10.17 16.6623C7.95 16.4123 5.62 15.5523 5.62 11.7423C5.62 10.6323 6 9.74226 6.65 9.03226C6.55 8.78226 6.2 7.74226 6.75 6.39226C6.75 6.39226 7.59 6.12226 9.5 7.41226C10.29 7.19226 11.15 7.08226 12 7.08226C12.85 7.08226 13.71 7.19226 14.5 7.41226C16.41 6.12226 17.25 6.39226 17.25 6.39226C17.8 7.74226 17.45 8.78226 17.35 9.03226C18 9.74226 18.38 10.6323 18.38 11.7423C18.38 15.5623 16.04 16.4023 13.81 16.6523C14.17 16.9623 14.5 17.5723 14.5 18.5023C14.5 19.8423 14.5 20.9223 14.5 21.2423C14.5 21.5123 14.66 21.8323 15.17 21.7423C19.14 20.4023 22 16.6623 22 12.2423C22 10.929 21.7413 9.62868 21.2388 8.41542C20.7362 7.20217 19.9997 6.09977 19.0711 5.17119C18.1425 4.2426 17.0401 3.50601 15.8268 3.00346C14.6136 2.50091 13.3132 2.24226 12 2.24226V2.24226Z" }
            ]
    },
    strava: {
        id: 1, title: "Strava", class: "", width: 36, height: 36, paths: [
            { fill: "#bdbdbd", opacity: 1.0, path: "M17.0273 13.5469L15.141 17.3367L13.2246 13.5469H10.3199L15.141 23L19.932 13.5469H17.0273ZM10.5734 1L4.06796 13.5469H7.90078L10.5734 8.5582L13.2246 13.5469H17.0273L10.5734 1Z" }
        ]
    },
    mail: {
        id: 2, title: "Mail", class: "", width: 36, height: 36, paths: [
            { fill: "#bdbdbd", opacity: 1.0, path: "M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z" }
        ]
    },
    android: {
        id: 3, title: "Android App", class: "tag-icon", width: 24, height: 24, paths: [
            { fill: "white", opacity: 0.56, path: "M7.00001 17C7.00001 17.4583 7.375 17.8333 7.83334 17.8333H8.66667V20.75C8.66667 21.4417 9.225 22 9.91667 22C10.6083 22 11.1667 21.4417 11.1667 20.75V17.8333H12.8333V20.75C12.8333 21.4417 13.3917 22 14.0833 22C14.775 22 15.3333 21.4417 15.3333 20.75V17.8333H16.1667C16.625 17.8333 17 17.4583 17 17V8.66667H7.00001V17ZM4.91667 8.66667C4.22501 8.66667 3.66667 9.225 3.66667 9.91667V15.75C3.66667 16.4417 4.22501 17 4.91667 17C5.60834 17 6.16667 16.4417 6.16667 15.75V9.91667C6.16667 9.225 5.60834 8.66667 4.91667 8.66667ZM19.0833 8.66667C18.3917 8.66667 17.8333 9.225 17.8333 9.91667V15.75C17.8333 16.4417 18.3917 17 19.0833 17C19.775 17 20.3333 16.4417 20.3333 15.75V9.91667C20.3333 9.225 19.775 8.66667 19.0833 8.66667ZM14.9417 3.8L16.025 2.71667C16.1917 2.55 16.1917 2.29167 16.025 2.125C15.8583 1.95833 15.6 1.95833 15.4333 2.125L14.2 3.35833C13.5417 3.025 12.7917 2.83333 12 2.83333C11.2 2.83333 10.45 3.025 9.78334 3.35833L8.54167 2.125C8.375 1.95833 8.11667 1.95833 7.95 2.125C7.78334 2.29167 7.78334 2.55 7.95 2.71667L9.04167 3.80833C7.80834 4.71667 7.00001 6.175 7.00001 7.83333H17C17 6.175 16.1917 4.70833 14.9417 3.8V3.8ZM10.3333 6.16667H9.5V5.33333H10.3333V6.16667ZM14.5 6.16667H13.6667V5.33333H14.5V6.16667Z" }
        ]
    },
    ios: {
        id: 4, title: "IOS App", class: "tag-icon", width: 24, height: 24, paths: [
            { fill: "white", opacity: 0.56, path: "M19.6906 17.3235C19.4023 17.9894 19.0612 18.6023 18.6659 19.1659C18.127 19.9341 17.6859 20.4659 17.3459 20.7612C16.8188 21.2459 16.2541 21.4941 15.6494 21.5082C15.2153 21.5082 14.6918 21.3847 14.0823 21.1341C13.4709 20.8847 12.909 20.7612 12.3953 20.7612C11.8565 20.7612 11.2786 20.8847 10.6605 21.1341C10.0414 21.3847 9.5427 21.5153 9.1614 21.5282C8.58152 21.5529 8.00352 21.2976 7.42658 20.7612C7.05834 20.44 6.59775 19.8894 6.04599 19.1094C5.45399 18.2765 4.96728 17.3106 4.58599 16.2094C4.17764 15.02 3.97293 13.8682 3.97293 12.7532C3.97293 11.4759 4.24893 10.3742 4.80175 9.45106C5.23623 8.70953 5.81422 8.12459 6.53764 7.69517C7.26105 7.26576 8.0427 7.04694 8.88446 7.03294C9.34505 7.03294 9.94905 7.17541 10.6996 7.45541C11.4481 7.73635 11.9287 7.87882 12.1394 7.87882C12.2969 7.87882 12.8308 7.71223 13.7359 7.38012C14.5918 7.07212 15.3141 6.94459 15.9059 6.99482C17.5094 7.12423 18.7141 7.75635 19.5153 8.89517C18.0812 9.76411 17.3718 10.9812 17.3859 12.5425C17.3988 13.7586 17.84 14.7706 18.707 15.5741C19.1 15.9471 19.5388 16.2353 20.027 16.44C19.9212 16.7471 19.8094 17.0412 19.6906 17.3235V17.3235ZM16.0129 2.85176C16.0129 3.80495 15.6647 4.69494 14.9706 5.5187C14.1329 6.498 13.1198 7.06388 12.021 6.97459C12.007 6.86023 11.9989 6.73988 11.9989 6.61341C11.9989 5.69835 12.3973 4.71906 13.1047 3.91835C13.4579 3.51294 13.907 3.17585 14.4518 2.90694C14.9953 2.64205 15.5094 2.49555 15.9929 2.47047C16.007 2.59789 16.0129 2.72533 16.0129 2.85175V2.85176Z" }
        ]
    },
    flutter: {
        id: 5, title: "Flutter App", class: "tag-icon", width: 24, height: 24, paths: [
            { fill: "white", opacity: 0.56, path: "M13.9236 2H20.0755L7.00145 15.076L3.92453 11.999L13.9236 2Z" },
            { fill: "white", opacity: 0.56, path: "M20.0755 11.2288L14.6918 16.6144L20.0755 22H13.9236L11.6149 19.6913L8.53798 16.6144L13.9236 11.2288H20.0755ZM13.9236 2L3.92453 11.999L7.00145 15.076L20.0755 2H13.9236Z" }
        ]
    },
    kotlin: {
        id: 6, title: "Coded in Kotlin", class: "tag-icon", width: 24, height: 24, paths: [
            { fill: "white", opacity: 0.28, path: "M12.0414 2L2 12.5598V22L12.027 11.9554L22 2H12.0414Z" },
            { fill: "white", opacity: 0.56, path: "M2 22L12.027 11.9555L22 22H2Z" },
            { fill: "white", opacity: 0.56, path: "M2 2H12.0414L2 12.5598V2Z" }
        ]
    },
    info: {
        id: 7, title: "Info", class: "", width: 36, height: 36, paths: [
            { fill: "#bdbdbd", opacity: 1.0, path: "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" }
        ]
    },
};