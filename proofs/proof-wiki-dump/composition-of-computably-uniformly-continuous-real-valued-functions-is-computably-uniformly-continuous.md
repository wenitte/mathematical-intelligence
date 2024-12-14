theorem ComputableUniformContinuityComposition() {
  assert(
    ∀D ⊆ ℝⁿ, ∀E ⊆ ℝᵐ, ∀f:D→ℝ, ∀g₁,...,gₙ:E→ℝ
    (isCompUnifCont(f) ∧ 
     ∀i∈[1,n](isCompUnifCont(gᵢ)) ∧
     ∀x∈E((g₁(x),...,gₙ(x))∈D)) →
    isCompUnifCont(h:E→ℝ where h(x₁,...,xₘ)=f(g₁(x₁,...,xₘ),...,gₙ(x₁,...,xₘ)))
  )
} ↔

proof ComputableUniformContinuityComposition() {
  setDef(isCompUnifCont(F) ↔ 
    ∃d:ℕ→ℕ(isTotal(d) ∧ isRecursive(d) ∧
    ∀k∈ℕ,∀x,y∈dom(F)(
      ‖x-y‖<1/(d(k)+1) → |F(x)-F(y)|<1/(k+1)))) →
  
  assert(∃d_f,d_g₁,...,d_gₙ:ℕ→ℕ satisfying isCompUnifCont definitions) →

  define(d_h(k) = max(d_g₁(n·d_f(k)+(n-1)),...,d_gₙ(n·d_f(k)+(n-1)))) →

  lemma TotalRecursive() {
    assert(isPrimRec(max) ∧ isPrimRec(mult) ∧ isPrimRec(add) ∧
           isPrimRec(const) → isTotal(d_h) ∧ isRecursive(d_h))
  } →

  fixVar(k∈ℕ, x,y∈E where ‖x-y‖<1/(d_h(k)+1)) →
  
  assert(∀i∈[1,n](
    d_h(k) ≥ d_gᵢ(n·d_f(k)+(n-1)) →
    ‖x-y‖ < 1/(d_gᵢ(n·d_f(k)+(n-1))+1) →
    |gᵢ(x)-gᵢ(y)| < 1/(n·(d_f(k)+1)))) →

  lemma VectorNormInequality() {
    assert(‖(g₁(x),...,gₙ(x))-(g₁(y),...,gₙ(y))‖ ≤ 
           Σᵢ₌₁ⁿ|gᵢ(x)-gᵢ(y)| < 1/(d_f(k)+1))
  } →

  apply(isCompUnifCont(f)) →
  assert(|h(x)-h(y)| < 1/(k+1)) →
  
  conclude(isCompUnifCont(h))
}