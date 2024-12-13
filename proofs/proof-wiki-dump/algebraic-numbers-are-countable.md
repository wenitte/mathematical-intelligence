theorem AlgebraicNumbers_Are_Countable() {
  assert(
    let ℂ be complex numbers,
    let ℚ be rational numbers,
    let 𝔸 be algebraic numbers,
    (𝔸 ⊆ ℂ) ∧ (𝔸 is countable)
  )
} ↔

proof AlgebraicNumbers_Are_Countable() {
  define(𝔸 := {x ∈ ℂ : ∃p ∈ ℚ[x], p(x) = 0}) →
  
  lemma Polynomial_Set_Countable() {
    assert(ℚ[x] is countable)
  } →
  
  apply(Polynomial_Set_Countable()) →
  
  let R(p) := {x ∈ ℂ : p(x) = 0} →
  
  assert(𝔸 = ⋃{R(p) : p ∈ ℚ[x]}) →
  
  lemma Finite_Roots() {
    assert(∀p ∈ ℚ[x], R(p) is finite)
  } →
  
  apply(Finite_Roots()) →
  
  assert(𝔸 is countable union of finite sets) →
  
  lemma Countable_Union() {
    assert(
      countable union of countable sets is countable
    )
  } →
  
  apply(Countable_Union()) →
  
  assert(𝔸 is countable)
}