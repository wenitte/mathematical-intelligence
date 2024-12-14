theorem ComplementBoundedSet() {
  assert(
    ∀n ∈ ℕ>1, ∀A ⊆ ℝⁿ, (isBounded(A) → hasExactlyOneUnboundedComponent(ℝⁿ∖A))
  )
} ↔

proof ComplementBoundedSet() {
  setVar(n: ℕ>1) →
  setVar(A: ℝⁿ, bounded) →
  
  lemma BoundedDefinition() {
    assert(∃x₀ ∈ ℝⁿ, ∃ε > 0: A ⊆ Bε(x₀))
  } →
  
  // Existence part
  proof UnboundedComponentExists() {
    setVar(t ≥ ε) →
    define(xₜ = x₀ + (t,0,...,0)) →
    assert(‖xₜ - x₀‖ = t ≥ ε) →
    conclude(xₜ ∉ Bε(x₀) ⊇ A) →
    define(T = {xₜ: t ≥ ε}) →
    
    lemma TUnbounded() {
      byContradiction(
        assume(isBounded(T)) →
        assert(∃K ∈ ℝ: ∀x ∈ T, d(x,xε) ≤ K) →
        assert(d(xε+K+1,xε) = K+1 > K) →
        contradiction()
      )
    } →
    
    lemma TConnected() {
      setVar(xₜ,xₜ' ∈ T) →
      define(f: [0,1] → T, f(s) = (t + (t'-t)s, 0,...,0)) →
      assert(isContinuous(f)) →
      assert(isPathConnected(T)) →
      conclude(isConnected(T))
    }
  } →
  
  // Uniqueness part
  proof UniquenessProof() {
    assert(isConnected(ℝⁿ∖Bε(x₀))) →
    
    lemma OtherComponentsBounded() {
      setVar(C: component) →
      assert(C ≠ componentContaining(ℝⁿ∖Bε(x₀)) → C ⊆ Bε(x₀)) →
      conclude(isBounded(C))
    } →
    
    lemma ConnectednessProof() {
      setVar(x,x' ∈ ℝⁿ∖Bε(x₀)) →
      define(y = x₀ + ε/‖x-x₀‖(x-x₀)) →
      define(y' = x₀ + ε/‖x'-x₀‖(x'-x₀)) →
      assert(‖y-x₀‖ = ‖y'-x₀‖ = ε) →
      assert(isConnected({y,y'} in ℝⁿ∖Bε(x₀))) →
      define(pathF(t) = x₀ + (1+t(ε/‖x-x₀‖-1))(x-x₀)) →
      define(pathG(t) = x₀ + (1+t(ε/‖x'-x₀‖-1))(x'-x₀)) →
      assert(isPathConnected({x,y,x',y'} in ℝⁿ∖Bε(x₀)))
    }
  }
} ↔
conclude(ComplementBoundedSet)