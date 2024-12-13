theorem Swelledness_from_Replacement() {
  assert(
    Axiom_Replacement() → Axiom_Swelledness()
  )
  where {
    Axiom_Replacement := ∀Y(Fnc(Y) → ∀x∃y∀u(u ∈ y ↔ ∃v(⟨v,u⟩ ∈ Y ∧ v ∈ x)))
    Fnc(X) := ∀x,y,z(⟨x,y⟩ ∈ X ∧ ⟨x,z⟩ ∈ X → y = z)
    Axiom_Swelledness := ∀x(Set(x) → ∀A(A ⊆ x → Set(A)))
  }
} ↔

proof Swelledness_from_Replacement() {
  setVar(x: Set) →
  setVar(A: Class, A ⊆ x) →
  
  case Empty_Class() {
    assert(A = ∅) →
    apply(Axiom_Empty_Set) →
    conclude(Set(A))
  } ∨
  
  case Non_Empty_Class() {
    assert(∃c(c ∈ A)) →
    setVar(c ∈ A) →
    
    construct f := {⟨a,a⟩ | a ∈ A} ∪ {⟨y,c⟩ | y ∈ x∖A} →
    
    lemma Function_Properties() {
      assert(
        dom(f) = x ∧
        ∀y ∈ x(f(y) = if y ∈ A then y else c) ∧
        ∀y ∈ x(f(y) ∈ A) ∧
        f[x] = A
      )
    } →
    
    lemma F_is_Function() {
      assert(Fnc(f))
    } →
    
    apply(Axiom_Replacement, f, x) →
    conclude(Set(f[x])) →
    apply(Function_Properties) →
    conclude(Set(A))
  } →
  
  conclude(Axiom_Swelledness())
}