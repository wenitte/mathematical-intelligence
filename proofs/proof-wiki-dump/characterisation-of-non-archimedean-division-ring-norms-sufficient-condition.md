theorem NonArchimedean_Norm_Characterization() {
  assert(
    ∀R,∀norm[⋅] : (
      isDivisionRing(R) ∧ 
      hasUnity(R,1_R) ∧
      isNorm(norm[⋅]) ∧
      (∀n ∈ ℕ_{>0} : norm[n⋅1_R] ≤ 1)
    ) ⇒ isNonArchimedean(norm[⋅])
  )
}

proof NonArchimedean_Norm_Characterization() {
  setVar(x,y: R) →
  
  case y = 0_R {
    assert(norm[x + y] = norm[x] = max{norm[x], 0} = max{norm[x], norm[y]})
  } →

  lemma Reduction_To_Unity() {
    assert(
      y ≠ 0_R ⇒ (
        norm[x + y] ≤ max{norm[x], norm[y]} ⟺
        norm[xy^{-1} + 1_R] ≤ max{norm[xy^{-1}], 1}
      )
    )
  } →

  setGoal(∀x ∈ R: norm[x + 1_R] ≤ max{norm[x], 1}) →
  
  setVar(n: ℕ) →
  assert(
    norm[x + 1_R]^n = 
    norm[∑_{i=0}^n (n choose i)x^i]
    ≤ ∑_{i=0}^n norm[(n choose i)x^i]
    = ∑_{i=0}^n norm[n choose i ⋅ 1_R]norm[x^i]
    ≤ ∑_{i=0}^n norm[x^i]
  ) →

  lemma Power_Norm_Bound() {
    assert(
      ∀i ∈ [0,n]: norm[x^i] ≤ max{norm[x^n], 1}
    )
  } →

  apply(Power_Norm_Bound()) →
  assert(
    norm[x + 1_R]^n ≤ (n+1)max{norm[x^n], 1}
  ) →

  lemma Sequence_Limit() {
    assert(
      lim_{n→∞} (n+1)^{1/n} = 1
    )
  } →

  apply(Sequence_Limit()) →
  assert(
    norm[x + 1_R] ≤ max{norm[x], 1}
  )
}