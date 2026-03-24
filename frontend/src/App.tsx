import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CSCA from "./pages/CSCA";
import ResourcesOverview from "./pages/Resources";
import ResourceSubject from "./pages/ResourceSubject";
import TutoringOverview from "./pages/Tutoring";
import TutoringClass from "./pages/TutoringClass";
import TutoringOneOnOne from "./pages/TutoringOneToOne";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (!el) return;

        const navbarOffset = 110; // 你的 fixed navbar 预留一点空间
        const y = el.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      };

      // 等页面内容先渲染出来
      setTimeout(scrollToHash, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

[...document.querySelectorAll('body *')].forEach((el) => {
  const r = el.getBoundingClientRect();

  if (r.left < -1 || r.right > window.innerWidth + 1) {
    console.log('overflowing:', el, {
      left: r.left,
      right: r.right,
      width: r.width,
      viewport: window.innerWidth,
    });

    if (el instanceof HTMLElement) {
      el.style.outline = '2px solid red';
    }
  }
});

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Redirect root to /en */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Routes wrapped in Layout */}
        <Route
          path="/:lang"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/:lang/csca"
          element={
            <Layout>
              <CSCA />
            </Layout>
          }
        />

        {/* Resources Routes */}
        <Route
          path="/:lang/resources"
          element={
            <Layout>
              <ResourcesOverview />
            </Layout>
          }
        />
        <Route
          path="/:lang/resources/:subject"
          element={
            <Layout>
              <ResourceSubject />
            </Layout>
          }
        />

        {/* Tutoring Routes */}
        <Route
          path="/:lang/tutoring"
          element={
            <Layout>
              <TutoringOverview />
            </Layout>
          }
        />
        <Route
          path="/:lang/tutoring/one-to-one"
          element={
            <Layout>
              <TutoringOneOnOne />
            </Layout>
          }
        />
        <Route
          path="/:lang/tutoring/:type"
          element={
            <Layout>
              <TutoringClass />
            </Layout>
          }
        />

        {/* Blog Routes */}
        <Route
          path="/:lang/blog"
          element={
            <Layout>
              <BlogList />
            </Layout>
          }
        />
        <Route
          path="/:lang/blog/:slug"
          element={
            <Layout>
              <BlogPost />
            </Layout>
          }
        />

        <Route
          path="/:lang/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/:lang/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
