theorem BoundedLinearTransformation_PreservesCauchy(X,Y: NormedVectorSpace, T: LinearTransformation, seq_x: Sequence) {
  assert(
    isBounded(T) ∧
    isDomain(X,T) ∧ isRange(Y,T) ∧
    isCauchy(seq_x,X) ∧
    seq_x = {xₙ | n ∈ ℕ}
    ⇒
    isCauchy({T(xₙ) | n ∈ ℕ}, Y)
  )
} ↔

proof BoundedLinearTransformation_PreservesCauchy() {
  setVar(M: ℝ⁺) →
  assert(
    ∃M: ∀x ∈ X: ∥T(x)∥_Y ≤ M∥x∥_X
  ) →
  
  lemma LinearityProperty() {
    assert(
      ∀n,m ∈ ℕ: ∥T(xₙ) - T(xₘ)∥_Y = ∥T(xₙ - xₘ)∥_Y ≤ M∥xₙ - xₘ∥_X
    )
  } →

  setVar(ε: ℝ⁺) →
  assert(
    isCauchy(seq_x,X) ⇒
    ∃N ∈ ℕ: ∀n,m ≥ N: ∥xₙ - xₘ∥_X < ε/M
  ) →

  apply(LinearityProperty()) →
  assert(
    ∀n,m ≥ N: ∥T(xₙ) - T(xₘ)∥_Y ≤ M∥xₙ - xₘ∥_X < M(ε/M) = ε
  ) →
  
  conclude(
    ∀ε > 0: ∃N ∈ ℕ: ∀n,m ≥ N: ∥T(xₙ) - T(xₘ)∥_Y < ε ⇒
    isCauchy({T(xₙ) | n ∈ ℕ}, Y)
  )
}