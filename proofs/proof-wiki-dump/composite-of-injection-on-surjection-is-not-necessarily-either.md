theorem Composite_Injection_Surjection() {
  assert(
    ∀f,g [isInjection(f) ∧ isSurjection(g)] ⇏ 
    [isInjection(f∘g) ∨ isSurjection(f∘g)]
  )
}

proof Composite_Injection_Surjection() {
  let X = {a, b, c} →
  let Y = {1, 2} →
  let Z = {x, y, z} →
  
  define(g: X → Y) {
    map(a → 1) ∧
    map(b → 2) ∧
    map(c → 2)
  } →
  
  assert(isSurjection(g)) {
    ∀y∈Y ∃x∈X [g(x) = y]
  } →
  
  define(f: Y → Z) {
    map(1 → x) ∧
    map(2 → y)
  } →
  
  assert(isInjection(f)) {
    ∀y₁,y₂∈Y [f(y₁) = f(y₂) → y₁ = y₂]
  } →
  
  define(f∘g: X → Z) {
    map(a → x) ∧
    map(b → y) ∧
    map(c → y)
  } →
  
  assert(¬isInjection(f∘g)) {
    ∃x₁,x₂∈X [x₁ ≠ x₂ ∧ (f∘g)(x₁) = (f∘g)(x₂)] {
      witness(b, c)
    }
  } ∧
  
  assert(¬isSurjection(f∘g)) {
    ∃z∈Z ∀x∈X [(f∘g)(x) ≠ z] {
      witness(z)
    }
  } →
  
  conclude()
}