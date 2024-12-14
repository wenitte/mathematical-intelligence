theorem CompositeEndomorphism() {
  assert(
    ∀S ∧ ∀{⊙₁,...,⊙ₙ} ∧
    ∀φ,ψ: (S,{⊙₁,...,⊙ₙ}) → (S,{⊙₁,...,⊙ₙ}) ∧
    isEndomorphism(φ) ∧ isEndomorphism(ψ) 
    ⇒ isEndomorphism(ψ ∘ φ)
  )
} ↔

proof CompositeEndomorphism() {
  setStruct(S, {⊙₁,...,⊙ₙ}) →
  setMap(φ: S → S) →
  setMap(ψ: S → S) →
  
  assert(isEndomorphism(φ) ∧ isEndomorphism(ψ)) →
  
  lemma CompositeHomomorphism() {
    assert(
      isHomomorphism(φ) ∧ isHomomorphism(ψ) 
      ⇒ isHomomorphism(ψ ∘ φ)
    )
  } →
  
  apply(CompositeHomomorphism()) →
  assert(isHomomorphism(ψ ∘ φ)) →
  
  assert((ψ ∘ φ): S → S) →
  
  assert(
    isHomomorphism(ψ ∘ φ) ∧ 
    (ψ ∘ φ): S → S
    ⇒ isEndomorphism(ψ ∘ φ)
  )
}