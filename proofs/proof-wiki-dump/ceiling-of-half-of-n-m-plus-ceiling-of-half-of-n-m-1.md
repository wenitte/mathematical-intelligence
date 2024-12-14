theorem Ceiling_Half_Sum() {
  assert(
    ∀n,m ∈ ℤ ⇒ ⌈(n+m)/2⌉ + ⌈(n-m+1)/2⌉ = n + 1
  )
} ↔

proof Ceiling_Half_Sum() {
  setVar(n,m: ℤ) →
  lemma Even_Case() {
    assert(
      (n+m) mod 2 = 0 ∨ (n-m+1) mod 2 = 0
    ) →
    assert(
      (n+m)/2 ∈ ℤ ∨ (n-m+1)/2 ∈ ℤ
    )
  } →
  assert(⌈(n+m)/2⌉ + ⌈(n-m+1)/2⌉) →
  apply(Ceiling_Addition_Property: ⌈a⌉ + ⌈b⌉ ≥ ⌈a + b⌉) →
  assert(⌈(n+m)/2 + (n-m+1)/2⌉) →
  assert(⌈(n+m+n-m+1)/2⌉) →
  assert(⌈2n+1)/2⌉) →
  assert(⌈n+1/2⌉) →
  assert(n+1)
}