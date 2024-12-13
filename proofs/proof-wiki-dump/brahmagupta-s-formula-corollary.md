theorem BrahmaguptaFormula_Corollary() {
  assert(
    ∀a,b,c,d ∈ ℝ⁺ ⇒
    CyclicQuadArea(a,b,c,d) = 
    (√((a² + b² + c² + d²)² + 8abcd - 2(a⁴ + b⁴ + c⁴ + d⁴)))/4
  )
} ↔

proof BrahmaguptaFormula_Corollary() {
  setVar(a,b,c,d: ℝ⁺) →
  setVar(s: ℝ⁺, s = (a + b + c + d)/2) →
  
  lemma BrahmaguptaBase() {
    assert(
      CyclicQuadArea(a,b,c,d) = √((s-a)(s-b)(s-c)(s-d))
    )
  } →

  assert(s-a = (-a + b + c + d)/2) →
  assert(s-b = (a - b + c + d)/2) →
  assert(s-c = (a + b - c + d)/2) →
  assert(s-d = (a + b + c - d)/2) →

  apply(AlgebraicExpansion()) →
  assert(
    (s-a)(s-b)(s-c)(s-d) = 
    ((a² + b² + c² + d²)² + 8abcd - 2(a⁴ + b⁴ + c⁴ + d⁴))/16
  ) →

  apply(BrahmaguptaBase()) →
  assert(
    CyclicQuadArea(a,b,c,d) = 
    (√((a² + b² + c² + d²)² + 8abcd - 2(a⁴ + b⁴ + c⁴ + d⁴)))/4
  )
}