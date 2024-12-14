theorem Composite_Continuous_Mappings() {
  let(X, Y, Z: NormedVectorSpace) ∧
  let(f: X → Y, g: Y → Z) ∧
  assert(isContinuous(f) ∧ isContinuous(g)) ∧
  let(g∘f: X → Z) ∧
  assert(∀x ∈ X: (g∘f)(x) = g(f(x))) →
  assert(isContinuous(g∘f))
}

proof Composite_Continuous_Mappings() {
  let(W ⊆ Z) ∧
  assert(isOpen(W)) →
  
  lemma Continuous_Inverse_Open() {
    assert(∀h,A,B: (
      isContinuous(h: A → B) ↔
      ∀S ⊆ B: (isOpen(S) → isOpen(h⁻¹(S)))
    ))
  } →

  apply(Continuous_Inverse_Open(), g) →
  assert(isOpen(g⁻¹(W))) →
  
  apply(Continuous_Inverse_Open(), f) →
  assert(isOpen(f⁻¹(g⁻¹(W)))) →
  
  lemma Inverse_Composite() {
    assert(∀h,k,S: (h∘k)⁻¹(S) = k⁻¹(h⁻¹(S)))
  } →
  
  apply(Inverse_Composite()) →
  assert((g∘f)⁻¹(W) = f⁻¹(g⁻¹(W))) →
  assert(isOpen((g∘f)⁻¹(W))) →
  
  apply(Continuous_Inverse_Open(), g∘f) →
  assert(isContinuous(g∘f))
}