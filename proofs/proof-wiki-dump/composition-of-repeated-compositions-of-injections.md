theorem CompositionRepeatedInjections() {
  let(S: Set) →
  let(f: S → S, injective(f)) →
  let(n: ℕ) →
  define(f^n: S → S) {
    case(n = 0): x → x
    case(n = 1): x → f(x)
    case(n > 1): x → f(f^(n-1)(x))
  } →
  assert(
    ∀m,n ∈ ℤ≥0 ⇒ f^n ∘ f^m = f^(m+n)
  )
} ↔

proof CompositionRepeatedInjections() {
  let(m: ℤ≥0) →
  define(P(n): Proposition) {
    assert(f^n ∘ f^m = f^(m+n))
  } →
  
  // Base case n=0
  proof_base_case_0() {
    assert(f^0 ∘ f^m = I_S ∘ f^m) →
    apply(IdentityLeftMapping) →
    assert(I_S ∘ f^m = f^m) →
    assert(f^m = f^(m+0))
  } →
  
  // Base case n=1
  proof_base_case_1() {
    assert(∀x ∈ S ⇒ f^(m+1)(x) = f(f^m(x))) →
    assert(f^1 ∘ f^m = f^(m+1))
  } →
  
  // Inductive step
  proof_inductive_step() {
    let(k: ℤ≥0, k ≥ 2) →
    assume(P(k): f^k ∘ f^m = f^(m+k)) →
    
    assert(∀x ∈ S ⇒ 
      (f^(k+1) ∘ f^m)(x) = 
      (f(f^k) ∘ f^m)(x) →
      ((f ∘ f^k) ∘ f^m)(x) →
      (f ∘ (f^k ∘ f^m))(x) →
      (f ∘ f^(m+k))(x) →
      f^(m+k+1)(x)
    ) →
    assert(P(k+1))
  } →
  
  apply(MathematicalInduction) →
  conclude(∀m,n ∈ ℤ≥0 ⇒ f^n ∘ f^m = f^(m+n))
}