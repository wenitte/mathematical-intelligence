theorem MorseFunctionOnOneManifold() {
  assert(
    ∀f: MorseFunction ∧ ∀X: OneManifold ∧
    let S = CriticalPoints(f) ∪ ∂X ∧
    let {L₁,...,Lₙ} = X - S ⇒
    ∀i ∈ {1,...,n}: f|Lᵢ: Lᵢ → ℝ is_diffeomorphism()
  )
} ↔

proof MorseFunctionOnOneManifold() {
  setVar(L: Component(X - S)) →
  assert(
    isLocalDiffeomorphism(f) ∧ isConnected(L) ⇒
    f(L) is_open_and_connected(ℝ)
  ) →
  assert(
    f(L) ⊆ f(X) ∧ isCompact(f(X)) ⇒
    ∃c,d ∈ ℝ: f(L) = (c,d)
  ) →
  
  lemma InjectivityProof() {
    setVar(p ∈ L) →
    setVar(q = f(p)) →
    assert(
      ∀z ∈ L ⇒ ∃γ: [q,y] → L: (
        f ∘ γ = id ∧
        γ(y) = z
      )
    )
  } →
  
  lemma ConnectivityArgument() {
    setVar(Q = {x ∈ L | x can_be_joined_to(p)}) →
    assert(
      isLocalDiffeomorphism(f) ⇒
      isOpen(Q) ∧ isClosed(Q)
    ) →
    assert(
      isOpen(Q) ∧ isClosed(Q) ∧ isConnected(L) ⇒
      Q = L
    )
  } →
  
  apply(InjectivityProof()) →
  apply(ConnectivityArgument()) →
  assert(
    isInjective(f|L) ∧ isLocalDiffeomorphism(f|L) ⇒
    isDiffeomorphism(f|L)
  )
}