theorem CharacteristicTimesElement() {
  let R: Ring
  let n: ℕ
  assume(
    isRingWithUnity(R) ∧
    hasZero(R, 0_R) ∧
    hasUnity(R, 1_R) ∧
    characteristic(R) = n
  )
  assert(
    ∀a ∈ R ⇒ n·a = 0_R
  )
} ↔

proof CharacteristicTimesElement() {
  setVar(a: R) →
  case a = 0_R {
    assert(n·0_R = 0_R)
  } →
  case a ≠ 0_R {
    assert(n·a = n·(1_R ∘ a)) by UnityDef →
    assert(n·(1_R ∘ a) = (n·1_R) ∘ a) by IntegralMultipleDef →
    assert((n·1_R) ∘ a = 0_R ∘ a) by CharacteristicDef →
    assert(0_R ∘ a = 0_R) by RingZeroDef
  } →
  conclude(n·a = 0_R)
}

lemma UnityDef() {
  assert(∀a ∈ R ⇒ 1_R ∘ a = a)
}

lemma IntegralMultipleDef() {
  assert(∀a,b ∈ R, k ∈ ℕ ⇒ k·(a ∘ b) = (k·a) ∘ b)
}

lemma CharacteristicDef() {
  assert(characteristic(R) = n ⇒ n·1_R = 0_R)
}

lemma RingZeroDef() {
  assert(∀a ∈ R ⇒ 0_R ∘ a = 0_R)
}