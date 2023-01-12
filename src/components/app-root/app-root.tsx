import { Component, h } from '@rindo/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Rindo App Starter</h1>
        </header>

        <main>
          <rindo-router>
            <rindo-route-switch scrollTopOffset={0}>
              <rindo-route url="/" component="app-home" exact={true} />
              <rindo-route url="/profile/:name" component="app-profile" />
            </rindo-route-switch>
          </rindo-router>
        </main>
      </div>
    );
  }
}
