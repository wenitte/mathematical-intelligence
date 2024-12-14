theorem Closed_Linear_Subspaces_Addition() {
  let(H: HilbertSpace)
  let(M,N: ClosedLinearSubspace(H))
  assert(
    M + N ∈ ClosedLinearSubspace(H)
  )
} ↔

proof Closed_Linear_Subspaces_Addition() {
  apply(Linear_Subspaces_Closed_Under_Addition) →
  assert(M + N ∈ LinearSubspace(H)) →
  
  let(P: OrthogonalProjection(H → H, M)) →
  let(I - P: ComplementaryProjection(P)) →
  
  define(N' := {n - P(n) | n ∈ N}) →
  assert(N' ∈ ClosedLinearSubspace(H)) →
  
  forall(m ∈ M, n ∈ N) {
    assert(m + n = (m + P(n)) + (n - P(n)) ∈ M + N') →
    assert(M + N ⊆ M + N')
  } ∧
  
  forall(m ∈ M, n ∈ N') {
    assert(m + (n - P(n)) = (m - P(n)) + n ∈ M + N) →
    assert(M + N' ⊆ M + N)
  } →
  assert(M + N = M + N') →
  
  apply(Range_Of_Idempotent_Is_Kernel) →
  assert(N' ⊆ ran(I - P) = ker(P)) →
  
  apply(Properties_Of_Orthogonal_Projection) →
  assert(N' ⊆ M⊥) →
  assert(M ⊥ N') →
  
  let(P': OrthogonalProjection(H → H, N')) →
  
  forall(h ∈ M + N') {
    assert(h = (P + (I - P))h) →
    assert(h = (P + (I - P))(P' + (I - P'))h) →
    assert(h = P(P'(h)) + (I - P)(P'(h)) + P((I - P')h) + (I - P)((I - P')h)) →
    assert(h = 0 + P'(h) + P(h) + 0) →
    assert(h = P'(h) + P(h)) →
    assert(P'(h) ∈ N' ∧ P(h) ∈ M)
  } →
  
  forall(sequence(hn → h) ∈ M + N') {
    assert(sequence(P(hn)) ∈ M) →
    assert(sequence(P'(hn)) ∈ N') →
    exists(m ∈ M, n ∈ N') {
      assert(P(hn) → m ∧ P'(hn) → n) →
      assert(h = m + n ∈ M + N')
    }
  } →
  
  assert(M + N = M + N' ∈ ClosedLinearSubspace(H))
}