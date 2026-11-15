#!/bin/bash
# MEHFIL — garnet velvet & gold darbar suite: premium art on pure white
# for the flood-fill cutout pipeline. Textures are full-bleed.
set -u
RAW=/home/z/my-project/mehfil-invitation/_raw-art
mkdir -p "$RAW"

gen () {
  local name="$1" size="$2" prompt="$3"
  for attempt in 1 2 3 4 5 6 7 8; do
    [ -s "$RAW/$name.png" ] && { echo "have $name"; return 0; }
    echo "== mehfil/$name attempt $attempt"
    if timeout 150 z-ai image -p "$prompt" -o "$RAW/$name.png" -s "$size" 2>&1 | grep -q 'File saved to'; then
      echo "ok mehfil/$name"; sleep 12; return 0
    fi
    sleep $((35 + attempt * 12))
  done
  echo "FAILED mehfil/$name"
}

GOLD="fine antique gold zardozi threadwork embroidery style, delicate metallic wire curls, tiny gold sequin bead dots, muted matte gold, no gloss overload, no 3D bevel, flat elegant luxury composition, crisp clean silhouette edges, no halo, no glow bleeding outside the object, isolated on pure white background, high detail, no text, no letters, no calligraphy"

# ---------- hero & scene art ----------
gen arch-mehfil 1024x1024 "a flat ornamental multifoil scalloped jharokha arch FRAME only, perfectly centred filling the frame, the arch band of deep garnet red with fine gold zardozi embroidery edging and tiny gold bead dots, small gold garland chain at the crown apex, thin slim band, the area inside the arch completely plain flat pure white empty, the area outside the arch completely plain flat pure white empty, no walls, no depth, no niche, no curtains, no shading inside, $GOLD"
gen seal-mehfil 1024x1024 "an ornate octagonal darbar seal medallion, fine gold zardozi border with eight-pointed star centre, two small elegant tassels hanging at the bottom, matte antique gold with deep garnet enamel accents, $GOLD"
gen corner-mehfil 1024x1024 "a top-left corner ornament of slender gold zardozi floral vine with small paisley buds, tiny gold sequin dots and thin curling tendrils curving gently inward, $GOLD"
gen lantern-mehfil 1024x1024 "one hanging Mughal brass lantern chandelier with tiny crystal glass drops cascading along slim gold chains, slender ornate chains rising to a small ring at the top, matte antique brass with deep garnet enamel accents, unlit crystals with no bloom, $GOLD"
gen shamsa-mehfil 1024x1024 "a round Islamic eight-pointed star medallion, fine matte gold zardozi filigree radiating from a small garnet red stone centre, tiny gold bead dots along the rays, perfectly symmetrical and delicate, $GOLD"
gen divider-mehfil 1024x1024 "a slim horizontal gold ornament rule, a fine double hairline with a small elegant paisley motif and two symmetric zardozi scrolls at the centre, perfectly centred and delicate, $GOLD"
gen crescent-mehfil 1024x1024 "a slender matte antique gold crescent moon with one tiny five-pointed gold star nestled in its curve and small jasmine buds at the crescent tips, fine zardozi surface texture, $GOLD"
gen roses-mehfil 1024x1024 "a lush cluster of deep garnet red roses with cream white jasmine sprigs, dark velvet green leaves and tiny gold buds, soft painterly matte illustration, muted royal jewel tones, crisp clean edges, isolated on pure white background, high detail, no text"
gen swag-mehfil 1024x1024 "an elegant hanging garland swag of deep red roses and cream jasmine with fine gold leaves and thin gold ribbon tied at both ends, soft painterly matte illustration, muted royal tones, crisp clean edges, isolated on pure white background, high detail, no text"
gen dome-mehfil 1152x864 "a majestic Mughal onion dome pavilion in matte antique gold with a slender gold finial, flanked by two elegant slim minarets with tiny arched windows, deep garnet red stone bands and gold zardozi ornament, royal twilight grandeur, $GOLD"

# ---------- full-bleed textures ----------
gen velvet-garnet 1440x720 "seamless deep garnet burgundy velvet fabric texture in soft candlelight, fine plush pile with subtle folds, faint warm gold shimmer low in the frame, rich royal textile surface, soft diffused light, minimal, no objects, no text, no border, flat even lighting, high detail"
echo MEHFIL-DONE
