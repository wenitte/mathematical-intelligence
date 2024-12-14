theorem Composite_Surjection_Injection() {
  let(f: Function, g: Function)
  assert(
    (isInjection(f) ∧ isSurjection(g)) ⇏ 
    (isSurjection(g∘f) ∨ isInjection(g∘f))
  )
} ↔

proof Composite_Surjection_Injection() {
  let(X: Set = {a, b, c}) →
  let(Y: Set = {1, 2, 3, 4}) →
  let(Z: Set = {x, y, z}) →

  define(f: X → Y) {
    mapping(a → 1) ∧
    mapping(b → 2) ∧
    mapping(c → 3)
  } →
  
  assert(isInjection(f)) {
    ∀x₁,x₂ ∈ X: f(x₁) = f(x₂) → x₁ = x₂
  } →

  define(g: Y → Z) {
    mapping(1 → x) ∧
    mapping(2 → y) ∧
    mapping(3 → y) ∧
    mapping(4 → z)
  } →

  assert(isSurjection(g)) {
    ∀z ∈ Z: ∃y ∈ Y: g(y) = z
  } →

  define(g∘f: X → Z) {
    mapping(a → x) ∧
    mapping(b → y) ∧
    mapping(c → y)
  } →

  assert(¬isInjection(g∘f)) {
    ∃b,c ∈ X: b ≠ c ∧ (g∘f)(b) = (g∘f)(c)
  } →

  assert(¬isSurjection(g∘f)) {
    ∃z ∈ Z: ∀x ∈ X: (g∘f)(x) ≠ z
  } →

  conclude()
}