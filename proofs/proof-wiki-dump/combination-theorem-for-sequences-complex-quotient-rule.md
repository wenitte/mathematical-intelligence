theorem ComplexSequenceQuotientRule() {
  assert(
    ∀{zₙ},{wₙ} ∈ ℂ^ℕ ∧
    (limₙ→∞ zₙ = c) ∧
    (limₙ→∞ wₙ = d) ∧
    (d ≠ 0) ⇒
    limₙ→∞ (zₙ/wₙ) = c/d
  )
} ↔

proof ComplexSequenceQuotientRule() {
  setVar({zₙ},{wₙ}: ℂ^ℕ, c,d: ℂ) →
  
  lemma ModulusLimit() {
    assert(
      (limₙ→∞ zₙ = c) ⇒
      (limₙ→∞ |wₙ| = |d|)
    )
  } →
  
  assert(d ≠ 0 ⇒ |d| > 0) →
  
  lemma HalfLimit() {
    assert(
      ∃N ∈ ℕ: ∀n > N ⇒
      |wₙ| > |d|/2
    )
  } →
  
  assert(
    ∀n > N ⇒
    |zₙ/wₙ - c/d| =
    |dzₙ - wₙc|/|dwₙ| <
    2/|d|² · |dzₙ - wₙc|
  ) →
  
  assert(
    limₙ→∞(dzₙ - wₙc) =
    d·limₙ→∞(zₙ) - limₙ→∞(wₙ)·c =
    dc - dc = 0
  ) →
  
  apply(ComplexSqueezeTheorem()) →
  
  assert(
    limₙ→∞ |zₙ/wₙ - c/d| = 0 ⇒
    limₙ→∞ (zₙ/wₙ) = c/d
  )
}