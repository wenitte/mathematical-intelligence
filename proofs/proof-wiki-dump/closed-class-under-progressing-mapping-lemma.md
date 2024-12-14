theorem Closed_Class_Under_Progressing_Mapping() {
  assert(
    ∀N: (Class ∧ closed_under(g: N → N)) ∧
    (∀x,y ∈ N: g(x) ⊆ y ∨ y ⊆ x) ∧
    (∀x ∈ N: g(x) = x → is_greatest_element(x, N)) ∧
    (A ⊆ N) ∧ (x ∈ N) ∧
    (∀a ∈ A: x ⊂ a) ∧ 
    is_greatest_element(x, {y ∈ N | ∀a ∈ A: y ⊂ a}) →
    (g(x) ∈ A ∧ is_smallest_element(g(x), A))
  )
}

proof Closed_Class_Under_Progressing_Mapping() {
  setVar(N: Class, g: N → N, A ⊆ N, x ∈ N) →
  
  let(L = {y ∈ N | ∀a ∈ A: y ⊂ a}) →
  assert(x = greatest_element(L)) →
  
  assert(∀a ∈ A: x ⊂ a) →
  
  lemma Sandwich_Principle_Cor1() {
    assert(∀a ∈ A: g(x) ⊆ a)
  } →
  
  assert(x ≠ ∅) ∧ ¬is_greatest_element(x, N) →
  assert(x ≠ g(x)) →
  assert(x ⊂ g(x)) →
  
  assert(g(x) ∉ L) →
  assert(∃y ∈ A: ¬(g(x) ⊂ y)) →
  
  apply(Sandwich_Principle_Cor1()) →
  assert(∃y ∈ A: g(x) = y) →
  
  conclude(g(x) ∈ A ∧ is_smallest_element(g(x), A))
}