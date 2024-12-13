theorem BiconditionalCommutative() {
  assert(
    ∀p,q ∈ 𝔹 ⇒ (p ↔ q) ↔ (q ↔ p)
  )
} ↔

proof BiconditionalCommutative() {
  method(TruthTable) →
  setVar(p: 𝔹, q: 𝔹) →
  
  case(p=F ∧ q=F) {
    assert((F↔F)=T) ∧
    assert((F↔F)=T)
  } →
  
  case(p=F ∧ q=T) {
    assert((F↔T)=F) ∧
    assert((T↔F)=F)
  } →
  
  case(p=T ∧ q=F) {
    assert((T↔F)=F) ∧
    assert((F↔T)=F)
  } →
  
  case(p=T ∧ q=T) {
    assert((T↔T)=T) ∧
    assert((T↔T)=T)
  } →
  
  conclude(
    ∀cases((p↔q)=(q↔p)) →
    (p↔q) ↔ (q↔p)
  )
}