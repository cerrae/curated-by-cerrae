# Curated by Cerrae — Website

Your professional organizer website. 5 pages, fully editable.

## Files
- `index.html` — homepage
- `services.html` — services & pricing
- `portfolio.html` — before & after photos
- `about.html` — your story
- `contact.html` — contact form
- `style.css` — all colors, fonts, spacing (edit this to change your look)
- `main.js` — mobile menu + form

---

## How to edit each page

Open any `.html` file in a text editor (Notepad, VS Code, etc.) and find the text you want to change. Edit it and save.

### Change your brand color
Open `style.css` and find line 10:
```
--brand: #B07D5A;
```
Replace `#B07D5A` with any color hex code you want.

### Add your real photos
1. Create a folder called `images` inside this project folder
2. Add your photos to that folder (JPG or PNG)
3. In `portfolio.html`, find the `.portfolio-placeholder` divs and replace them with:
```html
<img src="images/your-photo-name.jpg" alt="description of photo" />
```

### Add your contact info
In `contact.html`, find this section and replace with your real info:
```html
<p class="contact-detail">📧 hello@curatedbycerrae.com</p>
<p class="contact-detail">📱 (704) 555-0000</p>
```

### Make the contact form actually send emails
1. Go to [formspree.io](https://formspree.io) — free account
2. Create a new form, copy your Form ID
3. In `contact.html`, find `<form class="contact-form" action="#">`
4. Change it to: `<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">`

### Update your social media links
Search for `href="#"` near the Instagram/TikTok links and replace `#` with your actual profile URLs.

---

## How to put this on GitHub Pages (free hosting)

1. Go to github.com and log in
2. Click the **+** button → **New repository**
3. Name it exactly: `curatedbycerrae` (or your GitHub username.github.io)
4. Make it **Public**
5. Click **Create repository**
6. Upload all these files (drag and drop or use the upload button)
7. Go to **Settings** → **Pages**
8. Under "Source" select **main** branch → **Save**
9. Your site will be live at: `https://yourusername.github.io/curatedbycerrae`

For a custom domain (curatedbycerrae.com):
- Buy the domain at namecheap.com (~$12/yr)
- In GitHub Pages settings, add your custom domain
- Follow GitHub's DNS instructions

---

## Pages to edit checklist

- [ ] Replace placeholder photos with your real before/after photos
- [ ] Update your email and phone in `contact.html`
- [ ] Add your real social media links (search for `href="#"`)
- [ ] Update the testimonial in `index.html` with a real client quote
- [ ] Replace the about photo placeholder in `about.html` with your photo
- [ ] Adjust pricing in `services.html` to match what you charge
- [ ] Set up Formspree for the contact form
