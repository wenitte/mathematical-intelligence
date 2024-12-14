theorem ComplexSequenceProductLimit() {
  assert(
    ∀{zₙ, wₙ} ∈ ℂℕ ∧
    (limₙ→∞ zₙ = c) ∧ (limₙ→∞ wₙ = d) ⇒
    limₙ→∞(zₙwₙ) = cd
  )
} ↔

proof ComplexSequenceProductLimit_FirstMethod() {
  setVar(zₙ, wₙ: ℂℕ) →
  setVar(c, d: ℂ) →
  
  lemma BoundedSequence() {
    assert(∃K ∈ ℝ⁺: ∀n ∈ ℕ, |zₙ| ≤ K)
  } →
  
  assert(|zₙwₙ - cd| = |zₙwₙ - zₙd + zₙd - cd|) →
  apply(TriangleInequality) {
    assert(|zₙwₙ - cd| ≤ |zₙwₙ - zₙd| + |zₙd - cd|)
  } →
  
  apply(ComplexModulusProduct) {
    assert(|zₙwₙ - zₙd| + |zₙd - cd| = |zₙ||wₙ - d| + |d||zₙ - c|)
  } →
  
  assert(|zₙ||wₙ - d| + |d||zₙ - c| ≤ K|wₙ - d| + |d||zₙ - c| =: φₙ) →
  
  lemma LimitZero() {
    assert(limₙ→∞ |zₙ - c| = 0) ∧
    assert(limₙ→∞ |wₙ - d| = 0) →
    assert(limₙ→∞ φₙ = 0)
  } →
  
  apply(SqueezeTheorem) {
    assert(limₙ→∞(zₙwₙ) = cd)
  }
}

proof ComplexSequenceProductLimit_SecondMethod() {
  setVar(zₙ = xₙ + iyₙ: ℂ) →
  setVar(wₙ = uₙ + ivₙ: ℂ) →
  setVar(c = a + ib: ℂ) →
  setVar(d = e + if: ℂ) →
  
  assert(limₙ→∞ zₙ = c ↔ limₙ→∞ xₙ + i·limₙ→∞ yₙ = a + ib) →
  assert(limₙ→∞ wₙ = d ↔ limₙ→∞ uₙ + i·limₙ→∞ vₙ = e + if) →
  
  assert(limₙ→∞(zₙwₙ) = limₙ→∞((xₙuₙ - yₙvₙ) + i(yₙuₙ + xₙvₙ))) →
  
  apply(RealSequenceRules) {
    assert(limₙ→∞(zₙwₙ) = (ae - bf) + i(be + af))
  } →
  
  assert((ae - bf) + i(be + af) = (a + ib)(e + if) = cd)
}