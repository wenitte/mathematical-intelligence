theorem Vector_Components_Between_Points() {
  assert(
    ∀A,B ∈ ℝ^n ∧
    A = (a₁,a₂,...,aₙ) ∧
    B = (b₁,b₂,...,bₙ) ⇒
    vec(AB) = (b₁-a₁, b₂-a₂, ..., bₙ-aₙ)
  )
} ↔

proof Vector_Components_Between_Points() {
  setVar(O: Origin(ℝ^n)) →
  setVar(vec(OA): PositionVector(A)) →
  setVar(vec(OB): PositionVector(B)) →
  
  assert(vec(OA) = (a₁,a₂,...,aₙ)) →
  assert(vec(OB) = (b₁,b₂,...,bₙ)) →
  
  setVar(vec(AB) = (v₁,v₂,...,vₙ)) →
  
  lemma Triangle_Law() {
    assert(vec(OB) = vec(OA) + vec(AB))
  } →
  
  apply(Triangle_Law()) →
  
  lemma Vector_Sum_Definition() {
    assert((b₁,b₂,...,bₙ) = (a₁,a₂,...,aₙ) + (v₁,v₂,...,vₙ))
  } →
  
  apply(Vector_Sum_Definition()) →
  
  lemma Component_Addition() {
    assert((v₁,v₂,...,vₙ) = (b₁-a₁,b₂-a₂,...,bₙ-aₙ))
  } →
  
  apply(Component_Addition()) →
  
  assert(vec(AB) = (b₁-a₁,b₂-a₂,...,bₙ-aₙ))
}