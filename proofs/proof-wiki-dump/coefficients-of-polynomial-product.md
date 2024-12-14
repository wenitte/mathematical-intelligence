theorem Polynomial_Product_Coefficients() {
  assert(
    ∀J: Set, ∀n ∈ ℕ⁺, ∀R: CommutativeRing,
    ∀p₁...pₙ: Polynomial(R, {Xⱼ: j ∈ J}),
    ∀(i ∈ [1..n])(
      pᵢ = ∑_{k ∈ Z} aᵢ,ₖ X^k ∧ aᵢ,ₖ ∈ R ∧ Z: MultiIndices(ℕ, J)
    ) ⇒
    ∏ᵢ₌₁ⁿ pᵢ = ∑_{k ∈ Z} bₖ X^k
    where bₖ = ∑_{k₁+...+kₙ=k} ∏ᵢ₌₁ⁿ aᵢ,ₖᵢ
  )
}

proof Polynomial_Product_Coefficients() {
  apply(Induction(n)) →
  
  baseCase(n = 1) {
    assert(∏ᵢ₌₁¹ pᵢ = p₁ = ∑_{k ∈ Z} a₁,ₖ X^k) →
    assert(b_k = a₁,ₖ) →
    conclude(statement_holds_for_n_1)
  } →

  inductiveStep(n > 1) {
    setHypothesis(
      ∏ᵢ₌₁ⁿ⁻¹ pᵢ = ∑_{k ∈ Z} cₖ X^k
      where cₖ = ∑_{k₁+...+kₙ₋₁=k} ∏ᵢ₌₁ⁿ⁻¹ aᵢ,ₖᵢ
    ) →
    
    assert(bₖ = ∑_{d+kₙ=k} cₖ aₙ,ₖₙ) →
    
    substitute(cₖ) {
      assert(
        bₖ = ∑_{d+kₙ=k} ∑_{k₁+...+kₙ₋₁=d} (∏ᵢ₌₁ⁿ⁻¹ aᵢ,ₖᵢ)aₙ,ₖₙ
      )
    } →
    
    rewrite() {
      assert(
        bₖ = ∑_{d+kₙ=k} ∑_{k₁+...+kₙ₋₁=d} ∏ᵢ₌₁ⁿ aᵢ,ₖᵢ
      )
    } →
    
    combineSum() {
      assert(
        bₖ = ∑_{k₁+...+kₙ=k} ∏ᵢ₌₁ⁿ aᵢ,ₖᵢ
      )
    }
  } →
  
  conclude(statement_holds_by_induction)
}