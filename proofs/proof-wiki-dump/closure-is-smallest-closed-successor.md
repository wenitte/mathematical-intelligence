theorem Closure_Is_Smallest_Closed_Successor() {
  assert(
    ∀S[ordered_set(S, ⪯)] ∧
    ∀f[closure_operator(f, S)] ∧
    ∀x ∈ S ⇒
    (f(x) = min({y ∈ S | closed(y) ∧ x ⪯ y}))
  )
} ↔

proof Closure_Is_Smallest_Closed_Successor() {
  setVar(S: ordered_set) →
  setVar(f: S → S) →
  setVar(x: S) →
  
  lemma Inflationary() {
    assert(closure_operator(f) → ∀z ∈ S(z ⪯ f(z)))
  } →
  apply(Inflationary()) →
  assert(x ⪯ f(x)) →
  
  lemma Closed_Element() {
    assert(closure_operator(f) → closed(f(x)))
  } →
  apply(Closed_Element()) →
  
  lemma Smallest_Element() {
    assert(
      ∀k ∈ S[closed(k) ∧ x ⪯ k] ⇒
      (closure_operator(f) →
       increasing(f) →
       f(x) ⪯ f(k) ∧
       closed(k) →
       f(k) = k →
       f(x) ⪯ k)
    )
  } →
  apply(Smallest_Element()) →
  
  assert(f(x) = min({y ∈ S | closed(y) ∧ x ⪯ y}))
}