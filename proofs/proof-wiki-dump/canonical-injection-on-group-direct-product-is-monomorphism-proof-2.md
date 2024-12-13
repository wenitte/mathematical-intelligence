theorem Canonical_Injection_Group_Monomorphism() {
  let(G1: Group, ∘₁: Operation, G2: Group, ∘₂: Operation) →
  let(e1: Identity(G1), e2: Identity(G2)) →
  let(G1×G2: DirectProduct(G1, G2)) →
  define(inj1: G1 → G1×G2, ∀x ∈ G1 ⇒ inj1(x) = (x,e2)) →
  define(inj2: G2 → G1×G2, ∀x ∈ G2 ⇒ inj2(x) = (e1,x)) →
  assert(
    isMonomorphism(inj1) ∧ isMonomorphism(inj2)
  )
} ↔

proof Canonical_Injection_Group_Monomorphism() {
  reference(Canonical_Injection_is_Monomorphism) →
  apply(Canonical_Injection_is_Monomorphism, structures=Groups) →
  assert(isMonomorphism(inj1) ∧ isMonomorphism(inj2))
}