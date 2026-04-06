---
name: scamsafe-blog-writing
description: "Write and create ScamSafe blog posts in MDX format. Use when: writing a new blog post, creating blog content, drafting articles about online safety, scam prevention, or cybersecurity for a non-technical audience."
argument-hint: "Describe the topic or provide a source article to base the post on"
---

# ScamSafe Blog Post Writing

## When to Use

- Writing a new blog post for ScamSafe
- Adapting an external article into a ScamSafe blog post
- Reviewing or editing existing blog post content for tone/style consistency

## Voice & Tone

ScamSafe blog posts are written by Luke Gelmi, a software engineer from Perth, WA who helps everyday people (especially older adults) stay safe from online scams.

- **Friendly and approachable** — like a mate explaining something over coffee
- **Practical and actionable** — every post should leave the reader with something concrete they can do
- **Non-technical** — avoid jargon; when technical terms are necessary, explain them plainly
- **Empathetic, never condescending** — readers may feel embarrassed about being scam targets; reassure them that scammers are professionals and anyone can be tricked
- **Australian English** — use "defence" not "defense", "organisation" not "organization", etc.
- **Light humour is welcome** — matches the existing site tone (e.g. "at least you know I'm honest!")
- **Urgent without being alarmist** — convey the real risk without causing panic

## Target Audience

- Non-technical adults, often 50+
- People who may use one password for everything
- Perth, WA locals (but content should be broadly relevant to Australians)
- People who are willing to learn but may feel overwhelmed by technology

## File Structure

Blog posts live in `content/blog/` as `.mdx` files.

### File Naming

- Use kebab-case: `my-post-title.mdx`
- The filename (without extension) becomes the URL slug: `/blog/my-post-title/`
- Keep slugs concise but descriptive

### Front Matter Schema

```yaml
---
title: "Your Post Title Here" # Required. Displayed as the page heading.
description: "A brief summary..." # Required. Used in cards and SEO meta.
date: "YYYY-MM-DD" # Required. Publication date. ISO format.
tags: # Optional. Array of lowercase tag strings.
    - phishing
    - email safety
coverImage: "/blog/my-post-cover.jpg" # Optional. Path relative to public/.
---
```

- `title` — Keep under 70 characters for SEO
- `description` — Keep under 160 characters; this appears on blog cards and in search results
- `date` — ISO 8601 format (`YYYY-MM-DD`)
- `tags` — Optional array; use lowercase, keep to 2-4 tags per post
- `coverImage` — Optional; store images in `public/blog/`; reference as `/blog/filename.jpg`
- `readingTime` is **not** in front matter — it's auto-calculated from word count

### Content Guidelines

1. **Start with a hook** — a relatable scenario, a surprising statistic, or a question
2. **Use headings** (`##`) to break content into scannable sections
3. **Include practical tips** — numbered lists or bullet points work well
4. **End with a clear takeaway** — what should the reader do right now?
5. **Keep paragraphs short** — 2-3 sentences max for readability
6. **Use real examples** — describe what a scam looks like in practice
7. **Aim for 600-1200 words** — long enough to be useful, short enough to hold attention

### MDX Features

Since posts use MDX, you can embed React components. The following are available:

- Standard markdown: headings, bold, italic, links, images, lists, blockquotes
- GFM extensions: tables, strikethrough, task lists (via `remark-gfm`)
- Custom components can be added to `components/mdx-components.tsx`

## Procedure: Creating a New Blog Post

1. Create a new `.mdx` file in `content/blog/` with a kebab-case filename
2. Add front matter with at minimum: `title`, `description`, `date`
3. Write the post content following the voice, tone, and content guidelines above
4. If using a cover image, place it in `public/blog/` and reference it in front matter
5. Run `pnpm build` to verify the post compiles and the static export includes `out/blog/[slug]/index.html`
6. The post will automatically appear on the home page (if it's one of the 3 most recent) and on `/blog/`

## Example Post Structure

```mdx
---
title: "How to Spot a Dodgy Text Message"
description: "Scam texts are getting harder to spot. Here's how to tell the real from the fake."
date: "2026-04-06"
tags:
    - sms scams
    - phishing
---

We've all been there — your phone buzzes and there's a message from "Australia Post" saying your
package couldn't be delivered. But did you actually order anything?

## What to Look For

Scam texts usually have a few giveaways...

## What to Do If You're Not Sure

If you get a text that seems off, here's a quick checklist:

1. **Don't click any links** — go directly to the company's website instead
2. **Check the sender** — legitimate companies don't text from random mobile numbers
3. **Ask someone you trust** — there's no shame in getting a second opinion

## The Bottom Line

Scammers are getting cleverer, but so can you. Trust your gut — if something feels off, it probably is.
```
