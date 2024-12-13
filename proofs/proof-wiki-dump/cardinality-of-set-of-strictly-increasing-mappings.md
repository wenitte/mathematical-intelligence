theorem Strictly_Increasing_Mappings_Count() {
  assume(
    ⟨S,⪯⟩: toset ∧ ⟨T,⪰⟩: toset ∧
    |S| = m ∧ |T| = n
  ) →
  assert(
    |{φ: S→T | ∀x,y∈S: x⪯y → φ(x)⪰φ(y)}| = (n choose m)
  )
} ↔

proof Strictly_Increasing_Mappings_Count() {
  lemma Order_Embedding() {
    assert(
      ∀φ:S→T (φ strictly_increasing ↔ φ order_embedding)
    )
  } →
  
  lemma Strictly_Monotone_Injective() {
    assert(
      ∀φ:S→T (φ strictly_increasing → φ injective)
    )
  } →
  
  setVar(F = {φ:S→T | φ strictly_increasing}) →
  setVar(G = {X⊆T | |X| = m}) →
  
  define(Φ: F→G) {
    ∀φ∈F: Φ(φ) = φ(S)
  } →
  
  lemma Finite_Order_Isomorphism() {
    assert(
      ∀φ∈F: φ isomorphism_between ⟨S,⪯⟩ and ⟨φ(S),⪰⟩
    )
  } →
  
  assert(Φ bijective) →
  apply(Cardinality_Of_Subsets()) {
    |G| = (n choose m)
  } →
  
  conclude(|F| = (n choose m))
}