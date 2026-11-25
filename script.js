
// ========================================
// THE UNKNOWN - COMPLETE SCRIPT
// ========================================

// PERSONALIZED BOY MESSAGES
const boyMessages = {
    "dhruv": ["Dhruv bhai, confidence full che, pan kaam karta karta loading thai jay che 😂", "Dhruv ni entry royal, pan planning ma thodu buffering! 😎"],
    "kartik": ["Kartik bhai, attitude premium ane excuses unlimited! 😂", "Kartik no swag alag che, pan homework kyare thase?"],
    "sumit panwar": ["Sumit Panwar, naam ma power ane style ma full confidence! 🔥"],
    "prasanna": ["Prasanna bhai, comedy department na permanent manager! 😂"],
    "jimil": ["Jimil bhai, silent mode ma pan full entertainment! 😎"],
    "fenil": ["Fenil bhai, confidence 100%, logic sometimes 404! 😂"],
    "akshay": ["Akshay bhai, entry karta j atmosphere change! 🔥"],
    "aarjav": ["Aarjav bhai, style full ane masti unlimited! 😎"],
    "manthan": ["Manthan bhai, ideas ni factory, pan execution pending! 😂"],
    "saumya": ["Saumya bhai, naam simple pan swag extraordinary!"],
    "luv": ["Luv bhai, attitude ni battery kyare low thati j nathi! 😂"],
    "henil": ["Henil bhai, full energy ane full comedy!"],
    "het": ["Het bhai, planning secret ane result surprise! 😎"],
    "suhan": ["Suhan bhai, chill mode na brand ambassador!"],
    "viral": ["Viral bhai, naam j viral ane masti pan viral! 😂"],
    "sahil": ["Sahil bhai, confidence ni koi limit nathi!"],
    "nikunj": ["Nikunj bhai, entry silent pan presence powerful!"],
    "nishit": ["Nishit bhai, smartness full, pan mischief double!"],
    "kush": ["Kush bhai, swag one number, bhaichara on top! 😎"],
    "vinit": ["Vinit bhai, style ane confidence no combo! 🔥"],
    "sumit parmar": ["Sumit Parmar, dance floor no superstar ane masti no champion! 😂"]
};

// PERSONALIZED GIRL MESSAGES
const girlMessages = {
    "krishna": [
        "Krishna, tamari friendship ma ek alag warmth che. Always stay happy and keep shining! 💗",
        "Krishna, tamari smile ane positive vibe divas special banavi de che. ✨"
    ],
    "bhumi": ["Bhumi, tamari simplicity ane sweet nature tamne special banave che! 💗"],
    "aneri": ["Aneri, tamari energy ane kindness ekdum lovely che! ✨"],
    "pratiksha": ["Pratiksha, tamari presence thi atmosphere happy bani jay che! 💗"],
    "pratyesha": ["Pratyesha, tamari positive vibe always special che! ✨"],
    "jiya": ["Jiya, tamari friendship ane cheerful nature priceless che! 💗"],
    "dhanshree": ["Dhanshree, tamari kindness ane confidence banne amazing che! ✨"]
};

// 100+ UNKNOWN GIRL COMPLIMENT COMBINATIONS
const girlStarts = [
    "Your smile", "Your kindness", "Your positive energy",
    "Your confidence", "Your lovely personality",
    "Your presence", "Your cheerful nature",
    "Your beautiful vibes", "Your friendly nature",
    "Your uniqueness"
];

const girlMiddles = [
    "makes every moment brighter",
    "is something truly special",
    "makes people feel comfortable",
    "brings happiness everywhere",
    "deserves appreciation",
    "makes ordinary moments memorable",
    "is your biggest charm",
    "makes your personality shine",
    "is genuinely wonderful",
    "makes you one of a kind"
];

