theorem AntiLexProduct_TotallyOrdered() {
  assert(
    ∀n ∈ ℕ_{>0}, ∀S_1,...,S_n [TotallyOrdered(S_i) ∀i ∈ {1,...,n}] ⇒
    TotallyOrdered(T_n) where
    T_n = match(n) {
      case 1: S_1
      case n > 1: T_{n-1} ⊗^a S_n
    }
  )
}

proof AntiLexProduct_TotallyOrdered() {
  setVar(n: ℕ_{>0}) →
  lemma BaseCase() {
    assert(n = 1 ⇒ T_1 = S_1) →
    assert(TotallyOrdered(S_1))
  } →
  lemma InductiveStep() {
    setVar(k: ℕ_{>0}) →
    assert(TotallyOrdered(T_k)) →
    assert(k + 1 ≤ n) →
    assert(TotallyOrdered(S_{k+1})) →
    apply(AntiLexProduct_Binary_TotallyOrdered(T_k, S_{k+1})) →
    assert(TotallyOrdered(T_k ⊗^a S_{k+1})) →
    assert(TotallyOrdered(T_{k+1}))
  } →
  apply(MathInduction(n, BaseCase(), InductiveStep())) →
  assert(TotallyOrdered(T_n))
}