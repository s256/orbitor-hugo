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
- Contact page with optional form, OpenStreetMap embed, and office locations
- Pricing page
- All content driven by front matter and data files (no hardcoded text in layouts)
- Overridable heading labels for localization (see [Customizing Labels](#customizing-labels))

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
| `content/contact.md` | Contact | `form` (optional), `map`, `sidebar`, `offices` |
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
| `data/footer.yml` | Footer brand, links, contact info, socials, copyright, labels |

### Contact Page

The contact page supports two layouts controlled by the `form` front matter key:

- **With `form`:** Shows the contact form alongside the sidebar, map below, and office locations at the bottom.
- **Without `form`:** Shows the map and sidebar side by side (2/3 + 1/3). The offices section is hidden.

#### Map

The map uses a privacy-friendly OpenStreetMap embed (iframe, no external JS/CSS). Configure it via the `map` key:

```yaml
map:
  lat: 51.1657
  lng: 10.4515
  zoom: 13
  marker: "Your Company Name"
```

Remove the `map` key entirely to hide the map.

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

## Customizing Labels

All heading text in the theme can be overridden via a `labels` map in the corresponding data source. If no override is provided, the built-in English default is used. This makes it straightforward to localize the theme or adjust wording without touching any template files.

### Contact Page (`content/contact.md`)

Labels for the sidebar live inside the `sidebar` front matter block:

```yaml
sidebar:
  phone: "+49 123 456"
  email: "info@example.de"
  address: "Musterstraße 1, Berlin"
  labels:
    phone: "Rufen Sie uns an"    # default: "Call Us"
    email: "Schreiben Sie uns"   # default: "Email Us"
    address: "Standort"          # default: "Location Map"
```

### Footer (`data/footer.yml`)

```yaml
labels:
  company: "Unternehmen"   # default: "Company"
  support: "Hilfe"         # default: "Support"
  contact: "Kontakt"       # default: "Get in Touch"
```

### Blog Pages (`content/blog/_index.md` or individual posts)

Labels for the sidebar sections:

```yaml
labels:
  search: "Suche"                  # default: "Search Here"
  latest_posts: "Neueste Beiträge" # default: "Latest Posts"
  categories: "Kategorien"         # default: "Categories"
  tags: "Schlagwörter"             # default: "Tags"
```

### Project Pages (`content/project/my-project.md`)

```yaml
labels:
  strategies: "Unsere Strategien"      # default: "Our Strategies"
  challenges: "Unsere Herausforderungen" # default: "Our Challenges"
  success: "Unser Erfolg"             # default: "Our Success"
  testimonial: "Kundenstimme"         # default: "Testimonial"
```

### Legacy Partials

The following labels apply to the original standalone partials (service, case-study, service-2, portfolio-page, pricing). These are set via `labels` in the page front matter that calls the partial:

| Key | Partial | Default |
|---|---|---|
| `services_heading` | service.html | "Industry Leading Managed Services & Staffing Solutions" |
| `case_study_heading` | case-study.html | "How we works" |
| `case_step_1` .. `case_step_4` | case-study.html | "Competitor Research", "Making Functional Strategy", "Project Outline", "Final Delivery" |
| `service_detail_1` .. `service_detail_3` | service-2.html | "Custom Software development", "Software Maintenance", "Web App Development" |
| `portfolio_heading` | portfolio-page.html | "Let's Check Some Works" |
| `pricing_heading` | pricing.html | "Our pricing" |

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
    osm-map.html         # OpenStreetMap embed iframe
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
