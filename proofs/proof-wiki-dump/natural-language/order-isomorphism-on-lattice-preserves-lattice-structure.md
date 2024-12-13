# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_on_Lattice_preserves_Lattice_Structure

Theorem
Let $\struct {S, \preccurlyeq_1}$ and $\struct {T, \preccurlyeq_2}$ be ordered sets.
Let $\phi: \struct {S, \preccurlyeq_1} \to \struct {T, \preccurlyeq_2}$ be an order isomorphism.

Then $\struct {S, \preccurlyeq_1}$ is a lattice if and only if $\struct {T, \preccurlyeq_2}$ is also a lattice.


Proof
Let $\struct {S, \preccurlyeq_1}$ be a lattice
Then by definition $\preccurlyeq_1$ is a lattice ordering.

We need to show that for all $x, y \in S$, the ordered set $\struct {\set {\map \phi x, \map \phi y}, \preccurlyeq_2}$ admits both a supremum and an infimum. 

Let $x, y \in S$.
Then $\struct {\set {x, y}, \preccurlyeq_1}$ admits both a supremum and an infimum.

Let $c = \map \sup {\set {x, y}, \preccurlyeq_1}$.
Then by definition of supremum:

$\forall s \in \set {x, y}: s \preccurlyeq_1 c$
$\forall d \in S: c \preccurlyeq_1 d$
where $d$ is an upper bound of $\struct {\set {x, y}, \preccurlyeq_1} \subseteq S$.

Now consider the image of $\set {x, y}$ under $\phi$.

By definition of order isomorphism:

$\forall \map \phi s \in \set {\map \phi x, \map \phi y}: \map \phi c \preccurlyeq_2 \map \phi s$
$\forall \map \phi d \in T: \map \phi c \preccurlyeq_2 \map \phi d$
where $\map \phi d$ is an upper bound of $\struct {\set {\map \phi x, \map \phi y}, \preccurlyeq_2} \subseteq T$.

So by definition of supremum:

$\map \phi c = \map \sup {\set {\map \phi x, \map \phi y}, \preccurlyeq_2}$
That is, $\struct {\set {\map \phi x, \map \phi y}, \preccurlyeq_2}$ admits a supremum.

Using a similar technique it can be shown that:

If $c = \map \inf {\set {x, y}, \preccurlyeq}$, then:
$\map \phi c = \map \inf {\set {\map \phi x, \map \phi y}, \preccurlyeq_2}$

Hence $\struct {\set {\map \phi x, \map \phi y}, \preccurlyeq_2}$ admits both a supremum and an infimum.
That is, $\preccurlyeq_2$ is a lattice ordering and so $\struct {T, \preccurlyeq_2}$ is a lattice.

By Inverse of Order Isomorphism is Order Isomorphism, if $\phi$ is an order isomorphism then so is $\phi^{-1}$.
So the same technique is used to show that if $\struct {T, \preccurlyeq_2}$ is a lattice then so is $\struct {S, \preccurlyeq_1}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.4$




