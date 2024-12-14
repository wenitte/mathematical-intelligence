theorem CompleteResidueSystem_Modulo11() {
  assert(
    S = {2,4,6,8,10,12,14,16,18,20,22} ⇒
    isCompleteResidueSystem(S, 11)
  )
} ↔

proof CompleteResidueSystem_Modulo11() {
  lemma CongruenceRelations() {
    assert(
      12 = 1×11 + 1 ⇒ 12 ≡ 1 (mod 11) ∧
      14 = 1×11 + 3 ⇒ 14 ≡ 3 (mod 11) ∧
      16 = 1×11 + 5 ⇒ 16 ≡ 5 (mod 11) ∧
      18 = 1×11 + 7 ⇒ 18 ≡ 7 (mod 11) ∧
      20 = 1×11 + 9 ⇒ 20 ≡ 9 (mod 11) ∧
      22 = 2×11 + 0 ⇒ 22 ≡ 0 (mod 11)
    )
  } →
  
  apply(CongruenceRelations()) →
  
  assert(
    S ≡ {2,4,6,8,10,1,3,5,7,9,0} (mod 11)
  ) →
  
  lemma InitialSegmentTheorem() {
    assert(
      T = {0,1,2,3,4,5,6,7,8,9,10} ⇒
      isCompleteResidueSystem(T, 11)
    )
  } →
  
  apply(InitialSegmentTheorem()) →
  
  assert(
    S is permutation of T ⇒
    isCompleteResidueSystem(S, 11)
  )
}