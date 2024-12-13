theorem SetUnionCardinality() {
  setDef(S[i]: finite_set, i ∈ [1..n]) →
  assert(
    ∀i,j ∈ [1..n], i≠j ⇒ S[i] ∩ S[j] = ∅
  ) →
  assert(
    card(⋃[i=1..n] S[i]) = ∑[i=1..n] card(S[i])
  )
} ↔

proof SetUnionCardinality() {
  lemma PairwiseDisjoint() {
    assert(
      ∀i,j ∈ [1..n], i≠j ⇒ S[i] ∩ S[j] = ∅
    )
  } →
  
  lemma EmptySetCardinality() {
    assert(card(∅) = 0)
  } →
  
  lemma GeneralSetUnion() {
    assert(
      card(A ∪ B) = card(A) + card(B) - card(A ∩ B)
    )
  } →
  
  apply(PairwiseDisjoint()) →
  apply(EmptySetCardinality()) →
  apply(GeneralSetUnion()) →
  
  assert(
    ∀i,j: card(S[i] ∩ S[j]) = 0
  ) →
  
  conclude(
    card(⋃[i=1..n] S[i]) = ∑[i=1..n] card(S[i])
  )
}