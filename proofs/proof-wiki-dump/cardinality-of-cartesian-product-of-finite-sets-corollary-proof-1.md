theorem Card_Cartesian_Product_Symmetry() {
  assert(
    ∀S,T: Set ∧ isFinite(S) ∧ isFinite(T) ⇒
    card(S × T) = card(T × S)
  )
} ↔

proof Card_Cartesian_Product_Symmetry() {
  setVar(S: Set, T: Set) →
  assume(isFinite(S) ∧ isFinite(T)) →
  
  assert(card(S × T) = card(S) × card(T)) by CartesianProductCardinality →
  
  assert(card(S) × card(T) = card(T) × card(S)) by IntegerMultCommutative →
  
  assert(card(T) × card(S) = card(T × S)) by CartesianProductCardinality →
  
  therefore(card(S × T) = card(T × S)) by TransitiveEquality
}