# Project : React-Router-dom

> ## Coverded Topics : `` 3 ways of routing , <RouterProvider router={router}>,createBrowserRouter(createRoutesFromElements(<Route/>),useParams(),useLoaderData(),Link,<NavLink className = ({isActive}) => {`css cahnge`} ``/>

1.  `useParams()`

- Returns an object of URL parameters (from dynamic routes).
- Use when you define routes with parameters like /`users/:id`

2. `useLoaderData()`    

- Used to get data returned by a loader function in route configuration.
- It avoids fetching data manually inside components.
- Data is loaded before rendering the route.
- Makes pages load with data ready → better user experience.

3. `BrowserRouter` → traditional routing (data fetched inside components).

4. `createBrowserRouter + RouterProvider` → data router (data loaded with routes, more powerful).
<!-- https://fakestoreapi.com/products -->