const girlEnds = [
    "Keep shining! 💗",
    "Never stop being yourself! 🌸",
    "You deserve all the happiness! ✨",
    "Stay amazing! 🦋",
    "Keep spreading positivity! ❤️",
    "You are appreciated! 🌷",
    "Never underestimate your charm! 💕",
    "Stay happy always! ☀️",
    "Keep smiling! 😊",
    "You are truly special! 💖"
];

// 100+ BOY REACTIONS
const boyReactions = [
    "CHAL CHAL SIDE HATT! 😂",
    "Oye hero, entry slow motion ma hati ke network slow che? 😭",
    "Bhai, swag nu server down kari didhu!",
    "Aaya aaya comedy king! 👑",
    "System warning: extra attitude detected!",
    "Bhai, thodu normal pan rahi le! 😂",
    "Entry karta pehla permission lidhi hati?",
    "Oho! Walking meme has arrived!",
    "Bhai no confidence unlimited!",
    "Hero banva aavyo ke attendance puri karva?",
    "Aaje toh comedy show free ma!",
    "Side ma ubho reh, superstar aave che! 😂",
    "Bhai, attitude ni EMI bhare che?",
    "Welcome to the nonsense department!",
    "Oye! Full-time masti machine!",
    "Bhai, swag ne charger lagav!",
    "Entry ma villain, nature ma cartoon!",
    "Aavyo aavyo legend of bakchodi!",
    "Bhai, thodu volume ochhu!",
    "Comedy loading... please wait!",
    "Oye superstar, reality check!",
    "Aaje toh classroom ma entertainment!",
    "Bhai, style karta karta rasto bhuli gayo?",
    "Full drama, zero tension!",
    "Aavi entry mate ticket joie!",
    "Bhai, confidence kyathi rent par lidho?",
    "Warning: mischief incoming!",
    "Oye, tu aavyo ke meme aavyo?",
    "Swag high, battery low!",
    "Bhai, chill kar! 😂",
    "Aaj no official troublemaker!",
    "Walking notification of entertainment!",
    "Bhai, thodu shant rehva nu subscription che?",
    "Entry ek number, logic pending!",
    "Oho! Attitude no showroom!",
    "Aavyo aavyo full-on entertainer!",
    "Bhai, aaje pan kai navi masti?",
    "Drama king detected!",
    "Side please, comedy express!",
    "Bhai, tu alag j software che!",
    "Aaje toh jokes ni baarish!",
    "Oye, hero number one!",
    "Swag ni dukaan khuli gai!",
    "Bhai, tu toh walking surprise che!",
    "Masti no unlimited recharge!",
    "Aavi entry ne kevaay overacting!",
    "Oho! VIP nonsense detected!",
    "Bhai, style ma tax lage che?",
    "Aaje toh full entertainment!",
    "Legend has entered, logic has left!",
    "Oye, thodu ground reality!",
    "Bhai, tu toh alag level!",
    "Meme material detected!",
    "Aavyo aavyo attitude machine!",
    "Chal bhai, line ma ubho reh! 😂",
    "Bhai, entry karta pehla bell vagad!",
    "Full confidence, zero explanation!",
    "Oye, aaje su plan che?",
    "Comedy nu head office aavi gayu!",
    "Bhai, thodu acting bandh!",
    "Swag nu showroom open!",
    "Aaje toh masti guaranteed!",
    "Oho! Famous personality!",
    "Bhai, tu toh full package!",
    "Aavyo aavyo class no entertainer!",
    "Oye, slow down superstar!",
    "Aaje pan koi kand karvano che?",
    "Bhai, attitude ni limit check kar!",
    "Walking meme alert!",
    "Oho! Mr. Unlimited Masti!",
    "Aavi entry par clap karvi pade!",
    "Bhai, tu toh full battery!",
    "Oye, camera tara par nathi! 😂",
    "Drama department no topper!",
    "Bhai, thodu humble pan reh!",
    "Aavyo aavyo swag no supplier!",
    "Masti mode permanently ON!",
    "Oye, full hero vibes!",
    "Bhai, tu toh entertainment package!",
    "Aaje toh hasi hasi ne thaki jaishu!",
    "Attitude detected from 10 km!",
    "Oho! Mr. Overconfidence!",
    "Bhai, thodu normal entry kar!",
    "Aavyo aavyo legend!",
    "Comedy level: unlimited!",
    "Oye, side ma space aap!",
    "Bhai, tu toh surprise box!",
    "Aaje toh full dhamal!",
    "Entry ma swag, vaat ma lag!",
    "Oho! Masti no brand ambassador!",
    "Bhai, tu toh alag hi piece!",
    "Welcome back, troublemaker!",
    "Oye, hero ni shooting chalu che?",
    "Bhai, style no overload!",
    "Aavyo aavyo full power!",
    "Meme factory nu owner!",
    "Oho! Full-on entertainment!",
    "Bhai, tu toh walking comedy!",
    "Chal bhai, have kaam kar! 😂",
    "Aaje no special entertainer!",
    "Swag unlimited, tension zero!"
];

