# NgxPrismicio

This project offers support and utilities to simplify building Angular applications with Prismic.

> ℹ️ **Note**  
> This project is in early development. Keep an eye out for updates.

## Installation

### Requirements

Angular 19.2.0 or higher is required.

```bash
npm i @wzrdev/ngx-prismicio
```

## Content helpers

Provides helpers that manipulate Prismic content. The helpers can be used throughout your website or in scripts.

### Usage

Import the helpers in your application:

```ts
import { AsTextPipe } from '@wzrdev/ngx-prismicio/helpers';
```

Use the pipe in your template:

```html
<p>{{ document.data.content | asText }}</p>
```
