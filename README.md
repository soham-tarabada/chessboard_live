# Chess Board Application

This project is a React-based interactive chessboard application that allows users to dynamically create a grid-based board, toggle squares, and perform actions like undo, redo, and reset.

## Live Demo 
You can access the live version of this project at: [Live Chess Board](https://soham-tarabada.github.io/chessboard_live/) 

## Features

- **Dynamic Grid Size**: Users can adjust the grid size between 8x8 and 20x20 using an input field.
- **Square Selection**: Click on squares to toggle their state (selected or unselected).
- **Undo/Redo Functionality**: Undo and redo actions to revert or reapply changes to the board.
- **Reset Board**: Reset the board to its initial state.

## Project Structure

The project is organized as follows:

- **`App.jsx`**: The main entry point for the application. It renders the `Board` component.
- **`component/Board.jsx`**: Contains the core logic and UI for the chessboard. Implements features like grid generation, square toggling, undo, redo, and reset.
- **`index.css`**: Includes Tailwind CSS utilities for styling the application.

## How It Works

1. **Dynamic Grid**: The grid size is controlled by the `value` state in the `Board` component. Users can adjust the size using an input field.
2. **Square Toggling**: Clicking on a square toggles its state. Selected squares are highlighted in red.
3. **Undo/Redo**: 
   - Undo reverts the last change by restoring the previous state from the history array.
   - Redo reapplies the last undone change using the redo array.
4. **Reset**: Clears all selections and resets the board to its initial state.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Vite**: For fast development and build tooling.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open the application in your browser at `http://localhost:3000`.

## File Overview

- **`App.jsx`**: 
  - Imports and renders the `Board` component.
- **`component/Board.jsx`**: 
  - Implements the chessboard logic and UI.
  - Manages state for clicked squares, history, redo, and grid size.
- **`index.css`**: 
  - Configures Tailwind CSS for styling.

## Customization

- Modify the grid size range by adjusting the `min` and `max` attributes in the input field in `Board.jsx`.
- Update styles by editing `index.css` or extending the Tailwind CSS configuration in `tailwind.config.js`.

## Future Enhancements

- Add support for chess piece movement.
- Implement additional board themes.
- Save and load board states.

## License

This project is licensed under the MIT License.
