/* =========================================================
   Shared script for all three pages.

   FOLDER STRUCTURE THIS EXPECTS (as siblings, one level up
   from the s pro folder where these HTML files live):

     s pro/        <- index.html, videos.html, gallery.html, style.css, script.js
     s videos/     <- your .mp4 files
     s audio/      <- your .mp3 files
     s images/     <- your .jpeg files

   If you ever move s videos / s audio / s images to sit
   INSIDE s pro instead, just delete the "../" at the start
   of every path below.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- starfield background (every page) ---------- */
  function buildStarfield() {
    const field = document.getElementById('starfield');
    if (!field) return;
    const count = window.innerWidth < 700 ? 70 : 130;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'star';
      const size = Math.random() * 2 + 1;
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.top = Math.random() * 100 + '%';
      s.style.left = Math.random() * 100 + '%';
      s.style.animationDelay = (Math.random() * 4) + 's';
      field.appendChild(s);
    }
  }

  /* ---------- click-anywhere heart burst ---------- */
  function initHeartBursts() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.bouquet')) return;
      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.textContent = '♥';
      heart.style.left = e.clientX + 'px';
      heart.style.top = e.clientY + 'px';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    });
  }

  /* ---------- bouquet gate (index page only) ---------- */
  function initBouquetGate() {
    const bouquet = document.getElementById('bouquet');
    const gate = document.getElementById('gate');
    const hero = document.getElementById('hero');
    if (!bouquet || !gate) return;

    bouquet.addEventListener('click', () => {
      if (bouquet.classList.contains('bloom')) return;
      bouquet.classList.add('bloom');
      setTimeout(() => {
        gate.classList.add('hidden');
        if (hero) hero.classList.add('show');
      }, 1300);
    });
  }

  /* ---------- anniversary countdown (index page) ---------- */
  function initAnniversaryCountdown() {
    const el = document.getElementById('anniversaryCount');
    if (!el) return;
    const now = new Date();
    let year = now.getFullYear();
    let target = new Date(year, 8, 15);
    if (target < now) target = new Date(year + 1, 8, 15);
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((target - now) / msPerDay);
    el.textContent = daysLeft === 0 ? "today" : daysLeft + (daysLeft === 1 ? " day away" : " days away");
  }

  /* =========================================================
     VIDEO_DATA — one entry per file in "s videos".
     Edit the "title" and "caption" text any time — that's
     just plain text, safe to rewrite however you like.
     The "song" field points at a file in "s audio" that
     plays alongside that video. Swap them around freely.
     ========================================================= */
  const VIDEO_DATA = [
    {
      file: "brushing.mp4",
      title: "Brushing Teeth, Somehow Together",
      caption: "Proof that even the most boring two minutes of a day turn into something I look forward to, as long as you're on the other end of the call.",
      song: "Collide (Solo Version).mp3.mpeg"
    },
    {
      file: "cooking.mp4",
      title: "You, In The Kitchen",
      caption: "Watching you cook alone everytime and imagining what if i will be there with u to mess your cooking and make it more fun and memorable.",
      song: "Glowing Screen Love.mp3.mpeg"
    },
    {
      file: "cooking2.mp4",
      title: "Round Two",
      caption: "You went back for a second attempt, and somehow it was funnier than the first.",
      song: "Glowing Screen Love (Remix) (1).mp3.mpeg"
    },
    {
      file: "dancing.mp4",
      title: "That Dance",
      caption: "You have no idea how often I replay this one — you, dancing badly on purpose, just to hear me laugh.",
      song: "Collide (Solo Version).mp3.mpeg"
    },
    {
      file: "flower.mp4",
      title: "The Flower you gave",
      caption: "Still remember the struggle u got that to deliver me these ",
      song: "Glowing Screen Love.mp3.mpeg"
    },
    {
      file: "fun.mp4",
      title: "Just Being Ridiculous",
      caption: "No context needed for this one. It's just us being exactly ourselves, which is my favorite version of us.",
      song: "Collide (Solo Version).mp3.mpeg"
    },
    {
      file: "grany.mp4",
      title: "My Grandmother being curious about you",
      caption: "She said ypu are looking Handsome and she is very happy to see you in my life.",
      song: "Alex Warren - Ordinary (Official Video).mp3.mpeg"
    },
    {
      file: "latenight.mp4",
      title: "The Call Neither Of Us Hung Up",
      caption: "We'd both run out of things to say, and neither of us reached to end the call anyway.",
      song: "Her - Jvke & Annika Wells Song (Lyrics) #viral.mp3.mpeg"
    },
    {
      file: "night.mp4",
      title: "Just Another Night",
      caption: "This is what most of our nights actually look like — quiet, unremarkable, and somehow still my favorite part of the day.",
      song: "Glowing Screen Love.mp3.mpeg"
    },
    {
      file: "pune.mp4",
      title: "You, Showing Me Pune",
      caption: "You turned the camera around like you were handing me your whole city — the streets you actually walk, the corners that are just yours.",
      song: "NUVVUNTE NAA JATHAGA - SONG LYRICAL.wav"
    },
    {
      file: "same tshirt.mp4",
      title: "We Wore The Same Shirt",
      caption: "Neither of us planned this. It just happened, and it felt like proof we're the same kind of ridiculous.",
      song: "Collide (Solo Version).mp3.mpeg"
    },
    {
      file: "shyam.mp4",
      title: "That Day With Shyam",
      caption: "You loving to have a convo with hum even he dont know anything about you",
      song: "Glowing Screen Love (Remix) (1).mp3.mpeg"
    },
    {
      file: "sing.mp4",
      title: "You, Singing",
      caption: "Lost my world in you",
      song: "Alex Warren - Ordinary (Official Video).mp3.mpeg"
    },
    {
      file: "sleep night.mp4",
      title: "The Night You Fell Asleep Talking To Me",
      caption: "This is the one I return to most — you, unhurried, just being with me until you couldn't keep your eyes open. My favorite way to spend any hour, hands down.",
      song: "Her - Jvke & Annika Wells Song (Lyrics) #viral.mp3.mpeg"
    },
    {
      file: "talks.mp4",
      title: "Just Talking",
      caption: "Nothing happens in this one. We just talk, the way we always do — and that's exactly why I kept it.",
      song: "Glowing Screen Love.mp3.mpeg"
    }
  ];

  const VIDEO_FOLDER = "s videos/";
  const AUDIO_FOLDER = "s audio/";

  function buildVideoBlocks() {
    const list = document.getElementById('videoList');
    if (!list) return;

    VIDEO_DATA.forEach((item, i) => {
      const block = document.createElement('div');
      block.className = 'video-block' + (i % 2 === 1 ? ' reverse' : '');
      block.dataset.song = AUDIO_FOLDER + item.song;

      block.innerHTML = `
        <div class="video-frame">
          <video src="${VIDEO_FOLDER}${item.file}" controls playsinline></video>
        </div>
        <div class="video-text">
          <p class="video-index">${String(i + 1).padStart(2, '0')} / ${String(VIDEO_DATA.length).padStart(2, '0')}</p>
          <h3 class="video-title">${item.title}</h3>
          <p class="video-caption">${item.caption}</p>
          <button class="play-with-song">♫ play together</button>
          <p class="now-playing"></p>
        </div>
      `;
      list.appendChild(block);
    });

    initVideoSongPairs();
  }

  function initVideoSongPairs() {
    const blocks = document.querySelectorAll('.video-block');
    if (!blocks.length) return;

    let activeAudio = null;

    blocks.forEach((block) => {
      const video = block.querySelector('video');
      const button = block.querySelector('.play-with-song');
      const nowPlaying = block.querySelector('.now-playing');
      const songSrc = block.dataset.song;
      if (!video || !button) return;

      const audio = songSrc ? new Audio(songSrc) : null;
      if (audio) audio.loop = true;

      button.addEventListener('click', () => {
        document.querySelectorAll('.video-block video').forEach((v) => {
          if (v !== video) { v.pause(); v.currentTime = 0; }
        });
        document.querySelectorAll('.now-playing').forEach((n) => { if (n !== nowPlaying) n.textContent = ''; });
        if (activeAudio && activeAudio !== audio) {
          activeAudio.pause();
          activeAudio.currentTime = 0;
        }

        video.currentTime = 0;
        video.play().catch(() => {});
        if (audio) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
          activeAudio = audio;
          if (nowPlaying) nowPlaying.textContent = '♪ playing our song for this one';
        }
      });

      video.addEventListener('pause', () => {
        if (audio) audio.pause();
        if (nowPlaying) nowPlaying.textContent = '';
      });
      video.addEventListener('ended', () => {
        if (audio) { audio.pause(); audio.currentTime = 0; }
        if (nowPlaying) nowPlaying.textContent = '';
      });
    });
  }

  /* =========================================================
     PHOTO_FILES — every file in "s images" that should show
     up in the Memories gallery. I could only read the names
     visible in your screenshot (29 of them) — you said there
     are 40 total, so scroll your s images folder and add the
     rest to this list the same way: "filename.jpeg",
     ========================================================= */
  const PHOTO_FILES = [
    "6m.jpeg", "asking.jpeg", "both sleep.jpeg", "cheese.jpeg", "clean2.jpeg",
    "cleaning.jpeg", "cook.jpeg", "face pack.jpeg", "facepack2.jpeg", "fav pic.jpeg",
    "fav.jpeg", "first del.jpeg", "first pic.jpeg", "flower.jpeg", "flower2.jpeg",
    "funny.jpeg", "gift.jpeg", "hair.jpeg", "hair2.jpeg", "hair3.jpeg",
    "hari.jpeg", "out.jpeg", "pack.jpeg", "pb.jpeg", "photo ask.jpeg",
    "pro res.jpeg", "proposal.jpeg", "sleep.jpeg", "smile.jpeg", "tshirt.jpeg",
    "WhatsApp Image 2026-07-12 at 12.56.42 PM (1).jpeg"
  ];

  const IMAGE_FOLDER = "s images/";

  function initGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    PHOTO_FILES.forEach((filename) => {
      const item = document.createElement('figure');
      item.className = 'gallery-item';
      item.innerHTML = `<img src="${IMAGE_FOLDER}${filename}" alt="${filename.replace(/\.[^/.]+$/, '')}" loading="lazy" data-full="${IMAGE_FOLDER}${filename}" />`;
      grid.appendChild(item);
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');

    grid.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (!img || !lightbox || !lightboxImg) return;
      lightboxImg.src = img.dataset.full;
      lightbox.classList.add('open');
    });
    if (closeBtn) closeBtn.addEventListener('click', () => lightbox.classList.remove('open'));
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('open');
      });
    }

    const songToggle = document.getElementById('gallerySongToggle');
    if (songToggle) {
      const song = new Audio(AUDIO_FOLDER + "Glowing Screen Love (Remix) (1).wav");
      song.loop = true;
      let playing = false;
      songToggle.addEventListener('click', () => {
        playing = !playing;
        if (playing) {
          song.play().catch(() => {});
          songToggle.textContent = '♫ pause our song';
        } else {
          song.pause();
          songToggle.textContent = '♪ play our song';
        }
      });
    }
  }

  /* ---------- init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    buildStarfield();
    initHeartBursts();
    initBouquetGate();
    initAnniversaryCountdown();
    buildVideoBlocks();
    initGallery();
  });
})();