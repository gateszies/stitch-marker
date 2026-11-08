Pattern.find_or_create_by!(title: "Demo Mittens") do |pattern|
    pattern.yarn = "Chunky, Fingering, DK, Worsted"
    pattern.sizes = "Adult S, Adult M, Adult L"
    pattern.body = <<~TEXT
      Cast on 24 (28, 32) stitches and join in the round.
      Work 1x1 rib for 2.5 (3, 3.5) inches.
      Knit 3 rounds.
      Work the gusset increase 3 (4, 5) times, until you have 9 (11, 13) gusset stitches.
      Place the gusset stitches on waste yarn.
      Knit until the hand measures 3.25 (3.75, 4.25) inches.
    TEXT
  end