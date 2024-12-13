theorem Cantor_Space_Nowhere_Dense() {
  assert(
    let T = (𝒞, τ_d) be Cantor_Space ∧
    𝒞 is_nowhere_dense_in [0,1]
  )
} ↔

proof Cantor_Space_Nowhere_Dense() {
  apply(Cantor_Set_Is_Closed()) →
  assert(𝒞⁻ = 𝒞) →
  
  setVar(a,b ∈ ℝ) →
  assume(0 ≤ a < b ≤ 1) →
  let(I = (a,b)) →
  let(ε = b - a) →
  assert(ε > 0) →
  
  setVar(n ∈ ℕ) →
  assume(3⁻ⁿ < ε) →
  
  lemma Interval_Contains_Deleted_Point() {
    assert(
      ∃x ∈ (a,b): x ∉ 𝒞 ∧
      ∃δ > 0: (x-δ, x+δ) ∩ 𝒞 = ∅
    )
  } →
  
  apply(Interval_Contains_Deleted_Point()) →
  
  conclude(
    ∀I open_in [0,1]:
      ∃J open_in I: J ∩ 𝒞 = ∅
  ) →
  
  apply(Nowhere_Dense_Definition()) →
  assert(𝒞 is_nowhere_dense_in [0,1])
}