theorem Compact_Complement_Topology_is_Separable() {
  let(T = ⟨ℝ,τ⟩) →
  assert(
    isTopology(T, CompactComplement) →
    isSeparable(T)
  )
} ↔

proof Compact_Complement_Topology_is_Separable() {
  given(T = ⟨ℝ,τ⟩) ∧ isTopology(T, CompactComplement) →
  lemma CompactComplementIsSecondCountable() {
    assert(
      isTopology(T, CompactComplement) →
      isSecondCountable(T)
    )
  } →
  lemma SecondCountableIsSeparable() {
    assert(
      isSecondCountable(T) →
      isSeparable(T)
    )
  } →
  apply(CompactComplementIsSecondCountable()) →
  apply(SecondCountableIsSeparable()) →
  assert(isSeparable(T))
}