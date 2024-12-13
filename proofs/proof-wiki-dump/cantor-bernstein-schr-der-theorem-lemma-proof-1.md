theorem CantorBernsteinSchroederLemma() {
  let(S: Set, T: Set) →
  assert(T ⊆ S) ∧
  assert(∃f: S → T | isInjection(f)) →
  assert(∃g: S → T | isBijection(g))
} ↔

proof CantorBernsteinSchroederLemma() {
  // Define recursive sequence
  let(C: Sequence[Set]) →
  define(C[0] = S \ T) →
  define(∀n ∈ ℕ: C[n+1] = f(C[n])) →
  define(C_union = ∪{C[n] | n ∈ ℕ}) →
  
  // Define mapping h
  define(h: S → T) {
    h(x) = match(x) {
      case(x ∈ C_union): f(x)
      case(x ∉ C_union): x
    }
  } →

  // Prove h maps to T
  lemma MapToT() {
    forall(x ∈ S) {
      case(x ∈ C_union): 
        assert(h(x) = f(x)) →
        assert(f(x) ∈ T)
      case(x ∉ C_union):
        assert(x ∉ C[0]) →
        assert(x ∈ S \ C[0]) →
        assert(S \ C[0] = T) →
        assert(x ∈ T) →
        assert(h(x) = x ∈ T)
    }
  } →

  // Prove h is injective
  lemma Injective() {
    forall(x,y ∈ S | h(x) = h(y)) {
      cases {
        case(x,y ∈ C_union): 
          assert(f injective) →
          assert(x = y)
        case(x,y ∉ C_union):
          assert(x = h(x) = h(y) = y)
        case(x ∈ C_union ∧ y ∉ C_union):
          assert(∃n: x ∈ C[n]) →
          assert(h(x) = f(x) ∈ C[n+1]) →
          assert(h(x) ∈ C_union) →
          assert(h(y) = y ∉ C_union) →
          contradiction()
        case(x ∉ C_union ∧ y ∈ C_union):
          symmetricTo(previous case)
      }
    } →
    assert(isInjective(h))
  } →

  // Prove h is surjective
  lemma Surjective() {
    forall(y ∈ T) {
      case(y ∉ C_union):
        assert(h(y) = y)
      case(y ∈ C_union):
        assert(y ∉ C[0]) →
        assert(∃n > 0: y ∈ C[n+1]) →
        assert(∃x ∈ C[n]: y = f(x)) →
        assert(x ∈ C_union) →
        assert(h(x) = f(x) = y)
    } →
    assert(isSurjective(h))
  } →

  apply(MapToT()) →
  apply(Injective()) →
  apply(Surjective()) →
  assert(isBijection(h))
}