theorem ComplexAlgebraRoots() {
  let ω = cis(2πi/5)
  assert(
    ∀z ∈ ℂ: (1+z)^5 = (1-z)^5 ⇔ 
    z ∈ {(ω^k - 1)/(ω^k + 1): k ∈ {0,1,2,3,4}}
  )
}

proof ComplexAlgebraRoots() {
  setVar(z: ℂ) →
  assert((1+z)^5 = (1-z)^5) →
  assert(((1+z)^5)/((1-z)^5) = 1) →
  lemma FifthRoot() {
    assert(
      ((1+z)/(1-z))^5 = 1 ⇔
      (1+z)/(1-z) ∈ {1, ω, ω^2, ω^3, ω^4}
    )
  } →
  apply(FifthRoot()) →
  assert((1+z)/(1-z) = ω^n where n ∈ {0,1,2,3,4}) →
  assert(1+z = (1-z)ω^n) →
  assert(1+z = ω^n - ω^n z) →
  assert(z(ω^n + 1) = ω^n - 1) →
  assert(z = (ω^n - 1)/(ω^n + 1)) →
  lemma ZeroCase() {
    assert(
      when n=0: ω^0=1 →
      z = (1-1)/(1+1) = 0
    )
  } →
  apply(ZeroCase()) →
  assert(
    z ∈ {0, (ω-1)/(ω+1), (ω^2-1)/(ω^2+1), 
         (ω^3-1)/(ω^3+1), (ω^4-1)/(ω^4+1)}
  )
}