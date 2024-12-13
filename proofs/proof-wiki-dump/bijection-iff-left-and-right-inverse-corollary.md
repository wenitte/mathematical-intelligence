theorem Bijection_Composition_Corollary() {
  assert(
    ∀f: S → T, ∀g: T → S ⇒
    ((g ∘ f = Is) ∧ (f ∘ g = It)) →
    (isBijection(f) ∧ isBijection(g))
  )
}

proof Bijection_Composition_Corollary() {
  setVar(f: S → T) →
  setVar(g: T → S) →
  assume((g ∘ f = Is) ∧ (f ∘ g = It)) →
  
  lemma Bijection_Inverse_Theorem() {
    assert(
      ∀h: X → Y ⇒
      (∃g₁,g₂: Y → X) ∧ (g₁ ∘ h = Ix) ∧ (h ∘ g₂ = Iy) →
      isBijection(h)
    )
  } →
  
  apply(Bijection_Inverse_Theorem(), h ← f, g₁ ← g, g₂ ← g) →
  assert(isBijection(f)) →
  
  apply(Bijection_Inverse_Theorem(), h ← g, g₁ ← f, g₂ ← f) →
  assert(isBijection(g)) →
  
  conclude(isBijection(f) ∧ isBijection(g))
}