// 100+ GIRL REACTIONS
const girlReactions = [
    "OMG! WHAT A GORGEOUS ENTRY! 💗",
    "Areyyy! Aaj toh chand pan jealous che! 🌙",
    "Beauty with unlimited attitude! 💅",
    "Aaj toh entry ma magic che! ✨",
    "Princess alert! 👑",
    "Someone just made the screen beautiful! 💖",
    "Excuse me, beauty queen detected!",
    "Aavi entry toh movie ma pan na male! 🎬",
    "Wow! Full-on sunshine vibes! ☀️",
    "The definition of elegance! ✨",
    "Aaj toh stars pan shine ochha kare! 🌟",
    "Queen has entered the chat! 👑",
    "Aankho ma sparkle, vibe ma magic! 💗",
    "Stop! Too much cuteness detected!",
    "Aaj no highlight aavi gayo! 💕",
    "Gorgeousness overload! 💫",
    "The vibe just became 100 times better!",
    "Fashion and confidence: perfect combo!",
    "Hello Miss Universe! 🌍",
    "Aaj toh camera pan happy thai gayo! 📸",
    "Beauty mode: activated! 💗",
    "Aavi smile mate alag fan club joie!",
    "Sweetness level: unlimited! 🍭",
    "Aaj toh flowers pan jealous thase! 🌸",
    "Queen energy only! 👑",
    "Pure positive vibes incoming!",
    "Oho! Entry ma full sparkle! ✨",
    "Aaje toh scene j change thai gayo!",
    "Gorgeous alert! Everybody behave!",
    "One name, unlimited charm!",
    "Aaj ni special guest aavi gai!",
    "Cute vibes, classy style!",
    "The spotlight belongs to you! 🌟",
    "Aavi entry ne kevaay royal!",
    "Pretty vibes loading... complete!",
    "Aaj toh butterflies pan dance kare! 🦋",
    "Full-on fairy tale moment!",
    "Magic has a new name today!",
    "Smile detected, happiness unlocked!",
    "Aavi personality rare che!",
    "Miss Sunshine has arrived! ☀️",
    "Classy, confident and fabulous!",
    "Oho! What a lovely surprise!",
    "The queen needs no introduction!",
    "Aaje toh flowers welcome kare! 🌷",
    "Cute alert! System cannot handle!",
    "Aavi vibe roj nathi malti!",
    "The main character has arrived!",
    "Simply iconic! 💖",
    "Aaj ni entry ekdum dreamy!",
    "Sparkle mode activated!",
    "Aavi style ne salute!",
    "Beauty and confidence together!",
    "The room just got brighter!",
    "Aaj toh compliment ni line lagse!",
    "Gorgeousness at another level!",
    "Aavi entry mate applause banta hai!",
    "Sweet like chocolate! 🍫",
    "Aaj no mood automatically good!",
    "A beautiful surprise unlocked!",
    "Queen of good vibes!",
    "Full fairy energy! 🧚",
    "Aavi smile priceless che!",
    "The cutest plot twist!",
    "Aavi personality ekdum unique!",
    "Pink vibes everywhere!",
    "Aavi entry no replay joie!",
    "Style ni walking definition!",
    "The sparkle is real!",
    "Aaj no favourite moment!",
    "Elegance level: legendary!",
    "Aavi vibe thi day special!",
    "A smile worth a thousand compliments!",
    "The star of this moment!",
    "Aaj toh compliments ochha padse!",
    "Superstar entry confirmed!",
    "Aavi charm no jawab nathi!",
    "The world needs more positive vibes!",
    "Aaj ni vibe ekdum lovely!",
    "A princess in her own story!",
    "Confidence looks good on you!",
    "Aavi entry mate slow motion joie!",
    "Aaj toh sparkle ni baarish!",
    "Lovely human detected!",
    "Aavi personality no match nathi!",
    "The sunshine of the screen!",
    "Pure magic, no filter!",
    "Aavi entry unforgettable!",
    "The glow is different today!",
    "Aaj ni queen officially arrived!",
    "A cute surprise unlocked!",
    "Aavi style ne 10/10!",
    "Aaj toh scene beautiful bani gayo!",
    "One word: WOW!",
    "Gorgeous vibes only!",
    "The spotlight is yours!",
    "Aavi entry mate background music perfect!"
];

