# Gowtham S — Personal Portfolio

Academic and applied AI research portfolio of Gowtham S, an Artificial Intelligence and Data Science undergraduate at the Institute of Science & Technology, NMV University, Chennai.

## Purpose

This portfolio is structured for researchers, PhD supervisors, professors, research labs, and technical recruiters. It presents research output, conference publications, engineering projects, and technical skills with an emphasis on clarity, academic rigor, and verified technical outcomes.

## Technologies

* HTML5 (Semantic structure, structured metadata, ARIA landmarks)
* CSS3 (Custom design system, CSS variables, responsive typography via clamp, flexbox & grid layouts)
* Vanilla JavaScript (Scroll progress, active navigation spy, micro-animations via IntersectionObserver, copy-to-clipboard toast, mobile navigation)

## Sections

1. **Hero**: High-contrast introductory section with research availability badge, profile photo container, summary bio, and quick-action links.
2. **About**: Academic background, institutional affiliation, CGPA, research focus, and core contact attributes.
3. **Experience**: Professional internship background and front-end development responsibilities.
4. **Projects**: Numbered engineering and applied AI systems featuring technical metrics, technology stacks, and expandable architecture breakdowns.
5. **More on GitHub**: Overview of open-source repositories across computer vision, OCR, and application development.
6. **Research & Applied AI**: Detailed breakdowns of accepted and published research on automated industrial X-ray inspection and multimodal MRI brain tumor segmentation.
7. **Publications**: Chronological peer-reviewed conference publications and proceedings.
8. **Education**: Degree details, institutional affiliation, timeline, and relevant coursework.
9. **Skills**: Categorized technical capabilities across AI & Machine Learning, NLP & Information Retrieval, Computer Vision, Data Science, and Development.
10. **Contact**: Direct communication channels, quick-copy email feature with non-blocking toast notification, and social links.

## File Structure

```text
├── index.html                  # Main HTML5 entry point
├── style.css                   # Global styles and design system tokens
├── script.js                   # Client-side interactions and animations
├── README.md                   # Documentation and deployment guide
└── assets/
    ├── gowtham-profile.jpg     # Profile portrait image
    └── Gowtham-Resume.pdf      # Curriculum Vitae / Resume document
```

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/Gowthamsekar05/Gowthamsekar05.github.io.git
cd Gowthamsekar05.github.io
```

To view the website:

1. Open `index.html` directly in any modern web browser.
2. Alternatively, serve using any local static file server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js npx serve
npx serve .
```

Navigate to `http://localhost:8000` or the provided local port.

## GitHub Pages Deployment

To host directly on GitHub Pages with zero build dependencies:

1. Push all files to the `main` branch of your GitHub repository (`Gowthamsekar05.github.io` or portfolio repo).
2. Go to your repository **Settings** on GitHub.
3. Click **Pages** in the left sidebar under the *Code and automation* section.
4. Under **Build and deployment**:
   * Source: **Deploy from a branch**
   * Branch: **main**
   * Folder: **/ (root)**
5. Click **Save**.
6. GitHub Pages will deploy your site automatically at `https://gowthamsekar05.github.io/`.
