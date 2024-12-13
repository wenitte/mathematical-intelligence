theorem ArgumentPrinciple() {
  let(γ: ClosedContour,
      D: Region,
      f: MeromorphicFunction,
      N: ℕ,  // number of zeros
      P: ℕ   // number of poles
  ) →
  assert(
    isEnclosedBy(D, γ) ∧
    isHolomorphicOn(f, γ) ∧
    hasNoZerosOn(f, γ) ∧
    N = countZeros(f, D) ∧
    P = countPoles(f, D)
  ) ⇒
  assert(
    N - P = (1/(2πi)) ∮_γ (f'(z)/f(z))dz
  )
}

proof ArgumentPrinciple() {
  let(n_k: Zeros(f, 1..N),
      p_j: Poles(f, 1..P)) →
  
  lemma ExistenceOfG() {
    assert(∃g: HolomorphicFunction, g ≠ 0) →
    assert(
      f(z) = (∏_{k=1}^N (z - n_k))/(∏_{j=1}^P (z - p_j)) * g(z)
    )
  } →

  apply(LogarithmicDerivative) →
  assert(
    f'(z)/f(z) = ∑_{k=1}^N 1/(z - n_k) - ∑_{j=1}^P 1/(z - p_j) + g'(z)/g(z)
  ) →

  apply(ContourIntegral) →
  assert(
    ∮_γ f'(z)/f(z)dz = ∮_γ (∑_{k=1}^N 1/(z - n_k) - ∑_{j=1}^P 1/(z - p_j) + g'(z)/g(z))dz
  ) →

  apply(LinearityOfIntegral) →
  assert(
    ∮_γ f'(z)/f(z)dz = ∑_{k=1}^N ∮_γ 1/(z - n_k)dz - ∑_{j=1}^P ∮_γ 1/(z - p_j)dz + ∮_γ g'(z)/g(z)dz
  ) →

  apply(ResidueTheorem) →
  assert(
    ∮_γ f'(z)/f(z)dz = 2πi(N - P) + ∮_γ g'(z)/g(z)dz
  ) →

  apply(CauchyIntegralTheorem, g'(z)/g(z)) →
  assert(∮_γ g'(z)/g(z)dz = 0) →
  
  conclude(
    N - P = (1/(2πi)) ∮_γ f'(z)/f(z)dz
  )
}