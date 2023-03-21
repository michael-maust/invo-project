## Laravel Project
Basic CRUD app built using PHP Laravel and Inertia.JS

### Project Requirements
- Setup a local web server using PHP as the backend (You may use any framework you desire, such as Laravel)
- Using the https://canary.invosolutions.com/public/invo/civilisations.json  API, save all of the civilizations to a local database  (id, name, expansion, army_type, team_bonus, civilization_bonus)
- Create a webpage to Create a civilization.
- Create a webpage to display the civilizations from the database
- Create a webpage to update the civilizations in the database
- Create a webpage to delete civilizations from the database
- Bonus points if steps 3, 4 & 5 are a single page using Fetch API.

### Demo
https://user-images.githubusercontent.com/65863230/226677501-1b94b985-ccff-463c-b59a-19a4562838d9.mp4


### Technologies
- [PHP Laravel](https://laravel.com) for backend
- [Inertia.JS](https://inertiajs.com) for client/backend integration
- [React](https://react.dev)
- [React Hook Form](https://react-hook-form.com) for form management
- [Zod](https://github.com/colinhacks/zod) for form schema
- [Tailwind](https://tailwindcss.com) for styling 
- [Radix UI](https://www.radix-ui.com) for various components

### Feature List
- Search functionality for filtering through civilizations (by name and expansion) 
- Ability to view, create, update, and delete civilizations

### Future Work
- Improve query invalidation after PUT/POST requests (maybe implement React Query/RTK Query)
- Integrate TypeScript for better type safety
- Reduce code duplication by implementing more reusable components and add custom utility Tailwind classes 
