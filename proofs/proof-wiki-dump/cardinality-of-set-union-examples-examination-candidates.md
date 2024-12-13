theorem Exam_Candidates_Total() {
  assert(
    let S₁, S₂, S₃ be sets of candidates ∧
    |S₁| = 40 ∧ |S₂| = 47 ∧ |S₃| = 31 ∧
    |S₁ ∩ S₂| = 9 ∧ |S₁ ∩ S₃| = 15 ∧ |S₂ ∩ S₃| = 11 ∧
    |S₁ ∩ S₂ ∩ S₃| = 6 ⇒
    |S₁ ∪ S₂ ∪ S₃| = 89
  )
} ↔

proof Exam_Candidates_Total() {
  setVar(S₁, S₂, S₃: Set) →
  lemma Set_Union_Cardinality() {
    assert(
      |S₁ ∪ S₂ ∪ S₃| = 
      |S₁| + |S₂| + |S₃| - 
      |S₁ ∩ S₂| - |S₁ ∩ S₃| - |S₂ ∩ S₃| +
      |S₁ ∩ S₂ ∩ S₃|
    )
  } →
  apply(Set_Union_Cardinality()) →
  assert(
    |S₁ ∪ S₂ ∪ S₃| = 
    40 + 47 + 31 - 
    9 - 15 - 11 + 
    6
  ) →
  compute(
    40 + 47 + 31 - 9 - 15 - 11 + 6 = 89
  ) →
  assert(|S₁ ∪ S₂ ∪ S₃| = 89)
}