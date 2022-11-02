
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger)=>{
    trigger.addEventListener('click', (e)=>{
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen){
            //acordeon.classList = Array.of(acordeon.classList).filter(className => className!== open)
            acordeon.classList.remove('open')
        }
        else{
            acordeon.classList.add('open')
        }
    })
})