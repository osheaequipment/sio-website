# SEO Next Steps for O'Shea Equipment Company

The code changes Claude made are necessary but NOT sufficient. Code-level SEO is roughly 40% of the job. The other 60% is off-page: getting Google to trust your site, listing you in the right places, and building authority. Here is your action list, prioritized.

---

## CRITICAL (do these this week)

### 1. Google Business Profile (formerly Google My Business)

This is the single biggest local SEO lever you have. Without it, you cannot show up in Google Maps results, the "local pack" (the box of 3 businesses with map pins above the regular results), or for "near me" searches.

- Go to https://business.google.com and either claim your existing listing or create one
- Use the exact business name: O'Shea Equipment Company
- Address: 16915 Walden Rd. Suite 310, Montgomery, TX 77356
- Phone: +1-817-422-1393
- Email: shamus@osheaequipment.com
- Category: "Equipment Rental Agency" (primary), add secondary: "Construction Equipment Supplier"
- Service area: set this to nationwide if you ship across the US, or specifically Texas + surrounding states
- Hours: enter your real hours
- Add at least 10 photos: equipment, job sites, the team, the office
- Write a description that uses the phrase "amphibious excavator," "marsh buggy," "Oshkosh water truck," and "dredging equipment"
- Once verified (Google will mail you a postcard or call you), start posting weekly updates: new inventory, completed projects, etc.

### 2. Google Search Console

This is how you tell Google your site exists and monitor its health.

- Go to https://search.google.com/search-console
- Add osheaequipment.com as a property
- Verify ownership (easiest method: DNS TXT record in GoDaddy)
- Once verified, submit your sitemap: https://www.osheaequipment.com/sitemap.xml (this exists now because of the code Claude added)
- Check for any crawl errors or indexing issues weekly

### 3. Bing Webmaster Tools

Bing is small but real (~6% of US search). Submit your site here too. Bing powers DuckDuckGo and ChatGPT search results.

- Go to https://www.bing.com/webmasters
- Import directly from Google Search Console (one click after step 2)
- Submit sitemap

### 4. Google Analytics 4

You currently have no analytics. You're flying blind.

- Go to https://analytics.google.com → Admin → Create Property
- Get your Measurement ID (starts with G-)
- Send me the Measurement ID and I'll wire it into the site

---

## HIGH PRIORITY (do these this month)

### 5. Industry Directories & Citations

Every directory you list in helps Google trust your business is real. Use the EXACT same name, address, and phone everywhere (Google calls this "NAP consistency").

Industry-specific directories worth listing on:
- MachineryTrader (machinerytrader.com) - listings for each piece of inventory
- IronPlanet (ironplanet.com)
- Equipment Trader (equipmenttrader.com)
- Construction Equipment Guide (constructionequipmentguide.com)
- Heavy Equipment Trader (heavyequipmenttrader.com)
- RentalHQ.com (American Rental Association)
- Compactequip.com
- Rock & Dirt (rockanddirt.com)

General directories:
- Yelp (yelp.com)
- Yellow Pages (yellowpages.com)
- BBB (Better Business Bureau)
- Chamber of Commerce (local Montgomery TX chamber)
- Manta (manta.com)
- Foursquare

### 6. Industry Backlinks

Backlinks (other sites linking to yours) are the #1 ranking factor outside on-page content. Get OEC mentioned and linked from:

- Trade publications: Construction Equipment magazine, Equipment World, Dredging Today
- Industry associations: Western Dredging Association (WEDA), American Society of Civil Engineers Texas chapter, Texas Construction Association
- Press releases: when you take delivery of new equipment, when you complete a notable project, send to industry pubs
- Case studies / project profiles: have your construction clients link back to you when they showcase completed projects

### 7. Content / Blog (the long game)

Right now you have 5 pages. Sites that rank for competitive keywords have 50-500+ pages of content. You don't need that immediately, but you should add 1-2 articles per month that target specific search queries.

