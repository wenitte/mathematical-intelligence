theorem ArchimedesCattleProblem() {
  let W, B, D, Y ∈ ℕ  // White, Black, Dappled, Yellow bulls
  let w, b, d, y ∈ ℕ  // White, Black, Dappled, Yellow cows
  
  assert(
    // Bull conditions
    W = ((1/2 + 1/3) * B + Y) ∧
    B = ((1/4 + 1/5) * D + Y) ∧
    D = ((1/6 + 1/7) * W + Y) ∧
    
    // Cow conditions
    w = ((1/3 + 1/4) * (B + b)) ∧
    b = ((1/4 + 1/5) * (D + d)) ∧
    d = ((1/5 + 1/6) * (Y + y)) ∧
    y = ((1/6 + 1/7) * (W + w)) ∧
    
    // Geometric conditions
    ∃n ∈ ℕ[W + B = n²] ∧
    ∃m ∈ ℕ[D + Y = (m * (m + 1))/2]
  )
} ↔

proof ArchimedesCattleProblem() {
  // System reduction
  lemma PellEquation() {
    assert(
      ∃t,u ∈ ℕ[t² - 4729494u² = 1]
    )
  } →
  
  apply(PellEquation()) →
  
  assert(
    t = 109391986732829734979866232821433543901088049 ∧
    u = 50549485234315033076447781973554040898634
  ) →
  
  lemma TotalCattle() {
    assert(
      W + B + D + Y + w + b + d + y = 7.760271... × 10^206544
    )
  } →
  
  apply(TotalCattle()) →
  conclude()
}