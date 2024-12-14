theorem CharacteristicFunctionNullSetComplement() {
  assert(
    ∀(X,Σ,μ): MeasureSpace ∧
    ∀N ⊆ X: (μ(N) = 0) ⇒
    (χ_{X∖N} = 1 μ-a.e.)
  )
}

proof CharacteristicFunctionNullSetComplement() {
  setVar((X,Σ,μ): MeasureSpace) →
  setVar(N ⊆ X: μ(N) = 0) →
  
  lemma CharFuncSetDifference() {
    assert(χ_{X∖N} = χ_X - χ_{X∩N})
  } →
  
  lemma IntersectionSubset() {
    assert(∀x ∈ X: χ_{X∖N}(x) = 1 - χ_N(x))
  } →
  
  lemma CharFuncNullSet() {
    assert(χ_N = 0 μ-a.e.)
  } →
  
  apply(CharFuncNullSet()) →
  
  lemma PointwiseAdditionAE() {
    assert(1 - χ_N = 1 μ-a.e.)
  } →
  
  assert(χ_{X∖N} = 1 μ-a.e.)
}