function generateParagraph(name, dob, crushName) {
  const birthDate = new Date(dob);
  const month = birthDate.getMonth();
  const day = birthDate.getDate();

  // Many different paragraph templates
  const templates = [
    // Template 1 — They secretly like you
    `💕 ${crushName} thinks about you more than you know. 
Every time your name comes up, something shifts inside them. 
They notice the little things — the way you talk, the way you laugh, 
the energy you bring into a room. ${crushName} hasn't said it out loud yet, 
but deep down they feel a connection with ${name} that they can't explain. 
They are just waiting for the right moment. 💫`,

    // Template 2 — They are confused about feelings
    `💭 ${crushName} is confused right now — and ${name} is the reason why. 
They didn't expect to feel this way. Some days they want to tell you everything. 
Other days they pull back because they are scared. 
But one thing is certain — ${name} has made ${crushName} feel something real. 
Something they haven't felt in a long time. The question is... will they act on it? 🌙`,

    // Template 3 — They admire from distance
    `✨ ${crushName} admires ${name} from a distance. 
They watch how you handle things, how kind you are, how strong you are. 
They respect you deeply. ${crushName} feels like ${name} is out of their league 
but that doesn't stop them from dreaming. You have left a mark on their heart 
without even trying. That's how special you are. 🌟`,

    // Template 4 — They are falling hard
    `🔥 ${crushName} is falling for ${name} harder than they expected. 
It started small — a smile here, a conversation there. 
But now? ${crushName} catches themselves thinking about you at random moments. 
Before sleeping. During lunch. While listening to a song. 
${name}, you have taken up space in ${crushName}'s mind and they don't want you to leave. 💝`,

    // Template 5 — Mixed signals
    `🌊 ${crushName} gives mixed signals because they are fighting their own feelings. 
One moment they are warm and close, next moment distant. 
Don't be confused ${name} — this is not about you doing something wrong. 
${crushName} is battling between what their heart wants and what their mind says is safe. 
Their heart is winning slowly. Give it time. ⏳`,

    // Template 6 — They think you are special
    `🌸 In a world full of people, ${crushName} finds ${name} different. 
Not in a small way — in a way that makes them pause and think. 
${crushName} sees qualities in you that they have been looking for. 
Your energy is magnetic to them. They might not show it every day 
but when they are alone, ${name} is who they think about. Always. 💖`,

    // Template 7 — They want to be closer
    `🤝 ${crushName} wants to be closer to ${name} but doesn't know how to start. 
Every time there's a chance, their heart beats faster. 
They rehearse conversations in their head but when you're around, 
words fail them. ${name}, the nervousness ${crushName} feels around you? 
That's not awkwardness. That's feelings they don't know how to handle yet. 😊`,

    // Template 8 — Tough love
    `💔 Here's the truth ${name} — ${crushName} cares about you 
but they are not ready to show it yet. They have walls built high 
from past experiences. Breaking through won't be easy. 
But if you are patient and genuine, ${crushName} will slowly open up. 
They are worth the wait — and so are you. Don't give up just yet. 🌈`,
  ];

  // Pick random template based on name + day combination
  const seed = (name.length + day + month) % templates.length;
  const randomIndex = Math.floor(Math.random() * templates.length);
  
  // Mix both for true randomness
  const finalIndex = (seed + randomIndex) % templates.length;
  
  return templates[finalIndex];
}

module.exports = generateParagraph;
