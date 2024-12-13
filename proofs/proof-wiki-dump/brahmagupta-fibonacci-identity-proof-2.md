theorem BrahmaguptaFibonacciIdentity() {
  let(a, b, c, d: ℝ)
  assert(
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
}

proof BrahmaguptaFibonacciIdentity() {
  letVar(n: ℝ) →
  lemma GeneralBrahmaguptaFibonacci() {
    assert(
      ∀a,b,c,d,n ∈ ℝ ⇒
      (a² + nb²)(c² + nd²) = (ac + nbd)² + n(ad - bc)²
    )
  } →
  apply(GeneralBrahmaguptaFibonacci()) →
  substitute(n = 1) →
  assert(
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
}