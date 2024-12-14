theorem Composition_Compatible_Closure_Operators() {
  let(S: Set) →
  let(f,g: P(S) → P(S)) →
  let(Cf,Cg: {X ∈ P(S) | closure_sets(X,f), closure_sets(X,g)}) →
  assert(
    ∀T ⊆ S (
      (T ∈ Cg → f(T) ∈ Cg) ∧
      (T ∈ Cf → g(T) ∈ Cf)
    )
  ) →
  let(Ch: Cf ∩ Cg) →
  assert(
    induces_closure_operator(Ch,h) ∧
    (f ∘ g = g ∘ f = h)
  )
}

proof Composition_Compatible_Closure_Operators() {
  # Part 1: Ch induces closure operator
  let(A ⊆ Ch) →
  assert(A ⊆ Cf ∧ A ⊆ Cg) →
  apply(Intersection_Closed_Sets_Theorem()) →
  assert(⋂A ∈ Cf ∧ ⋂A ∈ Cg) →
  assert(⋂A ∈ Ch) →
  apply(Closure_Operator_From_Closed_Sets()) →
  assert(induces_closure_operator(Ch,h)) →

  # Part 2: f ∘ g = h
  let(T ⊆ S) →
  assert(f(g(T)) ∈ Cf) →
  assert(g(T) ∈ Cg) →
  assert(f(g(T)) ∈ Cg) →
  assert(f(g(T)) ∈ Ch) →
  
  apply(Set_Closure_Smallest()) →
  assert(h(T) ⊆ f(g(T))) →
  
  assert(h(T) ∈ Ch) →
  assert(h(T) ∈ Cf ∧ h(T) ∈ Cg) →
  
  apply(Set_Closure_Smallest()) →
  assert(g(T) ⊆ h(T)) →
  
  apply(Order_Preserving(f)) →
  assert(f(g(T)) ⊆ f(h(T))) →
  
  assert(h(T) ∈ Cf) →
  assert(f(h(T)) = h(T)) →
  assert(f(g(T)) ⊆ h(T)) →
  
  assert(h(T) ⊆ f(g(T))) →
  assert(h(T) = f(g(T))) →
  
  # By symmetry
  assert(g ∘ f = h)
}