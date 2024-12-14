theorem TestFunctionDerivative() {
  assert(
    ∀Φ,φ ∈ DD(ℝ) ∧
    let X = {Φ' : Φ ∈ DD(ℝ)} ∧
    let Y = {φ ∈ DD(ℝ) : ∫_{-∞}^∞ φ(x)dx = 0} ⇒
    (X = Y) ∧ (∀φ ∈ Y ⇒ ∃!Φ ∈ DD(ℝ) : Φ' = φ)
  )
} ↔

proof TestFunctionDerivative() {
  // Part 1: X ⊆ Y
  proof SubsetXY() {
    setVar(Φ ∈ DD(ℝ)) →
    assert(Φ' ∈ DD(ℝ)) →
    assert(∫_{-∞}^∞ Φ'(x)dx = Φ(∞) - Φ(-∞)) →
    assert(Φ(∞) = Φ(-∞) = 0) →
    conclude(X ⊆ Y)
  } →

  // Part 2: Y ⊆ X
  proof SubsetYX() {
    setVar(φ ∈ Y) →
    assert(∫_{-∞}^∞ φ(x)dx = 0) →
    define(Φ(x) = ∫_{-∞}^x φ(ξ)dξ) →
    assert(Φ' = φ) →
    assert(φ ∈ DD(ℝ) ⇒ Φ' ∈ C^∞(ℝ)) →
    setVar(a ∈ ℝ_{>0} : supp(φ) ⊆ [-a,a]) →
    assert(∀x < -a ⇒ Φ(x) = 0) →
    assert(∀x > a ⇒ Φ(x) = ∫_{-∞}^∞ φ(ξ)dξ = 0) →
    conclude(Y ⊆ X)
  } →

  // Part 3: Uniqueness
  proof Uniqueness() {
    setVar(φ ∈ Y) →
    setVar(Φ_1,Φ_2 ∈ DD(ℝ) : Φ'_1 = φ = Φ'_2) →
    assert((Φ_1 - Φ_2)' = 0) →
    assert(∃C ∈ ℝ : Φ_1 - Φ_2 = C) →
    setVar(K ⊂ ℝ : supp(φ) ⊆ K) →
    assert(∀x ∉ K ⇒ Φ_1(x) - Φ_2(x) = 0) →
    assert(Φ_1,Φ_2 ∈ C^∞(ℝ)) →
    conclude(C = 0)
  } →

  conclude(X = Y ∧ uniqueness)
}