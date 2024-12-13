theorem Group_Action_Coset() {
  assert(
    ∀G: Group, ∃e: Identity(G) ∧
    ∀H ⊆ G ∧
    ∀*: G × G/H → G/H ∧
    ∀g ∈ G, ∀g'H ∈ G/H: g * (g'H) = (gg')H ⇒
    isGroupAction(*, G, G/H)
  )
} ↔

proof Group_Action_Coset() {
  // Prove GA2: Associativity
  setVar(a,b ∈ G, g'H ∈ G/H) →
  assert(a * (b * g'H)) →
  assert(a * ((bg')H)) by(def_action) →
  assert((a(bg'))H) by(def_action) →
  assert(((ab)g')H) by(group_associativity) →
  assert((ab)(g'H)) by(subset_product_assoc) →
  conclude(GA2: (a * (b * g'H)) = ((ab) * (g'H))) →

  // Prove GA1: Identity
  setVar(g'H ∈ G/H) →
  assert(e * g'H) →
  assert((eg')H) by(def_action) →
  assert(g'H) by(identity_element) →
  conclude(GA1: e * g'H = g'H) →

  conclude(isGroupAction(*, G, G/H))
}