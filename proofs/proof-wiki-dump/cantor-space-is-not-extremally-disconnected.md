theorem Cantor_Space_Not_Extremally_Disconnected() {
  let T = (𝕔, τ_d) →
  assert(
    ¬(T is_extremally_disconnected)
  )
} ↔

proof Cantor_Space_Not_Extremally_Disconnected() {
  apply(Cantor_Space_Separation_Axioms()) →
  assert(T is_T2_space) →
  
  setVar(q = 1/4 = 0.020202...₃) →
  
  define(C₁ = 𝕔 ∩ (0,1/4)_open) →
  define(C₂ = 𝕔 ∩ (1/4,1)_open) →
  
  assert(C₁ ∩ C₂ = ∅) ∧
  assert(C₁, C₂ are_open_in T) →
  
  assert(q ∈ 𝕔) →
  assert(q ∈ closure(C₁)) ∧
  assert(q ∈ closure(C₂)) →
  
  conclude(closure(C₁) ∩ closure(C₂) ≠ ∅) →
  
  lemma Extremally_Disconnected_Criterion() {
    assert(
      X is_extremally_disconnected ↔
      ∀A,B(A,B are_open ∧ A∩B = ∅ → closure(A)∩closure(B) = ∅)
    )
  } →
  
  apply(Extremally_Disconnected_Criterion()) →
  conclude(¬(T is_extremally_disconnected))
}