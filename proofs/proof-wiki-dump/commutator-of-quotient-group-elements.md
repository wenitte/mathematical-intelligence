theorem Commutator_Quotient_Group() {
  assert(
    ∀G: Group ∧ 
    ∀N ⊆ G: NormalSubgroup(N, G) ∧
    ∀x,y ∈ G: [x,y] = x⁻¹y⁻¹xy ⇒
    [xN, yN] = [x,y]N
  )
} ↔

proof Commutator_Quotient_Group() {
  setVar(G: Group) →
  setVar(N: NormalSubgroup(G)) →
  setVar(x,y ∈ G) →
  
  assert([xN, yN] = (xN)⁻¹(yN)⁻¹(xN)(yN)) →
  lemma CommutatorDef() {
    assert(∀a,b ∈ G: [a,b] = a⁻¹b⁻¹ab)
  } →

  assert((xN)⁻¹ = x⁻¹N) →
  assert((yN)⁻¹ = y⁻¹N) →
  assert([xN, yN] = (x⁻¹N)(y⁻¹N)(xN)(yN)) →
  
  lemma CosetProduct() {
    assert(∀a,b ∈ G: (aN)(bN) = abN)
  } →
  
  apply(CosetProduct()) →
  assert([xN, yN] = (x⁻¹y⁻¹N)(xyN)) →
  apply(CosetProduct()) →
  assert([xN, yN] = x⁻¹y⁻¹xyN) →
  
  apply(CommutatorDef()) →
  assert([xN, yN] = [x,y]N)
}