// NO REPEATS UNTIL LIST FINISHES
const usedReactions = { boy: [], girl: [] };
const usedMessages = {};

function getRandomReaction(gender) {
    const list = gender === "girl" ? girlReactions : boyReactions;
    const used = usedReactions[gender];

    if (used.length >= list.length) used.length = 0;

    const available = list
        .map((message, index) => ({ message, index }))
        .filter(item => !used.includes(item.index));

    const selected = available[Math.floor(Math.random() * available.length)];
    used.push(selected.index);
    return selected.message;
}

// UNIQUE UNKNOWN GIRL COMPLIMENT
function getUnknownGirlMessage(name) {
    const key = name.toLowerCase().trim();

    if (!usedMessages[key]) usedMessages[key] = 0;

    const count = usedMessages[key]++;
    const start = (count * 7 + key.length) % girlStarts.length;
    const middle = (count * 3 + key.length) % girlMiddles.length;
    const end = (count * 9 + key.length) % girlEnds.length;

    return `${girlStarts[start]} ${girlMiddles[middle]}. ${girlEnds[end]}`;
}

// PERSONALIZED MESSAGE
function getMessage(name, gender) {
    const cleanName = name.toLowerCase().trim().replace(/\s+/g, " ");
    const collection = gender === "boy" ? boyMessages : girlMessages;
    const messages = collection[cleanName];

    if (!messages) {
        if (gender === "girl") return getUnknownGirlMessage(cleanName);

        return "Unknown personality detected! 😎 Tamari story haju classified che!";
    }

    const key = gender + "-" + cleanName;

    if (!usedMessages[key]) usedMessages[key] = 0;

    const selected = usedMessages[key] % messages.length;
    usedMessages[key]++;

    return messages[selected];
}

// AUDIO SYSTEM
function playTone(frequency, startTime, duration, type = "sine", volume = 0.10) {
    const AudioClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioClass) return;

    try {
        if (!window.unknownAudio) window.unknownAudio = new AudioClass();

        const audio = window.unknownAudio;
        if (audio.state === "suspended") audio.resume();

        const oscillator = audio.createOscillator();
        const gain = audio.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, audio.currentTime + startTime);

        gain.gain.setValueAtTime(0.001, audio.currentTime + startTime);
        gain.gain.linearRampToValueAtTime(volume, audio.currentTime + startTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + startTime + duration);

        oscillator.connect(gain);
        gain.connect(audio.destination);

        oscillator.start(audio.currentTime + startTime);
        oscillator.stop(audio.currentTime + startTime + duration + 0.05);
    } catch (error) {
        console.log("Audio error:", error);
    }
}

