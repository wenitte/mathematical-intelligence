theorem VectorSpaceDimensionBound() {
  assert(
    ∀V: VectorSpace(F) ∧
    ∀B: Generator(V) ∧
    |B| = m →
    dimF(V) ≤ m
  )
}

proof VectorSpaceDimensionBound() {
  setVar(B = {x1,...,xm}: Generator(V)) →
  
  lemma ContraDimension() {
    assert(
      ∀{y1,...,yn} ⊆ V ∧
      n > m →
      {y1,...,yn} IsLinearlyDependent
    )
  } →
  
  proof ContraDimension() {
    setVar({y1,...,yn} ⊆ V) →
    assert(∃αij ∈ F: ∀j ∈ [1,n]: yj = ∑i=1..m(αij * xi)) →
    
    setVar(β1,...,βn ∈ F) →
    assert(∑j=1..n(βj * yj) = ∑i=1..m(∑j=1..n(αij * βj) * xi)) →
    
    apply(HomogeneousLinearEquationsTheorem(n > m)) →
    assert(∃β1,...,βn ∈ F:
      (∃k: βk ≠ 0) ∧
      ∀i ∈ [1,m]: ∑j=1..n(αij * βj) = 0
    ) →
    
    assert(∑j=1..n(βj * yj) = 0) →
    assert({y1,...,yn} IsLinearlyDependent)
  } →
  
  apply(ContraDimension()) →
  apply(DimensionDefinition()) →
  assert(dimF(V) ≤ m)
}