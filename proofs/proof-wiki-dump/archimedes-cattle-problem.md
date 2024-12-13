theorem Archimedes_Cattle() {
  assert(
    ∃W,B,D,Y,w,b,d,y ∈ ℕ ⇒ [
      W = (1/2 + 1/3)B + Y ∧
      B = (1/4 + 1/5)D + Y ∧
      D = (1/6 + 1/7)W + Y ∧
      w = (1/3 + 1/4)(B + b) ∧
      b = (1/4 + 1/5)(D + d) ∧
      d = (1/5 + 1/6)(Y + y) ∧
      y = (1/6 + 1/7)(W + w)
    ]
  )
}

proof Archimedes_Cattle() {
  setVars(W,B,D,Y,w,b,d,y: ℕ) →
  
  lemma SimplifyEquations() {
    assert(
      W - Y = (5/6)B ∧
      B - Y = (9/20)D ∧
      D - Y = (13/42)W
    )
  } →

  lemma SolveSystem1() {
    apply(SimplifyEquations()) →
    assert(
      W = (742/297)Y ∧
      B = (178/99)Y ∧
      D = (1580/891)Y
    )
  } →

  lemma MinimalY() {
    apply(SolveSystem1()) →
    assert(gcd(891,1580) = 1) →
    assert(∃G ∈ ℕ: Y = 891G) →
    assert(
      W = 2226G ∧
      B = 1602G ∧
      D = 1580G ∧
      Y = 891G
    )
  } →

  lemma SolveSystem2() {
    apply(MinimalY()) →
    assert(
      12w - 7b = 11214G ∧
      20b - 9d = 14220G ∧
      30d - 11y = 9801G ∧
      42y - 12w = 28932G
    ) →
    assert(
      4657w = 7206360G ∧
      4657b = 4893246G ∧
      4657d = 3515820G ∧
      4657y = 5439213G
    )
  } →

  lemma MinimalG() {
    apply(SolveSystem2()) →
    assert(4657 | G)
  } →

  apply(MinimalG()) →
  assert(
    W = 10366482 ∧
    B = 7460514 ∧
    D = 7358060 ∧
    Y = 4149387 ∧
    w = 7206360 ∧
    b = 4893246 ∧
    d = 3515820 ∧
    y = 5439213
  )
}