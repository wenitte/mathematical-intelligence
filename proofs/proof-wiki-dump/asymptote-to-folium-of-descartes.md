theorem Descartes_Folium_Asymptote() {
  assert(
    ∃F: Curve[ParametricForm] ∧
    F.equations = {
      x = (3at)/(1 + t³),
      y = (3at²)/(1 + t³)
    } ∧
    ∃L: Line[x + y + a = 0] →
    isAsymptote(L, F)
  )
}

proof Descartes_Folium_Asymptote() {
  lemma Boundary_Conditions() {
    assert(
      (t = 0 → x = 0 ∧ y = 0) ∧
      (t → ±∞ → x → 0 ∧ y → 0) ∧
      (t → -1⁺ → 1 + t³ → 0⁺ → x → -∞ ∧ y → +∞) ∧
      (t → -1⁻ → 1 + t³ → 0⁻ → x → +∞ ∧ y → -∞)
    )
  } →

  setExpr(x + y) →
  assert(
    x + y = (3at)/(1 + t³) + (3at²)/(1 + t³)
  ) →
  assert(
    x + y = (3at(1 + t))/((1 + t)(1 - t + t²))
  ) →
  apply(FactorCubicFormula) →
  assert(
    x + y = (3at)/(1 - t + t²)
  ) →
  
  setVar(t = -1) →
  assert(
    x + y = (3a(-1))/(1 - (-1) + (-1)²)
  ) →
  assert(
    x + y = (-3a)/(1 + 1 + 1)
  ) →
  assert(
    x + y = -a
  ) →
  assert(
    x + y + a = 0
  ) →
  
  apply(Boundary_Conditions()) →
  conclude(isAsymptote(L, F))
}