import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingContactButtons } from './FloatingContactButtons';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FloatingContactButtons />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
