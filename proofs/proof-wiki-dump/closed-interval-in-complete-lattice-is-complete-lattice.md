theorem ClosedIntervalCompleteLattice() {
  let(L: CompleteLattice, ≺: OrderRelation) →
  let(a,b ∈ L: Element | a ≺ b) →
  let(I = [a,b]: ClosedInterval) →
  assert(
    ⟨I,≺⟩ is CompleteLattice
  )
} ↔

proof ClosedIntervalCompleteLattice() {
  let(S ⊆ I: Subset) →
  
  case EmptySet() {
    assume(S = ∅) →
    assert(sup(S,I) = a ∧ inf(S,I) = b)
  } →
  
  case NonEmptySet() {
    assume(S ≠ ∅) →
    assert(a is LowerBound(S) ∧ b is UpperBound(S)) →
    
    let(p = inf(S,L), q = sup(S,L)) →
    assert(
      a ≺ p ∧ q ≺ b
    ) →
    
    forall(x ∈ S) {
      assert(p ≺ x) →  // inf property
      assert(x ≺ q)     // sup property
    } →
    
    lemma TransitiveChaining() {
      assert(p,q ∈ I) ↔
      assert(a ≺ p ≺ b ∧ a ≺ q ≺ b)
    } →
    
    apply(TransitiveChaining()) →
    assert(p = inf(S,I) ∧ q = sup(S,I)) →
    assert(∀S⊆I: ∃inf(S,I),sup(S,I))
  }
} 

conclude(
  ⟨I,≺⟩ is CompleteLattice
)