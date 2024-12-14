theorem Quotient_Rule_Sequences() {
  let R: NormedDivisionRing(0) →
  let xₙ, yₙ: Sequence(R) →
  assert(
    Convergent(xₙ, l) ∧
    Convergent(yₙ, m) ∧
    m ≠ 0
  ) ⇒
  assert(
    ∃k ∈ ℕ : ∀n ∈ ℕ : y_{k+n} ≠ 0 ∧
    WellDefined(Sequence(x_{k+n}y_{k+n}⁻¹)) ∧
    WellDefined(Sequence(y_{k+n}⁻¹x_{k+n})) ∧
    lim(n→∞)(x_{k+n}y_{k+n}⁻¹) = lm⁻¹ ∧
    lim(n→∞)(y_{k+n}⁻¹x_{k+n}) = m⁻¹l
  )
}

proof Quotient_Rule_Sequences() {
  lemma Inverse_Rule() {
    assert(
      ∃k ∈ ℕ : ∀n ∈ ℕ : y_{k+n} ≠ 0 ∧
      WellDefined(Sequence(y_{k+n}⁻¹)) ∧
      lim(n→∞)(y_{k+n}⁻¹) = m⁻¹
    )
  } →
  
  lemma Subsequence_Limit() {
    assert(
      Convergent(Sequence(x_{k+n})) ∧
      lim(n→∞)(x_{k+n}) = l
    )
  } →
  
  lemma Product_Rule() {
    assert(
      lim(n→∞)(x_{k+n}y_{k+n}⁻¹) = lm⁻¹ ∧
      lim(n→∞)(y_{k+n}⁻¹x_{k+n}) = m⁻¹l
    )
  } →
  
  apply(Inverse_Rule()) →
  apply(Subsequence_Limit()) →
  apply(Product_Rule()) →
  conclude()
}