theorem Screw_Chirality() {
  assert(
    ∀s ∈ Screw ⇒ Chiral(s)
  )
} ↔

proof Screw_Chirality() {
  lemma Helix_Chirality() {
    assert(∀h ∈ Helix ⇒ Chiral(h))
  } →
  assert(Screw ⊂ Helix) →
  apply(Helix_Chirality()) →
  assert(Screw ⊂ Helix ∧ (∀h ∈ Helix ⇒ Chiral(h))) →
  conclude(∀s ∈ Screw ⇒ Chiral(s))
}