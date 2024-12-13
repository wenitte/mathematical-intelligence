theorem BrouwerFixedPoint_Smooth() {
  assert(
    ∀f ∈ C∞(B^n → B^n) ⇒ ∃x ∈ B^n: f(x) = x
    where B^n ⊂ ℝ^n is closed unit ball
  )
} ↔

proof BrouwerFixedPoint_Smooth() {
  begin_proof_by_contradiction() →
  assume(∃f ∈ C∞(B^n → B^n): ∀x ∈ B^n: f(x) ≠ x) →
  
  lemma RayConstruction() {
    assert(∀x ∈ B^n: ∃!L: Line(x, f(x))) →
    define(h(x) := ∂B^n ∩ L) →
    assert(∀x ∈ ∂B^n: h(x) = x)
  } →
  
  lemma VectorRepresentation() {
    assert(∃t ≥ 1: h(x) - f(x) = t(x - f(x))) →
    derive(h(x) = tx + (1-t)f(x))
  } →
  
  lemma SmoothnessProof() {
    assert(f ∈ C∞) →
    assert(t is smooth in x) →
    conclude(h ∈ C∞)
  } →
  
  lemma TCalculation() {
    setVar(|h(x)| = 1) →
    apply(dot_product(both_sides)) →
    assert(t^2|x - f(x)|^2 + 2t(f(x)·(x - f(x))) + |f(x)|^2 - 1 = 0) →
    apply(quadratic_formula) →
    derive(t = (f(x)·(f(x) - x))/(|x - f(x)|^2))
  } →
  
  apply(RetractionTheorem) →
  assert(h is smooth retract: B^n → ∂B^n) →
  assert(contradiction: no smooth retract exists) →
  conclude(original_assumption_false)
}