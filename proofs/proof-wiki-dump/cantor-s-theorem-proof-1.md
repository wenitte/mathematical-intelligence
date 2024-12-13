theorem Cantors_Theorem() {
  assert(
    ∀S: Set ⇒ ¬∃f: (S → 𝒫(S)) [isSurjection(f)]
  )
} ↔

proof Cantors_Theorem() {
  setVar(S: Set) →
  assume(∃f: (S → 𝒫(S)) [isSurjection(f)]) →
  assert(
    ∀x ∈ S ⇒ f(x) ∈ 𝒫(S)
  ) →
  assert(
    ∀x ∈ S ⇒ f(x) ⊆ S
  ) →
  
  lemma ExcludedMiddle() {
    assert(
      ∀x ∈ S ⇒ (x ∈ f(x) ∨ x ∉ f(x))
    )
  } →
  
  define(T := {x ∈ S | x ∉ f(x)}) →
  assert(T ⊆ S) →
  
  apply(isSurjection(f)) →
  assert(∃a ∈ S: T = f(a)) →
  
  cases(a) {
    case(a ∈ f(a)) {
      assert(a ∈ T) →
      assert(a ∉ f(a)) →
      contradiction()
    }
    case(a ∉ f(a)) {
      assert(a ∈ T) →
      assert(a ∈ f(a)) →
      contradiction()
    }
  } →
  
  conclude(¬∃f: (S → 𝒫(S)) [isSurjection(f)])
}