theorem BasisTestForLimitPoint() {
  assert(
    ∀T(TopologicalSpace(T)) ∧
    ∀𝔹(SyntheticBasis(𝔹, T)) ∧
    ∀H(Subset(H, Space(T))) ∧
    ∀x(Element(x, Space(T))) ↔
    [LimitPoint(x, H) ↔ ∀U(Element(U, 𝔹) ∧ Element(x, U) → 
      NotEmpty(Intersection(H, Difference(U, Singleton(x)))))]
  )
}

proof BasisTestForLimitPoint() {
  // Necessary Condition
  block NecessaryCondition() {
    assume(LimitPoint(x, H)) →
    assert(∀U(Element(U, τ) ∧ Element(x, U) → 
      NotEmpty(Intersection(H, Difference(U, Singleton(x)))))) →
    assert(Subset(𝔹, τ)) →
    conclude(∀U(Element(U, 𝔹) ∧ Element(x, U) → 
      NotEmpty(Intersection(H, Difference(U, Singleton(x))))))
  }

  // Sufficient Condition
  block SufficientCondition() {
    assume(∀U(Element(U, 𝔹) ∧ Element(x, U) → 
      NotEmpty(Intersection(H, Difference(U, Singleton(x)))))) →
    setVar(V: OpenSet(T)) →
    assume(Element(x, V)) →
    
    lemma SyntheticBasisProperty() {
      assert(∃U(Element(U, 𝔹) ∧ Element(x, U) ∧ Subset(U, V)))
    } →
    
    apply(SyntheticBasisProperty()) →
    letVar(U: satisfies(SyntheticBasisProperty())) →
    assert(NotEmpty(Intersection(H, Difference(U, Singleton(x))))) →
    
    lemma SubsetDisjoint() {
      assert(Subset(U, V) → 
        NotEmpty(Intersection(H, Difference(U, Singleton(x)))) →
        NotEmpty(Intersection(H, Difference(V, Singleton(x)))))
    } →
    
    apply(SubsetDisjoint()) →
    conclude(LimitPoint(x, H))
  }
}