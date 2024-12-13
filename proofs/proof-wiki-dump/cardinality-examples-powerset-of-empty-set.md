theorem Powerset_Empty_Card() {
  assert(
    let S₅ = 𝒫(∅) →
    |S₅| = 1
  )
} ↔

proof Powerset_Empty_Card() {
  lemma Powerset_Empty() {
    assert(𝒫(∅) = {∅})
  } →
  
  let S₅ = 𝒫(∅) →
  apply(Powerset_Empty()) →
  assert(S₅ = {∅}) →
  
  lemma Card_Singleton() {
    assert(
      ∀A(
        A = {x} →
        |A| = 1
      )
    )
  } →
  
  apply(Card_Singleton(), A = S₅) →
  assert(|S₅| = 1)
}