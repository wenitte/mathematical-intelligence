theorem AbsConvergentIsConvergent() {
  assert(
    ∀s ∈ Series(ℝ) ⇒ [
      (isAbsolutelyConvergent(s) ⇒ isConvergent(s))
    ]
  )
} ↔

proof AbsConvergentIsConvergent() {
  setVar(s: Series(ℝ)) →
  assert(isAbsolutelyConvergent(s)) →
  lemma AbsoluteConvergenceDef() {
    assert(
      isAbsolutelyConvergent(s) ↔ 
      isConvergent(∑_{n=1}^∞ |a_n|)
    )
  } →
  lemma ComparisonTest() {
    assert(
      ∀{a_n}, {b_n} ∈ Sequence(ℝ) ⇒ [
        (∀n ∈ ℕ_{>0}: |a_n| ≤ b_n ∧ isConvergent(∑_{n=1}^∞ b_n)) 
        ⇒ isConvergent(∑_{n=1}^∞ a_n)
      ]
    )
  } →
  apply(AbsoluteConvergenceDef()) →
  setVar(b_n := |a_n|) →
  assert(∀n ∈ ℕ_{>0}: |a_n| ≤ |a_n|) →
  apply(ComparisonTest()) →
  assert(isConvergent(∑_{n=1}^∞ a_n))
}