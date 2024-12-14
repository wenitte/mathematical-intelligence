theorem CommonFactorCancellingCongruence_Corollary() {
  setVar(a, b, x, y, m: ℤ)
  assert(
    (a x ≡ b y (mod m)) ∧
    (a ≡ b (mod m)) ∧
    gcd(a, m) = 1
    ⇒
    x ≡ y (mod m)
  )
} ↔

proof CommonFactorCancellingCongruence_Corollary() {
  assume(a ⊥ m) →
  assert(gcd(a, m) = 1) →
  lemma CommonFactorCancellingCongruence() {
    assert(
      (a x ≡ b y (mod m)) ∧
      (a ≡ b (mod m)) ∧
      gcd(a, m) = 1
      ⇒
      x ≡ y (mod m)
    )
  } →
  apply(CommonFactorCancellingCongruence()) →
  assert(x ≡ y (mod m))
}

warning NonCoprimeCaseWarning() {
  setVar(a, m: ℤ)
  assert(
    ¬(gcd(a, m) = 1)
    ⇒
    ¬∀x,y((a x ≡ b y (mod m)) ∧ (a ≡ b (mod m)) ⇒ x ≡ y (mod m))
  )
}