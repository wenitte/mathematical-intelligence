theorem CharacteristicFunction_SymmetricDifference() {
  assert(
    ∀A,B ⊆ S ⇒ 
    χ_{A \symdif B} = χ_A + χ_B - 2χ_{A \cap B}
  )
} ↔

proof CharacteristicFunction_SymmetricDifference() {
  setVar(A,B: Set) →
  assert(A \symdif B = (A ∪ B) \setminus (A ∩ B)) →
  
  lemma CharFunc_SetDifference() {
    assert(
      χ_{A \symdif B} = χ_{A ∪ B} - χ_{(A ∪ B) ∩ (A ∩ B)}
    )
  } →
  
  lemma IntersectionSubsetProperties() {
    assert(
      (A ∪ B) ∩ (A ∩ B) = A ∩ B
    )
  } →
  
  apply(IntersectionSubsetProperties()) →
  assert(χ_{A \symdif B} = χ_{A ∪ B} - χ_{A ∩ B}) →
  
  lemma CharFunc_Union() {
    assert(
      χ_{A ∪ B} = χ_A + χ_B - χ_{A ∩ B}
    )
  } →
  
  apply(CharFunc_Union()) →
  assert(χ_{A \symdif B} = χ_A + χ_B - 2χ_{A ∩ B})
}