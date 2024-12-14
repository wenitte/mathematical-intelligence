theorem Broken_Bamboo() {
  assert(
    ∀bamboo ∈ ℝ: height = 10 ∧ tip_distance = 3 →
    break_height = 4 11/20
  )
} ↔

proof Broken_Bamboo() {
  setVar(x: ℝ, break_height) →
  setVar(broken_section: ℝ, 10 - x) →
  
  lemma Right_Triangle() {
    assert(
      hypotenuse = broken_section ∧
      adjacent = x ∧
      opposite = 3
    )
  } →

  apply(Pythagorean_Theorem) →
  assert((10 - x)² = x² + 3²) →
  
  expand() →
  assert(100 - 20x + x² = x² + 9) →
  
  simplify() →
  assert(100 - 20x = 9) →
  assert(20x = 91) →
  assert(x = 91/20) →
  assert(x = 4 11/20) →
  
  conclude(break_height = 4 11/20)
}