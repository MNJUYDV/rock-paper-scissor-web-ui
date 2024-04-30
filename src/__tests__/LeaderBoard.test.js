import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LeaderBoard from '../components/LeaderBoard/LeaderBoard';

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
  
global.MutationObserver = class {
    constructor(callback) {}
    disconnect() {}
    observe(element, initObject) {}
};

describe('LeaderBoard component', () => {
    test('renders player statistics correctly', async () => {
      const mockLeaderboard = {
        'Player 1': { wins: 5, losses: 3, ties: 2 },
        'Player 2': { wins: 3, losses: 4, ties: 1 },
      };
      jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        json: async () => ({ leaderboard_stats: mockLeaderboard }),
      });
  
      render(
        <BrowserRouter>
          <LeaderBoard />
        </BrowserRouter>
      );
  
      const player1Element = await screen.findByText('Player 1 - Wins: 5, Losses: 3, Ties: 2');
      const player2Element = await screen.findByText('Player 2 - Wins: 3, Losses: 4, Ties: 1');
  
      expect(player1Element).toBeInTheDocument();
      expect(player2Element).toBeInTheDocument();
    });
  
    test('navigates back when back button is clicked', async () => {

    });
  });