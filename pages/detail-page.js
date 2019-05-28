function doesNotPassAllValidations(name, msg) {
    if (msg.length < 1 || name.length < 1) {
      alert('You forgot to fill in your name or message!')
      return true;
    }
  
    if(msg.length > 280) {
      alert('Your comment is too long')
      return true
    }
  
    return false
  }



// add event handler
function submitComment() {
    // gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    
    // create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h1')
    const p = document.createElement('p')
  
    if(doesNotPassAllValidations(name, msg)){
        return null
      } 

    const nameSubset = name.substr(0,1)
    const capitalizedName = nameSubset.toUpperCase()+name.substr(1)

    //console.log(capitalizedName)
    
    // adjust the elements we created
    h3.innerHTML = capitalizedName+ ' said:'
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
  
    // display the elements on the page
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)

   
    
    
    // reset form values
    inputField.value = null
    textArea.value = null

    
  }

  