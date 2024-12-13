theorem Canonical_Padic_Expansion_Rational() {
  assert(
    ∀x ∈ ℚp [
      (x has_eventually_periodic_canonical_expansion) →
      (x ∈ ℚ)
    ]
  )
}

proof Canonical_Padic_Expansion_Rational() {
  setVar(x: ℚp) →
  assume(x has_eventually_periodic_canonical_expansion) →
  
  lemma L6() {
    assert(
      ∃r ∈ ℚ, ∃n ∈ ℤ, ∃y ∈ ℤp [
        x = r + p^n * y ∧
        y has_periodic_canonical_expansion
      ]
    )
  } →
  
  apply(L6()) →
  setVar(y: ℤp, periodic_expansion: {d[k-1]...d[1]d[0]}*) →
  
  assert(
    y = Σ(i=0 to ∞)[
      Σ(j=0 to k-1)[d[j] * p^(i*k + j)]
    ]
  ) →
  
  setVar(a: ℤp = Σ(j=0 to k-1)[d[j] * p^j]) →
  
  assert(y = a * Σ(i=0 to ∞)[p^(i*k)]) →
  
  lemma L7() {
    assert(
      Σ(i=0 to ∞)[p^(i*k)] = 1/(1 - p^k)
    )
  } →
  
  apply(L7()) →
  
  assert(y = a/(1 - p^k)) →
  assert(y ∈ ℚ) →
  
  conclude(
    x = r + p^n * y ∧ y ∈ ℚ ∧ r ∈ ℚ →
    x ∈ ℚ
  )
}