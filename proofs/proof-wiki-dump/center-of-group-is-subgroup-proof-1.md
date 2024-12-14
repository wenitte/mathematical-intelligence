theorem Center_Is_Subgroup() {
  assert(
    ∀G[Group] ⇒ Z(G) ≤ G
  )
} ↔

proof Center_Is_Subgroup() {
  setVar(G: Group) →
  apply(Two_Step_Subgroup_Test) →
  
  lemma Condition_1() {
    assert(∀g ∈ G ⇒ eg = ge = g) →
    assert(e ∈ Z(G))
  } →

  lemma Condition_2() {
    setVar(a,b ∈ Z(G)) →
    assert(∀g ∈ G ⇒ (
      (ab)g = a(bg)  [by AssociativeOperation] →
      a(bg) = a(gb)  [by CenterDef] →
      a(gb) = (ag)b  [by AssociativeOperation] →
      (ag)b = (ga)b  [by CenterDef] →
      (ga)b = g(ab)  [by AssociativeOperation]
    )) →
    assert(ab ∈ Z(G))
  } →

  lemma Condition_3() {
    setVar(c ∈ Z(G)) →
    assert(∀g ∈ G ⇒ (
      cg = gc  [by CenterDef] →
      c⁻¹(cg)c⁻¹ = c⁻¹(gc)c⁻¹  [by GroupClosure] →
      (c⁻¹c)gc⁻¹ = c⁻¹g(cc⁻¹)  [by AssociativeOperation] →
      egc⁻¹ = c⁻¹ge  [by InverseElement] →
      gc⁻¹ = c⁻¹g  [by IdentityElement]
    )) →
    assert(c⁻¹ ∈ Z(G))
  } →

  apply(Condition_1() ∧ Condition_2() ∧ Condition_3()) →
  assert(Z(G) ≤ G)
}