import { redirect } from 'next/navigation';

export default function HomePage() {
  // This function automatically sends the user to the dashboard page.
  redirect('/Dashboard');
}
