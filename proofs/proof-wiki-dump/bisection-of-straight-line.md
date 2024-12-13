theorem Line_Bisection() {
  assert(
    ∀L(line_segment) ∃P(point) ⇒ 
    bisects(P, L) ∧ lies_on(P, L)
  )
} ↔

proof Line_Bisection() {
  setVar(AB: line_segment) →
  construct(
    triangle(ABC) ∧ 
    equilateral(triangle(ABC)) ∧ 
    base(triangle(ABC)) = AB
  ) →
  construct(
    CD: line_segment ∧
    bisects(CD, angle(ACB))
  ) →
  
  lemma Triangle_Equality() {
    assert(equilateral(triangle(ABC)) → AC = BC) ∧
    assert(CD common_to triangle(ACD) ∧ triangle(BCD)) ∧
    assert(AC = BC) ∧
    assert(angle(ACD) = angle(BCD)) →
    conclude(congruent(triangle(ACD), triangle(BCD)))
  } →
  
  apply(Triangle_Equality()) →
  assert(
    congruent(triangle(ACD), triangle(BCD)) →
    AD = DB
  ) →
  
  conclude(
    bisects(D, AB) ∧
    lies_on(D, AB)
  )
}