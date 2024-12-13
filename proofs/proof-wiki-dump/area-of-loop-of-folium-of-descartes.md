theorem Area_Folium_Descartes() {
  let F = {(x,y) | x = (3at)/(1+t³), y = (3at²)/(1+t³), t ∈ ℝ} →
  let A = area(loop(F)) →
  assert(A = (3a²)/2)
} ↔

proof Area_Folium_Descartes() {
  setVar(t: ℝ, a: ℝ) →
  assert(loop_bounds: 0 ≤ t < ∞) →

  lemma Convert_To_Polar() {
    let r² = x² + y² →
    substitute(x,y) →
    assert(r² = (9a²t²(1+t²))/(1+t³)²) ∧
    assert(tan(θ) = y/x = t) →
    assert(θ = arctan(t)) →
    assert(dθ/dt = 1/(1+t²))
  } →

  lemma Area_Calculation() {
    assert(A = (1/2)∫r²dθ) →
    substitute(r²,dθ) →
    assert(A = (1/2)∫[0,∞]((9a²t²(1+t²))/(1+t³)²)(1/(1+t²))dt) →
    simplify() →
    assert(A = (3a²/2)∫[0,∞](3t²/(1+t³)²)dt)
  } →

  lemma Substitution() {
    let u = 1 + t³ →
    assert(du/dt = 3t²) →
    assert(t=0 → u=1) ∧
    assert(t→∞ → u→∞) →
    substitute(t→u) →
    assert(A = (3a²/2)∫[1,∞](du/u²))
  } →

  apply(Convert_To_Polar()) →
  apply(Area_Calculation()) →
  apply(Substitution()) →
  
  assert(A = (3a²/2)[-1/u]₁^∞) →
  evaluate() →
  assert(A = (3a²/2)(0 - (-1))) →
  assert(A = (3a²)/2)
}