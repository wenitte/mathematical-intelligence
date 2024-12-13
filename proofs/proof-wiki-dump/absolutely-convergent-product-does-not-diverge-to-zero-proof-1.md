theorem AbsoluteConvergentProductNotZero() {
  assert(
    ∀K[ValuedField] ∧
    ∀{an: ℕ → K} ∧
    isAbsolutelyConvergent(∏[n=1..∞](1 + an)) ⇒
    ¬(∏[n=1..∞](1 + an) → 0)
  )
} ↔

proof AbsoluteConvergentProductNotZero() {
  lemma FactorsConvergeToOne() {
    assert(∃n0 ∈ ℕ: ∀n ≥ n0 ⇒ ||an|| < 1)
  } →
  
  setVar(n1: ℕ, n1 ≥ n0) →
  
  assumeContradiction(∏[n=n1..∞](1 + an) = 0) →
  
  apply(NormOfLimit) {
    assert(∏[n=n1..∞]||1 + an|| = 0)
  } →
  
  apply(TriangleInequality, SqueezeTheorem) {
    assert(∏[n=n1..∞](1 - ||an||) = 0)
  } →
  
  lemma WeierstrassProductInequality() {
    assert(
      ∀N ≥ n1 ⇒
      ∏[n=n1..N](1 - ||an||) ≥ 1 - ∑[n=n1..N]||an||
    )
  } →
  
  apply(LimitTheorem) {
    assert(0 ≥ 1 - ∑[n=n1..∞]||an||)
  } →
  
  apply(AbsoluteConvergence) {
    assert(∃n1: ∑[n=n1..∞]||an|| < 1)
  } →
  
  contradiction() →
  
  conclude(¬(∏[n=1..∞](1 + an) → 0))
}