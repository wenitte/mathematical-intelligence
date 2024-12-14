theorem RationalConvergentCondition() {
  assert(
    ∀x ∈ ℝ\ℚ, ∀a,b ∈ ℤ: (
      |x - a/b| < 1/(2b²) → 
      isConvergent(a/b, x)
    )
  )
}

proof RationalConvergentCondition() {
  setVar(x: ℝ\ℚ) →
  setVar(a,b: ℤ) →
  assume(|x - a/b| < 1/(2b²)) →
  byContradiction() {
    assume(¬isConvergent(a/b, x)) →
    
    lemma UniqueR() {
      assert(∃!r ∈ ℤ: q_r ≤ b ≤ q_{r+1})
    } →
    
    assert(|q_rx - p_r| ≤ |bx - a|) by(BestApproximations) →
    assert(|bx - a| = b|x - a/b|) →
    assert(b|x - a/b| < b × 1/(2b²)) →
    assert(b|x - a/b| = 1/(2b)) →
    
    conclude(|x - p_r/q_r| < 1/(2q_rb)) →
    
    lemma TriangleInequality() {
      assert(|a/b - p_r/q_r| ≤ |x - p_r/q_r| + |x - a/b|)
    } →
    
    assert(|a/b - p_r/q_r| < 1/(2q_rb) + 1/(2b²)) by(TriangleInequality) →
    
    assert(q_ra - p_rb ∈ ℤ ∧ a/b ≠ p_r/q_r) →
    assert(|a/b - p_r/q_r| = |q_ra - p_rb|/(q_rb)) →
    assert(|q_ra - p_rb|/(q_rb) ≥ 1/(q_rb)) →
    
    conclude(1/(q_rb) < 1/(2q_rb) + 1/(2b²)) →
    conclude(q_r > b) →
    
    contradiction(q_r > b ∧ q_r ≤ b)
  } →
  
  conclude(isConvergent(a/b, x))
}