theorem Bernstein_Unique_Global_Solution() {
  let(F, F_y, F_y': ℝ → ℝ) →
  assert(
    (continuous(F) ∧ continuous(F_y) ∧ continuous(F_y') on I=[a,b]) ∧
    (∃k>0: F_y(x,y,y') > k) ∧
    (∃α,β≥0: |F(x,y,y')| ≤ αy'^2 + β) ∧
    bounded(α,β) in ℝ²
    ⇒
    ∃!L: (y''=F(x,y,y') ∧ L passes through (a,A) and (b,B) where a≠b)
  )
}

proof Bernstein_Unique_Global_Solution() {
  lemma Uniqueness() {
    assert(L is integral curve) ∧
    assert(L passes through (a,A) and (b,B)) →
    conclude(L is unique)
  }

  lemma Bound_Estimate() {
    setVar(y: y''=F(x,y,y') on [a,c]) ∧
    assert(y(a)=a₁ ∧ y(c)=c₁) →
    conclude(
      |y(x) - (a₁(c-x) + c₁(x-a))/(c-a)| ≤ 
      (1/k)max(|F(x,(a₁(c-x) + c₁(x-a))/(c-a),(c₁-a₁)/(c-a))|)
    )
  }

  lemma Derivative_Bound() {
    setVar(y: y''=F(x,y,y') on I) ∧
    assert(y(a)=a₁ ∧ y(c)=c₁) →
    conclude(∃M∈ℝ: ∀x∈I: |y'(x)-(c₁-a₁)/(c-a)| ≤ M)
  }

  constructProof() {
    construct(point A(a,a₁)) →
    construct(integral_curve L through A with y'(a)=0) →
    construct(point D(d,d₁) on L) →
    construct(line y=d₁ for x≥d) →
    construct(point B(b,b₁)) →
    construct(line x=b₁ for y≥d₁) →
    let(Q = intersection of lines) →
    let(P(ξ,ξ₁) on DQB) →
    
    assert(∃!curve_family φ(x,α) through A where α=y'(a)) →
    assert(monotonic(ξ(α)) ∧ monotonic(α(ξ))) →
    
    byContradiction() {
      assume(∃R∈DR: R not reachable) →
      assert(lim(α,ξ→r) = ±π/2) →
      apply(Bound_Estimate()) ∧
      apply(Derivative_Bound()) →
      contradiction()
    }
    
    conclude(curve exists through any two points)
  }
}