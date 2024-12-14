theorem CompositeWithInverseIsIdentity() {
  assert(
    ∀A,B: Class, ∀f,g: Mapping(A×B) ⇒
    (f ∘ g⁻¹ = IB) → (f = g)
  )
} ↔

proof CompositeWithInverseIsIdentity() {
  setVar(A,B: Class) →
  setVar(f,g: Mapping(A×B)) →
  assume(f ∘ g⁻¹ = IB) →
  
  lemma ForwardInclusion() {
    setVar(a: A, b: B) →
    assume(⟨a,b⟩ ∈ f) →
    assert(⟨b,b⟩ ∈ IB) →
    assert(⟨b,a⟩ ∈ g⁻¹) →
    apply(InverseDefinition) →
    assert(⟨a,b⟩ ∈ g) →
    conclude(f ⊆ g)
  } →

  lemma BackwardInclusion() {
    setVar(a: A, b: B) →
    assume(⟨a,b⟩ ∈ g) →
    apply(InverseDefinition) →
    assert(⟨b,a⟩ ∈ g⁻¹) →
    assert(⟨b,b⟩ ∈ IB) →
    assert(⟨a,b⟩ ∈ f) →
    conclude(g ⊆ f)
  } →

  apply(ForwardInclusion()) →
  apply(BackwardInclusion()) →
  apply(SetEqualityDefinition) →
  conclude(f = g)
}