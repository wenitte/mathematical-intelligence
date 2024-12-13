theorem Carmichael_1105() {
  assert(
    ∀a ∈ ℤ: gcd(a,1105) = 1 → a^1105 ≡ a (mod 1105) ∧
    isComposite(1105)
  )
}

proof Carmichael_1105() {
  assert(1105 = 5 × 13 × 17) →
  
  lemma Prime_Square_Not_Divide() {
    assert(5^2 ∤ 1105) ∧
    assert(13^2 ∤ 1105) ∧
    assert(17^2 ∤ 1105)
  } →

  lemma Factor_1104() {
    assert(1104 = 276 × 4) ∧
    assert(1104 = 92 × 12) ∧
    assert(1104 = 69 × 16)
  } →
  
  lemma Korselt_Conditions() {
    assert(
      isComposite(1105) ∧
      ∀p|1105: p prime → (p-1)|1104
    )
  } →
  
  apply(Korselt_Theorem()) →
  assert(isCarmichael(1105))
}