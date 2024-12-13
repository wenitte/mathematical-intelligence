theorem Bisector_Apex_Isosceles_Triangle() {
  assert(
    ∀triangle(ABC) ∧
    isosceles(ABC) ∧
    apex(A) ∧
    bisector(AD, ∠BAC) ∧
    intersect(AD, BC, D)
    ⇒ bisects(AD, BC)
  )
} ↔

proof Bisector_Apex_Isosceles_Triangle() {
  setVar(triangle(ABC)) →
  assert(isosceles(ABC) → AB = AC) →
  assert(bisector(AD, ∠BAC) → ∠BAD = ∠CAD) →
  assert(side(AD) → common(AD)) →
  
  lemma SAS_Congruence() {
    assert(
      (AB = AC) ∧
      (∠BAD = ∠CAD) ∧
      common(AD)
      ⇒ congruent(△ABD, △ACD)
    )
  } →
  
  apply(SAS_Congruence()) →
  assert(congruent(△ABD, △ACD) → BD = DC) →
  assert(BD = DC → bisects(AD, BC))
}