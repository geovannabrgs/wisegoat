const sentences = ['"Being kind is more rewarding than being right."', '"Never pay full price for a sofa at DFS."', '"If you think nobody cares if you are alive, try missing a few payments."', '"Try making a list."', '"Some people would be better off if they took their own advice."', '"Respect your elders."', '"You can have too much of a good thing."', '"YOLO"'];

function generateSentences() {
    const response = sentences[Math.floor(Math.random() * sentences.length - 1) + 1];
    document.getElementById('sentences').innerText = response;
}