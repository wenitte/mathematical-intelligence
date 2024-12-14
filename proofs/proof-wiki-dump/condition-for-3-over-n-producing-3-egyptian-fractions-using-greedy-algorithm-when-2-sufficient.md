theorem ThreeEgyptianFractions() {
  assert(
    ∀n ∈ ℕ⁺ →
    let S = GreedyAlgorithm(3/n) →
    (|S| = 3 ∧ MinTerms(3/n) = 2) ↔
    (n ≡ 1 (mod 6) ∧ ∃d ∈ ℕ⁺: d|n ∧ d ≡ 2 (mod 3))
  )
}

proof ThreeEgyptianFractions() {
  lemma ProperFractionConstraints() {
    assert(3/n proper → n ≥ 4) ∧
    assert(gcd(3,n) = 1 → 3 ∤ n) ∧
    assert(|S| ≥ 2)
  } →

  lemma CaseAnalysis() {
    case n = 3k - 1:
      assert(3/n = 1/k + 1/(k(3k-1))) →
      assert(|S| = 2) →
      conclude(n ≠ 3k - 1)
    
    case n = 3k - 2:
      assert(3/n = 1/k + 2/(k(3k-2))) →
      assert(k even → |S| = 2) →
      conclude(k odd ↔ n odd)
  } →

  lemma CongruenceCondition() {
    assert(|S| = 3 → n ≡ 1 (mod 6))
  } →

  lemma MinTermAnalysis() {
    setVar(x,y: ℕ⁺) →
    assert(3/n = 1/x + 1/y = (x+y)/(xy)) →
    assert(∃p,q ∈ ℕ⁺: p|x ∧ q|y ∧ pq = n) →
    
    case ∃d: d|n ∧ d ≡ 2 (mod 3):
      setVar(q = 1, a = (d+1)/3) →
      assert(3/n = 3/(n(d+1)) + 3d/(n(d+1))) →
      conclude(MinTerms(3/n) = 2)
    
    case ¬∃d: d|n ∧ d ≡ 2 (mod 3):
      assert(∀d|n: d ≡ 1 (mod 3)) →
      assert(q ≡ 1 (mod 3)) →
      assert(3a - q ≡ 2 (mod 3)) →
      let r = gcd(3a-q, a) →
      assert(contradiction())
  } →

  conclude(
    |S| = 3 ∧ MinTerms(3/n) = 2 ↔
    n ≡ 1 (mod 6) ∧ ∃d: d|n ∧ d ≡ 2 (mod 3)
  )
}

corollary SmallestExample() {
  assert(min{n: |S| = 3 ∧ MinTerms(3/n) = 2} = 25)
}