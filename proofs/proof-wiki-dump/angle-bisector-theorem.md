theorem AngleBisector() {
  assert(
    ∀(A,B,C,D ∈ Point) ∧ 
    Triangle(A,B,C) ∧ 
    D ∈ Line(B,C) ⇒
    (AngleBisector(A,D) ↔ RatioEqual(BD:DC, AB:AC))
  )
} ↔

proof AngleBisector() {
  // Part 1: AngleBisector ⇒ RatioEqual
  lemma Forward() {
    setPoint(E) →
    construct(Line(C,E) ∥ Line(D,A)) →
    extend(Line(B,A) → E) →
    assert(∠ACE = ∠CAD) by ParallelAlternateAngles →
    assert(∠CAD = ∠BAD) by Hypothesis →
    assert(∠DAB = ∠ACE) by Transitivity →
    assert(∠BAD = ∠AEC) by ParallelCorrespondingAngles →
    assert(∠ACE = ∠AEC) by Substitution →
    assert(AC = AE) by IsoscelesTriangle →
    assert(BD:DC = BA:AE) by ParallelTransversal →
    assert(BD:DC = AB:AC) by Substitution
  } →

  // Part 2: RatioEqual ⇒ AngleBisector
  lemma Backward() {
    assume(BD:DC = AB:AC) →
    construct(Line(C,E) ∥ Line(D,A)) →
    assert(BD:DC = AB:AE) by ParallelTransversal →
    assert(BA:AC = BA:AE) by TransitiveRatios →
    assert(AC = AE) by EqualRatios →
    assert(∠AEC = ∠ACE) by IsoscelesTriangle →
    assert(∠AEC = ∠BAD) by ParallelCorrespondingAngles →
    assert(∠ACE = ∠CAD) by ParallelAlternateAngles →
    assert(∠BAD = ∠CAD) by Transitivity →
    assert(AngleBisector(A,D))
  }
} ↔

lemma ExteriorAngle() {
  assert(
    ∀(A,B,C,D,E ∈ Point) ∧
    Triangle(A,B,C) ∧
    D on extend(Line(B,A)) ∧
    E on extend(Line(B,C)) ∧
    AngleBisector(A,E) ⇒
    RatioEqual(BE:EC, AB:AC)
  )
}