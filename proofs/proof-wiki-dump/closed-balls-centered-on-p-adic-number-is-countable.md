theorem Closed_Balls_Countable(p: Prime, a: ℚ_p) {
  assert(
    ∀a ∈ ℚ_p ⇒ {B⁻: set | B⁻ = {B⁻_{p^{-n}}(a): n ∈ ℤ}} is_countable
  )
} ↔

proof Closed_Balls_Countable() {
  setVar(ε: ℝ_{>0}) →
  
  lemma Exists_Power() {
    assert(∃n ∈ ℤ: p^{-n} ≤ ε < p^{-(n-1)})
  } →

  lemma Ball_Inclusion_1() {
    assert(B⁻_{p^{-n}}(a) ⊆ B⁻_ε(a))
  } →

  lemma Ball_Inclusion_2() {
    assert(B⁻_ε(a) ⊆ B_{p^{-(n-1)}}(a))
  } →

  lemma Open_Closed_Equality() {
    assert(B_{p^{-(n-1)}}(a) = B⁻_{p^{-n}}(a))
  } →

  apply(Ball_Inclusion_1() ∧ Ball_Inclusion_2() ∧ Open_Closed_Equality()) →
  assert(B⁻_ε(a) ⊆ B⁻_{p^{-n}}(a)) →
  assert(B⁻_ε(a) = B⁻_{p^{-n}}(a)) →
  
  generalize(∀ε ∈ ℝ_{>0} ⇒ ∃n ∈ ℤ: B⁻_ε(a) = B⁻_{p^{-n}}(a)) →
  assert(B⁻ = {B⁻_{p^{-n}}(a): n ∈ ℤ}) →
  
  lemma Countability() {
    assert(f: ℤ → B⁻ is_surjective ⇒ B⁻ is_countable)
  } →
  
  apply(Countability()) →
  conclude(B⁻ is_countable)
}

corollary Open_Balls_Countable(p: Prime, a: ℚ_p) {
  assert(
    ∀a ∈ ℚ_p ⇒ {B: set | B = {B_{p^{-n}}(a): n ∈ ℤ}} is_countable
  )
}