theorem Cyclic_Quadrilateral_Maximum_Area() {
  assert(
    ∀Q[Quadrilateral] ∧ 
    let(sides(Q) = {a,b,c,d}) ∧
    let(𝔸 = area(Q)) ⇒
    (isCyclic(Q) ↔ isMaximumArea(𝔸, {a,b,c,d}))
  )
}

proof Cyclic_Quadrilateral_Maximum_Area() {
  apply(Bretschneider_Formula) →
  assert(
    𝔸 = √((s-a)(s-b)(s-c)(s-d) - abcd·cos²((α+γ)/2))
    where s = semiperimeter(Q)
  ) →
  
  lemma Maximum_Area_Condition() {
    assert(
      isMaximumArea(𝔸) ↔ cos²((α+γ)/2) = 0
    )
  } →
  
  assert(cos²((α+γ)/2) = 0 ↔ cos((α+γ)/2) = 0) →
  
  lemma Area_At_Maximum() {
    assert(
      cos((α+γ)/2) = 0 →
      𝔸 = √((s-a)(s-b)(s-c)(s-d))
    )
  } →
  
  apply(Brahmagupta_Formula) →
  
  assert(cos((α+γ)/2) = 0 ↔ (α+γ)/2 = π/2) →
  assert((α+γ)/2 = π/2 ↔ α+γ = π) →
  assert(α+γ = π ↔ α+γ = 180°) →
  
  apply(Cyclic_Quadrilateral_Opposite_Angles) →
  conclude(isCyclic(Q) ↔ isMaximumArea(𝔸, {a,b,c,d}))
}