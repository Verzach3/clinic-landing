import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=1af4b2f4"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import "/node_modules/.pnpm/@mantine+core@7.3.2_@mantine+hooks@7.3.2_@types+react@18.2.46_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/styles.css";
import "/node_modules/.pnpm/@mantine+carousel@7.3.2_@mantine+core@7.3.2_@mantine+hooks@7.3.2_embla-carousel-react@7.1.0_r_w65vdamrvr3ie4m353tbb67yby/node_modules/@mantine/carousel/styles.css";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=1af4b2f4"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import __vite__cjsImport4_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=1af4b2f4"; const ReactDOM = __vite__cjsImport4_reactDom_client.__esModule ? __vite__cjsImport4_reactDom_client.default : __vite__cjsImport4_reactDom_client;
import App from "/src/App.tsx";
import { MantineProvider } from "/node_modules/.vite/deps/@mantine_core.js?v=1af4b2f4";
import { RouterProvider, createBrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=1af4b2f4";
import Home from "/src/views/Home.tsx";
import Blog from "/src/views/Blog.tsx";
import About from "/src/views/About.tsx";
import InfoForWomens from "/src/views/InfoForWomens.tsx";
import InfoForMens from "/src/views/InfoForMens.tsx";
import Footer from "/src/views/Footer.tsx";
import BlogView from "/src/views/blog/BlogView.tsx";
import SintomasDolorcabeza from "/src/views/SintomasDolorcabeza.tsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: /*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
            fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
            lineNumber: 20,
            columnNumber: 14
        }, this),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ _jsxDEV(Home, {}, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 24,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/",
                element: /*#__PURE__*/ _jsxDEV(Footer, {}, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 29,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/about",
                element: /*#__PURE__*/ _jsxDEV(About, {}, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 33,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/contact",
                element: /*#__PURE__*/ _jsxDEV("h1", {
                    children: "Contact"
                }, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 37,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/blog",
                element: /*#__PURE__*/ _jsxDEV(Blog, {}, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 41,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/blog/:id",
                element: /*#__PURE__*/ _jsxDEV(BlogView, {}, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 45,
                    columnNumber: 18
                }, this)
            },
            {
                path: "/info/woman",
                element: /*#__PURE__*/ _jsxDEV(InfoForWomens, {}, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 49,
                    columnNumber: 18
                }, this),
                children: [
                    {
                        path: '/info/woman',
                        element: /*#__PURE__*/ _jsxDEV("h1", {
                            children: " EJEMPLO"
                        }, void 0, false, {
                            fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    }
                ]
            },
            {
                path: "/info/men",
                element: /*#__PURE__*/ _jsxDEV(InfoForMens, {}, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 60,
                    columnNumber: 18
                }, this),
                children: [
                    {
                        path: '/info/men',
                        element: /*#__PURE__*/ _jsxDEV("h1", {
                            children: " EJEMPLO"
                        }, void 0, false, {
                            fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this)
                    }
                ]
            },
            {
                path: '/sintomas/dolorcabeza',
                element: /*#__PURE__*/ _jsxDEV(SintomasDolorcabeza, {}, void 0, false, {
                    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
                    lineNumber: 72,
                    columnNumber: 18
                }, this)
            }
        ]
    }
]);
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(MantineProvider, {
        defaultColorScheme: "auto",
        children: /*#__PURE__*/ _jsxDEV(RouterProvider, {
            router: router
        }, void 0, false, {
            fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "/Users/anthonygonzalez/Desktop/clinic-landing/src/main.tsx",
    lineNumber: 81,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBtYW50aW5lL2NvcmUvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiQG1hbnRpbmUvY2Fyb3VzZWwvc3R5bGVzLmNzc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnRzeFwiO1xuaW1wb3J0IHsgTWFudGluZVByb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlclByb3ZpZGVyLCBjcmVhdGVCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3ZpZXdzL0hvbWUudHN4XCI7XG5pbXBvcnQgQmxvZyBmcm9tIFwiLi92aWV3cy9CbG9nLnRzeFwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL3ZpZXdzL0Fib3V0LnRzeFwiO1xuaW1wb3J0IEluZm9Gb3JXb21lbnMgZnJvbSBcIi4vdmlld3MvSW5mb0ZvcldvbWVucy50c3hcIjtcbmltcG9ydCBJbmZvRm9yTWVucyBmcm9tIFwiLi92aWV3cy9JbmZvRm9yTWVucy50c3hcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vdmlld3MvRm9vdGVyLnRzeFwiO1xuaW1wb3J0IEJsb2dWaWV3IGZyb20gXCIuL3ZpZXdzL2Jsb2cvQmxvZ1ZpZXcudHN4XCI7XG5pbXBvcnQgU2ludG9tYXNEb2xvcmNhYmV6YSBmcm9tIFwiLi92aWV3cy9TaW50b21hc0RvbG9yY2FiZXphLnRzeFwiXG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPEFwcC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBlbGVtZW50OiA8SG9tZS8+LFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgZWxlbWVudDogPEZvb3Rlci8+LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYWJvdXRcIixcbiAgICAgICAgZWxlbWVudDogPEFib3V0Lz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9jb250YWN0XCIsXG4gICAgICAgIGVsZW1lbnQ6IDxoMT5Db250YWN0PC9oMT4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9ibG9nXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxCbG9nLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9ibG9nLzppZFwiLFxuICAgICAgICBlbGVtZW50OiA8QmxvZ1ZpZXcvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2luZm8vd29tYW5cIixcbiAgICAgICAgZWxlbWVudDogPEluZm9Gb3JXb21lbnMvPixcbiAgICAgICAgY2hpbGRyZW46W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6Jy9pbmZvL3dvbWFuJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6PGgxPiBFSkVNUExPPC9oMT5cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvaW5mby9tZW5cIixcbiAgICAgICAgZWxlbWVudDogPEluZm9Gb3JNZW5zLz4sXG4gICAgICAgIGNoaWxkcmVuOltcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOicvaW5mby9tZW4nLFxuICAgICAgICAgICAgZWxlbWVudDo8aDE+IEVKRU1QTE88L2gxPlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcblxuXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvc2ludG9tYXMvZG9sb3JjYWJlemEnLFxuICAgICAgICBlbGVtZW50OiA8U2ludG9tYXNEb2xvcmNhYmV6YS8+LFxuICAgICAgXG4gICAgICB9LFxuICAgICAgXG4gICAgXSxcbiAgfSxcbl0pXG5cblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpISkucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8TWFudGluZVByb3ZpZGVyIGRlZmF1bHRDb2xvclNjaGVtZT1cImF1dG9cIj5cbiAgICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0vPlxuICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJNYW50aW5lUHJvdmlkZXIiLCJSb3V0ZXJQcm92aWRlciIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJIb21lIiwiQmxvZyIsIkFib3V0IiwiSW5mb0ZvcldvbWVucyIsIkluZm9Gb3JNZW5zIiwiRm9vdGVyIiwiQmxvZ1ZpZXciLCJTaW50b21hc0RvbG9yY2FiZXphIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImgxIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIiwiZGVmYXVsdENvbG9yU2NoZW1lIl0sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywrQkFBOEI7QUFDckMsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGNBQWMsbUJBQW1CO0FBQ3hDLE9BQU9DLFNBQVMsWUFBWTtBQUM1QixTQUFTQyxlQUFlLFFBQVEsZ0JBQWdCO0FBQ2hELFNBQVNDLGNBQWMsRUFBRUMsbUJBQW1CLFFBQVEsbUJBQW1CO0FBQ3ZFLE9BQU9DLFVBQVUsbUJBQW1CO0FBQ3BDLE9BQU9DLFVBQVUsbUJBQW1CO0FBQ3BDLE9BQU9DLFdBQVcsb0JBQW9CO0FBQ3RDLE9BQU9DLG1CQUFtQiw0QkFBNEI7QUFDdEQsT0FBT0MsaUJBQWlCLDBCQUEwQjtBQUNsRCxPQUFPQyxZQUFZLHFCQUFxQjtBQUN4QyxPQUFPQyxjQUFjLDRCQUE0QjtBQUNqRCxPQUFPQyx5QkFBeUIsa0NBQWlDO0FBRWpFLE1BQU1DLFNBQVNULG9CQUFvQjtJQUNqQztRQUNFVSxNQUFNO1FBQ05DLHVCQUFTLFFBQUNkOzs7OztRQUNWZSxVQUFVO1lBQ1I7Z0JBQ0VGLE1BQU07Z0JBQ05DLHVCQUFTLFFBQUNWOzs7OztZQUNaO1lBRUE7Z0JBQ0VTLE1BQU07Z0JBQ05DLHVCQUFTLFFBQUNMOzs7OztZQUNaO1lBQ0E7Z0JBQ0VJLE1BQU07Z0JBQ05DLHVCQUFTLFFBQUNSOzs7OztZQUNaO1lBQ0E7Z0JBQ0VPLE1BQU07Z0JBQ05DLHVCQUFTLFFBQUNFOzhCQUFHOzs7Ozs7WUFDZjtZQUNBO2dCQUNFSCxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDVDs7Ozs7WUFDWjtZQUNBO2dCQUNFUSxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDSjs7Ozs7WUFDWjtZQUNBO2dCQUNFRyxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDUDs7Ozs7Z0JBQ1ZRLFVBQVM7b0JBQ1A7d0JBQ0VGLE1BQUs7d0JBQ0xDLHVCQUFRLFFBQUNFO3NDQUFHOzs7Ozs7b0JBQ2Q7aUJBQ0Q7WUFDSDtZQUVBO2dCQUNFSCxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDTjs7Ozs7Z0JBQ1ZPLFVBQVM7b0JBQ1A7d0JBQ0VGLE1BQUs7d0JBQ0xDLHVCQUFRLFFBQUNFO3NDQUFHOzs7Ozs7b0JBQ2Q7aUJBQ0Q7WUFDSDtZQUdBO2dCQUNFSCxNQUFNO2dCQUNOQyx1QkFBUyxRQUFDSDs7Ozs7WUFFWjtTQUVEO0lBQ0g7Q0FDRDtBQUVEWixTQUFTa0IsVUFBVSxDQUFDQyxTQUFTQyxjQUFjLENBQUMsU0FBVUMsTUFBTSxlQUMxRCxRQUFDdEIsTUFBTXVCLFVBQVU7Y0FDZixjQUFBLFFBQUNwQjtRQUFnQnFCLG9CQUFtQjtrQkFDbEMsY0FBQSxRQUFDcEI7WUFBZVUsUUFBUUEifQ==