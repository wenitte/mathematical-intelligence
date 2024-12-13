theorem Infima_Preserving_Is_Upper_Adjoint() {
  input(S: CompleteLattice, T: OrderedSet, g: Mapping(S → T))
  assert(
    g.preservesAllInfima() ⇒
    ∃d: Mapping(T → S) ∧
    isGaloisConnection(g, d) ∧
    ∀t ∈ T: d(t) = min(g⁻¹(t↑))
  )
} ↔

proof Infima_Preserving_Is_Upper_Adjoint() {
  lemma IsIncreasing() {
    assert(
      g.preservesAllInfima() ⇒
      ∀x,y ∈ S: (x ⪯ y ⇒ g(x) ⪯ g(y))
    )
  } →

  define(d: T → S) {
    ∀t ∈ T: d(t) := inf(g⁻¹(t↑))
  } →

  lemma InfIsMin() {
    assert(
      ∀t ∈ T: inf(g⁻¹(t↑)) = min(g⁻¹(t↑))
    )
  } →

  apply(GaloisConnection_By_Minimum) {
    verify(
      isIncreasing(g) ∧
      ∀t ∈ T: d(t) = min(g⁻¹(t↑))
    )
  } →

  conclude(
    isGaloisConnection(g, d) ∧
    ∀t ∈ T: d(t) = min(g⁻¹(t↑))
  )
}