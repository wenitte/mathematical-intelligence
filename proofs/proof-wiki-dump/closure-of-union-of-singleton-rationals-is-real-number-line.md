theorem Closure_Union_Singleton_Rationals() {
  assert(
    let(ℚ, τ_d) = RationalNumberSpace ∧
    ∀α ∈ ℚ, B_α = {α} ∧
    cl(⋃_{α∈ℚ} B_α) = ℝ
  )
} ↔

proof Closure_Union_Singleton_Rationals() {
  setDef(B_α = {α}, α ∈ ℚ) →
  assert(⋃_{α∈ℚ} B_α = ⋃_{α∈ℚ} {α}) →
  assert(⋃_{α∈ℚ} {α} = ℚ) →
  
  lemma Closure_Rationals() {
    assert(cl(ℚ) = ℝ)
  } →
  
  apply(Closure_Rationals()) →
  substitute(⋃_{α∈ℚ} B_α = ℚ) →
  assert(cl(⋃_{α∈ℚ} B_α) = cl(ℚ) = ℝ)
}