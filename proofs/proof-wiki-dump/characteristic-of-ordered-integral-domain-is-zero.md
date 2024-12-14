theorem CharacteristicIsZero() {
  assert(
    ∀D: OrderedIntegralDomain ∧ 
    let(0_D: zero(D)) ∧
    let(1_D: unity(D)) ∧
    let(CharD: characteristic(D)) ∧
    let(g: ℤ → D, g(n) = n·1_D) ⇒
    CharD = 0 ∧ 
    isMonomorphism(g, ℤ, D)
  )
} ↔

proof CharacteristicIsZero() {
  setStruct(D: OrderedIntegralDomain) →
  setVar(0_D: zero(D)) →
  setVar(1_D: unity(D)) →
  setVar(CharD: characteristic(D)) →
  
  lemma PositiveUnityPowers() {
    assert(∀n ∈ ℤ_{>0}: n·1_D > 0_D)
  } →

  apply(PositiveUnityPowers()) →
  assert(∀p > 0: CharD ≠ p) →
  conclude(CharD = 0) →

  lemma OrderPreserving() {
    assert(
      ∀m,p ∈ ℤ: m < p ⇒
      let(diff: p - m) ∧
      diff > 0 ⇒
      p·1_D - m·1_D > 0_D ⇒
      g(m) < g(p)
    )
  } →

  apply(OrderPreserving()) →
  apply(MonomorphismFromTotalOrdering) →
  conclude(isMonomorphism(g, ℤ, D))
}