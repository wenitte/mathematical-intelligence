theorem Brahmagupta_Fibonacci_Identity() {
  assert(
    ∀a,b,c,d,n ∈ ℝ ⇒
    (a² + nb²)(c² + nd²) = (ac + nbd)² + n(ad - bc)²
  )
}

proof Brahmagupta_Fibonacci_Identity() {
  setVar(a,b,c,d,n: ℝ) →
  
  // Start with right side of equation
  assert((ac + nbd)² + n(ad - bc)²) →
  
  lemma ExpandSquares() {
    assert((ac + nbd)² = (ac)² + 2(ac)(nbd) + (nbd)²) ∧
    assert(n(ad - bc)² = n((ad)² - 2(ad)(bc) + (bc)²))
  } →
  
  apply(ExpandSquares()) →
  assert((ac)² + 2(ac)(nbd) + (nbd)² + n(ad)² - 2n(ad)(bc) + n(bc)²) →
  
  lemma Simplify() {
    assert(
      (ac)² = a²c² ∧
      2(ac)(nbd) = 2nabc d ∧
      (nbd)² = n²b²d² ∧
      n(ad)² = na²d² ∧
      2n(ad)(bc) = 2nabcd ∧
      n(bc)² = nb²c²
    )
  } →
  
  apply(Simplify()) →
  assert(a²c² + 2nabcd + n²b²d² + na²d² - 2nabcd + nb²c²) →
  
  lemma CombineLikeTerms() {
    assert(
      2nabcd - 2nabcd = 0 ∧
      collect(a²c², na²d², nb²c², n²b²d²)
    )
  } →
  
  apply(CombineLikeTerms()) →
  assert(a²c² + na²d² + nb²c² + n²b²d²) →
  
  lemma FactorResult() {
    assert(
      a²c² + na²d² + nb²c² + n²b²d² = 
      (a² + nb²)(c² + nd²)
    )
  } →
  
  apply(FactorResult()) →
  assert((a² + nb²)(c² + nd²))
}

corollary Brahmagupta_Fibonacci_Alternate() {
  assert(
    ∀a,b,c,d,n ∈ ℝ ⇒
    (a² + nb²)(c² + nd²) = (ac - nbd)² + n(ad + bc)²
  )
}

extension Brahmagupta_Fibonacci_Product() {
  assert(
    ∀n ∈ ℕ, ∀a₁,...,aₙ,b₁,...,bₙ ∈ ℤ ⇒
    ∃c,d ∈ ℤ : ∏ⱼ₌₁ⁿ(aⱼ² + mb_j²) = c² + md²
  )
}