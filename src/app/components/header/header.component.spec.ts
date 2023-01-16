import { render, screen } from '@testing-library/angular'
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should display the title "Farm Visualiser"', async () => {
    const { container } = await render(HeaderComponent)

    expect(container).toHaveTextContent('Farm Visualiser')
  });
});
