theorem BayesExample1() {
  assert(
    let(box1 = {goodScrews: 10, unslottedScrews: 2}) ∧
    let(box2 = {goodScrews: 8, unslottedScrews: 4}) ∧
    let(selection = "random") ∧
    let(result = "unslotted") →
    ∃p[p = P(B₂|A)]
  )
} ↔

proof BayesExample1() {
  define(A: "event of selecting unslotted screw") →
  define(B₁: "event of selecting from box1") →
  define(B₂: "event of selecting from box2") →
  
  assert(P(B₁) = P(B₂) = 1/2) →
  
  assert(P(A|B₁) = 2/(10+2) = 1/6) →
  assert(P(A|B₂) = 4/(8+4) = 1/3) →
  
  lemma BayesTheorem() {
    assert(
      P(B₂|A) = (P(B₂) × P(A|B₂)) / (P(B₁) × P(A|B₁) + P(B₂) × P(A|B₂))
    )
  } →
  
  apply(BayesTheorem()) →
  substitute(P(B₂) = 1/2, P(A|B₂) = 1/3, P(B₁) = 1/2, P(A|B₁) = 1/6) →
  
  assert(
    P(B₂|A) = ((1/2) × (1/3)) / ((1/2 × 1/6) + (1/2 × 1/3))
  ) →
  
  simplify() →
  assert(P(B₂|A) = 2/3) →
  
  conclude(P(B₂|A) = 2/3)
}