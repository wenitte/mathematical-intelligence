# 

Source: https://proofwiki.org/wiki/Idempotent_Elements_form_Submonoid_of_Commutative_Monoid

Theorem
Let $\struct {S, \circ}$ be a commutative monoid.
Let $e \in S$ be the identity element of $\struct {S, \circ}$.
Let $I$ be the set of all elements of $S$ that are idempotent under $\circ$.
That is:

$I = \set {x \in S: x \circ x = x}$

Then $\struct {I, \circ}$ is a submonoid of $\struct {S, \circ}$ with identity $e$.


Proof
By Idempotent Elements form Subsemigroup of Commutative Semigroup, $\struct {I, \circ}$ is a subsemigroup of $\struct {S, \circ}$.
By Identity Element is Idempotent:

$e \in I$
By Identity of Algebraic Structure is Preserved in Substructure, $e$ is an identity of $\struct {I, \circ}$.
Since $\struct {T, \circ}$ is a semigroup and has an identity, $\struct {T, \circ}$ is a monoid.
Since $T \subseteq S$, $\struct {T, \circ}$ is a submonoid of $\struct {S, \circ}$ with identity $e$.
$\blacksquare$





