let a = document.getElementsByTagName('div')[0]
//a.innerHTML = '<h1>Hello world!</h1>'


//insert element in html with using append method

//append:place in div but at last position
//prepend:place in div but at first position
//before:place this outside of the container class at top
//after:place this outside of the container class at last
//replacewith:replace the inner elements with new created div elements
let div = document.createElement('div')
div.innerHTML = '<h1>Hello world!</h1>'
a.append(div) //place in div but at last position

//a.prepend(div)//place inside the div but at first position
//a.before(div)//place this outside of the container class at top
//a.after(div)//place this outside of the container class at last
//a.replaceWith(div)//replace the inner elements with new created div elements

