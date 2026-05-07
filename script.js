/* ============================================================
   Next Chapter Phase I — Lab Journal Script
   To add a video to a day, add a "videos" array.
   To add a PDF,  add a "pdfs" array.
   To add a repo, add a "repo" array.
   To add an image or gif, add an "images" array (NEW).

   Image/gif entry shape:
     { title: "Quote Generator Demo",
       src:   "src/quote-generator-demo.gif",
       caption: "Optional caption text shown beneath the image" }
   ============================================================ */

const weeksData = [
    {
        week: 1,
        days: [
            {
                label: "Day 1 Orientation/ What is AI?",
                pdfs: [
                    { title: "Day 1 Orientation", src: "Labs/Wk1_Day1 _labs.pdf" }
                ]
            },
            {
                label: "Day 2 Prompting Fundamentals",
                videos: [
                    { title: "Make a Website Exercise",                   src: "Labs/Wk1_Day2_make_me_a_website.mp4" },
                    { title: "Context Specificity",                       src: "Labs/Wk1_Day2_contextspecificity.mp4" },
                    { title: "Iteration",                                  src: "Labs/Wk1_Day2_iterationexer.mp4" },
                    { title: "Why Prompt Matters",                        src: "Labs/Wk1_Day2_why_promptsmatter.mp4" },
                    { title: "Dog Walking Business: Notice the 3rd Image", src: "Labs/Wk1_Day2_dogwalkingbusiness.mp4" },
                    { title: "Chat GPT Calculator",                       src: "Labs/Wk1_Day2_tipcalculator.mp4" },
                    { title: "Generous Tipper",                           src: "Labs/Wk1_Day2_generoustipper.mp4" },
                    { title: "Temperature Converter",                     src: "Labs/Wk1_Day2_temperatureconverter.mp4" }
                ],
                pdfs: [
                    { title: "Day 2 Lab Notes", src: "Labs/Wk1_day2.pdf" }
                ]
            },
            {
                label: "Day 3 Computational Thinking",
                videos: [
                    { title: "Build with Sequence",  src: "Labs/Wk1_Day3_buildsequence.mp4" },
                    { title: "Build with Selection", src: "Labs/Wk1_Day3_selection.mp4" },
                    { title: "Build with Iteration", src: "Labs/Wk1_Day3_builditeration.mp4" },
                    { title: "Prompt/Read Swap",     src: "Labs/Wk1_Day3_promptreadswap.mp4" }
                ],
                pdfs: [
                    { title: "Day 3 Lab Notes", src: "Labs/Wk1_Day 3_labexercises.pdf" }
                ]
            },
            {
                label: "Day 4 Human Lane vs AI Lane",
                pdfs: [
                    { title: "Day 4 Lab Notes", src: "Labs/W1_Day4_labs.pdf" }
                ]
            },
            {
                label: "Day 5 Vibe Code: First Build Day",
                pdfs: [
                    { title: "Day 5 Lab Notes",       src: "Labs/Wk1_Day5_labs.pdf" },
                    { title: "Day 5 Lab Notes",       src: "Labs/Wk1_Day5_devplay DEMO.pdf" }
                ]
            }
        ]
    },
    {
        week: 2,
        days: [
            {
                label: "Day 1 Phase I: Thinking with AI",
                repo: [
                    { title: " HTML + CSS ",
                      url: "https://jdbostonbu-ops.github.io/Training-Models/" }
                ],
                pdfs: [
                    { title: "Day 1 Lab Notes", src: "Labs/Wk2_Day1css.pdf" }
                ]
            },
            {
                label: "Day 2 Phase I: Thinking with AI",
                repo: [
                    { title: "Forms/DOM Basics Quote Generator",
                      url: "https://jdbostonbu-ops.github.io/quote-generator/" },
                      { title: "404 Page with Button and Jokes",
                      url: "https://jdbostonbu-ops.github.io/404-page/" }
                ],
                pdfs: [
                    { title: "Day 2 Lab Notes", src: "Labs/Wk2Day2.pdf" }
                ],
                // ─── NEW: image/gif support ───
                 videos: [
                    { title: "404 Page",  src: "Labs/404.mp4" },
                ]
            },
            { label: "Day 3 Debugging Day",
                 pdfs: [
                    { title: "Day 2 Lab Notes", src: "Labs/Wk2Day2.pdf" }
                ],
             },
            { label: "Day 4" },
            { label: "Day 5" }
        ]
    },
    { week: 3,  days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 4,  days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 5,  days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 6,  days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 7,  days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 8,  days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 9,  days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 10, days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 11, days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 12, days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 13, days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] },
    { week: 14, days: [{ label: "Day 1" },{ label: "Day 2" },{ label: "Day 3" },{ label: "Day 4" },{ label: "Day 5" }] }
];


/* ============================================================
   RENDER — build the weeks/days from the data above
   ============================================================ */
const container = document.getElementById('weeks-container');

