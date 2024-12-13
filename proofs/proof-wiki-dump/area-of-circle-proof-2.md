theorem Circle_Area() {
  assert(
    ∀r ∈ ℝ⁺ → Area(circle[r]) = πr²
  )
} ↔

proof Circle_Area() {
  setVar(r: ℝ⁺) →
  let(Ring_Area[t, dt] = 2πt·dt) →
  
  lemma Shell_Integration() {
    assert(
      Area(circle[r]) = ∫₀ʳ Ring_Area[t, dt]
    )
  } →
  
  apply(Shell_Integration()) →
  assert(
    Area(circle[r]) = ∫₀ʳ 2πt dt
  ) →
  
  apply(Integration_Rules()) →
  assert(
    ∫₀ʳ 2πt dt = [πt²]₀ʳ
  ) →
  
  apply(Definite_Integral_Evaluation()) →
  assert(
    [πt²]₀ʳ = πr² - 0
  ) →
  
  conclude(
    Area(circle[r]) = πr²
  )
}