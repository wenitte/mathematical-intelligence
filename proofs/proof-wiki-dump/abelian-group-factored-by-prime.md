theorem AbelianGroupFactoredByPrime() {
  let(G: FiniteAbelianGroup, p: Prime) →
  assume(∃m,n ∈ ℕ: |G| = m·p^n ∧ p∤m) →
  assert(
    ∃H,K ⊆ G: G = H × K ∧
    H = {x ∈ G: x^(p^n) = e} ∧
    K = {x ∈ G: x^m = e} ∧
    |H| = p^n
  )
}

proof AbelianGroupFactoredByPrime() {
  setVar(H = {x ∈ G: x^(p^n) = e}) →
  setVar(K = {x ∈ G: x^m = e}) →
  
  lemma SubgroupsAreNormal() {
    apply(SubgroupOfElementsWhoseOrderDivides) →
    assert(H,K ≤ G) →
    apply(SubgroupOfAbelianGroupIsNormal) →
    assert(H,K ⊴ G)
  } →

  lemma DirectProduct() {
    apply(BezoutIdentity, gcd(m,p^n) = 1) →
    assert(∃s,t ∈ ℤ: 1 = sm + tp^n) →
    
    assert(∀x ∈ G: x = x^(sm + tp^n) = x^(sm)·x^(tp^n)) →
    apply(ElementToPowerOfGroupOrder) →
    assert(∀x ∈ G: x^|G| = e) →
    
    assert((x^(sm))^(p^n) = e ∧ (x^(tp^n))^m = e) →
    assert(x^(sm) ∈ H ∧ x^(tp^n) ∈ K) →
    assert(G = HK)
  } →

  lemma Intersection() {
    assume(∃x ∈ H ∩ K) →
    assert(x^(p^n) = e ∧ x^m = e) →
    apply(ElementToPowerOfMultipleOfOrder) →
    assert(ord(x)|p^n ∧ ord(x)|m) →
    assert(ord(x) = 1) →
    apply(IdentityIsOnlyElementOfOrder1) →
    assert(x = e) →
    assert(H ∩ K = {e})
  } →

  lemma OrderOfH() {
    assume(p||K|) →
    apply(CauchyLemma) →
    assert(∃k ∈ K: ord(k) = p) →
    assert(k^m = e) →
    apply(ElementToPowerOfMultipleOfOrder) →
    assert(p|m) →
    assert(contradiction) →
    assert(p∤|K|) →
    assert(p^n||H|) →
    
    assume(∃q ≠ p: q||H|) →
    apply(CauchyLemma) →
    assert(∃h ∈ H: ord(h) = q) →
    assert(h^(p^n) = e) →
    apply(ElementToPowerOfMultipleOfOrder) →
    assert(q|p^n) →
    assert(contradiction) →
    assert(|H| = p^n)
  }
}