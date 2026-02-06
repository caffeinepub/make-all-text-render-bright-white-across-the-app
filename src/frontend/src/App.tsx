import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import CareerQuizPage from './pages/CareerQuizPage';
import ExploreCareersPage from './pages/ExploreCareersPage';
import VideosPage from './pages/VideosPage';
import VideoDetailPage from './pages/VideoDetailPage';
import MentorConnectionsPage from './pages/MentorConnectionsPage';
import MentorProfilePage from './pages/MentorProfilePage';
import ResourcesPage from './pages/ResourcesPage';
import SchoolTimelinePage from './pages/SchoolTimelinePage';

const rootRoute = createRootRoute({
  component: AppLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const careerQuizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/career-quiz',
  component: CareerQuizPage,
});

const exploreCareersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore-careers',
  component: ExploreCareersPage,
});

const videosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/videos',
  component: VideosPage,
});

const videoDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/videos/$videoId',
  component: VideoDetailPage,
});

const mentorConnectionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mentors',
  component: MentorConnectionsPage,
});

const mentorProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mentors/$mentorId',
  component: MentorProfilePage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: ResourcesPage,
});

const timelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/timeline',
  component: SchoolTimelinePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  careerQuizRoute,
  exploreCareersRoute,
  videosRoute,
  videoDetailRoute,
  mentorConnectionsRoute,
  mentorProfileRoute,
  resourcesRoute,
  timelineRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
