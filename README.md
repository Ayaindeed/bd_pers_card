# BD App

A modern, aesthetic birthday celebration app built with Next.js.

##  Features

- **Interactive Guinness Pint Card**: Click on the beautifully rendered Guinness glass to reveal the birthday surprise
- **Matrix Rain Animation**: Animated background with falling code characters and snippets
- **Modern Aesthetic UI**: Clean, responsive design with smooth animations and hover effects


## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: React Icons & Emojis
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone and navigate to the project**:
   ```bash
   git clone <your-repo-url>
   cd birthday-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```


### Manual Deploy
```bash
npm install -g vercel
vercel
```

## Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- `guinness-black`: Deep black like Guinness beer
- `guinness-cream`: Cream foam color
- `matrix-green`: Iconic Matrix green
- `scorpio-red`: Scorpio zodiac red
- `dublin-blue`: Dublin-inspired blue

### Animations
- Matrix rain effect with Japanese characters
- Floating code snippets
- Smooth hover transitions
- Bouncing themed emojis

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
└── components/
    ├── BirthdayCard.tsx    # Interactive Guinness pint card
    ├── BirthdayPopup.tsx   # Birthday celebration popup
    └── MatrixRain.tsx      # Matrix background animation
```



## License

This project is open source and available under the [MIT License](LICENSE).

## Note

Built with ❤️ by me.

---

*"Like a perfect pint of Guinness, you get better with time! "*
