

const renderdataTool=async ()=>{
    const requestID=parseInt(window.location.href.split('/').pop())
    const dataToolDataJson = await fetch('/dataTools')
    const data = await dataToolDataJson.json()
    const dataToolContent=document.getElementById('dataTool-content')

    let dataTool
    // Find the dataTool by ID
    if (data){
        dataTool=data.find(dataTool=>dataTool.id==requestID)
        if(dataTool){
            document.getElementById('image').src = dataTool.image
            document.getElementById('name').textContent = dataTool.name
            document.getElementById('submittedBy').textContent = 'Submitted by: ' + dataTool.submittedBy
            document.getElementById('pricePoint').textContent = 'Price: ' + dataTool.pricePoint
            document.getElementById('audience').textContent = 'Great For: ' + dataTool.audience
            document.getElementById('description').textContent = dataTool.description
            document.getElementById('usefulFor').textContent=dataTool.usefulFor
            document.title = `Data Tools - ${dataTool.name}`
        }
        else{
            const errorMsg=document.createElement('h2')
            errorMsg.textContent='No dataTool with that ID'
            dataToolContent.appendChild(errorMsg)
        }
    }
    else{

    }
}

renderdataTool()