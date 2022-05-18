
const boxes= document.querySelectorAll(`.box`)

function change(e){
    console.log (`hello`)
    this.classList.toggle('open')
    this.classList.toggle('active')
    const arr = [...this.children]
    arr.forEach(item=>item.classList.toggle('open'))

}

boxes.forEach(item=>item.addEventListener('click',change))

