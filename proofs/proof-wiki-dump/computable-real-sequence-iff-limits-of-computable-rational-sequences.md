theorem ComputableRealSequence() {
  assert(
    ∀{xₘ: Sequence(ℝ)} ↔ (
      isComputable(xₘ) ↔ 
      ∃{aₖ: Sequence(ℚ), φ,ψ: ℕ²→ℕ} (
        isComputable(aₖ) ∧
        isTotal(φ) ∧ isTotal(ψ) ∧
        ∀m,p∈ℕ: ∀n≥ψ(m,p): |aᵩ(m,n) - xₘ| < 1/(p+1)
      )
    )
  )
}

proof ComputableRealSequence() {
  // Necessary Condition
  branch NecessaryCondition() {
    assume(isComputable(xₘ)) →
    assert(∃f:ℕ²→ℕ (
      isTotal(f) ∧
      ∀m,p∈ℕ: (cₘ,ₚ-1)/(p+1) < xₘ < (cₘ,ₚ+1)/(p+1)
      where cₘ,ₚ = decode(f(m,p))
    )) →
    
    define(N(k) = f(π₁(k), π₂(k))) →
    define(D(k) = π₂(k)) →
    define(aₖ = dₖ/D(k)) where dₖ = decode(N(k)) →
    define(φ(m,n) = π(m,n)) →
    define(ψ(m,p) = p) →
    
    assert(isTotal(π) ∧ isTotal(π⁻¹)) by PrimitiveRecursiveProperties() →
    
    forall(m,p∈ℕ, n≥ψ(m,p)) {
      assert(aᵩ(m,n) = cₘ,ₙ/(n+1)) →
      assert(|aᵩ(m,n) - xₘ| < 1/(n+1) ≤ 1/(p+1))
    }
  }

  // Sufficient Condition
  branch SufficientCondition() {
    assume(∃aₖ,φ,ψ: conditions()) →
    assert(∃N,D:ℕ→ℕ (
      isTotal(N) ∧ isTotal(D) ∧
      aₖ = dₖ/D(k) where dₖ = decode(N(k))
    )) →
    
    define(f(m,p) = quot_ℤ(
      N(φ(m,ψ(m,2p+1)))×(2p+2) + D(φ(m,ψ(m,2p+1))),
      2D(φ(m,ψ(m,2p+1)))
    )) →
    
    assert(isTotal(f)) by PrimitiveRecursiveProperties() →
    
    forall(m,p∈ℕ) {
      let(nₘ,q = ψ(m,q)) →
      assert((f(m,p)-1)/(p+1) < xₘ < (f(m,p)+1)/(p+1))
    } →
    
    conclude(isComputable(xₘ))
  }
}

corollary ComputableRealSequenceCantor() {
  assert(
    ∀{xₘ: Sequence(ℝ)} ↔
    isComputable(xₘ) ↔ 
    ∃{aₖ: Sequence(ℚ)} (
      isComputable(aₖ) ∧
      ∀m,p∈ℕ: |aπ(m,p) - xₘ| < 1/(p+1)
    )
  )
}