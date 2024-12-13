theorem Abel_Ruffini() {
  assert(
    ∀n ≥ 5 ∧ ∀f(x) = x^n - s₁x^(n-1) + ... + (-1)^n s_n ⇒
    ¬∃ algebraic_solution(roots(f))
  )
} ↔

proof Abel_Ruffini() {
  let f(x) = x^n - s₁x^(n-1) + ... + (-1)^n s_n →
  
  lemma Galois_Group() {
    assert(
      Galois_Group(f) = S_n
    )
  } →
  
  lemma Symmetric_Group_Not_Solvable() {
    assert(
      ∀n ≥ 5 ⇒ ¬solvable(S_n)
    )
  } →
  
  lemma Radical_Solvability() {
    assert(
      polynomial_solvable_by_radicals(f) ↔ solvable(Galois_Group(f))
    )
  } →
  
  apply(Galois_Group()) →
  apply(Symmetric_Group_Not_Solvable()) →
  apply(Radical_Solvability()) →
  
  assert(
    Galois_Group(f) = S_n ∧ ¬solvable(S_n) ∧
    (polynomial_solvable_by_radicals(f) ↔ solvable(Galois_Group(f))) →
    ¬polynomial_solvable_by_radicals(f)
  )
}