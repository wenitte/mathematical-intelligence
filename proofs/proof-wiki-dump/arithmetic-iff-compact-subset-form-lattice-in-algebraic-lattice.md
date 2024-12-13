theorem ArithmeticCompactLattice() {
  assert(
    let L = ⟨S,∨,∧,⪯⟩ be bounded_below(algebraic_lattice) ↔
    (is_arithmetic(L) ↔ is_lattice(⟨K(L),⪯⟩)) ∧
    K(L) = compact_subset(L) ∧
    ⪯ = ⪯ ∩ (K(L) × K(L))
  )
}

proof ArithmeticCompactLattice() {
  // Sufficient Condition
  proof Sufficient() {
    setVar(K = ⟨K(L),⪯⟩) →
    setVar(x,y ∈ K(L)) →
    apply(CompactSubsetJoinSemilattice()) →
    assert(x ∨_L y ∈ K(L)) →
    
    proof UpperBoundProof() {
      setVar(z ∈ {x,y}) →
      apply(JoinSucceedsOperands()) →
      assert(z ⪯ x ∨_L y) →
      assert(z ⪯ x ∨_L y)
    } →

    proof SupremumProof() {
      setVar(z ∈ K(L)) →
      assume(is_upperbound(z,{x,y},K)) →
      assert(is_upperbound(z,{x,y},L)) →
      apply(supremum_def()) →
      assert(x ∨_L y ⪯ z) →
      assert(x ∨_L y ⪯ z)
    } →
    
    assert(exists_supremum({x,y},K)) →
    assert(exists_infimum({x,y},K)) →
    assert(is_lattice(K))
  } →

  // Necessary Condition
  proof Necessary() {
    assume(is_lattice(K)) →
    assert(is_algebraic(L)) →
    
    setVar(x,y ∈ K(L)) →
    setVar(X = (inf_L{x,y})^compact) →
    
    apply(K_approximation_axiom()) →
    assert(inf_L{x,y} = sup_L(X)) →
    
    proof CompactClosureIntersection() {
      setVar(z ∈ X) →
      assert(z ⪯ inf_L{x,y} ∧ is_compact(z)) →
      assert(z ⪯ x ∧ z ⪯ y) →
      assert(z ∈ x^compact ∧ z ∈ y^compact) →
      assert(z ∈ (x^compact ∩ y^compact))
    } →
    
    apply(CompactClosureIntersection()) →
    assert(X = (inf_L{x,y})^⪯ ∩ K(L)) →
    assert(X ⊆ K(L)) →
    
    proof UpperBoundX() {
      setVar(z ∈ X) →
      assert(z ⪯ x ∧ z ⪯ y) →
      assert(z ⪯ inf_K{x,y})
    } →
    
    assert(sup_L{x,y} ⪯ inf_K{x,y}) →
    assert(x ⪯ sup_K{x,y} ∧ y ⪯ sup_K{x,y}) →
    assert(sup_K{x,y} = sup_L{x,y}) →
    assert(x ∧_L y ∈ K(L))
  }
}