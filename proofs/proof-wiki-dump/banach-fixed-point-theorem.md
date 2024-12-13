theorem Banach_Fixed_Point() {
  assert(
    ∀M(IsCompleteMetricSpace(M) ∧ 
    ∃f(f: M → M) ∧
    ∃q(q ∈ (0,1) ∧ 
    ∀x,y ∈ M(d(f(x),f(y)) ≤ q·d(x,y)))) →
    ∃!p ∈ M(f(p) = p)
  )
} ↔

proof Banach_Fixed_Point() {
  // Uniqueness part
  lemma Uniqueness() {
    setVar(p₁,p₂: M) →
    assume(f(p₁) = p₁ ∧ f(p₂) = p₂) →
    assert(d(p₁,p₂) = d(f(p₁),f(p₂))) →
    assert(d(p₁,p₂) ≤ q·d(p₁,p₂)) →
    assert((1-q)·d(p₁,p₂) ≤ 0) →
    assert(1-q > 0 ∧ d(p₁,p₂) ≥ 0) →
    assert(d(p₁,p₂) = 0) →
    assert(p₁ = p₂)
  } →

  // Existence part
  lemma Existence() {
    setVar(a₀: M) →
    define(sequence(aₙ), aₙ₊₁ = f(aₙ)) →
    
    // Contractive estimate by induction
    lemma Contractive_Estimate() {
      assert(∀n ∈ ℕ(d(aₙ₊₁,aₙ) ≤ qⁿ·d(a₁,a₀))) →
      // Base case n=1
      assert(d(a₂,a₁) = d(f(a₁),f(a₀)) ≤ q·d(a₁,a₀)) →
      // Inductive step
      assume(d(aₖ₊₁,aₖ) ≤ qᵏ·d(a₁,a₀)) →
      assert(d(aₖ₊₂,aₖ₊₁) = d(f(aₖ₊₁),f(aₖ)) ≤ q·d(aₖ₊₁,aₖ) ≤ q·qᵏ·d(a₁,a₀))
    } →

    // Cauchy sequence proof
    assert(d(aₙ₊ₘ,aₙ) ≤ Σⱼ₌ₙⁿ⁺ᵐ⁻¹ d(aⱼ₊₁,aⱼ)) →
    assert(d(aₙ₊ₘ,aₙ) ≤ Σⱼ₌ₙⁿ⁺ᵐ⁻¹ qʲ·d(a₁,a₀)) →
    assert(d(aₙ₊ₘ,aₙ) ≤ qⁿ·((1-qᵐ)/(1-q))·d(a₁,a₀)) →
    
    // Convergence to fixed point
    assert(limₙ→∞ qⁿ = 0) →
    assert((1-qᵐ)/(1-q) ≤ 1/(1-q)) →
    assert(∃p ∈ M(limₙ→∞ aₙ = p)) →
    
    // Verify fixed point
    assert(d(f(p),p) ≤ d(f(p),f(aₙ)) + d(f(aₙ),p)) →
    assert(d(f(p),p) ≤ q·d(p,aₙ) + d(aₙ₊₁,p)) →
    assert(limₙ→∞ d(f(p),p) = 0) →
    assert(f(p) = p)
  }
}