theorem NotSurjectivePowerSet() {
  assert(
    ∀S:Set ⇒ ¬∃f:Function(S → 𝒫(S)) [Surjective(f)]
  )
} ↔

proof NotSurjectivePowerSet() {
  setVar(S: Set) →
  setVar(f: Function(S → 𝒫(S))) →
  define(T := {x ∈ S : x ∉ f(x)}) →
  assert(T ⊆ S) →
  assert(T ∈ 𝒫(S)) →

  lemma ProveNotSurjective() {
    assume(∃a ∈ S : T = f(a)) →
    case(a ∈ T) {
      assert(a ∉ f(a)) [by T definition] →
      assert(a ∉ T) [since T = f(a)] →
      contradiction()
    } →
    conclude(a ∉ T) →
    assert(a ∉ f(a)) [since T = f(a)] →
    assert(a ∈ T) [by T definition] →
    contradiction()
  } →

  apply(ProveNotSurjective()) →
  assert(¬∃a ∈ S : T = f(a)) →
  conclude(¬Surjective(f))
}