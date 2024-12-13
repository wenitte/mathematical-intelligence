theorem ArithmeticIffWayBelowMultiplicative() {
  let(L: BoundedBelowAlgebraicLattice) {
    assert(
      L.isArithmetic() ↔ L.wayBelowRelation().isMultiplicative()
    )
  }
} ↔

proof ArithmeticIffWayBelowMultiplicative() {
  // Sufficient Condition (→)
  proof_forward() {
    assume(L.isArithmetic()) →
    let(a,x,y ∈ L.S) →
    assume(a ≪ x ∧ a ≪ y) →
    
    lemma CompactElements() {
      by(AlgebraicIffContinuous) →
      by(WayBelowExistsCompactBetween) →
      assert(∃c ∈ K(L): a ⪯ c ⪯ x) ∧
      assert(∃k ∈ K(L): a ⪯ k ⪯ y)
    } →

    apply(MeetSemilatticeOrderedStructure) →
    assert(c ∧ k ⪯ x ∧ y) →
    
    by(L.isArithmetic()) →
    assert(K(L).isMeetClosed()) →
    assert(c ∧ k ∈ K(L)) →
    
    by(CompactDefinition) →
    assert(c ∧ k ≪ c ∧ k) →
    
    by(MeetIdempotent) →
    assert(a ∧ a = a) →
    
    by(MeetSemilatticeOrderedStructure) →
    assert(a ⪯ c ∧ k) →
    
    by(PrecedingAndWayBelow) →
    assert(a ≪ x ∧ y)
  }

  // Necessary Condition (←)
  proof_backward() {
    assume(L.wayBelowRelation().isMultiplicative()) →
    assert(L.isAlgebraic()) →
    
    lemma ProveKLMeetClosed() {
      let(x,y ∈ K(L)) →
      by(CompactDefinition) →
      assert(x ≪ x ∧ y ≪ y) →
      
      by(WayBelowRelationIsAuxiliary) →
      by(MultiplicativeAuxiliaryRelationIffCongruent) →
      assert(x ∧ y ≪ x ∧ y) →
      
      by(CompactDefinition) →
      assert(x ∧ y ∈ K(L))
    } →
    
    assert(K(L).isMeetClosed()) →
    assert(L.isArithmetic())
  }
}