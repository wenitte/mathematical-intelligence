theorem Map_Composition_Left_Distributive() {
  assert(
    ∀A:Set, ∀S,T:AlgebraicStructure, ∀f:Homomorphism(S→T), ∀g,h∈S^A ⇒
    f ∘ (g ⊙ h) = (f ∘ g) ⊗ (f ∘ h)
    where (
      S^A := {x | x:Mapping(A→S)},
      ⊙ := PointwiseOperation(S),
      ⊗ := PointwiseOperation(T)
    )
  )
} ↔

proof Map_Composition_Left_Distributive() {
  setDomain(g,h: A) ∧
  setCodomain(g,h: S) ∧
  setDomain(f: S) ∧
  setCodomain(f: T) →
  
  lemma Domain_Codomain_Check() {
    assert(
      domain(g ⊙ h) = A ∧
      codomain(g ⊙ h) = S ∧
      domain(f ∘ (g ⊙ h)) = A ∧
      codomain(f ∘ (g ⊙ h)) = T ∧
      domain(f ∘ g) = domain(f ∘ h) = A ∧
      codomain(f ∘ g) = codomain(f ∘ h) = T ∧
      domain((f ∘ g) ⊗ (f ∘ h)) = A ∧
      codomain((f ∘ g) ⊗ (f ∘ h)) = T
    )
  } →

  setVar(a: A) →
  setVar(b := g(a): S) →
  setVar(c := h(a): S) →
  
  assert((f ∘ (g ⊙ h))(a)) →
  apply(CompositeDef) → assert(f((g ⊙ h)(a))) →
  apply(PointwiseOpDef) → assert(f(g(a) ⊙ h(a))) →
  apply(SubstitutionRule) → assert(f(b ⊙ c)) →
  apply(HomomorphismProperty) → assert(f(b) ⊗ f(c)) →
  apply(SubstitutionRule) → assert(f(g(a)) ⊗ f(h(a))) →
  apply(CompositeDef) → assert((f ∘ g)(a) ⊗ (f ∘ h)(a)) →
  apply(PointwiseOpDef) → assert(((f ∘ g) ⊗ (f ∘ h))(a)) →
  
  apply(EqualityOfMappings) →
  conclude(f ∘ (g ⊙ h) = (f ∘ g) ⊗ (f ∘ h))
}