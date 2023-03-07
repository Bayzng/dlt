// SIDE BAR
const menuItems = document.querySelectorAll('.menuItems')

//MESSAGE
const messageNotifications = document.querySelector('#messageNotifications')
const messages = document.querySelector('.messages')

//THEME
const theme = document.querySelector('#theme')
const customizeTheme = document.querySelector('.customizeTheme')
const fontSize = document.querySelectorAll('.chooseSize span')
let root = document.querySelector(':root')  //root is a psoudo class

//COLOR
const colorpalette = document.querySelectorAll('.chooseColor span')
const bgOne = document.querySelector('.bgOne')
const bgTwo = document.querySelector('.bgTwo')
const bgThree = document.querySelector('.bgThree')



//REMOVE ACTIVE CLASS FROM MENU ITEMS
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications') {
            document.querySelector('.notificationPopup').style.display = 'none';
        }else {
            document.querySelector('.notificationPopup').style.display = 'block';
            document.querySelector('#notifications .notificationCount').style.display = 'none';
        }
    })
});

//messages

messageNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    document.querySelector('#messageNotifications .notificationCount').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


const openModal = () => {
    customizeTheme.style.display = 'grid';
}

const closeModal = (e) => {
    if(e.target.classList.contains('customizeTheme')) {
        customizeTheme.style.display = 'none';
    }
}


customizeTheme.addEventListener('click', closeModal)
theme.addEventListener('click', openModal )



//remove active class from the font size
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active')
    })
}



//fontSize
fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSize
        size.classList.toggle('active')

        if(size.classList.contains('fontSizeOne')){
            fontSize = '10px'
            root.style.setProperty('--sticky-top-left:', '5.4rem')
            root.style.setProperty('--sticky-top-right:', '5.4rem')
        }else if(size.classList.contains('fontSizeTwo')){
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left:', '5.4rem')
            root.style.setProperty('--sticky-top-right:', '-7rem')
        }else if(size.classList.contains('fontSizeThree')){
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left:', '-2rem')
            root.style.setProperty('--sticky-top-right:', '-17rem')
        }else if(size.classList.contains('fontSizeFour')) {
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left:', '5rem')
            root.style.setProperty('--sticky-top-right:', '-25rem')
        }else if(size.classList.contains('fontSizeFive')) {
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left:', '-12rem')
            root.style.setProperty('--sticky-top-right:', '35rem')
        }
        // CHANGE FONT SIZE OF THE ROOT HTML ELEMENT
        document.querySelector('html').style.fontSize = fontSize
    })
})

//REMOVE ACTIVE CLASS FROM COLOR
const changeColor = () => {
    colorpalette.forEach(color => {
        color.classList.remove('active')
    })
}


//color
colorpalette.forEach(color => {
    color.addEventListener('click', () => {
        changeColor()
        let primary;
        if(color.classList.contains('colorOne')){
            primary = '252';
        }else if(color.classList.contains('colorTwo')) {
            primary = '52';
        }else if (color.classList.contains('colorThree')) {
            primary = '352';
        }else if (color.classList.contains('colorFour')) {
            primary = '152';
        }else if(color.classList.contains('colorFive')) {
            primary = '202';
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primary)
    })
})

//THEME BACKGROUND 

let lightColorLightness
let whiteColorLightness
let darkColorLightness

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}


bgOne.addEventListener('click', () => {
    console.log('working');
    //add an active class
    bgOne.classList.add('active')

    //remove the active class

    bgTwo.classList.remove('active')
    bgThree.classList.remove('active')

    window.location.reload()

})

bgTwo.addEventListener('click', () => {
    //remove the active class
    lightColorLightness = '15%'
    whiteColorLightness = '20%'
    darkColorLightness = '95%'

    bgTwo.classList.add('active')

    bgOne.classList.remove('active')
    bgThree.classList.remove('active')

    changeBg()
})

bgThree.addEventListener('click', () => {

    lightColorLightness = '0%'
    whiteColorLightness = '10%'
    darkColorLightness = '95%'

    bgThree.classList.add('active')

    bgOne.classList.remove('active')
    bgTwo.classList.remove('active')

    changeBg()
})

