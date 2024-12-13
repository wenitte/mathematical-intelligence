theorem BooleanPrimeIdealExtension() {
  let(B: BooleanLattice, ∨, ∧, ≤) →
  let(F ⊆ B: Filter) →
  let(J ⊆ B: Set) →
  assume(J.hasFiniteJoinProperty(F)) →
  let(z ∈ B) →
  assert(
    (J ∪ {z}).hasFiniteJoinProperty(F) ∨ 
    (J ∪ {¬z}).hasFiniteJoinProperty(F)
  )
} ↔

proof BooleanPrimeIdealExtension() {
  assume(¬((J ∪ {z}).hasFiniteJoinProperty(F)) ∧ 
         ¬((J ∪ {¬z}).hasFiniteJoinProperty(F))) →
  
  ∃(x₁...xₙ, y₁...yₘ ∈ J): (
    (x₁ ∨ ... ∨ xₙ ∨ z ∈ F) ∧
    (y₁ ∨ ... ∨ yₘ ∨ ¬z ∈ F)
  ) →
  
  let(q = x₁ ∨ ... ∨ xₙ ∨ y₁ ∨ ... ∨ yₘ) →
  
  assert(x₁ ∨ ... ∨ xₙ ≤ q) →
  assert(y₁ ∨ ... ∨ yₘ ≤ q) →
  
  assert(q ∨ z ∈ F) →
  assert(q ∨ ¬z ∈ F) →
  
  lemma FilterClosedUnderMeet() {
    assert((q ∨ z) ∧ (q ∨ ¬z) ∈ F)
  } →
  
  apply(DistributiveLatticeAxiom): (
    (q ∨ z) ∧ (q ∨ ¬z) = 
    (q ∧ (q ∨ ¬z)) ∨ (z ∧ (q ∨ ¬z))
  ) →
  
  apply(MeetAbsorbsJoin, MeetCommutative, DistributiveLatticeAxiom): (
    q ∨ ((q ∧ z) ∨ (¬z ∧ z))
  ) →
  
  apply(ComplementDefinition, BottomDefinition): (
    q ∨ (q ∧ z)
  ) →
  
  apply(JoinAbsorbsMeet): (
    q
  ) →
  
  assert(contradiction(J.hasFiniteJoinProperty(F)))
}