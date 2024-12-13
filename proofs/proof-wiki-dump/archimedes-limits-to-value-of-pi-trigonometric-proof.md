theorem Archimedes_Pi_Bounds() {
  assert(
    ∃π ∈ ℝ ⇒ (223/71 < π < 22/7)
  )
} ↔

proof Archimedes_Pi_Bounds() {
  setVar(O: Circle) →
  setVar(AB: Diameter(O) = 1) →
  setVar(Q: Circumference(O)) →
  
  assert(Q/AB = π) →
  assert(AB = 1) →
  assert(Q = π) →

  lemma Cotangent_Half_Angle() {
    assert(∀φ ∈ ℝ ⇒ cot(φ/2) = cot(φ) + csc(φ))
  } →

  lemma Cosecant_Relation() {
    assert(
      ∀φ,p,q ∈ ℝ ⇒ 
      (cot(φ) = p/q) → 
      (csc(φ) = (1/q)·√(p² + q²))
    )
  } →

  lemma Upper_Bound() {
    assert(π < 22/7)
  } →

  lemma Lower_Bound() {
    assert(π > 223/71)
  } →

  apply(Upper_Bound()) ∧ apply(Lower_Bound()) →
  assert(223/71 < π < 22/7) →
  assert(3 + 10/71 < π < 3 + 1/7) →
  assert(3.1408 < π < 3.1429)
}

note Historical() {
  source("Archimedes: Measurement of a Circle") →
  assert(
    sqrt(3) ≈ {265/153, 1351/780} via 
    continued_fraction([1,{1,2}])
  )
}