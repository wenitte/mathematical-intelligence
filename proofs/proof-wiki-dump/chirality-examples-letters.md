theorem Chirality_Latin_Capitals() {
  assert(
    ∃L ∈ LatinCapitals ⇒ isChiral(L) ∧
    ChiralSet = {F, G, J, L, P, Q, R, S, Z}
  )
}

proof Chirality_Latin_Capitals() {
  setDef(Mirror: Operation(x) → reverseOrientation(x)) →
  setDef(Rotation: Operation(x) → preserveOrientation(x)) →
  
  lemma Mirror_Transform() {
    ∀l ∈ ChiralSet:
      Mirror(l) ≠ l ∧
      ¬∃θ ∈ [0, 2π]: Rotation(θ, Mirror(l)) = l
  } →
  
  assert(∀l ∈ ChiralSet →
    (Mirror(l) ≠ l) ∧
    (¬∃RotationalSymmetry(l)) →
    isChiral(l)
  ) →
  
  apply(Mirror_Transform()) →
  conclude(ChiralSet ⊆ LatinCapitals ∧ 
          ∀l ∈ ChiralSet: isChiral(l))
}