Hello im nitesh
# 🎨 Scroll Color Change Webpage

This simple web project dynamically changes the background color of the page based on how far the user has scrolled. It's a fun and interactive way to demonstrate scroll events and DOM manipulation using JavaScript.

## 🚀 Features

- Smooth background color transitions as you scroll
- Four distinct color zones:
  - **Top 25%** → White
  - **25%–50%** → Black
  - **50%–75%** → Blue
  - **Bottom 25%** → Red
- Responsive design with a large scrollable area

## 📁 Project Structure

```plaintext
Scroll-Color-Change/
├── index.html       # Main HTML file
├── style.css        # Styling for layout and transitions
└── script.js        # JavaScript for scroll-based color logic
```

## 🛠️ How It Works

- The page includes a large `.spacer` div to allow scrolling.
- JavaScript listens for the `scroll` event on the window.
- It calculates the scroll percentage and updates the background color accordingly.
- CSS transitions ensure smooth color changes.

## 💡 Usage

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Scroll down and watch the background color change!

## 🧪 Example Code Snippets

### HTML (`index.html`)
```html
<h1>Scroll to Change Colors 🎨</h1>
<p>Keep scrolling down to see the magic...</p>
```

### CSS (`style.css`)
```css
body {
  transition: background-color 0.5s ease;
  color: #fff;
  text-align: center;
}
```

### JavaScript (`script.js`)
```javascript
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / maxScroll;

  let color;
  if (scrollPercent < 0.25) color = 'white';
  else if (scrollPercent < 0.5) color = 'black';
  else if (scrollPercent < 0.75) color = 'blue';
  else color = 'red';

  document.body.style.backgroundColor = color;
});
```

## 📌 Notes

- The color change is based on scroll percentage, not pixel values.
- You can customize the colors or add more scroll zones for finer control.

## 📷 Preview

_(You can add a screenshot or screen recording here to showcase the effect.)_

## 📄 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).


