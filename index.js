'use strict'

/* ========== PŘIJÍMÁNÍ ZPRÁV ========== */

const messagesElement = document.querySelector('#messages')

const testMessages = [
	{ name: 'Pavel', message: 'Ahoj 👋', date: '11. 5. 2020 17:30:00' },
	{
		name: 'Martina',
		message: 'Ja se máte?',
		date: '11. 5. 2020 17:29:54',
	},
	{ name: 'Michal', message: 'Nazdar', date: '12. 5. 2020 12:17:21' },
	{ name: 'Ivana', message: 'Ahoj', date: '12. 5. 2020 11:02:15' },
]

const Message = (props) => {
	// console.log(props.name, props.message, props.date)
	// @TODO: komponenta vracející řetězec v podobě HTML zprávy
}

const MessageList = (props) => {
	// console.log(props.items)
	// @TODO: komponenta vracející jeden řetězec obsahující více zpráv
}

// Zobrazí zprávy, messages na stránce
const show = (messages) => {
	messagesElement.innerHTML = MessageList({
		items: messages,
	})
}

const fetchMessagesAndShow = () => {
	// @TODO: funkce stahující zprávy ze serveru a přidávající je na stránku pomocí funkce show
}

setInterval(fetchMessagesAndShow, 2000) // Každé dvě sekundy zavolá updateMessages
fetchMessagesAndShow() // Stáhne a zobrazí nové zprávy hned po načtení stránky

/* ========== ODESÍLÁNÍ ZPRÁV ========== */

const nameInputElement = document.querySelector('#name-input')
const messageInputElement = document.querySelector('#message-input')

const onSubmit = (event) => {
	event.preventDefault() // Zamezí přesměrování na jinou stránku při odesílání formuláře

	const data = JSON.stringify({
		name: nameInputElement.value,
		message: messageInputElement.value,
	})

	console.log('Data:', data)

	// @TODO: odešli data na server
}

document.querySelector('#send-form').addEventListener('submit', onSubmit)
