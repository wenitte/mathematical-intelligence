theorem Compact_Rational_Set_Is_Nowhere_Dense() {
  let(Q: Set, τd: Topology, S: Set) →
  assert(
    (Q = ℚ ∧ τd = EuclideanTopology ∧ S ⊆ Q ∧ isCompact(S)) 
    ⇒ isNowhereDense(S, Q)
  )
} ↔

proof Compact_Rational_Set_Is_Nowhere_Dense() {
  setVar(S: Set, Q: Set) →
  apply(Compact_Subspace_Of_Hausdorff_Is_Closed) →
  assert(isClosed(S, Q)) →
  apply(Set_Is_Closed_Iff_Equals_Closure) →
  assert(S = S⁻) →
  
  byContradiction() {
    assume(¬isNowhereDense(S, Q)) →
    assert(∃V: Set | (V ≠ ∅ ∧ isOpen(V) ∧ V ⊆ S⁻)) →
    apply(Euclidean_Topology_Basis) →
    apply(Topological_Subspace_Basis) →
    assert(∃a',b' ∈ ℝ | (a' < b' ∧ V = Q ∩ (a',b') ⊆ S)) →
    
    apply(Between_Reals_Exists_Irrational) →
    assert(∃r ∈ (ℝ\ℚ) | a' < r < b') →
    
    apply(Between_Reals_Exists_Rational) →
    assert(∃a,b ∈ ℚ | (a' < a < r < b < b')) →
    
    assert(isCompact(Q ∩ [a,b])) →
    
    constructOpenCover() {
      let(C = (r,b+1) ∩ Q) →
      let(Cq = {(a-1,q) ∩ Q | q ∈ (a,r) ∩ Q}) →
      let(𝓒 = {C} ∪ Cq) →
      
      assert(isOpenCover(𝓒, Q ∩ [a,b])) {
        forAll(x ∈ Q ∩ [a,b]) →
        cases() {
          case(x > r) → assert(x ∈ C)
          case(x < r) → 
            apply(Between_Reals_Exists_Rational) →
            assert(∃q ∈ Q | (a-1 < a ≤ x < q < r)) →
            assert(x ∈ Cq)
        }
      }
    } →
    
    apply(Compact_Has_Finite_Subcover) →
    assert(∃𝓒': Set | isFiniteSubcover(𝓒', 𝓒)) →
    
    let(q' = max({q | Cq ∈ 𝓒'})) →
    apply(Between_Reals_Exists_Rational) →
    assert(∃q* ∈ Q | (a < q' < q* < r < b)) →
    
    assert(q* ∉ ⋃𝓒') →
    assert(contradiction())
  } →
  
  conclude(isNowhereDense(S, Q))
}