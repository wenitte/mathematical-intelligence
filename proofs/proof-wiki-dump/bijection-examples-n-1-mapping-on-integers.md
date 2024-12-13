theorem Bijection_Example() {
  assert(
    ∀f: ℤ → ℤ,
    (∀n ∈ ℤ ⇒ f(n) = n + 1) ⇒
    isBijection(f)
  )
}

proof Bijection_Example() {
  setMap(f: ℤ → ℤ) →
  assume(∀n ∈ ℤ ⇒ f(n) = n + 1) →

  lemma Injection_Proof() {
    setVar(n₁: ℤ, n₂: ℤ) →
    assume(f(n₁) = f(n₂)) →
    assert(n₁ + 1 = n₂ + 1) by(mapDef) →
    assert(n₁ = n₂) by(algebraicCancel) →
    conclude(isInjection(f))
  } →

  lemma Surjection_Proof() {
    setVar(m: ℤ) →
    setVar(n = m - 1) →
    assert(n ∈ ℤ) by(closure) →
    assert(f(n) = n + 1) by(mapDef) →
    assert(f(n) = (m - 1) + 1 = m) by(substitute) →
    conclude(isSurjection(f))
  } →

  apply(Injection_Proof()) ∧
  apply(Surjection_Proof()) →
  assert(isInjection(f) ∧ isSurjection(f)) →
  conclude(isBijection(f))
}