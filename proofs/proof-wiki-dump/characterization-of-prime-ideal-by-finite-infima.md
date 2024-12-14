theorem PrimeIdealCharacterization() {
  let(L: MeetSemilattice(S, ∧, ≼)) →
  let(I: Ideal(L)) →
  assert(
    isPrimeIdeal(I) ↔ 
    ∀A ⊆ S: (isFinite(A) ∧ A ≠ ∅) → (inf(A) ∈ I → ∃a ∈ A: a ∈ I)
  )
}

proof PrimeIdealCharacterization() {
  // Sufficient Condition
  lemma SufficientCondition() {
    assume(isPrimeIdeal(I)) →
    let(P(X) := X ≠ ∅ ∧ inf(X) ∈ I → ∃x ∈ X: x ∈ I) →
    let(A: Subset(S)) →
    assume(isFinite(A) ∧ A ≠ ∅) →
    
    // Induction base
    assert(P(∅)) →
    
    // Induction step
    ∀x ∈ A, ∀B ⊆ A: (
      P(B) → P(B ∪ {x})
    ) →
    
    case(B = ∅) {
      assert(B ∪ {x} = {x}) →
      assert(inf({x}) = x) →
      assert(x ∈ {x}) →
      conclude(∃a ∈ B ∪ {x}: a ∈ I)
    } →
    
    case(B ≠ ∅) {
      assert(isFinite(B)) →
      assert(∃inf(B)) →
      assert(inf(B ∪ {x}) = inf(B) ∧ x) →
      apply(PrimeIdealProperty(I)) →
      assert(inf(B) ∈ I ∨ x ∈ I) →
      conclude(∃a ∈ B ∪ {x}: a ∈ I)
    } →
    
    apply(FiniteInduction(A, P)) →
    conclude(P(A))
  }

  // Necessary Condition
  lemma NecessaryCondition() {
    assume(∀A ⊆ S: (isFinite(A) ∧ A ≠ ∅) → (inf(A) ∈ I → ∃a ∈ A: a ∈ I)) →
    let(x, y: Element(S)) →
    assume(x ∧ y ∈ I) →
    assert(isFinite({x, y})) →
    assert({x, y} ≠ ∅) →
    assert(inf({x, y}) = x ∧ y) →
    apply(assumption({x, y})) →
    conclude(x ∈ I ∨ y ∈ I) →
    conclude(isPrimeIdeal(I))
  }

  apply(SufficientCondition()) →
  apply(NecessaryCondition()) →
  conclude()
}