// on submit, get the input values

// handle errors in elements if possible
// otherwise, run checks as you process the data

const form = document.getElementById('element-form')
form.addEventListener('submit', handleSubmit)

function createHTMLElement(tagName, content, src) {
	if (!tagName.length || !content.length) return
	const newEl = document.createElement(tagName)
	if (tagName === 'img' && src.length) {
		newEl.src = src
		newEl.alt = content
	} else if (tagName === 'img' && !src.length) return
	else newEl.innerHTML = content
	document.querySelector('#output').prepend(newEl)
}

function handleSubmit(e) {
	// prevent default behavior
	e.preventDefault()

	// get input values based on their ids
	const tagName = document.getElementById('tag-input').value
	const content = document.getElementById('tag-content').value
	const src = document.getElementById('tag-src').value || ''

	// create and append the specified element
	createHTMLElement(tagName, content, src)

	// scrub input values
	document.getElementById('tag-input').value = ''
	document.getElementById('tag-content').value = ''
	if (document.getElementById('tag-src').value)
		document.getElementById('tag-src').value = ''
}
