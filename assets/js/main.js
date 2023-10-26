/*=============== MOSTRAR SCROLL PARA CIMA ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // QUANDO O SCROLL FOR SUPERIOR A 350 A ALTURA DA JANELA DE VISUALIZAÇÃO, ADICIONE A CLASSE SHOW-SCROLL À TAG A COM A CLASSE SCROLLUP
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== LINK's ATIVO DAS SEÇÔES DE SCROLL ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== TEMA DE LUZ ESCURA ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// TÓPICO SELECIONADO ANTERIORMENTE
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// OBTENÇÃO DO TEMA ATUAL QUE A INTERFACE POSSUI VALIDANDO A CLASSE DARK-THEME
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// VALIDANDO SE O USUÁRIO ESCOLHEU UM TEMA ANTERIORMENTE
if (selectedTheme) {
  // SE A VALIDAÇÃO FOR CUMPRIDA, PERGUNTAR QUAL FOI O PROBLEMA PARA SABER SE ATIVAMOS OU DESATIVAMOS O MODO ESCURO
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// ATIVE/DESATIVE O TEMA MANUALMENTE COM O BOTÃO
themeButton.addEventListener('click', () => {
    // ADICIONE OU REMOVA O TEMA ESCURO/ÍCONE
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // SALVAR O TEMA E O ÍCONE ATUAL QUE O USUÁRIO ESCOLHEU
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
