theorem ComputableRealSequenceCorollary() {
  assert(
    ∀{xₘ: Sequence(ℝ)} ⇒
    (isComputableRealSequence({xₘ}) ↔
     ∃{aₖ: Sequence(ℚ)} ∧ isComputableRationalSequence({aₖ}) ∧
     ∀m,p ∈ ℕ: |aₖ(π(m,p)) - xₘ| < 1/(p+1))
  )
} ↔

proof ComputableRealSequenceCorollary() {
  // Necessary Condition
  lemma NecessaryCondition() {
    setVar(bₖ: Sequence(ℚ), isComputable(bₖ)) →
    setVar(φ,ψ: ℕ²→ℕ, isRecursive(φ) ∧ isRecursive(ψ)) →
    assert(∀m,p ∈ ℕ: ∀n ≥ ψ(m,p): |bₖ(φ(m,n)) - xₘ| < 1/(p+1)) →
    
    define(χ: ℕ→ℕ, χ(k) = φ(π₁(k), ψ(π₁(k),π₂(k)))) →
    assert(isRecursive(χ)) →
    
    define(aₖ: Sequence(ℚ), aₖ(k) = bₖ(χ(k))) →
    assert(isComputableRationalSequence(aₖ)) →
    
    forAll(m,p ∈ ℕ) {
      assert(aₖ(π(m,p)) = bₖ(χ(π(m,p)))) →
      assert(aₖ(π(m,p)) = bₖ(φ(m,ψ(m,p)))) →
      assert(|aₖ(π(m,p)) - xₘ| < 1/(p+1))
    }
  } →

  // Sufficient Condition
  lemma SufficientCondition() {
    setVar(aₖ: Sequence(ℚ), isComputable(aₖ)) →
    assert(∀m,p ∈ ℕ: |aₖ(π(m,p)) - xₘ| < 1/(p+1)) →
    
    define(bₖ: Sequence(ℚ), bₖ = aₖ) →
    define(φ: ℕ²→ℕ, φ(m,n) = π(m,n)) →
    define(ψ: ℕ²→ℕ, ψ(m,p) = p) →
    
    assert(isRecursive(φ) ∧ isRecursive(ψ)) →
    
    forAll(m,n,p ∈ ℕ, n ≥ ψ(m,p)) {
      assert(|bₖ(φ(m,n)) - xₘ| = |aₖ(π(m,n)) - xₘ|) →
      assert(|aₖ(π(m,n)) - xₘ| < 1/(n+1)) →
      assert(1/(n+1) ≤ 1/(p+1)) →
      assert(|bₖ(φ(m,n)) - xₘ| < 1/(p+1))
    }
  } →
  
  apply(NecessaryCondition()) ∧ apply(SufficientCondition())
}