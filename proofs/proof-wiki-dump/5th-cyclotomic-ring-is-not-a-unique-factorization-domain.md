theorem NotUFD_5thCyclotomic() {
  assert(
    let R = ℤ[i√5] ∧
    ¬isUFD(R)
  )
} ↔

proof NotUFD_5thCyclotomic() {
  setDef(UFD) {
    assert(
      ∀D[isIntegralDomain(D) → 
        ∀x∈D[(x≠0 ∧ ¬isUnit(x)) →
          (hasCompleteFactorization(x) ∧
           uniqueFactorization(x))]]
    )
  } →

  setDef(CompleteFactorization) {
    assert(
      ∀x[isCompleteFactorization(x) ↔
        ∃u,y₁,...,yₙ[
          x = u×y₁×...×yₙ ∧
          isUnit(u) ∧
          ∀i∈[1..n](isIrreducible(yᵢ))
        ]]
    )
  } →

  lemma Units() {
    assert(
      units(ℤ[i√5]) = {1, -1}
    )
  } →

  lemma Irreducibles() {
    assert(
      ∀x∈{2, 3, 1+i√5, 1-i√5}[
        isIrreducible(x)
      ]
    )
  } →

  setVar(factorization1: 6 = 1×2×3) →
  setVar(factorization2: 6 = 1×(1+i√5)×(1-i√5)) →
  
  assert(
    isCompleteFactorization(factorization1) ∧
    isCompleteFactorization(factorization2) ∧
    factorization1 ≢ factorization2
  ) →

  conclude(¬isUFD(ℤ[i√5]))
}