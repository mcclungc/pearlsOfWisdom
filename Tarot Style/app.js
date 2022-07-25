/*Pearls of Wisdom - a simple fortune-telling page that provides a random pearl of wisdom when you click a button*/

const wisdom = ["You will soon encounter a dear old friend.", "That thing you are worrying about will turn out fine.", "You contain multitudes.","No one can stop you from loving yourself.", "Notice what is happening right now.", "Today you will have the opportunity to make a new friend.", "Forgive yourself for the past you cannot change.", "Find something to love, and try loving it.", "If you think it is worthwhile, do it.", "Your mind shapes your reality.", "What is happening right now is your real life.", "The world is a wonderland to those who notice things.", "Pay attention.", "Whether you realize it or not, you are loved.", "There is always something new to learn.", "Lean on music, art, and literature when you are troubled.", "Just listen, and see what happens.", "Today you will have a chance to love someone. Take it.", "Remember that everyone struggles.", "Accept what is, but allow it to change.", "It's okay to forget about yourself for a little while.", "The only way out is through.", "Listen more than you speak today.", "Be a good friend to yourself.", "Being present is an act of courage.","Paying attention is an act of love.", "Notice what you are feeling, thinking, and experiencing in this moment.", "Don't overlook little opportunities to be kind.", "If you feel sad, do something for someone else.", "The last good thing you dreamed of will come true.","Your heart's desire is already present in your life.", "Make some art, and you will feel better.", "Learn something new today.", "Make music, sing, or dance today.", "Reach out to a distant loved one.", "Give someone you love a small gift.", "Hug your child or pet as soon as you can.", "Tell someone 'Thank you' today.", "What are you grateful for today?", "Listen to your doubts, but don't let them take you hostage.", "Your first job is to love and care for yourself.", "Be careful of how many principles you sacrifice to meet a goal.", "Don't ask yourself if you feel like doing it; just get started.", "If you want to feel better, take a walk.", "Breathe the air, smell the flowers, hear the birds.", "Write a note to show someone you care.", "Write down a recent dream.", "Play some music you love.", "Go ahead and make the purchase you have been considering.", "Don't assume you know what someone is thinking.", "Don't make the purchase you have been considering.", "Name the 5 things that are most important to you today.", "Visit a museum soon.", "Drink a glass of water right now.", "What would your life be like if you could forgive them?", "A new money-making oppportunity will soon appear.", "If you really want it, work to get it.", "You are already worthy of love.","Life is change.", "If you aren't sure, wait for a sign."];

const pearlButton = document.getElementById("get_pearl");

pearlButton.addEventListener("click", function() {
	let max_num = wisdom.length;
	let index = Math.floor(Math.random() * (max_num - 0) + 0);
	let divPearl = document.getElementById("wisdom");
	if (divPearl.firstChild) {
		divPearl.removeChild(divPearl.firstChild);
	}
	const wiseWords = document.createElement("p");
	wiseWords.textContent = wisdom[index];
	divPearl.appendChild(wiseWords);
	const reminderText = document.getElementById("reminder");
	reminderText.style.visibility = "visible";
});

