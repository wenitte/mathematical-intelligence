theorem Padic_Open_Balls_Countable() {
  let(p: Prime)
  let(Qp: PadicNumbers)
  let(a: Qp)
  assert(
    ∀a ∈ Qp ⇒ {B = {B_{p^{-n}}(a) : n ∈ ℤ}} ∧ isCountable(B)
  )
} ↔

proof Padic_Open_Balls_Countable() {
  let(ε: ℝ≥0) →
  
  lemma Exists_Power() {
    assert(∃n ∈ ℤ: p^{-(n+1)} < ε ≤ p^{-n})
  } →
  
  lemma Ball_Containment() {
    assert(
      B_ε(a) ⊆ B_{p^{-n}}(a) ∧
      B^-_{p^{-(n+1)}}(a) ⊆ B_ε(a)
    )
  } →
  
  lemma Open_Closed_Equal() {
    assert(B_{p^{-n}}(a) = B^-_{p^{-(n+1)}}(a))
  } →
  
  apply(Ball_Containment()) →
  apply(Open_Closed_Equal()) →
  
  assert(B_{p^{-n}}(a) ⊆ B_ε(a)) →
  assert(B_ε(a) = B_{p^{-n}}(a)) →
  
  conclude(
    ∀ε ∈ ℝ>0: ∃n ∈ ℤ: B_ε(a) = B_{p^{-n}}(a)
  ) →
  
  assert({B = {B_{p^{-n}}(a) : n ∈ ℤ}}) →
  
  apply(Surjection_Countable_Infinite()) →
  conclude(isCountable(B))
}