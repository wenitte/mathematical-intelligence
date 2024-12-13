theorem Sierpinski_78557() {
  assert(
    78557 ∈ SierpinskiNumbersSecondKind
  )
} ↔

proof Sierpinski_78557() {
  lemma ModuloForm36() {
    assert(∀n ∈ ℕ+ → ∃k ∈ ℕ : n ≡ Form(k) (mod 36))
    where Form(k) ∈ {
      2k,
      4k + 1,
      3k + 1,
      12k + 11,
      18k + 15,
      36k + 27,
      9k + 3
    }
  } →

  lemma Mod3Case() {
    assert(78557 × 2^(2k) + 1 ≡ 0 (mod 3)) ↔
    assert(78557 × 1^k + 1 ≡ 2 + 1 ≡ 0 (mod 3))
  } →

  lemma Mod5Case() {
    assert(78557 × 2^(4k + 1) + 1 ≡ 0 (mod 5)) ↔
    assert(78557 × 1^k × 2 + 1 ≡ 2 × 2 + 1 ≡ 0 (mod 5))
  } →

  lemma Mod7Case() {
    assert(78557 × 2^(3k + 1) + 1 ≡ 0 (mod 7)) ↔
    assert(78557 × 8^k × 2 + 1 ≡ 3 × 2 + 1 ≡ 0 (mod 7))
  } →

  lemma Mod13Case() {
    assert(78557 × 2^(12k + 11) + 1 ≡ 0 (mod 13)) ↔
    assert(78557 × 1^k × 2^11 + 1 ≡ 11 × 2048 + 1 ≡ 0 (mod 13))
  } →

  lemma Mod19Case() {
    assert(78557 × 2^(18k + 15) + 1 ≡ 0 (mod 19)) ↔
    assert(78557 × 2^15 + 1 ≡ 11 × 32768 + 1 ≡ 0 (mod 19))
  } →

  lemma Mod37Case() {
    assert(78557 × 2^(36k + 27) + 1 ≡ 0 (mod 37)) ↔
    assert(78557 × 2^27 + 1 ≡ 6 × (-6)^3 + 1 ≡ 0 (mod 37))
  } →

  lemma Mod73Case() {
    assert(78557 × 2^(9k + 3) + 1 ≡ 0 (mod 73)) ↔
    assert(78557 × 512^k × 8 + 1 ≡ 9 × 8 + 1 ≡ 0 (mod 73))
  } →

  conclude(
    ∀n ∈ ℕ → ∃p ∈ {3,5,7,13,19,37,73} : 
    78557 × 2^n + 1 ≡ 0 (mod p)
  ) →
  
  assert(
    ∀n ∈ ℕ → 78557 × 2^n + 1 is composite
  )
}