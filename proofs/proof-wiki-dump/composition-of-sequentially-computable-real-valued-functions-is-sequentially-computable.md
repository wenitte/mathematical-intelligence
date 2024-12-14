theorem Composition_Seq_Computable() {
  assert(
    ∀D ⊆ ℝ^n, ∀E ⊆ ℝ^m, 
    ∀f: D → ℝ, ∀g₁,...,gₙ: E → ℝ,
    [f is sequentially computable ∧
     ∀i ∈ [1..n]: gᵢ is sequentially computable ∧
     ∀x ∈ E: (g₁(x),...,gₙ(x)) ∈ D] ⇒
    h(x₁,...,xₘ) = f(g₁(x₁,...,xₘ),...,gₙ(x₁,...,xₘ)) is sequentially computable
  )
} ↔

proof Composition_Seq_Computable() {
  setVar(D ⊆ ℝ^n, E ⊆ ℝ^m) →
  setVar(f: D → ℝ, g₁,...,gₙ: E → ℝ) →
  setVar((x₁,ₖ)ₖ,...,(xₘ,ₖ)ₖ as m-tuple of computable sequences in E) →
  
  lemma Seq_Comp_Each_g() {
    assert(
      ∀i ∈ [1..n]: (gᵢ(x₁,ₖ,...,xₘ,ₖ))ₖ is computable
    )
  } →
  
  lemma Input_In_Domain() {
    assert(
      ∀k ∈ ℕ: (g₁(x₁,ₖ,...,xₘ,ₖ),...,gₙ(x₁,ₖ,...,xₘ,ₖ)) ∈ D
    )
  } →
  
  apply(Seq_Comp_Each_g()) ∧ apply(Input_In_Domain()) →
  assert(
    ((g₁(x₁,ₖ,...,xₘ,ₖ))ₖ,...,(gₙ(x₁,ₖ,...,xₘ,ₖ))ₖ) is n-tuple of computable sequences in D
  ) →
  
  lemma F_Comp_On_Sequences() {
    assert(
      (f(g₁(x₁,ₖ,...,xₘ,ₖ),...,gₙ(x₁,ₖ,...,xₘ,ₖ)))ₖ is computable
    )
  } →
  
  assert(
    ∀k ∈ ℕ: f(g₁(x₁,ₖ,...,xₘ,ₖ),...,gₙ(x₁,ₖ,...,xₘ,ₖ)) = h(x₁,ₖ,...,xₘ,ₖ)
  ) →
  
  conclude(
    (h(x₁,ₖ,...,xₘ,ₖ))ₖ is computable ∧
    h is sequentially computable
  )
}