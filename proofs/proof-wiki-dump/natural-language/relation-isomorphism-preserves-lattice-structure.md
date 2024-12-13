# 

Source: https://proofwiki.org/wiki/Relation_Isomorphism_preserves_Lattice_Structure

Theorem
Let $\struct {A, \RR}$ and $\struct {B, \SS}$ be relational structures which are relationally isomorphic.
Let $\struct {A, \RR}$ be a lattice.

Then $\struct {B, \SS}$ is also a lattice.


Proof
Let $\struct {A, \RR}$ be a lattice.
Recall the definition:
Let $\struct {S, \preceq}$ be an ordered set.
Then $\struct {S, \preceq}$ is a lattice if and only if:

for all $x, y \in S$, the subset $\set {x, y}$ admits both a supremum and an infimum.

From Relation Isomorphism preserves Ordering:

$\SS$ is an ordering on $B$.

Let $\phi: \struct {A, \RR} \to \struct {B, \SS}$ be a relation isomorphism.

We need to show that for all $x, y \in A$, the ordered set $\struct {\set {\map \phi x, \map \phi y}, \SS}$ admits both a supremum and an infimum. 

Let $x, y \in A$.
Then $\struct {\set {x, y}, \RR}$ admits both a supremum and an infimum.

Let $c = \map \sup {\set {x, y}, \RR}$.
Then by definition of supremum:

$\forall a \in \set {x, y}: a \mathrel \RR c$
$\forall d \in A: c \mathrel \RR d$
where $d$ is an upper bound of $\struct {\set {x, y}, \RR} \subseteq A$.

Now consider the image of $\set {x, y}$ under $\phi$.

By definition of relation isomorphism:

$\forall \map \phi s \in \set {\map \phi x, \map \phi y}: \map \phi c \mathrel \SS \map \phi s$
$\forall \map \phi d \in B: \map \phi c \mathrel \SS \map \phi d$
where $\map \phi d$ is an upper bound of $\struct {\set {\map \phi x, \map \phi y}, \SS} \subseteq B$.

So by definition of supremum:

$\map \phi c = \map \sup {\set {\map \phi x, \map \phi y}, \SS}$
That is, $\struct {\set {\map \phi x, \map \phi y}, \SS}$ admits a supremum.

Using a similar technique it can be shown that:

If $c = \map \inf {\set {x, y}, \SS}$, then:
$\map \phi c = \map \inf {\set {\map \phi x, \map \phi y}, \SS}$

Hence $\struct {\set {\map \phi x, \map \phi y}, \SS}$ admits both a supremum and an infimum.
That is, $\SS$ is a lattice ordering and so $\struct {B, \SS}$ is a lattice.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.10$




