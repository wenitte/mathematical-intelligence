theorem Compact_Complement_Topology_is_Separable() {
  assert(
    ∀T(T = ⟨ℝ,τ⟩ ∧ isCompactComplementTopology(T) ⇒ isSeparable(T))
  )
}

// First proof using second-countability
proof Compact_Complement_Topology_is_Separable_1() {
  setVar(T: TopologicalSpace) →
  assert(T = ⟨ℝ,τ⟩ ∧ isCompactComplementTopology(T)) →
  lemma Second_Countable() {
    assert(isCompactComplementTopology(T) ⇒ isSecondCountable(T))
  } →
  lemma Second_Countable_Implies_Separable() {
    assert(isSecondCountable(T) ⇒ isSeparable(T))
  } →
  apply(Second_Countable()) →
  apply(Second_Countable_Implies_Separable()) →
  assert(isSeparable(T))
}

// Second proof using density of rationals
proof Compact_Complement_Topology_is_Separable_2() {
  setVar(T: TopologicalSpace) →
  setVar(ℚ: Set) →
  assert(T = ⟨ℝ,τ⟩ ∧ isCompactComplementTopology(T)) →
  lemma Rationals_Dense() {
    assert(isDense(ℚ,T))
  } →
  lemma Rationals_Countable() {
    assert(isCountablyInfinite(ℚ))
  } →
  apply(Rationals_Dense()) →
  apply(Rationals_Countable()) →
  assert(isDense(ℚ,T) ∧ isCountablyInfinite(ℚ)) →
  assert(isSeparable(T))
}