theorem CircumscribedRegularPentagon() {
  assert(
    ∀c ∈ Circle ⇒ ∃p ∈ RegularPentagon: circumscribes(p,c)
  )
} ↔

proof CircumscribedRegularPentagon() {
  setVar(c: Circle, F: Point) →
  assert(F = center(c)) →
  setVar(A,B,C,D,E: Point) →
  assert(inscribedRegularPentagon({A,B,C,D,E}, c)) →
  
  setVar(G,H,K,L,M: Point) →
  assert(
    tangent(GH,c,A) ∧
    tangent(HK,c,B) ∧
    tangent(KL,c,C) ∧
    tangent(LM,c,D) ∧
    tangent(MG,c,E)
  ) →
  
  assert(∀r ∈ Radius, t ∈ Tangent: perpendicular(r,t)) →
  assert(
    rightAngle(∠KCF) ∧ 
    rightAngle(∠LCF) ∧
    rightAngle(∠KBF) ∧ 
    rightAngle(∠LDF)
  ) →
  
  lemma PythagorasEquality() {
    assert(FK² = FC² + CK² ∧ FK² = FB² + BK²) →
    assert(FB = FC) →
    assert(BK = CK)
  } →
  
  lemma TriangleCongruence() {
    apply(PythagorasEquality()) →
    assert(△FCK ≅ △FBK) →
    assert(∠FKC = ∠FKB ∧ ∠KFC = ∠KFB) →
    assert(∠BFC = 2∠KFC ∧ ∠BKC = 2∠FKC)
  } →
  
  lemma EqualLines() {
    apply(TriangleCongruence()) →
    assert(KC = CL) →
    assert(KL = 2KC ∧ HK = 2BK ∧ BK = KC) →
    assert(HK = KL) →
    assert(HG = GM = ML = HK = KL)
  } →
  
  lemma EqualAngles() {
    assert(∠FKC = ∠FLC) →
    assert(∠HKL = 2∠FKC ∧ ∠KLM = 2∠FLC) →
    assert(∠HKL = ∠KLM) →
    assert(∠KHG = ∠HGM = ∠GML = ∠HKL = ∠KLM)
  } →
  
  apply(EqualLines()) →
  apply(EqualAngles()) →
  assert(isRegularPentagon(GHKLM))
}