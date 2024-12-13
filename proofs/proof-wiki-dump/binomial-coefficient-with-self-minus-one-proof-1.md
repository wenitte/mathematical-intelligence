theorem Binomial_Coefficient_Self_Minus_One() {
  assert(
    ∀n ∈ ℕ_{>0} ⇒ (n choose (n-1)) = n
  )
} ↔

proof Binomial_Coefficient_Self_Minus_One() {
  lemma Base_Case() {
    setVar(n = 1) →
    apply(Binomial_Coefficient_Zero_Theorem) →
    assert((1 choose 0) = 1) →
    assert(1 = 1)
  } →

  lemma Inductive_Step() {
    setVar(n ∈ ℕ: n > 1) →
    assert(
      (n choose (n-1)) = n!/(((n-1)!)×(n-(n-1))!)
    ) →
    assert(
      = n!/((n-1)!×1!)
    ) →
    assert(
      = n!/(n-1)!
    ) →
    assert(
      = n
    )
  } →

  apply(Base_Case()) ∧
  apply(Inductive_Step()) →
  assert(∀n ∈ ℕ_{>0}: (n choose (n-1)) = n)
}