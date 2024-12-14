theorem Sequence_Product_Convergence() {
  assert(
    ∀{zₙ, wₙ} ∈ ℂ,
    (lim[n→∞](zₙ) = c ∧ lim[n→∞](wₙ) = d) →
    lim[n→∞](zₙwₙ) = cd
  )
} ↔

proof Sequence_Product_Convergence() {
  setVar(zₙ, wₙ: ℂ) →
  
  lemma Bounded_Sequence() {
    assert(
      ∃K ∈ ℝ⁺: ∀n ∈ ℕ → |zₙ| ≤ K
    )
  } →

  assert(|zₙwₙ - cd| = |zₙwₙ - zₙd + zₙd - cd|) →
  
  lemma Triangle_Inequality() {
    assert(|zₙwₙ - zₙd + zₙd - cd| ≤ |zₙwₙ - zₙd| + |zₙd - cd|)
  } →
  
  lemma Complex_Modulus_Product() {
    assert(|zₙwₙ - zₙd| = |zₙ||wₙ - d|)
  } →
  
  assert(|zₙwₙ - cd| ≤ K|wₙ - d| + |d||zₙ - c|) →
  setVar(φₙ := K|wₙ - d| + |d||zₙ - c|) →
  
  lemma Limit_Properties() {
    assert(
      lim[n→∞](|zₙ - c|) = 0 ∧
      lim[n→∞](|wₙ - d|) = 0 →
      lim[n→∞](φₙ) = 0
    )
  } →
  
  apply(Squeeze_Theorem) →
  assert(lim[n→∞](zₙwₙ) = cd)
}