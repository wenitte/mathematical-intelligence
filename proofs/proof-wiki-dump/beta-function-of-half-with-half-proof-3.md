theorem Beta_Half_Half() {
  assert(
    Beta(1/2, 1/2) = π
  )
} ↔

proof Beta_Half_Half() {
  assert(Beta(x,y) := ∫[0→1] t^(x-1)(1-t)^(y-1) dt) →
  
  assert(Beta(1/2, 1/2) = ∫[0→1] t^(1/2-1)(1-t)^(1/2-1) dt) →
  assert(Beta(1/2, 1/2) = ∫[0→1] 1/(t^(1/2)(1-t)^(1/2)) dt) →
  
  lemma Substitution() {
    setVar(t = u^2) →
    assert(dt = 2u du) ∧
    assert(t = 0 ↔ u^2 = 0) ∧
    assert(t = 1 ↔ u^2 = 1 ↔ u = 1)
  } →
  
  apply(Substitution()) →
  assert(Beta(1/2, 1/2) = ∫[0→1] (2u du)/(u(1-u^2)^(1/2))) →
  assert(Beta(1/2, 1/2) = 2∫[0→1] du/((1-u^2)^(1/2))) →
  
  lemma Arcsin_Derivative() {
    assert(d/du arcsin(u) = 1/((1-u^2)^(1/2)))
  } →
  
  apply(Arcsin_Derivative()) →
  assert(Beta(1/2, 1/2) = 2[arcsin(u)]|[0→1]) →
  assert(Beta(1/2, 1/2) = 2(π/2 - 0)) →
  assert(Beta(1/2, 1/2) = π)
}