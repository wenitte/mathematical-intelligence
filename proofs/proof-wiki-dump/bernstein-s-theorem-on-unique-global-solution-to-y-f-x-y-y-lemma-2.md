theorem Bernstein_Lemma_2() {
  let(I = [a,b]: ℝ)
  let(F,F_y,F_y': ℝ³→ℝ)
  let(k > 0: ℝ)
  let(α,β: ℝ²→ℝ⁺)
  assert(
    continuous(F,F_y,F_y') ∧
    (∀x,y,y' ∈ ℝ)(F_y(x,y,y') > k) ∧
    (∀x,y,y' ∈ ℝ)(|F(x,y,y')| ≤ α(x,y)y'² + β(x,y)) ∧
    (∀x ∈ [a,c])(y(x) = F(x,y,y')) ∧
    y(a) = a₁ ∧ y(c) = c₁
    ⇒
    |y(x) - (a₁(c-x) + c₁(x-a))/(c-a)| ≤ 
    (1/k)max(|F(x,(a₁(c-x) + c₁(x-a))/(c-a),(c₁-a₁)/(c-a))|)
  )
}

proof Bernstein_Lemma_2() {
  setVar(χ(x) = y(x) - (a₁(c-x) + c₁(x-a))/(c-a)) →
  assert(χ(a) = 0 ∧ χ(c) = 0) →
  
  lemma Mean_Value() {
    assert(F(x,y,y') = F(x,y,y') - F(x,(a₁(c-x) + c₁(x-a))/(c-a),y') + 
           F(x,(a₁(c-x) + c₁(x-a))/(c-a),y')) →
    assert(∃ψ,θ ∈ ℝ)(0 < θ < 1 ∧
           ψ = (a₁(c-x) + c₁(x-a))/(c-a) + θχ(x))
  } →

  apply(Mean_Value()) →
  
  lemma Maximum_Case() {
    assume(∃ξ ∈ (a,b))(χ(ξ) > 0 ∧ χ'(ξ) = 0) →
    assert(y''(ξ) ≤ 0) →
    assert(y'(ξ) = (c₁-a₁)/(c-a)) →
    assert(0 ≥ F(ξ,(a₁(c-ξ) + c₁(ξ-a))/(c-a),(c₁-a₁)/(c-a)) + 
           kχ(ξ)) →
    conclude(χ(ξ) ≤ -(1/k)F(ξ,(a₁(c-ξ) + c₁(ξ-a))/(c-a),(c₁-a₁)/(c-a)))
  } →

  apply(Maximum_Case()) →
  assert(analogous_for_minimum_case) →
  
  conclude(|χ(x)| ≤ (1/k)max(|F(x,(a₁(c-x) + c₁(x-a))/(c-a),(c₁-a₁)/(c-a))|))
}