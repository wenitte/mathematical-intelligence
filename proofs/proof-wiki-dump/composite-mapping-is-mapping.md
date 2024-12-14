theorem Composite_Mapping_is_Mapping() {
  assert(
    ∀S₁,S₂,S₃[sets] ∧ 
    ∀f:S₁→S₂[mapping] ∧ 
    ∀g:S₂→S₃[mapping] ⇒
    (g∘f)[mapping]
  )
} ↔

proof Composite_Mapping_is_Mapping() {
  define(g∘f := {(x,z) ∈ S₁×S₃ | ∃y ∈ S₂: (x,y) ∈ f ∧ (y,z) ∈ g}) →
  
  lemma Left_Total() {
    assert(∀x ∈ S₁ ⇒ ∃y ∈ S₂: f(x) = y) → // f is mapping
    assert(∀y ∈ S₂ ⇒ ∃z ∈ S₃: g(y) = z) → // g is mapping
    assert(∀x ∈ S₁ ⇒ ∃z ∈ S₃: g(f(x)) = z) → // composition
    assert(∀x ∈ S₁ ⇒ ∃z ∈ S₃: (g∘f)(x) = z) // definition
  } →

  lemma Many_To_One() {
    setVar(x₁,x₂: S₁) →
    assume(x₁ = x₂) →
    assert(f(x₁) = f(x₂)) → // f is many-to-one
    assert(g(f(x₁)) = g(f(x₂))) → // g applied to equal values
    assert((g∘f)(x₁) = (g∘f)(x₂)) // definition
  } →

  apply(Left_Total()) ∧
  apply(Many_To_One()) →
  assert((g∘f)[mapping]) // satisfies mapping properties
}