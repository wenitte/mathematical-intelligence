theorem CartesianProductContinuity() {
  assert(
    ∀n ∈ ℕ_{>0} ∧
    ∀i ∈ {1,...,n} (
      M_i = (A_i, d_i) ∧ N_i = (B_i, d'_i) are metric spaces ∧
      f_i: M_i → N_i are continuous
    ) ∧
    M = ∏_{i=1}^n M_i ∧ N = ∏_{i=1}^n N_i ∧
    d_∞(x,y) = max_{i=1}^n{d_i(x_i,y_i)} ∧
    F(x₁,...,xₙ) = (f₁(x₁),...,fₙ(xₙ)) 
    ⇒ F is continuous
  )
} ↔

proof CartesianProductContinuity() {
  setVar(ε: ℝ_{>0}) →
  setVar(x: M) →
  
  lemma ContinuityForEachComponent() {
    assert(
      ∀k ∈ {1,...,n} ∃δₖ ∈ ℝ_{>0}:
      ∀yₖ ∈ Aₖ (
        dₖ(xₖ,yₖ) < δₖ ⇒ d'ₖ(fₖ(xₖ),fₖ(yₖ)) < ε
      )
    )
  } →

  setVar(δ = max{δₖ: k ∈ {1,...,n}}) →
  
  assert(
    ∀y ∈ M (
      d_∞(x,y) < δ ⇒
      max_{i=1}^n{d_i(x_i,y_i)} < δ ⇒
      ∀k ∈ {1,...,n}(dₖ(xₖ,yₖ) < δ) ⇒
      ∀k ∈ {1,...,n}(d'ₖ(fₖ(xₖ),fₖ(yₖ)) < ε) ⇒
      max_{i=1}^n{d'_i(f_i(x_i),f_i(y_i))} < ε ⇒
      d_∞(F(x),F(y)) < ε
    )
  ) →

  apply(DefinitionOfContinuity) →
  assert(
    ∀x ∈ M ∀ε > 0 ∃δ > 0 ∀y ∈ M (
      d_∞(x,y) < δ ⇒ d_∞(F(x),F(y)) < ε
    )
  ) →
  
  conclude(F is continuous)
}