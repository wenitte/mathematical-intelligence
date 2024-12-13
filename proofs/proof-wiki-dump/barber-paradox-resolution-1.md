theorem Barber_Paradox_Resolution() {
  let(𝕌: Set) →
  let(S: 𝕌 → {T,F}) →
  let(b: Element) →
  let(B: 𝕌 → {T,F}) →
  assert(
    ∀x ∈ 𝕌 ⇒ [S(x) ↔ "x is shaved by x"] ∧
    ∀x ∈ 𝕌 ⇒ [B(x) ↔ "x is shaved by b"]
  )
}

proof Paradox_Existence() {
  premise1(∀x ∈ 𝕌 ⇒ [¬S(x) ↔ B(x)]) →
  premise2(B(b) ↔ S(b)) →
  
  lemma Contradiction() {
    assert(S(b) ↔ B(b)) →
    assert(B(b) ↔ ¬S(b)) →
    apply(Biconditional_Transitive) →
    conclude(S(b) ↔ ¬S(b))
  } →
  
  conclude(∃ contradiction)
}

proof Resolution() {
  assert(b ∉ 𝕌) →
  
  lemma Valid_Cases() {
    case1("b is a woman") ∨
    case2("b is too young to shave")
  } →
  
  conclude(
    b ∉ 𝕌 →
    ¬(¬S(b) → B(b)) →
    "b can remain unshaved"
  )
}

theorem Resolution_Validity() {
  assert(
    b ∉ 𝕌 →
    ¬∃contradiction
  )
}