theorem Automorphism_Group_C3() {
  assert(
    ∀G[G = C₃] → Aut(G) = {φ, θ} ∧
    isGroup(Aut(G)) ∧
    order(Aut(G)) = 2
  )
}

proof Automorphism_Group_C3_Direct() {
  setVar(ξ: Aut(C₃)) →
  lemma Identity_Preservation() {
    assert(
      map(ξ, [0]₃) = [0]₃
    )
  } →
  
  setVar(x: [1]₃) →
  assert(
    map(ξ, x) ∈ {[1]₃, [2]₃}
  ) →
  
  lemma Bijection_Options() {
    assert(
      (map(ξ, [1]₃) = [1]₃ → ξ = φ) ∧
      (map(ξ, [1]₃) = [2]₃ → ξ = θ)
    )
  } →
  
  verify(
    isAutomorphism(φ) ∧
    isAutomorphism(θ)
  ) →
  
  apply(Automorphism_Group_Is_Subgroup_Of_Symmetric_Group()) →
  
  assert(
    Aut(C₃) = {φ, θ}
  )
}

proof Automorphism_Group_C3_Prime() {
  apply(Order_Of_Automorphism_Group_Of_Prime_Group()) →
  assert(
    order(C₃) = 3 → 
    order(Aut(C₃)) = 3 - 1 = 2
  ) →
  
  lemma Unique_Group_Order_2() {
    assert(
      ∀G[order(G) = 2 → G ≅ C₂]
    )
  } →
  
  assert(
    Aut(C₃) ≅ C₂
  )
}