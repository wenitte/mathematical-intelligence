# 

Source: https://proofwiki.org/wiki/Idempotent_Elements_form_Subsemigroup_of_Commutative_Semigroup/Proof_2

Theorem
Let $\struct {S, \circ}$ be a semigroup such that $\circ$ is commutative.
Let $I$ be the set of all elements of $S$ that are idempotent under $\circ$.
That is:

$I = \set {x \in S: x \circ x = x}$

Then $\struct {I, \circ}$ is a subsemigroup of $\struct {S, \circ}$.


Proof
By Subsemigroup Closure Test we need only show that:

For all $x, y \in I$: $x \circ y \in I$.

As $x, y \in I$, they are idempotent.
We have that $\circ$ is commutative.
Thus, by definition, $x$ and $y$ commute.
From Product of Commuting Idempotent Elements is Idempotent, $\left({x \circ y}\right)$ is idempotent.
That is:

$x \circ y \in I$
$\blacksquare$





