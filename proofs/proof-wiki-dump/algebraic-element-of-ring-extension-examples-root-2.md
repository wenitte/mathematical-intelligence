theorem AlgebraicElement_Root2() {
  assert(
    √2 is_algebraic_over ℤ
  )
} ↔

proof AlgebraicElement_Root2() {
  define(p(x) := x² - 2) →
  assert(p(x) ∈ ℤ[x]) →
  setVar(x := √2) →
  
  compute {
    p(√2) = (√2)² - 2 →
    p(√2) = 2 - 2 →
    p(√2) = 0
  } →
  
  lemma NonZeroPolynomial() {
    assert(p(x) ≠ 0) ∧
    assert(deg(p(x)) = 2)
  } →
  
  assert(∃p(x) ∈ ℤ[x] : (p(x) ≠ 0 ∧ p(√2) = 0)) →
  apply(def_algebraic_element) →
  conclude(√2 is_algebraic_over ℤ)
}