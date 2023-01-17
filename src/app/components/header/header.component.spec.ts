import { render, screen } from '@testing-library/angular'
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';


describe('HeaderComponent', () => {
  it('should display the title "Farm Visualiser"', async () => {
    await render(HeaderComponent, {
      // the import and provider below suppress errors thrown as the MaterialUI dependencies are not available.
      imports: [MatToolbarModule],
      providers: [
        { provide: MATERIAL_SANITY_CHECKS, useValue: false }
      ]
    })

    const pageHeader = screen.getByRole('heading')

    expect(pageHeader).toHaveTextContent('Farm Visualiser')
  });
});
