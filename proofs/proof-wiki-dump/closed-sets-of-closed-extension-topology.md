theorem Closed_Sets_Extension_Topology() {
  assume(T = ⟨S,τ⟩: TopologicalSpace) ∧
  assume(T*_p = ⟨S*_p,τ*_p⟩: ClosedExtensionSpace(T)) →
  assert(
    ∀C ⊆ S*_p: (C ≠ S*_p ∧ IsClosed(C,T*_p)) ↔ IsClosed(C,T)
  )
}

proof Closed_Sets_Extension_Topology() {
  def(τ*_p = {U ∪ {p}: U ∈ τ} ∪ {∅}) →
  
  let(V ⊆ S*_p: IsClosed(V,T*_p)) →
  assert(IsOpen(S*_p ∖ V, T*_p)) →
  assert(IsOpen((S*_p ∖ V) ∖ {p}, T)) →
  
  lemma Set_Difference_Union() {
    assert((S*_p ∖ V) ∖ {p} = S*_p ∖ (V ∪ {p}))
  } →
  
  apply(Set_Difference_Union()) →
  assert(IsOpen(S*_p ∖ (V ∪ {p}), T)) →
  assert(IsClosed(V ∪ {p}, T)) →
  
  therefore(
    ∀V ⊆ S*_p: IsClosed(V,T*_p) → IsClosed(V,T)
  )
}