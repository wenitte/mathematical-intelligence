theorem Canonical_Padic_Expansion_Lemma() {
  let(p: Prime)
  let(a: ℤ)
  let(b: ℤ_{>0})
  assert(
    ∀n ∈ ℕ: ∃r_n ∈ ℤ: (a/b - (p^{n+1}r_n/b)) ∈ {0,1,...,p^{n+1}-1}
    ⇒
    ∀n ∈ ℕ: (a - (p^{n+1}-1)b)/p^{n+1} ≤ r_n ≤ a/p^{n+1}
  )
}

proof Canonical_Padic_Expansion_Lemma() {
  setVar(n: ℕ) →
  assert(0 ≤ a/b - (p^{n+1}r_n/b) ≤ p^{n+1}-1) →
  
  step1() {
    apply(AlgebraicManipulation) →
    assert(-(p^{n+1}-1) ≤ (p^{n+1}r_n/b) - a/b ≤ 0)
  } →
  
  step2() {
    apply(MultiplyAllByB) →
    assert(-(p^{n+1}-1)b ≤ p^{n+1}r_n - a ≤ 0)
  } →
  
  step3() {
    apply(AlgebraicManipulation) →
    assert(a - (p^{n+1}-1)b ≤ p^{n+1}r_n ≤ a)
  } →
  
  step4() {
    apply(DivideAllByP^{n+1}) →
    assert((a - (p^{n+1}-1)b)/p^{n+1} ≤ r_n ≤ a/p^{n+1})
  }
}