theorem Boundary_Is_Closed() {
  assert(
    ∀T: TopologicalSpace, ∀H ⊆ T ⇒
    let ∂H = BoundaryOf(H) ⇒
    IsClosed(∂H, T)
  )
} ↔

proof Boundary_Is_Closed() {
  setVar(T: TopologicalSpace) →
  setVar(H: Subset(T)) →
  
  lemma Boundary_Intersection() {
    assert(
      ∂H = H⁻ ∩ (T\H)⁻
      where H⁻ = Closure(H)
    )
  } →

  lemma Closure_Is_Closed() {
    assert(
      ∀S ⊆ T ⇒ IsClosed(S⁻, T)
    )
  } →

  apply(Closure_Is_Closed()) →
  assert(IsClosed(H⁻, T)) ∧
  assert(IsClosed((T\H)⁻, T)) →

  lemma Closed_Sets_Intersection() {
    assert(
      ∀A,B ⊆ T ⇒
      [IsClosed(A,T) ∧ IsClosed(B,T)] →
      IsClosed(A∩B, T)
    )
  } →

  apply(Boundary_Intersection()) →
  apply(Closed_Sets_Intersection()) →
  assert(IsClosed(∂H, T))
}