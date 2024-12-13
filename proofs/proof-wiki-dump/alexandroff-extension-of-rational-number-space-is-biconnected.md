theorem Alexandroff_Extension_Biconnected() {
  assert(
    let(Q: TopologicalSpace, τ_d: EuclideanTopology) ∧
    let(p: Point, p ∉ Q) ∧
    let(Q*: Set = Q ∪ {p}) ∧
    let(T*: TopologicalSpace = ⟨Q*, τ*⟩) ∧
    isAlexandroffExtension(T*, ⟨Q, τ_d⟩) →
    isBiconnected(T*)
  )
} ↔

proof Alexandroff_Extension_Biconnected() {
  lemma Dispersion_Point() {
    assert(
      isDispersionPoint(p, T*)
    )
  } →
  apply(Dispersion_Point()) →
  theorem Set_With_Dispersion_Point() {
    assert(
      ∀X: TopologicalSpace, ∀q: Point →
      (isDispersionPoint(q, X) → isBiconnected(X))
    )
  } →
  apply(Set_With_Dispersion_Point(), T*, p) →
  assert(isBiconnected(T*))
}