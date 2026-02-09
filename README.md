# Orbitor Hugo Theme

A Hugo port of the [Orbitor Bootstrap Agency Template](https://github.com/themefisher/orbitor) by [Themefisher](https://themefisher.com).

Built with Bootstrap 4, this theme is suitable for software companies, digital agencies, and IT service businesses.

## Features

- Responsive design (Bootstrap 4)
- Homepage with hero banner, features, portfolio, counters, testimonials
- About page with team, awards, and video sections
- Services page with timeline and service grid
- Portfolio/project pages with detail view
- Blog with sidebar
- Contact page with form and office locations
- Pricing page
- All content driven by front matter and data files (no hardcoded text in layouts)

## Requirements

- Hugo v0.100.0 or higher (extended edition recommended)

## Installation

### As a Hugo module

```bash
hugo mod init github.com/your-username/your-site
```

Add to your `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/your-username/orbitor-hugo"
```

### As a git submodule

```bash
cd your-hugo-site
git submodule add https://github.com/your-username/orbitor-hugo.git themes/orbitor
```

Set the theme in `hugo.toml`:

```toml
theme = "orbitor"
```

## Quick Start

Copy the sample site content into your Hugo site to get started:

```bash
cp -r exampleSite/content/* your-site/content/
cp -r exampleSite/data/* your-site/data/
cp exampleSite/hugo.toml your-site/hugo.toml
```

Then run:

```bash
hugo server -D
```

## Content Structure

All website content lives in markdown files and YAML data files, not in the theme layouts.

### Pages (front matter driven)

| File | Layout | Front matter keys |
|---|---|---|
| `content/_index.md` | Homepage | `slider`, `features`, `process`, `cta`, `portfolio` |
| `content/about.md` | About | `feature_heading`, `feature_counters`, `video`, `awards` |
| `content/service.md` | Services | `services_detail`, `case_study`, `services_grid`, `cta` |
| `content/contact.md` | Contact | `form`, `sidebar`, `offices` |
| `content/pricing.md` | Pricing | `pricing` (plans array) |

Pages with custom layouts need `type: "page"` and `layout: "<name>"` in their front matter.

### Content Sections

| Directory | Description |
|---|---|
| `content/blog/` | Blog posts with `image`, `category`, `comments`, `tags` |
| `content/project/` | Portfolio projects with `thumbnail`, `category`, `headline`, `summary`, project metadata |

### Shared Data (`data/`)

| File | Description |
|---|---|
| `data/testimonials.yml` | Testimonial heading, description, and items |
| `data/team.yml` | Team section heading and member list |
| `data/counters.yml` | Counter statistics |
| `data/footer.yml` | Footer brand, links, contact info, socials, copyright |

## Configuration

Minimal `hugo.toml`:

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "Your Site Title"
theme = "orbitor"

[params]
  description = "Your site description"
  author = "Your Name"
  logo = "images/logo.png"
  logoWhite = "images/logo-w.png"
```

### Navigation

Navigation is managed via Hugo menus. Dropdown menus are supported:

```toml
[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 2
  [[menu.main]]
    name = "Blog"
    url = "#"
    weight = 5
    [[menu.main]]
      parent = "Blog"
      name = "Blog List"
      url = "/blog/"
      weight = 1
```

## Theme Structure

```
layouts/
  _default/
    baseof.html          # Base template (head, scripts, nav, footer)
    list.html            # Default list page
    single.html          # Default single page
  index.html             # Homepage
  page/
    about.html           # About page layout
    service.html         # Services page layout
    contact.html         # Contact page layout
    pricing.html         # Pricing page layout
  blog/
    list.html            # Blog list with sidebar
    single.html          # Blog post with sidebar
  project/
    list.html            # Portfolio grid
    single.html          # Project detail
  partials/
    navigation.html      # Navbar (adapts for home vs inner pages)
    page-title.html      # Page title banner with breadcrumb
    slider.html          # Hero banner
    about.html           # Features section
    about-2.html         # Process/why-choose-us section
    cta-block.html       # Call-to-action block
    portfolio.html       # Portfolio grid (homepage)
    portfolio-page.html  # Portfolio grid (dedicated page)
    counter.html         # Counter statistics
    testimonial.html     # Testimonial carousel
    feature-2.html       # Feature counters (about page)
    team.html            # Team members
    post-sidebar.html    # Blog sidebar
    site-footer.html     # Site footer
```

## Credits

- Original template by [Themefisher](https://themefisher.com)
- Bootstrap 4
- jQuery
- Slick Carousel
- Magnific Popup
- CounterUp
- Font Awesome
- Themify Icons

## License

**Code License:** Released under the [MIT](LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their own licenses; we do not have permission to share those images.

Copyright (c) 2016 - Present, Designed & Developed by [Themefisher](https://themefisher.com)
