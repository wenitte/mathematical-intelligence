theorem Abs_Conv_Product_Is_Conv() {
  assert(
    ∀K[ValuedField(K, ||·||) ∧ Complete(K)] ∧
    ∀{aₙ}[AbsolutelyConvergent(∏(1 + aₙ, n=1..∞))] 
    ⇒ Convergent(∏(1 + aₙ, n=1..∞))
  )
} ↔

proof Abs_Conv_Product_Is_Conv() {
  setVar(K: ValuedField) →
  setVar(Pₙ: PartialProduct(∏(1 + aₙ, k=1..n))) →
  setVar(Qₙ: PartialProduct(∏(1 + ||aₙ||, k=1..n))) →
  
  lemma Inequality_For_Diff() {
    assert(
      ∀m,n[m > n ⇒
        ||Pₘ - Pₙ|| = ∏(||1 + aₖ||, k=1..n) · ||∏(1 + aₖ, k=n+1..m) - 1|| ≤
        ∏(1 + ||aₖ||, k=1..n) · (∏(1 + ||aₖ||, k=n+1..m) - 1) = Qₘ - Qₙ
      ]
    )
  } →
  
  assert(Cauchy({Qₙ}) ∧ AbsolutelyConvergent(∏(1 + aₙ, n=1..∞))) →
  apply(Inequality_For_Diff()) →
  assert(Cauchy({Pₙ})) →
  assert(Complete(K) ⇒ ∃a∈K[{Pₙ} → a]) →
  apply(Thm_Abs_Conv_Not_Zero()) →
  assert(Convergent(∏(1 + aₙ, n=1..∞)))
}