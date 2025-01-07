import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

describe('ItemList Component Tests', () => {
  test('should display the correct number of items with the correct text', () => {
    const items = ['Item1', 'Item2', 'Item3'];
    render(<ItemList items={items} />);
    
    
    const displayedItems = screen.getAllByRole('listitem');
    
   
    expect(displayedItems).toHaveLength(items.length);
    
    items.forEach((item, index) => {
      expect(displayedItems[index]).toHaveTextContent(item);
    });
  });

  test('should render nothing if the item list is empty', () => {
    const items = [];
    render(<ItemList items={items} />);
    
    const displayedItems = screen.queryAllByRole('listitem');
    expect(displayedItems).toHaveLength(0);
  });
});
