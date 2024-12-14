theorem OpenExtension_T0_Condition() {
  let(T = ⟨S,τ⟩: TopologicalSpace)
  let(T*_p̄ = ⟨S*_p,τ*_p̄⟩: OpenExtensionSpace(T))
  assert(
    isT0Space(T*_p̄) ↔ isT0Space(T)
  )
} ↔

proof OpenExtension_T0_Condition() {
  define(τ*_p̄ = {U: U ∈ τ} ∪ {S*_p}) →
  
  // Forward direction
  assume(isT0Space(T)) →
  forall(x,y ∈ S: x ≠ y) {
    case(x ≠ p ∧ y ≠ p) {
      byT0Definition(∃U ∈ τ: (x ∈ U ∧ y ∉ U) ∨ (y ∈ U ∧ x ∉ U)) →
      assert(U ∈ τ*_p̄) →
      conclude(∃U ∈ τ*_p̄: (x ∈ U ∧ y ∉ U) ∨ (y ∈ U ∧ x ∉ U))
    } →
    case(y = p) {
      assert(∀U ∈ τ*_p̄: (x ∈ U → p ∉ U) ∨ U = S*_p)
    }
  } →
  conclude(isT0Space(T*_p̄)) →
  
  // Reverse direction
  assume(¬isT0Space(T)) →
  exists(x,y ∈ S) {
    assert(∀U ∈ τ: (x ∈ U ↔ y ∈ U)) →
    assert(∀U ∈ τ*_p̄: (x ∈ U ↔ y ∈ U)) →
    assert(x ∈ S*_p ↔ y ∈ S*_p)
  } →
  conclude(¬isT0Space(T*_p̄))
}