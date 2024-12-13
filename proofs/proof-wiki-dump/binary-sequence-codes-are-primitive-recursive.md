theorem BinarySequenceCodes_Are_PrimRecursive() {
  assert(
    ∀n,i ∈ ℕ ⇒ bincode(n,i) = o_i ∧
    o_i = count_ones(n, between_zeros(i-1, i)) ∧
    isPrimitiveRecursive(bincode)
  )
} ↔

proof BinarySequenceCodes_Are_PrimRecursive() {
  setVar(n,i: ℕ) →
  
  lemma Basis_Representation() {
    assert(
      isPrimitiveRecursive(basis(b,n,i))
    )
  } →

  define(z(n,i) = {
    case i=0: μj<n[basis(2,n,j) = 0]
    case i>0: μj<n[j > z(n,i-1) ∧ basis(2,n,j) = 0]
  }) →

  lemma Z_Is_PrimRecursive() {
    assert(
      isPrimitiveRecursive(constantFunction) ∧
      isPrimitiveRecursive(equalityRelation) ∧
      isPrimitiveRecursive(orderingRelations) ∧
      isPrimitiveRecursive(boundedMinimization) →
      isPrimitiveRecursive(z)
    )
  } →

  define(bincode(n,i) = {
    case i=0: z(n,0)
    case i>0: z(n,i) - z(n,i-1) - 1
  }) →

  lemma Final_PrimRecursive() {
    assert(
      isPrimitiveRecursive(definitionByCases) ∧
      isPrimitiveRecursive(cutOffSubtraction) ∧
      isPrimitiveRecursive(z) →
      isPrimitiveRecursive(bincode)
    )
  } →

  apply(Final_PrimRecursive()) →
  assert(isPrimitiveRecursive(bincode))
}