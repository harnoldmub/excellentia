// Simple SPA Router for Excellentia-RDC

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    // Register a route
    register(path, handler) {
        this.routes[path] = handler;
    }

    // Navigate to a route
    navigate(path) {
        window.location.hash = path;
    }

    // Handle route changes
    async handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        this.currentRoute = hash;

        // Find matching route
        let handler = this.routes[hash];

        // If no exact match, try to find a pattern match
        if (!handler) {
            for (const [pattern, routeHandler] of Object.entries(this.routes)) {
                if (pattern.includes(':')) {
                    const regex = new RegExp('^' + pattern.replace(/:[^\s/]+/g, '([\\w-]+)') + '$');
                    const match = hash.match(regex);
                    if (match) {
                        handler = routeHandler;
                        break;
                    }
                }
            }
        }

        // Default to home if no match
        if (!handler) {
            handler = this.routes['/'];
        }

        // Execute handler
        if (handler) {
            try {
                await handler();
                // Scroll to top on route change
                window.scrollTo(0, 0);
            } catch (error) {
                console.error('Route handler error:', error);
            }
        }
    }

    // Get current route
    getCurrentRoute() {
        return this.currentRoute;
    }

    // Get route params
    getParams() {
        const hash = window.location.hash.slice(1);
        const params = {};

        for (const [pattern] of Object.entries(this.routes)) {
            if (pattern.includes(':')) {
                const regex = new RegExp('^' + pattern.replace(/:[^\s/]+/g, '([\\w-]+)') + '$');
                const match = hash.match(regex);
                if (match) {
                    const paramNames = pattern.match(/:[^\s/]+/g).map(p => p.slice(1));
                    paramNames.forEach((name, index) => {
                        params[name] = match[index + 1];
                    });
                    break;
                }
            }
        }

        return params;
    }
}

export default new Router();
