// Get data from dataTools endpoint and display data on client

const renderdataTools = async () => {
    const response = await fetch('/dataTools')
    const data = await response.json()
    const mainContent=document.getElementById('main-content')
    if(data){
        data.map(dataTool => {
            // Map dataTool data items and append to a card
            const dataToolDataCard=document.createElement('div')
            dataToolDataCard.className='card'
            
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage=`url(${dataTool.image})`
            const name=document.createElement('h3')
            name.textContent=dataTool.name
            bottomContainer.appendChild(name)
            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + dataTool.pricePoint
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + dataTool.audience
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/dataTools/${dataTool.id}`
            bottomContainer.appendChild(link)

            dataToolDataCard.appendChild(topContainer)
            dataToolDataCard.appendChild(bottomContainer) 
            mainContent.appendChild(dataToolDataCard)
        })

    }
    else {
        const errorH2=document.createElement('h2')
        errorH2.textContent='No dataTools Available.'
        mainContent.appendChild(errorH2)
    }
}
const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderdataTools()
  }