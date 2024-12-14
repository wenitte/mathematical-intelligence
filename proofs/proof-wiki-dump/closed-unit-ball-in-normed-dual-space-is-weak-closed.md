theorem Closed_Unit_Ball_Weak_Star_Closed() {
  requires(
    X: NormedVectorSpace,
    X*: NormedDualSpace(X),
    B⁻_X*: ClosedUnitBall(X*)
  ) →
  assert(
    IsWeakStarClosed(B⁻_X*)
  )
} ↔

proof Closed_Unit_Ball_Weak_Star_Closed() {
  lemma WeakStarTopology() {
    assert(IsHausdorff((X*, w*)))
  } →
  
  lemma BanachAlaoglu() {
    assert(IsCompact((B⁻_X*, w*)))
  } →
  
  lemma CompactHausdorff() {
    assert(
      ∀S,T: TopologicalSpace →
      (IsHausdorff(T) ∧ IsCompact(S) ∧ S ⊆ T) →
      IsClosed(S)
    )
  } →
  
  apply(WeakStarTopology()) →
  apply(BanachAlaoglu()) →
  apply(CompactHausdorff()) →
  assert(IsWeakStarClosed(B⁻_X*))
}