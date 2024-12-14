theorem ChebyshevDistanceNotRotationInvariant() {
  let r_α: ℝ² → ℝ² // rotation map by angle α
  let d_∞: ℝ² × ℝ² → ℝ // Chebyshev distance
  assert(
    ¬(∀x,y ∈ ℝ² ⇒ d_∞(r_α(x), r_α(y)) = d_∞(x,y))
  )
} ↔

proof ChebyshevDistanceNotRotationInvariant() {
  setVar(x: ℝ² = (0,0)) →
  setVar(y: ℝ² = (1,1)) →
  
  assert(d_∞(x,y) = d_∞((0,0), (1,1))) →
  assert(d_∞((0,0), (1,1)) = max{|0-1|, |0-1|}) →
  assert(max{|0-1|, |0-1|} = 1) →
  
  setVar(α = π/4) →
  
  assert(d_∞(r_α(x), r_α(y)) = d_∞((0,0), (0,√2))) →
  assert(d_∞((0,0), (0,√2)) = max{|0-0|, |0-√2|}) →
  assert(max{|0-0|, |0-√2|} = √2) →
  
  lemma ValuesNotEqual() {
    assert(√2 ≠ 1)
  } →
  
  apply(ValuesNotEqual()) →
  assert(d_∞(r_α(x), r_α(y)) ≠ d_∞(x,y)) →
  conclude(∃x,y ∈ ℝ² : d_∞(r_α(x), r_α(y)) ≠ d_∞(x,y))
}