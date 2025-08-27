# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript.

## Features

- Responsive design
- Modern UI with animations
- Dark/Light theme support
- Contact form
- Project showcase
- Skills section

## Profile Image Setup

To add your profile image to the Hero section:

1. Add your profile image file to the `public` folder
2. Name it `profile-image.jpg` (or update the src in `src/components/Hero.tsx`)
3. Recommended image specifications:
   - Square aspect ratio (1:1)
   - Minimum 400x400 pixels
   - JPG or PNG format
   - Professional headshot or portrait

The image will automatically be styled as a circular avatar with hover effects. If the image fails to load, it will fallback to the emoji placeholder.

## Contact Form Setup

The contact form uses EmailJS to send emails directly from the frontend. To set it up:

1. Follow the detailed setup guide in `EMAILJS_SETUP.md`
2. Replace the placeholder values in `src/components/Contact.tsx` with your EmailJS credentials
3. Test the form to ensure emails are being sent correctly

The form includes:
- Real-time validation
- Loading states
- Success/error messages
- Automatic form reset after successful submission

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build for Production

```bash
npm run build
```

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 with modern features
- Responsive design principles
