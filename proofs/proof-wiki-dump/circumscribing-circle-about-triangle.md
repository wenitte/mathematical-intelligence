theorem CircumscribingCircle() {
  assert(
    ∀ triangle ABC ∃ circle C: (
      center(C) = F ∧
      radius(C) = AF ∧
      B ∈ C ∧ C ∈ C
    )
  )
} ↔

proof CircumscribingCircle() {
  setVar(ABC: Triangle) →
  construct(
    D: midpoint(AB),
    E: midpoint(AC),
    F: intersection(
      perpendicular(D, AB),
      perpendicular(E, AC)
    )
  ) →

  lemma CaseAnalysis() {
    assert(
      F ∈ interior(ABC) ∨
      F ∈ BC ∨
      F ∉ interior(ABC)
    )
  } →

  lemma TriangleCongruence() {
    assert(
      AD = DB ∧
      DF common ∧
      angle(DF, AB) = 90° →
      triangle(ADF) ≅ triangle(BDF) →
      AF = BF
    )
  } →

  lemma RadiiEqual() {
    apply(TriangleCongruence()) →
    assert(
      AF = BF ∧
      BF = CF →
      AF = BF = CF
    )
  } →

  construct(
    circle C: (center: F, radius: AF)
  ) →

  apply(RadiiEqual()) →
  assert(
    B ∈ C ∧ C ∈ C →
    C circumscribes ABC
  )
}

lemma CaseProof1() {
  assume(F ∈ interior(ABC)) →
  apply(TriangleCongruence()) →
  apply(RadiiEqual()) →
  assert(C circumscribes ABC)
}

lemma CaseProof2() {
  assume(F ∈ BC) →
  apply(TriangleCongruence()) →
  apply(RadiiEqual()) →
  assert(C circumscribes ABC)
}

lemma CaseProof3() {
  assume(F ∉ interior(ABC)) →
  apply(TriangleCongruence()) →
  apply(RadiiEqual()) →
  assert(C circumscribes ABC)
}