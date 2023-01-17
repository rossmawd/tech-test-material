import { screen, render } from '@testing-library/angular'
import { TowerNavigationComponent } from './tower-navigation.component';
import { MatIconModule } from '@angular/material/icon';

describe('TowerNavigationComponent', () => {
  it('should render buttons with appropriate aria labels"', async () => {
    await render(TowerNavigationComponent, {
      // the import and provider below suppress errors thrown as the MaterialUI dependencies are not available.
      imports: [MatIconModule]
    })

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAccessibleName('previous tower')
    expect(buttons[1]).toHaveAccessibleName('next tower')
  });
});
