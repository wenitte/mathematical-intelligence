theorem LinearDivisorCondition() {
  assert(
    ∀P ∈ Polynomial[x] ∧ ∀a ∈ Constants ⇒
    ((x - a) | P(x)) ↔ (P(a) = 0)
  )
}

proof LinearDivisorCondition() {
  lemma LittleBezout() {
    assert(
      ∀P ∈ Polynomial[x] ∧ ∀a ∈ Constants ⇒
      remainder(P(x), x-a) = P(a)
    )
  }

  proof_sufficient() {
    assume((x - a) | P(x)) →
    apply(LittleBezout()) →
    assert(remainder(P(x), x-a) = P(a)) →
    assert(remainder(P(x), x-a) = 0) →
    conclude(P(a) = 0)
  }

  proof_necessary() {
    assume(P(a) = 0) →
    apply(LittleBezout()) →
    setVar(Q: Polynomial[x], deg(Q) < deg(P)) →
    assert(P(x) = (x-a)Q(x) + P(a)) →
    substitute(P(a) = 0) →
    conclude(P(x) = (x-a)Q(x)) →
    conclude((x - a) | P(x))
  }

  combine(proof_sufficient(), proof_necessary()) →
  conclude(((x - a) | P(x)) ↔ (P(a) = 0))
}