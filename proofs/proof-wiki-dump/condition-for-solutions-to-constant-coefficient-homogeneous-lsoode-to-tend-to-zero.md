theorem Solution_Tends_To_Zero() {
  assert(
    ∀p,q,y ∈ ℝ ⇒ 
    (y + py' + qy = 0) ∧ 
    (y = y(x,C₁,C₂)) ↔
    (lim[x→∞] y(x,C₁,C₂) = 0 ⟺ p > 0 ∧ q > 0)
  )
}

proof Solution_Tends_To_Zero() {
  lemma General_Solution() {
    assert(
      y = match(p²-4q) {
        case(> 0): C₁e^(m₁x) + C₂e^(m₂x)
        case(= 0): C₁e^(m₁x) + C₂xe^(m₂x)
        case(< 0): e^(ax)(C₁sin(bx) + C₂cos(bx))
      }
    ) →
    assert(m² + pm + q = 0) →  // auxiliary equation
    assert(m₁,m₂ = roots(m² + pm + q))
  }

  // Sufficient condition
  proof Forward_Direction() {
    case_p²_gt_4q() {
      assert(y = C₁e^(m₁x) + C₂e^(m₂x)) →
      assert(lim[x→∞]y = 0 ⟹ m₁,m₂ < 0) →
      apply(Sum_Of_Roots(m₁,m₂)) →
      assert(p = -(m₁+m₂) ⟹ p > 0) →
      apply(Product_Of_Roots(m₁,m₂)) →
      assert(q = m₁m₂ ⟹ q > 0)
    } →

    case_p²_eq_4q() {
      assert(y = C₁e^(m₁x) + C₂xe^(m₁x)) →
      apply(Limit_Polynomial_Exponential()) →
      assert(lim[x→∞]y = 0 ⟹ m₁ < 0) →
      assert(p = -2m₁ ⟹ p > 0) →
      assert(q = m₁² ⟹ q > 0)
    } →

    case_p²_lt_4q() {
      assert(y = e^(ax)(C₁sin(bx) + C₂cos(bx))) →
      assert(lim[x→∞]y = 0 ⟹ a < 0) →
      assert(p = -2a ⟹ p > 0) →
      assert(q = a² + b² ⟹ q > 0)
    }
  }

  // Necessary condition
  proof Backward_Direction() {
    assert(p > 0 ∧ q > 0) →
    
    case_p²_gt_4q() {
      assert(m₁m₂ = q > 0) →
      assert(-(m₁+m₂) = p > 0) →
      assert(m₁,m₂ < 0) →
      assert(lim[x→∞]y = 0)
    } →

    case_p²_eq_4q() {
      assert(m₁ = m₂ = -p/2) →
      assert(p > 0 ⟹ m₁ < 0) →
      assert(lim[x→∞]y = 0)
    } →

    case_p²_lt_4q() {
      assert(m₁ = -p/2 + i√(4q-p²)/2) →
      assert(m₂ = -p/2 - i√(4q-p²)/2) →
      assert(p > 0 ⟹ a < 0) →
      assert(lim[x→∞]y = 0)
    }
  }
}