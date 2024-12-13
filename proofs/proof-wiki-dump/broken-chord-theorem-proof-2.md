theorem BrokenChordTheorem() {
  assert(
    ∀circle ∈ Plane,
    ∀A,C,M,B ∈ circle,
    ∀D ∈ Plane:
    (arcLength(A,M) = arcLength(M,C) ∧
     B ∈ minorArc(A,M) ∧
     MD ⊥ BC) →
    (AB + BD = DC)
  )
}

proof BrokenChordTheorem() {
  setPoint(E: BC_extended | BD = DE) →
  setPoint(G: BC_extended | GD = DC) →
  
  lemma Triangle_Congruence1() {
    assert(△MDB ≅ △MDE) by SAS_Congruence
  } →
  
  lemma Triangle_Congruence2() {
    assert(△MDG ≅ △MDC) by SAS_Congruence
  } →
  
  assert(MG = MC) →
  assert(∠MGC = ∠MCG) →
  
  lemma Equal_Arcs() {
    assert(arcLength(A,M) = arcLength(M,C)) →
    assert(AM = MC) by Equal_Arcs_Equal_Chords →
    assert(AM = MG) by Common_Notion1
  } →
  
  assert(△MGA is_isosceles) →
  assert(∠MGA = ∠MAG) by Isosceles_Triangle_Theorem →
  assert(∠MCG = ∠MAB) by Equal_Arc_Angles →
  assert(∠MGC = ∠MAB) by Common_Notion1 →
  assert(∠BGA = ∠BAG) by Common_Notion3 →
  
  lemma Isosceles_BAG() {
    assert(△BAG is_isosceles) by Equal_Angles_Isosceles →
    assert(AB = GB) by Isosceles_Equal_Sides
  } →
  
  assert(GD = DC) by Construction →
  assert(GB + BD = DE + EC) by Common_Notion2 →
  assert(AB + BD = DE + EC) by Substitution →
  assert(AB + BD = DC) by Addition
}