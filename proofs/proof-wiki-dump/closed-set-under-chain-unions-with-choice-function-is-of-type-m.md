theorem Closed_Set_Chain_Unions_Type_M() {
  let(S: Set) →
  assert(closed_under_chain_unions(S)) ∧
  assert(∃C: choice_function(S)) →
  assert(
    ∀x ∈ S ⇒ ∃m ∈ S: (x ⊆ m ∧ maximal(m, S))
  )
}

proof Closed_Set_Chain_Unions_Type_M() {
  setVar(S: Set) →
  setVar(C: choice_function(S)) →
  
  define(x_star(x: S) := {y ∈ S: x ⊂ y}) →
  
  define(g(x: S) := {
    case maximal(x, S): x
    case ¬maximal(x, S): C(x_star(x))
  }) →
  
  lemma Progress_Property() {
    assert(
      ∀x ∈ S ⇒ [
        (maximal(x, S) → g(x) = x) ∧
        (¬maximal(x, S) → x ⊂ g(x))
      ]
    )
  } →
  
  lemma Empty_Star_Iff_Maximal() {
    assert(
      ∀x ∈ S ⇒ (x_star(x) = ∅ ↔ maximal(x, S))
    )
  } →
  
  apply(Superinductive_Fixed_Point_Theorem(S, g)) →
  
  assert(
    ∀b ∈ S ⇒ ∃x ∈ S: [
      b ⊆ x ∧
      g(x) = x ∧
      maximal(x, S)
    ]
  ) →
  
  conclude()
}