theorem Composition_Addition_Mappings() {
  assert(
    ∀a,b ∈ ℕ ∧ 
    let(α_a: ℕ → ℕ) ∧
    def(α_a(x) = x + a) ⇒
    α_(a+b) = α_b ∘ α_a
  )
} ↔

proof Composition_Addition_Mappings() {
  setVar(a,b,x: ℕ) →
  
  lemma Function_Equality() {
    assert(
      ∀x ∈ ℕ ⇒ α_(a+b)(x) = (α_b ∘ α_a)(x)
    )
  } →

  assert(α_(a+b)(x)) →
  assert(x + (a + b)) by(def(α)) →
  assert((x + a) + b) by(assoc(+)) →
  assert((α_a(x)) + b) by(def(α)) →
  assert(α_b(α_a(x))) by(def(α)) →
  assert((α_b ∘ α_a)(x)) by(def(∘)) →
  
  apply(Function_Equality()) →
  conclude(α_(a+b) = α_b ∘ α_a)
}