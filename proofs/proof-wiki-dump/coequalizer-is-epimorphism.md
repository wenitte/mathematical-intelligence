theorem Coequalizer_is_Epimorphism() {
  assert(
    ∀C[metacategory] ∧
    ∀f,g[C → D] ∧
    ∀q[D → Q] ∧
    isCoequalizer(q, f, g) →
    isEpimorphism(q)
  )
} ↔

proof Coequalizer_is_Epimorphism() {
  reference Duality_Principle() {
    assert(
      isCoequalizer(X) ↔ isDualOf(isEqualizer(X))
    )
  } →
  reference Equalizer_is_Monomorphism() {
    assert(
      isEqualizer(X) → isMonomorphism(X)
    )
  } →
  apply(Duality_Principle()) →
  assert(
    isDualOf(isMonomorphism) ↔ isEpimorphism
  ) →
  combine() →
  assert(
    isCoequalizer(q) → isEpimorphism(q)
  )
}