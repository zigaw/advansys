# MyApp

MyApp is a web application built with AngularJS that displays user details in a modal popup. The application fetches user data from an external API and allows users to view detailed information by clicking on a user row. Additionally, it supports long press detection on table rows.

## Features

- Fetches user data from an external API
- Displays user details in a modal popup
- Supports long press detection on table rows

## Prerequisites

- Node.js
- npx (comes with npm)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/zigaw/advansys.git
    cd advansys
    ```

## Usage

1. Start the development server:
    ```sh
    npx http-server
    ```

2. Open your browser and navigate to `http://127.0.0.1:8080/`.

## Project Structure

- `app/`: Contains the main application code
    - `components/`: Contains AngularJS components
    - `directives/`: Contains AngularJS directives
    - `services/`: Contains AngularJS services
    - `controllers/`: Contains AngularJS controllers
- `index.html`: Main HTML file

## Example Code

### `onLongPress` Directive

```javascript
angular.module('myApp')
    .directive('onLongPress', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var timeout;
                element.on('mousedown', function () {
                    timeout = $timeout(function () {
                        console.log('Long press detected');
                        scope.$apply(attrs.onLongPress);
                    }, 600);
                });
                element.on('mouseup mouseleave', function () {
                    $timeout.cancel(timeout);
                });
            }
        };
    });