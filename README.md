#Commit 1 - Initial commit with creation of component and components reusability - refer App.jsx

    created multiple components(using latest function declaration) in the 1 file(App.jsx)
    Rendered them on App component - just plain text.

#Commit-2 - Passing props and added styling to the card component in the App.css

    Added props (to pass values) to component,  to render dynamic content.

#Commit-3 - Added different types of box shadows and inline style, external style sheet

    Added styles

#Commit-4 - Installed tailwindcss, configured it in - vite.config.js, imported tailwindcss in - index.css. Note: At this point, we have not applied any style using tailwindcss

    npm i tailwindcss @tailwindcss/vite

    Add and import tailwindcss to "vite.config.js" file, see below,

        import tailwindcss from '@tailwindcss/vite'

        // https://vite.dev/config/
        export default defineConfig({
        plugins: [react(), tailwindcss()],
        })

    import at index.csss / App.css, like below

        @import "tailwindcss";

#commit-5 - "Removed all the code for cards component and added 1 <h1> tag for which we added style using the tailwindcss"

        function App() {
        return (
            <>
            <h1 className="text-3xl font-bold underline"> Hello World!!</h1>
            </>
        );
        }

        text-3xl, font-bold, underline - each one represents a style.

#Commit-6 - "Added Search Component" and added usestate to track of user input"

        Created Components folder inside "src", created a new file for "Search"- component. added style using tailwindCSS.

        created state variable to keep track of the content entered in the "search input box"

        Note: 
            1. State should never be mutated manually, like regular variable assignment. State can be mutated/ changed only by the State setter function.
            2. State should never be mutated by Children components. Children can use those values just like "constant" -values.
            3. When passing the state setter function to the child component, don't add parenthsis() - if u add then it will invoke the function when component is called.
            4. When there is a change in state, react re-renders the component with which state it is associated to.





