import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a82c8c3f"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=a82c8c3f"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=a82c8c3f"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=a82c8c3f";
import "/src/index.css?t=1728409864022";
import Homepage from "/src/routes/homepage.jsx?t=1728409864022";
import Chatbot from "/src/routes/chatbot.jsx";
import Chatpage from "/src/routes/Chatpage.jsx?t=1728409864022";
import Dashboard from "/src/routes/dashboard.jsx?t=1728409864022";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(Homepage, {}, void 0, false, {
        fileName: "/home/buzz/Downloads/WisdomWave-main/wisdomWave/src/main.jsx",
        lineNumber: 13,
        columnNumber: 12
      }, this)
    },
    {
      path: "/chatbot",
      children: [
        { path: "/chatbot", element: /* @__PURE__ */ jsxDEV(Chatbot, {}, void 0, false, {
          fileName: "/home/buzz/Downloads/WisdomWave-main/wisdomWave/src/main.jsx",
          lineNumber: 18,
          columnNumber: 32
        }, this) },
        { path: "/chatbot/chats/:id", element: /* @__PURE__ */ jsxDEV(Chatpage, {}, void 0, false, {
          fileName: "/home/buzz/Downloads/WisdomWave-main/wisdomWave/src/main.jsx",
          lineNumber: 19,
          columnNumber: 42
        }, this) }
      ]
    },
    {
      path: "/chatroom",
      element: /* @__PURE__ */ jsxDEV(Chatpage, {}, void 0, false, {
        fileName: "/home/buzz/Downloads/WisdomWave-main/wisdomWave/src/main.jsx",
        lineNumber: 24,
        columnNumber: 12
      }, this)
    },
    {
      path: "/dashboard",
      element: /* @__PURE__ */ jsxDEV(Dashboard, {}, void 0, false, {
        fileName: "/home/buzz/Downloads/WisdomWave-main/wisdomWave/src/main.jsx",
        lineNumber: 28,
        columnNumber: 12
      }, this)
    }
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/home/buzz/Downloads/WisdomWave-main/wisdomWave/src/main.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/buzz/Downloads/WisdomWave-main/wisdomWave/src/main.jsx",
    lineNumber: 33,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWWE7QUFaYixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGNBQWM7QUFDckIsU0FBU0MscUJBQXFCQyxzQkFBc0I7QUFDcEQsT0FBTztBQUNQLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLGVBQWU7QUFFdEIsTUFBTUMsU0FBU047QUFBQUEsRUFBb0I7QUFBQSxJQUNqQztBQUFBLE1BQ0VPLE1BQU07QUFBQSxNQUNOQyxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTO0FBQUEsSUFDcEI7QUFBQSxJQUNBO0FBQUEsTUFDRUQsTUFBTTtBQUFBLE1BQ05FLFVBQVU7QUFBQSxRQUNSLEVBQUVGLE1BQU0sWUFBWUMsU0FBUyx1QkFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUSxFQUFJO0FBQUEsUUFDekMsRUFBRUQsTUFBTSxzQkFBc0JDLFNBQVMsdUJBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVMsRUFBSTtBQUFBLE1BQUM7QUFBQSxJQUV6RDtBQUFBLElBQ0E7QUFBQSxNQUNFRCxNQUFNO0FBQUEsTUFDTkMsU0FBUyx1QkFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUztBQUFBLElBQ3BCO0FBQUEsSUFDQTtBQUFBLE1BQ0VELE1BQU07QUFBQSxNQUNOQyxTQUFTLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFVO0FBQUEsSUFDckI7QUFBQSxFQUFDO0FBQ0Y7QUFFRFQsU0FBU1csV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDbkQsdUJBQUMsTUFBTSxZQUFOLEVBQ0MsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQixLQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFDRiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJIb21lcGFnZSIsIkNoYXRib3QiLCJDaGF0cGFnZSIsIkRhc2hib2FyZCIsInJvdXRlciIsInBhdGgiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJSb3V0ZXIsIFJvdXRlclByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSBcIi4vcm91dGVzL2hvbWVwYWdlXCI7XG5pbXBvcnQgQ2hhdGJvdCBmcm9tIFwiLi9yb3V0ZXMvY2hhdGJvdFwiO1xuaW1wb3J0IENoYXRwYWdlIGZyb20gXCIuL3JvdXRlcy9DaGF0cGFnZVwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9yb3V0ZXMvZGFzaGJvYXJkXCI7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPEhvbWVwYWdlIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvY2hhdGJvdFwiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6IFwiL2NoYXRib3RcIiwgZWxlbWVudDogPENoYXRib3QgLz4gfSxcbiAgICAgIHsgcGF0aDogXCIvY2hhdGJvdC9jaGF0cy86aWRcIiwgZWxlbWVudDogPENoYXRwYWdlIC8+IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2NoYXRyb29tXCIsXG4gICAgZWxlbWVudDogPENoYXRwYWdlIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gICAgZWxlbWVudDogPERhc2hib2FyZCAvPixcbiAgfSxcbl0pO1xuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT5cbik7XG4iXSwiZmlsZSI6Ii9ob21lL2J1enovRG93bmxvYWRzL1dpc2RvbVdhdmUtbWFpbi93aXNkb21XYXZlL3NyYy9tYWluLmpzeCJ9