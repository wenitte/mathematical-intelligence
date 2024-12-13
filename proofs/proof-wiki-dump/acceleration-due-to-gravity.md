theorem Gravity_Acceleration() {
  assert(
    ∀B[body] ∧ ∀P[body] ∧ ∀M,m,r,F,G,a[ℝ⁺] ⇒
    (F = G*M*m/r² ∧ F = m*a) →
    (a = G*M/r²)
  )
} ↔

proof Gravity_Acceleration() {
  setVar(B: body, P: body) →
  setVar(M: mass(P), m: mass(B)) →
  setVar(r: distance(B,P)) →
  setVar(G: gravitational_constant) →
  
  lemma Newton_Gravitation() {
    assert(F = G*M*m/r²)
  } →
  
  lemma Newton_Second_Law() {
    assert(F = m*a)
  } →
  
  assert(G*M*m/r² = m*a) →
  assert(m > 0) →
  apply(algebra_division(m)) →
  assert(a = G*M/r²)
}

theorem Earth_Gravity() {
  assert(
    ∀B[body] ∧ ∀m,g[ℝ⁺] ⇒
    (P = Earth ∧ g = G*M_earth/r_earth²) →
    F = m*g
  )
} ↔

proof Earth_Gravity() {
  setVar(B: body, P: Earth) →
  setVar(m: mass(B)) →
  setVar(g: G*M_earth/r_earth²) →
  
  apply(Gravity_Acceleration()) →
  assert(a = g) →
  assert(F = m*g)
}