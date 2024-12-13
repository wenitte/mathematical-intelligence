theorem Antiassociative_Structure_Finite_Order() {
  assert(
    ∀n ∈ ℕ, n > 2 →
    ∃S,∃∘ [
      |S| = n ∧
      ∀x,y,z ∈ S: (x ∘ y) ∘ z ≠ x ∘ (y ∘ z)
    ]
  )
} ↔

proof Antiassociative_Structure_Finite_Order() {
  setVar(n: ℕ, n > 2) →
  construct(S = {a₀, ..., a_{n-1}}) →
  define(∘: S × S → S) {
    ∀x ∈ S, ∀i ∈ [0,n-1]:
    x ∘ aᵢ = a_{(i+1) mod n}
  } →
  
  lemma Composition_Left() {
    assert(
      ∀j,k,m ∈ [0,n-1]:
      (aⱼ ∘ aₖ) ∘ aₘ = a_{(m+1) mod n}
    )
  } →
  
  lemma Composition_Right() {
    assert(
      ∀j,k,m ∈ [0,n-1]:
      aⱼ ∘ (aₖ ∘ aₘ) = a_{(m+2) mod n}
    )
  } →
  
  assert(n > 2 → ∀m: (m+1) mod n ≠ (m+2) mod n) →
  
  conclude(
    ∀j,k,m ∈ [0,n-1]:
    (aⱼ ∘ aₖ) ∘ aₘ ≠ aⱼ ∘ (aₖ ∘ aₘ)
  )
}