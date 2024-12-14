theorem Closed_Ball_Connected() {
  define(V: NormedVectorSpace) →
  define(‖·‖: Norm(V)) →
  define(B: ClosedBall(V, ‖·‖)) →
  assert(
    Connected(B)
  )
} ↔

proof Closed_Ball_Connected() {
  lemma Path_Connected_Ball() {
    assert(PathConnected(B))
  } →
  lemma Path_Connected_Implies_Connected() {
    assert(∀X ∈ TopologicalSpace: 
      PathConnected(X) → Connected(X))
  } →
  apply(Path_Connected_Ball()) →
  apply(Path_Connected_Implies_Connected()) →
  assert(Connected(B))
}