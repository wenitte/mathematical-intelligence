theorem GroupCancellation() {
  assert(
    ∀G: Group,
    ∀g,h ∈ G,
    ∀e: identity(G) ⇒
    (h·g = g ↔ h = e)
  )
}

proof GroupCancellation_1() {
  setVar(G: Group) →
  setVar(g,h ∈ G) →
  setVar(e: identity(G)) →
  
  assume(h·g = g) →
  assert(h·g = e·g) by GroupIdentity() →
  assert(h = e) by RightCancellation(g)
}

proof GroupCancellation_2() {
  setVar(G: Group) →
  setVar(g,h ∈ G) →
  setVar(e: identity(G)) →
  setVar(g⁻¹: inverse(g)) →
  
  assume(h·g = g) →
  assert((h·g)·g⁻¹ = g·g⁻¹) by applyBoth(·g⁻¹) →
  assert(h·(g·g⁻¹) = g·g⁻¹) by GroupAssociativity() →
  assert(h·e = e) by InverseProperty(g) →
  assert(h = e) by IdentityProperty()
}

lemma GroupAssociativity() {
  assert(
    ∀a,b,c ∈ G ⇒
    (a·b)·c = a·(b·c)
  )
}

lemma InverseProperty() {
  assert(
    ∀g ∈ G ⇒
    g·g⁻¹ = e
  )
}

lemma IdentityProperty() {
  assert(
    ∀h ∈ G ⇒
    h·e = h
  )
}