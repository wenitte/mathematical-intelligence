theorem NotRealStarAlgebra() {
  let(A: *-algebra) ∧
  let(A': CayleyDicksonConstruction(A)) →
  assert(¬(A': real_*-algebra))
}

proof NotRealStarAlgebra() {
  let(*: ConjugationOperator(A)) ∧
  assume(*': ConjugationOperator(A')) →
  
  byContradiction() {
    assume(A': real_*-algebra) →
    assert(∀a ∈ A': (a^*') = a) →
    
    let(a = ⟨x,y⟩: A') →
    assertByDef(x,y ∈ A) ∧
    assertByDef(⟨x,y⟩^* = ⟨x^*,-y⟩) →
    
    lemma EqualityPairs() {
      assert((a^*' = a) → (x = x^* ∧ y = -y))
    } →
    
    apply(EqualityPairs()) →
    assert(y = 0) →
    
    lemma DivisionAlgebraProperty() {
      assert(A': unitary_division_algebra) →
      assert(∃y ∈ A: y = 1) →
      assert(1 ≠ 0)
    } →
    
    apply(DivisionAlgebraProperty()) →
    assert(contradiction()) →
    assert(¬(A': real_*-algebra))
  }
}