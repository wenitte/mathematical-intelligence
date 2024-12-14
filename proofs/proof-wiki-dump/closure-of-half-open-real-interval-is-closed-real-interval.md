theorem ClosureHalfOpenInterval() {
  assert(
    ∀a,b ∈ ℝ (a < b) ⇒
    let H₁ = [a,b), H₂ = (a,b] ⇒
    closure(H₁) = [a,b] ∧ closure(H₂) = [a,b]
  )
} ↔

proof ClosureHalfOpenInterval() {
  setVar(a,b: ℝ) →
  assume(a < b) →
  define(H⁻: "closure of set H in ℝ") →
  define(A := (a,b)) →
  
  assert(A ⊆ H₁ ∧ A ⊆ H₂) →
  
  lemma ClosureOpenInterval() {
    assert((a,b)⁻ = [a,b])
  } →
  
  apply(ClosureOpenInterval()) →
  assert([a,b] = smallest_closed_set(contains(A))) →
  
  assert(H₁ ⊆ [a,b] ∧ H₂ ⊆ [a,b]) →
  
  assert(
    A ⊆ H₁ ⊆ [a,b] ∧
    A ⊆ H₂ ⊆ [a,b]
  ) →
  
  assert(
    [a,b] = smallest_closed_set(contains(H₁)) ∧
    [a,b] = smallest_closed_set(contains(H₂))
  ) →
  
  conclude(
    closure(H₁) = [a,b] ∧
    closure(H₂) = [a,b]
  )
}