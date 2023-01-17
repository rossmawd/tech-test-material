import { MatDividerModule } from '@angular/material/divider';
import { screen, render } from '@testing-library/angular'
import { SlotComponent } from './slot.component';
import { Slot } from '../../../app/simulation/slot';
import { GrowthTray } from '../../../app/simulation/growth-tray';
import { GrowthJob } from '../../../app/simulation/growth-job';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';


describe('SlotComponent', () => {

  it('should render properly given a valid Slot object is passed as @Input', async () => {
    const mockSlot = new Slot(1, new GrowthTray('mockTray', new GrowthJob('mockName', 50)))

    await render(SlotComponent, {
      // the import and provider below suppress errors thrown as the MaterialUI dependencies are not available.
      imports: [MatDividerModule], componentProperties: { slotData: mockSlot },
      providers: [
        { provide: MATERIAL_SANITY_CHECKS, useValue: false }
      ]
    })

    const slotHeading = screen.getByRole('heading')
    expect(slotHeading).toHaveTextContent('Slot 1:')

    const mockJobName = screen.getByText(/mockName/i)
    expect(mockJobName).toHaveTextContent('Job Name: mockName')

    const mockTrayIdentifier = screen.getByText(/mockTray/i)
    expect(mockTrayIdentifier).toHaveTextContent('Tray Identifier: mockTray')

    const mockPercentage = screen.getByText(/50%/i)
    expect(mockPercentage).toHaveTextContent('Percentage complete: 50%')
  });
});
