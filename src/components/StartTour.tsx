import { driver, DriveStep } from "driver.js";
import "driver.js/dist/driver.css";

// Define the step structure for TypeScript
interface TourStep extends DriveStep {
  element: string;
  popover: {
    title: string;
    description: string;
    side: 'top' | 'bottom' | 'left' | 'right';
    align: 'start' | 'center' | 'end';
  };
}

// Define the driver options with steps
const driverOptions: any = {
  animate: true,
  opacity: 0.75,
  padding: 10,
  allowClose: true,
  showProgress: false,
  showButtons: ['next', 'previous', 'close'],
  steps: [
    {
      element: '.tour-home',
      popover: {
        title: 'Home',
        description: 'This button takes you to the home page.',
        side: 'right',
        align: 'start'
      }
    },
    {
      element: '.tour-search',
      popover: {
        title: 'Search',
        description: 'Use this button to search for users.',
        side: 'right',
        align: 'start'
      }
    },
    {
      element: '.tour-mail',
      popover: {
        title: 'Mail',
        description: 'Click here to view your emails.',
        side: 'right',
        align: 'start'
      }
    },
    {
      element: '.tour-send',
      popover: {
        title: 'Send',
        description: 'This button allows you to send messages.',
        side: 'right',
        align: 'start'
      }
    },
    {
      element: '.tour-stack',
      popover: {
        title: 'Stack',
        description: 'Manage your stacks with this button.',
        side: 'right',
        align: 'start'
      }
    },
    {
      element: '.tour-inbox',
      popover: {
        title: 'Inbox',
        description: 'Access your inbox here.',
        side: 'right',
        align: 'start'
      }
    },
    {
      element: '.tour-stats',
      popover: {
        title: 'Stats',
        description: 'View your statistics here.',
        side: 'right',
        align: 'start'
      }
    },
    {
      element: '.tour-logout',
      popover: {
        title: 'Logout',
        description: 'Click here to log out of the application.',
        side: 'right',
        align: 'start'
      }
    }
  ] as TourStep[] // Explicitly cast as TourStep[]
};

// Create the driver instance with the defined options
export const driverObj = driver(driverOptions);
