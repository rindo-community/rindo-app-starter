import { Component, h } from '@rindo/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Rindo App Starter. You can use this starter to build entire apps all with web components using Rindo! Check out our docs on{' '}
          <a href="https://rindojs.web.app">rindojs.web.app</a> to get started.
        </p>

        <rindo-route-link url="/profile/rindo">
          <button>Profile page</button>
        </rindo-route-link>
      </div>
    );
  }
}
