# 

Source: https://proofwiki.org/wiki/Cancellable_Elements_of_Monoid_form_Submonoid

Theorem
The cancellable elements of a monoid $\struct {S, \circ}$ form a submonoid of $\struct {S, \circ}$.


Proof
Let $C$ be the set of cancellable elements of $\struct {S, \circ}$.
Obviously $C \subseteq S$.
From Cancellable Elements of Semigroup form Subsemigroup, $\struct {C, \circ}$ is a subsemigroup of $S$.
Let $e_S$ be the identity of $\struct {S, \circ}$.
From Identity of Monoid is Cancellable, $e_S$ is cancellable, therefore $e_S \in C$.
As $e_S$ is the identity of $S$, we have that:

$\forall x \in C: x \circ e_S = x = e_S \circ x$.

Thus $e_S$ is the identity of $\struct {C, \circ}$, which is therefore a monoid.
As $C \subseteq S$, the result follows.
$\blacksquare$





