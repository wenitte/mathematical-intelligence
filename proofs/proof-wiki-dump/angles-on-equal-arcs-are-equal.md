theorem Equal_Arc_Angles() {
  assert(
    ∀C₁,C₂ ∈ Circles ∧ ∀arc₁,arc₂ ∈ Arcs ∧ ∀θ₁,θ₂ ∈ Angles ⇒
    (radius(C₁) = radius(C₂) ∧ length(arc₁) = length(arc₂) ∧
     stands_on(θ₁,arc₁) ∧ stands_on(θ₂,arc₂)) ⇒
    θ₁ = θ₂
  )
} ↔

proof Equal_Arc_Angles() {
  setVar(
    ABC, DEF: Circle,
    BC, EF: Arc,
    BGC, EHF: Angle
  ) →
  assume(
    radius(ABC) = radius(DEF) ∧
    length(BC) = length(EF) ∧
    stands_on(BGC,BC) ∧
    stands_on(EHF,EF)
  ) →
  
  proof_by_contradiction() {
    assume(BGC ≠ EHF) →
    assume(BGC > EHF) →
    
    lemma Construct_Equal_Angle() {
      assert(∃K: Point ⇒
        construct_angle(BGK) ∧ BGK = EHF)
    } →
    
    apply(Equal_Angles_Equal_Arcs) →
    assert(length(BK) = length(EF)) →
    assert(length(EF) = length(BC)) →
    assert(length(BK) = length(BC)) →
    assert(contradiction(equal_arcs_same_endpoint)) →
    assert(¬(BGC ≠ EHF)) →
    assert(BGC = EHF)
  } →
  
  apply(Inscribed_Angle_Theorem) →
  assert(2×BAC = BGC ∧ 2×EDF = EHF) →
  assert(2×BAC = 2×EDF) →
  assert(BAC = EDF)
}