# Design System Document: The Tactile Curator

## 1. Overview & Creative North Star
**Creative North Star: The Digital Archive**
This design system rejects the sterile, flat nature of modern SaaS interfaces in favor of a "Digital Archive" aesthetic. It is designed to feel like a bespoke, hand-assembled scrapbook of high-end memories. We achieve this by embracing intentional asymmetry, the warmth of physical textures, and a layout strategy that favors "curated chaos" over rigid grid alignment. 

By utilizing overlapping layers, organic rotations (±2°), and physical-world metaphors—such as dashed stitching and vellum-like transparency—we create an intimate, premium experience that feels both heritage-inspired and modern.

---

## 2. Colors
The palette is rooted in a "Deep Chocolate" foundation, providing a high-contrast, sophisticated stage for the "Rose Powder" and "Cream" accents.

- **Primary (`#fab6a8` / `#C4877A`):** The Rose Powder. Used for high-intent actions and moments of warmth.
- **Secondary (`#c8c8b0`):** The Cream. Used for secondary UI elements, providing a soft contrast against the dark background.
- **Surface Hierarchy:** 
    - **Surface (`#1e100c`):** The base paper texture.
    - **Surface-Container-Low to Highest:** Use these to create "stacked" paper effects. An inner card should use `surface-container-high` to appear as if it is a thicker piece of cardstock resting on the base.

**The "No-Line" Rule**
Under no circumstances should 1px solid borders be used to define sections. Layout boundaries must be established through:
1. **Tonal Transitions:** A `surface-container-low` header sitting on a `surface` background.
2. **Physicality:** Using dashed stitches (`outline` token) to imply a boundary.

**The "Glass & Gradient" Rule**
For overlays and floating menus, utilize Glassmorphism. Apply a semi-transparent `surface` color with a `backdrop-blur` (12px–20px). This mimics the look of translucent vellum paper, allowing the rich chocolate background to bleed through and maintain the "stacked" depth.

---

## 3. Typography
The typography system relies on the interplay between authoritative serifs and intimate, handwritten-style italics.

- **Display & Headline (Noto Serif / Playfair Display):** These should be treated as "Masthead" elements. Use `display-lg` for hero moments, ensuring generous letter spacing and high contrast against the dark background.
- **Title & Handwritten Notes (Newsreader Italic / Cormorant Italic):** Use these for annotations, captions, or "hand-inked" notes. This breaks the digital fourth wall, making the UI feel personal.
- **Body (Newsreader):** For long-form editorial content. The Newsreader family provides the legibility of a high-end magazine while maintaining the tactile spirit of the system.

---

## 4. Elevation & Depth
In this design system, depth is not a CSS property—it is a physical narrative.

- **The Layering Principle:** Stacks should feel like physical objects. Place a `surface-container-lowest` card on a `surface-container-low` section to create a "recessed" or "pressed" look.
- **Ambient Shadows:** For floating photos or "taped" elements, use extra-diffused shadows.
    - **Shadow Color:** Use a 40% opacity version of `surface-container-lowest` (`#180b07`).
    - **Blur:** 20px–40px for a soft, natural "lift" that mimics ambient room light rather than a digital drop shadow.
- **The "Ghost Border":** If a button or input requires a boundary for accessibility, use the `outline-variant` token at 15% opacity. It should be felt, not seen.
- **Organic Rotation:** Apply a subtle `rotate(1.5deg)` or `rotate(-2deg)` to images and cards. This removes the "templated" feel and replicates the look of items hand-placed on a page.

---

## 5. Components

### Cards & Photo Frames
- **Styling:** No borders. Use `surface-container-high`. 
- **Visual Element:** Add a `2px dashed` stroke using the `outline` token 8px inside the card edge to simulate stitching.
- **Interaction:** On hover, the rotation should subtly "straighten" (return to 0°) and the shadow should deepen.

### Buttons
- **Primary:** `surface-container-highest` background with `primary` (Rose Powder) text. Use the `xl` (0.75rem) roundedness scale.
- **Tertiary:** Text-only with `on-surface` color, using `Cormorant Italic` to look like a handwritten invitation.
- **States:** Transitions should be slow (300ms) to maintain the "warm and intimate" feel.

### Washi Tape (Custom Component)
- **Use:** To "anchor" images or cards to the background.
- **Color:** Use `tertiary-container` at 70% opacity.
- **Shape:** A rectangle with slightly jagged edges (using CSS clip-path) placed at the corners of containers.

### Input Fields
- **Background:** `surface-container-low`.
- **Active State:** Instead of a heavy border, use a subtle `primary` (Rose Powder) underline (2px) and a slight increase in `surface` brightness.
- **Label:** Always use `label-md` in `on-surface-variant` for a muted, archival look.

### Lists
- **Rule:** Forbid divider lines. 
- **Alternative:** Use 24px–32px of vertical white space from the Spacing Scale to separate list items. Each item can have a very subtle `surface-container` hover state.

---

## 6. Do’s and Don’ts

**Do:**
- Overlap elements (e.g., a "handwritten" note overlapping the corner of a photo).
- Use the "Deep Chocolate" background as a high-end vacuum; allow for massive amounts of negative space.
- Mix the `notoSerif` (Standard) and `newsreader` (Italic) styles within the same block to emphasize specific words.

**Don’t:**
- Use 90-degree perfectly aligned grids for image galleries.
- Use pure black (#000) or pure white (#FFF). They break the organic, porous feel of the tactile paper.
- Use sharp corners. Always use at least the `sm` (0.125rem) roundedness to soften the digital edges.
- Use high-speed, "snappy" animations. Everything should feel like the slow turning of a heavy paper page.

---

**Director’s Final Note:** 
Remember, we are not building a website; we are curating a legacy. If a layout feels too "clean," add a stitch, rotate a photo, or deepen a shadow. The beauty is in the imperfection.