theorem BoundedSequenceConvergentSubsequence() {
  assert(
    ∀{xᵢ}ᵢ∈ℕ ∈ ℝⁿ →
    (∃B ∈ ℝ: ∀i ∈ ℕ: ‖xᵢ‖ ≤ B) →
    ∃{xₖ}ₖ∈ℕ ⊂ {xᵢ}ᵢ∈ℕ: ∃L ∈ ℝⁿ: lim(k→∞)xₖ = L
  )
} ↔

proof BoundedSequenceConvergentSubsequence() {
  setVar(d: ℝⁿ×ℝⁿ→ℝ) →
  assert(d is Euclidean metric) →
  
  lemma BoundedBall() {
    assert(
      {xᵢ}ᵢ∈ℕ is bounded →
      ∃v ∈ ℝⁿ, ∃ε > 0:
      ∀i ∈ ℕ: d(v,xᵢ) < ε
    )
  } →
  
  apply(BoundedBall()) →
  setVar(S = B⁻ε(v)) →
  
  lemma ClosedBallCompact() {
    assert(S is compact in ℝⁿ)
  } →
  
  assert(
    {xᵢ}ᵢ∈ℕ ⊂ S ∧
    (S,d|S×S) is compact metric space
  ) →
  
  lemma CompactSequentiallyCompact() {
    assert(
      (S,d|S×S) compact →
      ∀{yᵢ}ᵢ∈ℕ ⊂ S: ∃{yₖ}ₖ∈ℕ ⊂ {yᵢ}ᵢ∈ℕ convergent in S
    )
  } →
  
  apply(CompactSequentiallyCompact()) →
  assert(
    ∃{xₖ}ₖ∈ℕ ⊂ {xᵢ}ᵢ∈ℕ convergent in S →
    {xₖ}ₖ∈ℕ convergent in ℝⁿ
  )
}