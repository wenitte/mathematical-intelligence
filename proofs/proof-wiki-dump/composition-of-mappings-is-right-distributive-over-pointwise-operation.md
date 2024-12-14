theorem Composition_Right_Distributive() {
  assert(
    ∀A,B: Set, ∀S: AlgebraicStructure, ∀⊙: Operation(S) ⇒
    ∀f,g ∈ S^B, ∀h ∈ B^A ⇒
    (f ⊙ g) ∘ h = (f ∘ h) ⊙ (g ∘ h)
  )
} ↔

proof Composition_Right_Distributive() {
  // Domain and codomain validation
  lemma Domain_Codomain_Check() {
    assert(dom(h) = A ∧ codom(h) = B) →
    assert(dom(f) = dom(g) = B) →
    assert(codom(f) = codom(g) = S) →
    assert(
      dom((f ⊙ g) ∘ h) = A ∧
      dom(f ⊙ g) = B ∧
      codom(f ⊙ g) = S ∧
      codom((f ⊙ g) ∘ h) = S
    ) →
    assert(
      dom(f ∘ h) = dom(g ∘ h) = A ∧
      codom(f ∘ h) = codom(g ∘ h) = S ∧
      dom((f ∘ h) ⊙ (g ∘ h)) = A ∧
      codom((f ∘ h) ⊙ (g ∘ h)) = S
    )
  } →

  // Main proof
  setVar(a: A) →
  setVar(b: B, b = h(a)) →
  assert(((f ⊙ g) ∘ h)(a) = (f ⊙ g)(h(a))) by CompositeMapping() →
  assert((f ⊙ g)(h(a)) = (f ⊙ g)(b)) by SubstitutionOfEquals() →
  assert((f ⊙ g)(b) = f(b) ⊙ g(b)) by PointwiseOperation() →
  assert(f(b) ⊙ g(b) = f(h(a)) ⊙ g(h(a))) by SubstitutionOfEquals() →
  assert(f(h(a)) ⊙ g(h(a)) = (f ∘ h)(a) ⊙ (g ∘ h)(a)) by CompositeMapping() →
  assert((f ∘ h)(a) ⊙ (g ∘ h)(a) = ((f ∘ h) ⊙ (g ∘ h))(a)) by PointwiseOperation() →
  assert(∀a ∈ A ⇒ ((f ⊙ g) ∘ h)(a) = ((f ∘ h) ⊙ (g ∘ h))(a)) →
  conclude((f ⊙ g) ∘ h = (f ∘ h) ⊙ (g ∘ h)) by EqualityOfMappings()
}