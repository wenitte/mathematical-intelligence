theorem Rational_Interval_Closure() {
  assert(
    ∀a,b ∈ ℝ, a < b →
    let ℝ_τ = (ℝ, τ_d) ∧
    let ℚ_τ = (ℚ, τ_d) ∧
    let I ⊆ ℝ be_interval →
    (I ∩ ℚ)⁻ = [a,b]
  )
} ↔

proof Rational_Interval_Closure() {
  setVar(a,b: ℝ) →
  assume(a < b) →
  setVar(I: open_interval(ℝ)) →
  
  lemma Real_Interval_Closure() {
    assert(I⁻ = [a,b])
  } →
  
  lemma Rational_Closure() {
    assert(ℚ⁻ = ℝ)
  } →
  
  lemma Intersection_Closure() {
    assert(∀A,B: (A ∩ B)⁻ ⊆ A⁻ ∩ B⁻)
  } →
  
  apply(Intersection_Closure()) →
  assert((I ∩ ℚ)⁻ ⊆ I⁻ ∩ ℚ⁻) →
  
  apply(Real_Interval_Closure(), Rational_Closure()) →
  assert(I⁻ ∩ ℚ⁻ = [a,b] ∩ ℝ) →
  assert([a,b] ∩ ℝ = [a,b]) →
  assert((I ∩ ℚ)⁻ ⊆ [a,b]) →
  
  lemma Rationals_Dense() {
    assert(∀x,y ∈ ℝ, x < y → [x,y] ⊆ (I ∩ ℚ)⁻)
  } →
  
  apply(Rationals_Dense()) →
  assert([a,b] ⊆ (I ∩ ℚ)⁻) →
  
  conclude((I ∩ ℚ)⁻ = [a,b])
}