Suggested article topics (each one targets a specific search):
- "What is an amphibious excavator? (Marsh buggy explained)"
- "Amphibious excavator rental cost guide"
- "CAT 312E vs CAT 330 amphibious excavator: which to choose"
- "How to choose the right marsh buggy for your dredging project"
- "5 applications for Oshkosh 6x6 water trucks beyond dust suppression"
- "Dredging in Texas wetlands: regulations and equipment requirements"
- "Pipeline construction with amphibious excavators: a case study"
- "Wildfire response with off-road water trucks"

Each article should be 1,200+ words, use the target keyword in the H1, include photos with descriptive alt text, and have an internal link to your inventory page.

These can be drafted with AI assistance — happy to help write any of them.

---

## MEDIUM PRIORITY (next 90 days)

### 8. Customer Reviews

Reviews on Google Business Profile directly influence Maps rankings. Ask every customer you do business with to leave a review. Aim for at least 20 reviews in your first 6 months.

A simple way: send a follow-up email after every rental return / sale with a direct link to your Google review page.

### 9. Schema testing & monitoring

Test that the structured data Claude added is working:
- Google's Rich Results Test: https://search.google.com/test/rich-results — paste your URLs in here
- Schema Markup Validator: https://validator.schema.org
- Both should show no errors for your Product, LocalBusiness, and BreadcrumbList schemas

### 10. Page speed

Run a test at https://pagespeed.web.dev/. If you're below 90 on mobile, we should optimize. The biggest wins are:
- Compressing all those equipment photos (most are 1-3MB each — should be under 200KB)
- Using Next.js Image component instead of regular `<img>` tags (currently the site uses regular img tags everywhere)

Send me the PageSpeed scores and I can prioritize fixes.

### 11. YouTube / Video content

Your bannerVideo.mp4 is sitting on your site doing nothing for SEO. Upload videos of your equipment to YouTube:
- Title each video with target keywords ("2022 CAT 330 Amphibious Excavator with EIK Long Reach Boom")
- Describe in detail
- Link back to your site from each video description
- Embed each video on the matching inventory page

YouTube is the #2 search engine in the world. Equipment buyers heavily watch videos before buying.

### 12. Social presence

You currently have zero social media links on the site. Even if you barely post, having profiles on LinkedIn, Facebook, and Instagram helps your brand visibility and gives Google more "entity signals."

When you have profiles, send me the URLs and I'll add them to the site footer and to the Organization JSON-LD `sameAs` array (currently empty).

---

## ONGOING

- Add new inventory to the site as soon as you get it (each item creates a new indexable page)
- Update the website whenever you complete a notable project — add a project page or case study
- Monitor rankings monthly: search Google for your target keywords in incognito mode and note where you rank
- Set up Google Alerts for "amphibious excavator" and "marsh buggy" to stay on top of industry news/opportunities

---

## What we already did in code (for reference)

- Added unique, keyword-rich page titles and meta descriptions for every page
- Added Open Graph + Twitter card metadata so social shares look professional
- Added Organization, LocalBusiness, Product, Vehicle, BreadcrumbList, and ItemList JSON-LD structured data
- Generated dynamic sitemap.xml and robots.txt
- Fixed heading hierarchy (proper H1, H2, H3 tags)
- Improved image alt text with keywords
- Added keyword-rich content sections to home page mentioning Shamus O'Shea, marsh buggies, dredging, etc.
- Wired HubSpot tracking + chatbot

---

## Realistic timeline for results

SEO is not instant. Expect:
- 2-4 weeks: pages indexed in Google after sitemap submission
- 1-3 months: start seeing ranking improvements for less competitive long-tail keywords
- 3-6 months: visible improvements for primary keywords like "amphibious excavator rental"
- 6-12 months: real traction for highly competitive terms

The off-page work (Google Business Profile, reviews, directory listings, backlinks) often moves the needle faster than code changes. Don't skip steps 1-3.
