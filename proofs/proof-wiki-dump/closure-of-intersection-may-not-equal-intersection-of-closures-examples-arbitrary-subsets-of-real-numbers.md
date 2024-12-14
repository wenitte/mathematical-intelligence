theorem DifferentClosures() {
  assert(
    ∀H,K ⊆ ℝ where
    H = (0,2) ∪ (3,4) ∧
    K = (1,3) →
    cl(H) ≠ H ∩ cl(K) ≠ cl(H) ∩ K ≠ cl(H) ∩ cl(K) ≠ cl(H ∩ K)
  )
} ↔

proof DifferentClosures() {
  setVar(H: (0,2) ∪ (3,4)) →
  setVar(K: (1,3)) →
  
  lemma ClosureH() {
    assert(cl(H) = [0,2] ∪ [3,4])
  } →
  
  lemma ClosureK() {
    assert(cl(K) = [1,3])
  } →
  
  apply(SetIntersection) → {
    assert(H ∩ cl(K) = ((0,2) ∪ (3,4)) ∩ [1,3]) →
    assert(H ∩ cl(K) = (1,2])
  } →
  
  apply(SetIntersection) → {
    assert(cl(H) ∩ K = ([0,2] ∪ [3,4]) ∩ (1,3)) →
    assert(cl(H) ∩ K = [1,2))
  } →
  
  apply(SetIntersection) → {
    assert(cl(H) ∩ cl(K) = ([0,2] ∪ [3,4]) ∩ [1,3]) →
    assert(cl(H) ∩ cl(K) = [1,2] ∪ {3})
  } →
  
  apply(ClosureIntersection) → {
    assert(cl(H ∩ K) = cl((0,2) ∩ (1,3)) →
    assert(cl(H ∩ K) = cl((1,2))) →
    assert(cl(H ∩ K) = [1,2])
  } →
  
  assert((1,2] ≠ [1,2) ≠ [1,2] ∪ {3} ≠ [1,2])
}