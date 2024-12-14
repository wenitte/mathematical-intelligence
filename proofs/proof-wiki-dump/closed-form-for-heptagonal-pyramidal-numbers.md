theorem Heptagonal_Pyramidal_Numbers() {
  assert(
    ∀n ∈ ℕ+ ⇒ Qn = (n(n+1)(5n-2))/6
    where Qn := nth heptagonal pyramidal number
  )
} ↔

proof Heptagonal_Pyramidal_Numbers() {
  setVar(n: ℕ+) →
  assert(Qn = ∑(k=1 to n) Hk) by def_heptagonal_pyramidal →
  assert(Hk = (k(5k-3))/2) by closed_form_heptagonal →
  assert(Qn = ∑(k=1 to n) (k(5k-3))/2) →
  assert(Qn = (1/2)(5∑(k=1 to n)k² - 3∑(k=1 to n)k)) by distribute →
  
  lemma Sum_Squares() {
    assert(∑(k=1 to n)k² = (n(n+1)(2n+1))/6)
  } →
  
  lemma Triangular_Numbers() {
    assert(∑(k=1 to n)k = (n(n+1))/2)
  } →
  
  apply(Sum_Squares()) →
  apply(Triangular_Numbers()) →
  
  assert(Qn = (1/2)(5(n(n+1)(2n+1))/6 - 3(n(n+1))/2)) →
  assert(Qn = (1/2)((5n(n+1)(2n+1) - 9n(n+1))/6)) by combine_fractions →
  assert(Qn = (1/2)(n(n+1)(5(2n+1) - 9)/6)) by factor →
  assert(Qn = (1/2)(n(n+1)(10n+5-9)/6)) by distribute →
  assert(Qn = (1/2)(n(n+1)(10n-4)/6)) by combine_terms →
  assert(Qn = (n(n+1)(5n-2)/6)) by simplify
}