function playGirlTune() {
    [523, 659, 784, 1046, 784, 880, 1046].forEach((note, index) => {
        playTone(note, index * 0.20, 0.22, "sine", 0.07);
    });
}

function playBoySound() {
    [420, 330, 250, 180].forEach((note, index) => {
        playTone(note, index * 0.16, 0.20, "square", 0.045);
    });
}

function playCyberSound(type) {
    const notes = type === "scan" ? [400, 600, 800] : [650, 850, 1100];
    notes.forEach((note, index) => playTone(note, index * 0.13, 0.20));
}

// LIVE CLOCK
function updateLiveClock() {
    const clock = document.getElementById("liveClock");
    const dateDisplay = document.getElementById("systemDate");

    if (!clock || !dateDisplay) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-IN", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    dateDisplay.textContent = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).toUpperCase();
}

// PARTICLE BACKGROUND
function createParticleBackground() {
    if (document.getElementById("particleCanvas")) return;

    const canvas = document.createElement("canvas");
    canvas.id = "particleCanvas";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "-1";

    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];

        const count = Math.min(65, Math.floor(window.innerWidth / 18));

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.6 + 0.2
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(190, 130, 255, ${p.opacity})`;
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#a64dff";
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    animateParticles();
    window.addEventListener("resize", resizeCanvas);
}

// TOTAL SCANS
function getTotalScans() {
    try {
        return Number(localStorage.getItem("unknownTotalScans")) || 0;
    } catch (error) {
        return 0;
    }
}

function increaseTotalScans() {
    const total = getTotalScans() + 1;

    try {
        localStorage.setItem("unknownTotalScans", total);
    } catch (error) {
        console.log("Could not save scan count.");
    }

    return total;
}

// SAFE TEXT
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// START EXPERIENCE
function startExperience(gender) {
    const nameInput = document.getElementById("playerName");
    const name = nameInput.value.trim();

    if (!name) {
        alert("Please enter your name first!");
        nameInput.focus();
        return;
    }

    playCyberSound("scan");

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");

    const admin = document.getElementById("adminPanel");
    if (admin) admin.classList.add("hidden");

    const scanning = document.getElementById("scanning");
    if (scanning) scanning.classList.remove("hidden");

    setTimeout(() => {
        if (scanning) scanning.classList.add("hidden");

        const reaction = getRandomReaction(gender);
        const message = getMessage(name, gender);

        document.getElementById("finalMessage").innerHTML = `
            <h2>HEY, ${escapeHTML(name.toUpperCase())}!</h2>
            <p class="entry-reaction">${escapeHTML(reaction)}</p>
            <p>${escapeHTML(message)}</p>
        `;

        const total = document.getElementById("totalScans");
        if (total) total.textContent = increaseTotalScans();

        document.getElementById("result").classList.remove("hidden");

        if (gender === "girl") playGirlTune();
        else playBoySound();

    }, 1800);
}

// RESTART
function restartExperience() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("welcome").classList.remove("hidden");
    document.getElementById("playerName").value = "";
}

// ADMIN PANEL
function openAdminPanel() {
    document.getElementById("welcome").classList.add("hidden");

    const scanning = document.getElementById("scanning");
    if (scanning) scanning.classList.add("hidden");

    document.getElementById("result").classList.add("hidden");

    const total = document.getElementById("totalScans");
    if (total) total.textContent = getTotalScans();

    const admin = document.getElementById("adminPanel");
    if (admin) admin.classList.remove("hidden");

    playCyberSound("reveal");
}

function closeAdminPanel() {
    const admin = document.getElementById("adminPanel");
    if (admin) admin.classList.add("hidden");

    document.getElementById("welcome").classList.remove("hidden");
}

// INITIALIZE
document.addEventListener("DOMContentLoaded", function () {
    createParticleBackground();
    updateLiveClock();
    setInterval(updateLiveClock, 1000);

    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
            event.preventDefault();
            openAdminPanel();
        }

        if (event.key === "Escape") closeAdminPanel();
    });
});
