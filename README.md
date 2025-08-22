# Powerpuff Girls Pong 🎮

A fun Pong game themed around the Powerpuff Girls, built with vanilla TypeScript and Tailwind CSS.

## Assets Needed
- Place `logo.png` (Powerpuff Girls logo) in the project root.
- Place `hearts.gif` (animated hearts background) in the project root.

## Fonts
- Uses [Luckiest Guy](https://fonts.google.com/specimen/Luckiest+Guy) for headings and Comic Sans MS for body text.

## Features

- **Powerpuff Girls Theme**: Pink (Blossom) vs Blue (Bubbles) paddles
- **Power-ups**: Speed boost, size increase, and multi-ball effects
- **Beautiful UI**: Gradient backgrounds and animated elements
- **Responsive Design**: Works on different screen sizes
- **Pure TypeScript**: No frameworks, just vanilla TypeScript
- **Tailwind CSS**: Modern utility-first styling

## How to Play

### Controls
- **Player 1 (Blossom - Pink)**: W/S keys to move paddle up/down
- **Player 2 (Bubbles - Blue)**: Up/Down arrow keys to move paddle up/down
- **Power-ups**: Press Space bar to activate power-ups

### Game Rules
- First player to score 11 points wins
- Ball bounces off paddles and walls
- Power-ups appear randomly and provide temporary boosts
- Collect power-ups by hitting them with the ball
- If a player collects a square on the opponent's side, they get a point

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Serve the Game**
   ```bash
   npm run serve
   ```

5. **Open in Browser**
   Navigate to `http://localhost:8000`

## Project Structure

```
ft_transcendence/
├── index.html          # Main HTML file
├── src/
│   ├── main.ts         # Game logic (TypeScript)
│   └── input.css       # Tailwind CSS input
├── dist/               # Built files (generated)
├── logo.png            # Powerpuff Girls logo
├── hearts.gif          # Animated hearts background
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md          # This file
```

## Technologies Used

- **TypeScript**: For type-safe JavaScript development
- **Tailwind CSS**: For utility-first styling
- **HTML5 Canvas**: For game rendering
- **Vanilla JavaScript**: No frameworks or libraries

## Game Features

### Visual Elements
- Gradient backgrounds with Powerpuff Girls colors
- Animated character representations
- Floating hearts and decorative elements
- Smooth paddle and ball animations

### Game Mechanics
- Realistic ball physics with spin effects
- Power-up system with visual feedback
- Score tracking and game state management
- Responsive controls and collision detection
- If a player collects a square on the opponent's side, they get a point

### Power-ups
- **Speed Boost**: Increases ball speed temporarily
- **Size Increase**: Makes the ball larger
- **Multi-ball**: Creates multiple balls (simplified effect)

## Development

To modify the game:

1. Edit `src/main.ts` for game logic changes
2. Edit `index.html` for UI structure changes
3. Edit `tailwind.config.js` for theme customization
4. Run `npm run dev` for live development

## Browser Compatibility

- Modern browsers with ES2020 support
- Chrome, Firefox, Safari, Edge
- Requires JavaScript enabled

## License

MIT License - Feel free to modify and distribute! 