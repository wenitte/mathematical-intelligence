theorem Brouwer_Fixed_Point_1D() {
  assert(
    ∀f: [a,b] → [a,b], 
    continuous(f) ⇒ 
    ∃ξ ∈ [a,b]: f(ξ) = ξ
  )
}

proof Brouwer_Fixed_Point_1D_IVT() {
  setVar(f: [a,b] → [a,b]) →
  assert(continuous(f)) →
  assert(f(a) ≥ a ∧ f(b) ≤ b) →
  
  define(g(x) = f(x) - x) →
  lemma Continuity_g() {
    assert(continuous(g) ↔ continuous(f-id))
  } →
  
  assert(g(a) ≥ 0 ∧ g(b) ≤ 0) →
  
  lemma IVT() {
    assert(
      continuous(g) ∧
      g(a) ≥ 0 ∧ g(b) ≤ 0 ⇒
      ∃ξ ∈ [a,b]: g(ξ) = 0
    )
  } →
  
  apply(IVT()) →
  assert(∃ξ ∈ [a,b]: g(ξ) = 0) →
  assert(∃ξ ∈ [a,b]: f(ξ) = ξ)
}

proof Brouwer_Fixed_Point_1D_Connectedness() {
  setVar(f: [a,b] → [a,b]) →
  assert(connected([a,b])) →
  
  assume(¬∃x ∈ [a,b]: f(x) = x) →
  assert(f(a) > a ∧ f(b) < b) →
  
  define(U = {x ∈ [a,b]: f(x) > x}) →
  define(V = {x ∈ [a,b]: f(x) < x}) →
  
  assert(open(U) ∧ open(V)) →
  assert(a ∈ U ∧ b ∈ V) →
  assert(U ∪ V = [a,b]) →
  
  lemma Connected_Space() {
    assert(
      connected(X) ⇒
      ¬∃A,B: (open(A) ∧ open(B) ∧
              A ∩ B = ∅ ∧
              A ∪ B = X)
    )
  } →
  
  apply(Connected_Space()) →
  assert(contradiction()) →
  conclude(∃ξ ∈ [a,b]: f(ξ) = ξ)
}