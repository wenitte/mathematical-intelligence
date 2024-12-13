theorem Angles_In_Same_Segment() {
  assert(
    ∀ABCD: Circle, ∀BAD,BED: Angle, ∀BAED: Segment ⇒
    (BAD ∈ BAED ∧ BED ∈ BAED ∧ BAED ⊂ ABCD) →
    BAD = BED
  )
} ↔

proof Angles_In_Same_Segment() {
  setVar(ABCD: Circle) →
  setVar(BAD,BED: Angle) →
  setVar(BAED: Segment) →
  setVar(F: Point) →
  assert(F = center(ABCD)) →
  construct(BF: Line) →
  construct(FD: Line) →
  
  lemma Inscribed_Angle_Theorem() {
    assert(∀α: InscribedAngle, ∀β: CentralAngle ⇒
      (α,β share_arc) → β = 2α)
  } →
  
  apply(Inscribed_Angle_Theorem()) →
  assert(∠BFD = 2∠BAD) ∧
  assert(∠BFD = 2∠BED) →
  
  conclude(
    ∠BFD = 2∠BAD ∧ ∠BFD = 2∠BED →
    2∠BAD = 2∠BED →
    ∠BAD = ∠BED
  )
}