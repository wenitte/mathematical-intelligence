theorem Cancellable_Elements_Form_Submonoid() {
  assert(
    ∀M = ⟨S,∘⟩ [monoid] →
    ∃C [set of cancellable elements of M] →
    (C forms a submonoid of M)
  )
} ↔

proof Cancellable_Elements_Form_Submonoid() {
  setVar(M: monoid) →
  setVar(S: set) →
  setVar(∘: binary_operation) →
  setVar(C: set) →
  setVar(eₛ: identity_element) →
  
  assert(C ⊆ S) →
  
  lemma Cancellable_Elements_Form_Subsemigroup() {
    assert(⟨C,∘⟩ forms subsemigroup of S)
  } →
  
  lemma Identity_Is_Cancellable() {
    assert(eₛ is cancellable in M)
  } →
  
  apply(Identity_Is_Cancellable()) →
  assert(eₛ ∈ C) →
  
  assert(
    ∀x ∈ C →
    (x ∘ eₛ = x) ∧
    (eₛ ∘ x = x)
  ) →
  
  assert(eₛ is identity of ⟨C,∘⟩) →
  assert(⟨C,∘⟩ is monoid) →
  assert(C ⊆ S) →
  
  conclude(C forms submonoid of M)
}