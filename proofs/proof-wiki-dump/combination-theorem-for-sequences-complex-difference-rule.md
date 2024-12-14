theorem Complex_Sequence_Difference_Rule() {
  assert(
    ∀{zₙ}, {wₙ} ∈ ℂ^ℕ ⇒ (
      (lim[n→∞] zₙ = c ∧ lim[n→∞] wₙ = d) →
      lim[n→∞](zₙ - wₙ) = c - d
    )
  )
}

proof Complex_Sequence_Difference_Rule() {
  setVar(zₙ, wₙ: ℂ^ℕ) →
  setVar(c, d: ℂ) →
  
  lemma Sum_Rule() {
    assert(
      lim[n→∞](zₙ + wₙ) = c + d
    )
  } →
  
  lemma Multiple_Rule() {
    assert(
      lim[n→∞](-wₙ) = -d
    )
  } →
  
  apply(Sum_Rule()) →
  apply(Multiple_Rule()) →
  
  assert(
    zₙ - wₙ = zₙ + (-wₙ)
  ) →
  
  assert(
    lim[n→∞](zₙ - wₙ) = lim[n→∞](zₙ + (-wₙ)) = c + (-d) = c - d
  )
}