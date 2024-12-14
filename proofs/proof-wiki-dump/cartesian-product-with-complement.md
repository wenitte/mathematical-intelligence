theorem CartesianProduct_Complement() {
  assert(
    ∀S,T: Set ∧ ∀A⊆S ∧ ∀B⊆T ⇒
    (relcomp(S,A) × T = relcomp(S×T, A×T)) ∧
    (S × relcomp(T,B) = relcomp(S×T, S×B))
  )
} ↔

proof CartesianProduct_Complement() {
  setVar(S,T: Set) →
  setVar(A: Subset(S)) →
  setVar(B: Subset(T)) →
  
  lemma RelCompDef() {
    assert(relcomp(S,A) = S∖A)
  } →
  
  lemma CartesianProduct_SetDifference() {
    assert(∀X,Y,Z: Set ⇒ (X∖Y)×Z = (X×Z)∖(Y×Z))
  } →
  
  assert(relcomp(S,A)×T) →
  apply(RelCompDef()) →
  assert((S∖A)×T) →
  apply(CartesianProduct_SetDifference()) →
  assert((S×T)∖(A×T)) →
  assert(relcomp(S×T,A×T)) →
  
  lemma SymmetricCase() {
    assert(
      S×relcomp(T,B) = 
      S×(T∖B) = 
      (S×T)∖(S×B) = 
      relcomp(S×T,S×B)
    )
  } →
  
  assert(
    (relcomp(S,A)×T = relcomp(S×T,A×T)) ∧
    (S×relcomp(T,B) = relcomp(S×T,S×B))
  )
}