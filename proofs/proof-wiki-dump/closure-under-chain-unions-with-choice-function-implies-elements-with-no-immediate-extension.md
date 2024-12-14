theorem Closure_Under_Chain_Unions_With_Choice() {
  assert(
    ∀S: Set(Set) ∧
    (is_closed_under_chain_unions(S)) ∧
    (∃C: ChoiceFunction(⋃S)) ∧
    (∀b ∈ S) ⇒
    (∃x ∈ S: b ⊆ x ∧ ¬∃y ∈ S: immediate_extension(y, x))
  )
} ↔

proof Closure_Under_Chain_Unions_With_Choice() {
  setVar(S: Set(Set)) →
  setVar(C: ChoiceFunction(⋃S)) →
  setVar(b: Element(S)) →
  setVar(A: Set := ⋃S) →
  
  define(E: Mapping) {
    ∀x ∈ S: E(x) := {a ∈ A | x ∪ {a} is_immediate_extension_of x}
  } →
  
  assert(∀x ∈ S: E(x) ⊆ ⋃S) →
  
  define(g: S → S) {
    ∀x ∈ S: g(x) := 
      if(¬∃y ∈ S: immediate_extension(y, x)) then x
      else x ∪ {C(E(x))}
  } →
  
  lemma Progressing_Mapping() {
    assert(
      is_progressing_mapping(g) ∧
      (∀x ∈ S: is_fixed_point(x, g) ↔ ¬∃y ∈ S: immediate_extension(y, x))
    )
  } →
  
  apply(Superinductive_Set_Has_Fixed_Point_Corollary()) →
  
  assert(
    ∃x ∈ S: (b ⊆ x ∧ is_fixed_point(x, g))
  ) →
  
  assert(
    ∃x ∈ S: (b ⊆ x ∧ ¬∃y ∈ S: immediate_extension(y, x))
  )
}