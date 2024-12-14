theorem Positive_Bounded_Linear_Operator() {
  let(H: HilbertSpace[C]) →
  let(B(H): BoundedLinearOperators(H)) →
  let(T: LinearOperator(H → H)) →
  assert(
    T ∈ Positive(B(H)) ↔ 
    (∀x ∈ H ⇒ ⟨Tx,x⟩ ∈ ℝ≥0)
  )
}

proof Positive_Bounded_Linear_Operator() {
  // Necessary Condition
  section Forward() {
    assume(T ∈ Positive(B(H))) →
    apply(Positive_Nth_Root_Existence()) →
    ∃R: HermitianOperator(H) | T = R² →
    assert(R² = R*R) →
    ∀x ∈ H {
      assert(⟨Tx,x⟩ = ⟨R*Rx,x⟩) →
      apply(Adjoint_Definition()) →
      assert(⟨R*Rx,x⟩ = ⟨Rx,Rx⟩) →
      apply(Inner_Product_Norm()) →
      assert(⟨Rx,Rx⟩ = ∥Rx∥²) →
      assert(∥Rx∥² ∈ ℝ≥0)
    }
  }

  // Sufficient Condition
  section Backward() {
    assume(∀x ∈ H ⇒ ⟨Tx,x⟩ ∈ ℝ≥0) →
    apply(Hermitian_Numerical_Range()) →
    assert(T = T*) →
    
    lemma Spectrum_NonNegative() {
      let(λ ∈ σ(T)) →
      apply(Approximate_Eigenvalue_Characterization()) →
      ∃{xₙ}(n ∈ ℕ) | (∀n: ∥xₙ∥ = 1 ∧ ∥Txₙ - λxₙ∥ → 0) →
      apply(Cauchy_Schwarz_Inequality()) →
      assert(|⟨Txₙ - λxₙ,xₙ⟩| ≤ ∥Txₙ - λxₙ∥) →
      assert(⟨Txₙ - λxₙ,xₙ⟩ → 0) →
      assert(⟨Txₙ,xₙ⟩ - λ∥xₙ∥² = ⟨Txₙ,xₙ⟩ - λ) →
      assert(⟨Txₙ,xₙ⟩ → λ) →
      assert(⟨Txₙ,xₙ⟩ ∈ ℝ≥0) →
      apply(Closed_Set_Property(ℝ≥0)) →
      assert(λ ∈ ℝ≥0)
    } →
    
    assert(σ(T) ⊆ [0,∞)) →
    assert(T ∈ Positive(B(H)))
  }
}