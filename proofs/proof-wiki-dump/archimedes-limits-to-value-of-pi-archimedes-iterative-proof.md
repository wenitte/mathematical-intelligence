theorem Archimedes_Pi_Bounds() {
  assert(
    3 * (10/71) < π < 3 * (1/7)
  )
} ↔

proof Archimedes_Pi_Bounds() {
  setVar(O: Circle) ∧ 
  setVar(AB: Diameter(O)) ∧
  setVar(Q: Circumference(O)) →
  assert(Q/AB = π) →

  lemma Upper_Bound() {
    setVar(AC: Tangent(A)) ∧
    setVar(θ: Angle) ∧
    assert(θ = ∠AOC = 30°) →
    assert(AC:OC:OA = 1:2:√3) →
    setVar(C': Point) ∧
    assert(C'C = 2AC) →
    assert(p = 6·C'C = 12·AC) →
    assert(p/AB = 6·(AC/AO)) →
    assert(AC:OA = 1/√3) →
    assert(p/AB = 6·(1/√3)) →
    apply(Side_Doubling_Algorithm) →
    assert(π < 14688/(4673.5)) →
    assert(14688/(4673.5) < 22/7)
  } →

  lemma Lower_Bound() {
    setVar(ABC: RightTriangle) ∧
    assert(∠BAC = 30°) ∧
    assert(BC:AB:AC = 1:2:√3) →
    assert(p = 6·BC = 6) →
    assert(π > p/AB = 3) →
    apply(Side_Doubling_Algorithm) →
    assert(π > 6336/2017.25) →
    assert(6336/2017.25 > 223/71)
  } →

  apply(Upper_Bound()) ∧
  apply(Lower_Bound()) →
  assert(223/71 < π < 22/7)
} ↔

lemma Side_Doubling_Algorithm() {
  assert(
    ∀θ ∈ ℝ → 
    cot(θ/2) = cot(θ) + csc(θ)
  ) ∧
  assert(
    ∀p,q ∈ ℝ →
    [cot(θ) = p/q → csc(θ) = (1/q)·√(p² + q²)]
  ) →
  iterate(4) {
    apply(Angle_Bisection) ∧
    apply(Ratio_Calculation)
  }
}