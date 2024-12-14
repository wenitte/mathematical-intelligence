theorem Commutator_Identity_iff_Commute() {
  let(G: Group, e: Identity(G))
  let(x,y: Element(G))
  let([x,y]: Commutator(x,y))
  assert(
    [x,y] = e ↔ xy = yx
  )
}

proof Commutator_Identity_iff_Commute() {
  let(G: Group, e: Identity(G)) →
  let(x,y: Element(G)) →

  lemma Group_is_Monoid() {
    assert(
      Group(G) → Monoid(G)
    )
  } →

  lemma Commutator_Definition() {
    assert(
      [x,y] = xyx⁻¹y⁻¹
    )
  } →

  apply(Group_is_Monoid()) →
  apply(Commutator_Definition()) →

  assert(
    [x,y] = e ↔
    xyx⁻¹y⁻¹ = e ↔
    xy = yx
  ) →

  conclude()
}