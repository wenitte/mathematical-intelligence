theorem CompositionOfSymmetries() {
  define(P: GeometricFigure) →
  define(S_P: Set[Symmetry[P]]) →
  define(∘: CompositionMapping) →
  assert(
    ∀φ,ψ ∈ S_P ⇒ (φ ∘ ψ) ∈ S_P
  )
} ↔

proof CompositionOfSymmetries() {
  setVar(φ,ψ: S_P) →
  
  lemma CompositionIsMappingLemma() {
    assert(∀f,g: Mapping ⇒ (f ∘ g): Mapping)
  } →
  
  apply(CompositionIsMappingLemma()) →
  assert((φ ∘ ψ): Mapping) →
  
  lemma SymmetryDefinition() {
    assert(∀s ∈ S_P ⇒ map(s,P) ≅ P)
  } →
  
  apply(SymmetryDefinition(), φ) →
  assert(map(φ,P) ≅ P) →
  
  apply(SymmetryDefinition(), ψ) →
  assert(map(ψ,map(φ,P)) ≅ map(φ,P)) →
  
  lemma CongruenceTransitive() {
    assert(∀a,b,c: GeometricFigure ⇒ 
      (a ≅ b ∧ b ≅ c) ⇒ a ≅ c)
  } →
  
  apply(CongruenceTransitive()) →
  assert(map(ψ,map(φ,P)) ≅ P) →
  assert((φ ∘ ψ) ∈ S_P)
}