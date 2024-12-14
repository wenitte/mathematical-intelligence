theorem Compact_Complement_Topology_Separable() {
  assert(
    let T = ⟨ℝ,τ⟩ ∧
    isCompactComplementTopology(T) ⇒
    isSeparable(T)
  )
} ↔

proof Compact_Complement_Topology_Separable() {
  setVar(T: TopologicalSpace) →
  setVar(ℚ: Set) →
  
  lemma Rationals_Dense() {
    assert(isDense(ℚ, T))
  } →
  
  lemma Rationals_Countable() {
    assert(isCountablyInfinite(ℚ))
  } →
  
  apply(Rationals_Dense()) ∧
  apply(Rationals_Countable()) →
  
  assert(
    isDense(ℚ, T) ∧ 
    isCountablyInfinite(ℚ) ⇒
    isSeparable(T)
  )
}