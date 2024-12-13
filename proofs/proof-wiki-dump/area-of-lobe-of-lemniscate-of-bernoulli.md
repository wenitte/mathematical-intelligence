theorem LemniscateLobeArea() {
  assert(
    ∀M: LemniscateOfBernoulli, ∀a ∈ ℝ⁺, ∀O: Point ⇒
    [M.foci = {(a,0), (-a,0)} ∧ O = (0,0)] →
    area(lobe(M)) = a²
  )
} ↔

proof LemniscateLobeArea() {
  setVar(M: LemniscateOfBernoulli) →
  setVar(a: ℝ⁺) →
  setVar(O: Point) →
  
  lemma PolarEquation() {
    assert(r² = 2a² * cos(2θ))
  } →
  
  setVar(A: ℝ = area(lobe(M))) →
  assert(lobeTrace: -π/2 ≤ 2θ ≤ π/2) →
  
  assert(
    A = ∫_{-π/4}^{π/4} (r²/2) dθ
  ) by PolarAreaFormula() →
  
  assert(
    A = ∫_{-π/4}^{π/4} (2a² * cos(2θ)/2) dθ
  ) by PolarEquation() →
  
  assert(
    A = a² * ∫_{-π/4}^{π/4} cos(2θ) dθ
  ) →
  
  assert(
    A = a² * [sin(2θ)/2]_{-π/4}^{π/4}
  ) by Antiderivative() →
  
  assert(
    A = (a²/2) * (sin(π/2) - sin(-π/2))
  ) →
  
  assert(
    A = (a²/2) * (1 - (-1))
  ) by TrigValues() →
  
  assert(
    A = a²
  )
}