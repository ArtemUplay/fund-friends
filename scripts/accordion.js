const buttonsOpenAccordeon = document.querySelectorAll('.accordion__button');


Array.from(buttonsOpenAccordeon).forEach( (item) => {
  item.addEventListener('click', function(evt) {
    evt.target.classList.toggle('accordion__button_open')
    const accordeonContent = item.closest('.accordion__item').lastElementChild;
    if (accordeonContent.style.maxHeight) {
      accordeonContent.style.maxHeight = null;
      accordeonContent.style.paddingTop = '0'
    } else {
      accordeonContent.style.maxHeight = null;
      accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px'
      accordeonContent.style.paddingTop = '7px'
    }
    
  })
})