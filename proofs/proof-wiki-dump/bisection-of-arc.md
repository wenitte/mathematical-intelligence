theorem Bisect_Arc() {
  assert(
    ∀arc AB ∈ Circle ⇒ ∃point D ∈ Circle: 
    arc_length(AD) = arc_length(DB)
  )
} ↔

proof Bisect_Arc() {
  setVar(AB: Arc) →
  construct(line_segment(A,B)) →
  assert(∃point C: C bisects AB) →
  construct(line_segment(C,D) ⊥ line_segment(A,B)) →
  
  construct(line_segment(A,D)) →
  construct(line_segment(B,D)) →
  
  assert(AC = CB) ∧
  assert(CD common to triangles ACD, BCD) ∧
  assert(∠ACD = ∠BCD = 90°) →
  
  lemma Triangle_SAS() {
    assert(
      (AC = CB) ∧
      (CD common) ∧
      (∠ACD = ∠BCD) ⇒
      triangle_congruent(ACD, BCD)
    )
  } →
  
  apply(Triangle_SAS()) →
  assert(AD = BD) →
  
  lemma Equal_Lines_Equal_Arcs() {
    assert(
      AD = BD ⇒
      arc_length(AD) = arc_length(BD)
    )
  } →
  
  apply(Equal_Lines_Equal_Arcs()) →
  assert(arc_length(AD) = arc_length(BD))
}