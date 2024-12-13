# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_preserves_Total_Ordering

Theorem
Let $\struct {A, \RR}$ and $\struct {B, \SS}$ be relational structures which are relationally isomorphic.
Let $\struct {A, \RR}$ be a totally ordered set.

Then $\struct {B, \SS}$ is also a totally ordered set.


Proof
Let $\struct {A, \RR}$ be a totally ordered set.
Recall the definition:
$\RR$ is a total ordering on $S$ if and only if:

$(1): \quad \RR$ is an ordering on $S$
$(2): \quad \RR$ is connected
That is, $\RR$ is an ordering with no non-comparable pairs:

$\forall x, y \in S: x \mathop \RR y \lor y \mathop \RR x$

From Relation Isomorphism preserves Ordering:

$\SS$ is an ordering.

Let $\phi: \struct {A, \RR} \to \struct {B, \SS}$ be a relation isomorphism.
Let $x, y \in A$.
Then either $x \mathrel \RR y$ or $y \mathrel \RR x$.
From the definition of relation isomorphism, either:

$\map \phi x \mathrel \SS \map \phi y$
or:

$\map \phi y \mathrel \SS \map \phi x$
and so by definition $\SS$ is also a total ordering.
So by definition $\struct {B, \SS}$ is also a totally ordered set.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.10$




