import { render, screen } from '@testing-library/angular'
import { TowerNavigationComponent } from './tower-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

describe('TowerNavigationComponent', () => {
  it('should render buttons with appropriate aria labels"', async () => {
    await render(TowerNavigationComponent, {
      // the import and provider below suppress errors thrown as the MaterialUI dependencies are not available.
      imports: [MatIconModule], providers: [
        { provide: MATERIAL_SANITY_CHECKS, useValue: false }
      ]
    })

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAccessibleName('previous tower')
    expect(buttons[1]).toHaveAccessibleName('next tower')
  });
});
