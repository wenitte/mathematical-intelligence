theorem Alexandroff_Extension_Connected() {
  let(Q: TopologicalSpace, τ_d: EuclideanTopology) →
  let(p ∉ Q) →
  let(Q*: Set = Q ∪ {p}) →
  let(T* = ⟨Q*, τ*⟩: AlexandroffExtension(⟨Q, τ_d⟩)) →
  assert(
    isConnected(T*)
  )
} ↔

proof Alexandroff_Extension_Connected() {
  assert(isConnected(T*) ↔ ¬∃(A,B: Set)[isSeparation(A,B,T*)]) →
  
  assume(∃(A,B: Set)[isSeparation(A,B,T*)]) →
  assert(A,B ∈ τ* ∧ A,B ≠ ∅ ∧ A ∪ B = Q* ∧ A ∩ B = ∅) →
  assert(B = Q* \ A) →
  
  assumeWLOG(p ∈ A) →
  assert(B ⊆ Q ∧ isClosed(B) ∧ isCompact(B)) →
  
  lemma Compact_Rational_Nowhere_Dense() {
    assert(isCompact(B) ∧ B ⊆ Q → isNowhereDense(B))
  } →
  apply(Compact_Rational_Nowhere_Dense()) →
  
  lemma Closed_Equals_Closure() {
    assert(isClosed(B) ↔ B = closure(B))
  } →
  apply(Closed_Equals_Closure()) →
  
  assert(isNowhereDense(B) → interior(B) = ∅) →
  
  assert(isOpen(B,T*) ∧ p ∉ B → isOpen(B,⟨Q,τ_d⟩)) →
  
  lemma Interior_Of_Open() {
    assert(isOpen(B) → B = interior(B))
  } →
  apply(Interior_Of_Open()) →
  
  assert(B = interior(B) ∧ interior(B) = ∅ → B = ∅) →
  assert(B = ∅ → ¬isSeparation(A,B,T*)) →
  
  conclude(¬∃(A,B: Set)[isSeparation(A,B,T*)]) →
  conclude(isConnected(T*))
}