weeksData.forEach(week => {
    const weekDiv = document.createElement('div');
    weekDiv.className = 'week';
    weekDiv.innerHTML = `
        <div class="week-header">
            <span class="week-label">Week ${week.week}</span>
            <div class="week-line"></div>
        </div>
        <div class="day-grid"></div>
    `;

    const dayGrid = weekDiv.querySelector('.day-grid');

    week.days.forEach(day => {
        const hasVideos = day.videos && day.videos.length > 0;
        const hasPDFs   = day.pdfs   && day.pdfs.length   > 0;
        const hasRepo   = day.repo   && day.repo.length   > 0;
        const hasImages = day.images && day.images.length > 0;
        const hasContent = hasVideos || hasPDFs || hasRepo || hasImages;

        const card = document.createElement('div');
        card.className = 'day-card' + (hasContent ? ' has-content' : '');

        // 1. Build Header
        let innerHTML = `
            <div class="day-card-header">
                <span class="day-tag">${day.label}</span>
                ${hasContent ? '<span class="expand-icon">+</span>' : ''}
            </div>
        `;

        // 2. Build Video Section
        if (hasVideos) {
            const videoItems = day.videos.map((v, i) => `
                <div class="video-item">
                    <div class="video-item-header">
                        <span class="video-number">${i + 1}.</span>
                        <span class="video-title">${v.title}</span>
                        <span class="video-arrow">▶</span>
                    </div>
                    <div class="video-player">
                        <video controls preload="none">
                            <source src="${v.src}" type="video/mp4">
                            Your browser does not support this video format.
                        </video>
                    </div>
                </div>
            `).join('');
            innerHTML += `<div class="embed-panel"><div class="video-list">${videoItems}</div></div>`;
        }

        // 3. Build PDF Section
        if (hasPDFs) {
            const pdfItems = day.pdfs.map(p => `
                <a href="${p.src}" target="_blank" class="pdf-item" style="text-decoration: none; display: block;">
                    <div class="pdf-item-header">
                        <span class="pdf-icon">📄</span>
                        <span class="pdf-title">${p.title}</span>
                        <span class="pdf-arrow" style="transform: rotate(-45deg); display: inline-block;">↗</span>
                    </div>
                </a>
            `).join('');

            innerHTML += `
                <div class="embed-panel">
                    <div class="pdf-section">
                        <div class="pdf-section-label">📎 Documents</div>
                        ${pdfItems}
                    </div>
                </div>
            `;
        }

        // 4. Build Repository Section
        if (hasRepo) {
            const repoItems = day.repo.map(r => `
                <a href="${r.url}" target="_blank" class="pdf-item" style="text-decoration: none; display: block;">
                    <div class="pdf-item-header">
                        <span class="pdf-icon">💻</span>
                        <span class="pdf-title">${r.title}</span>
                        <span class="pdf-arrow" style="transform: rotate(-45deg); display: inline-block;">↗</span>
                    </div>
                </a>
            `).join('');

            innerHTML += `
                <div class="embed-panel">
                    <div class="pdf-section">
                        <div class="pdf-section-label">🔗 Repositories</div>
                        ${repoItems}
                    </div>
                </div>
            `;
        }

        // 5. Build Image / Gif Section (NEW)
        if (hasImages) {
            const imageItems = day.images.map((img, i) => `
                <div class="image-item">
                    <div class="image-item-header">
                        <span class="image-icon">🖼️</span>
                        <span class="image-title">${img.title}</span>
                        <span class="image-arrow">▶</span>
                    </div>
                    <div class="image-viewer">
                        <img src="${img.src}" alt="${img.title}" loading="lazy">
                        ${img.caption ? `<p class="image-caption">${img.caption}</p>` : ''}
                    </div>
                </div>
            `).join('');

            innerHTML += `
                <div class="embed-panel">
                    <div class="image-section">
                        <div class="image-section-label">🎬 Demos &amp; Screenshots</div>
                        ${imageItems}
                    </div>
                </div>
            `;
        }

        // 6. Placeholder if empty
        if (!hasContent) {
            innerHTML += `<div class="placeholder">Coming soon</div>`;
        }

        card.innerHTML = innerHTML;
        dayGrid.appendChild(card);
    });

    container.appendChild(weekDiv);
});


/* ============================================================
   EVENT DELEGATION — handle all click interactions
   Single listener on the container; checks what was clicked.
   ============================================================ */
container.addEventListener('click', (event) => {
    // Toggle the day card
    const dayHeader = event.target.closest('.day-card-header');
    if (dayHeader) {
        const dayCard = dayHeader.closest('.day-card');
        if (dayCard.classList.contains('has-content')) {
            dayCard.classList.toggle('open');
        }
        return;
    }

    // Toggle the video item
    const videoHeader = event.target.closest('.video-item-header');
    if (videoHeader) {
        const videoItem = videoHeader.closest('.video-item');
        videoItem.classList.toggle('open');

        // If we just closed it, pause the video
        if (!videoItem.classList.contains('open')) {
            const video = videoItem.querySelector('video');
            if (video) video.pause();
        }
        return;
    }

    // Toggle the image item (NEW)
    const imageHeader = event.target.closest('.image-item-header');
    if (imageHeader) {
        const imageItem = imageHeader.closest('.image-item');
        imageItem.classList.toggle('open');
        return;
    }
});
