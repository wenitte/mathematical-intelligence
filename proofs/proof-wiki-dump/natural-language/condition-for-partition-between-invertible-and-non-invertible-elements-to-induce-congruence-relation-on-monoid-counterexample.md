# 

Source: https://proofwiki.org/wiki/Condition_for_Partition_between_Invertible_and_Non-Invertible_Elements_to_induce_Congruence_Relation_on_Monoid/Counterexample

Theorem
Let $\struct {S, \circ}$ be a monoid whose identity element is $e$ such that $\struct {S, \circ}$ is specifically not a group.
Let $\struct {H, \circ}$ be the subgroup of $\struct {S, \circ}$ consisting of its invertible elements.
Let $N$ be the set of non-invertible elements of $\struct {S, \circ}$.
Let $\RR$ be the equivalence relation induced by the partition $\set {N \mid H}$.

Let $\circ$ be such that it is neither a cancellable operation nor a commutative operation.

Then it is not necessarily the case that either:

$\RR$ is a congruence relation on $\circ$
or:

the quotient structure $\struct {S / \RR, \circ_\RR}$ is isomorphic to $\struct {\Z_2, \times_2}$, the multiplicative monoid of integers modulo $2$.


Proof
Consider the set of natural numbers $\N$.
Let $\N^\N$ denote the set of all mappings from $\N$ to $\N$.
Now consider the algebraic structure $\struct {\N^\N, \circ}$, where $\circ$ in this context denotes composition of mappings.
From Set of all Self-Maps under Composition forms Monoid, $\struct {\N^\N, \circ}$ is a monoid.

From Composition of Mappings is not Commutative, $\circ$ is not a commutative operation.
Let $g: \N \to \N$ be the mapping defined as:

$\forall x \in \N: \map g x = \begin {cases} x - 1 & : x > 0 \\ 0 & : x = 0 \end {cases}$
$g$ is not injective, as:

$\map g 0 = \map g 1 = 0$
From Injection iff Left Cancellable, $g$ is not cancellable.
Thus we have that $\circ$ is not a cancellable operation.

So we have a monoid $\struct {\N^\N, \circ}$ whose operation is neither cancellable nor commutative.

From Existence of One-Sided Inverses on Natural Numbers whose Composition is Identity Mapping, there exist mappings $f: \N \to \N$ and $g: \N \to \N$ such that:

$g \circ f = I_\N$
such that:

$g$ is surjective but not injective
$f$ is injective but not surjective.
By definition of a bijection, neither $f$ nor $g$ are invertible elements of $\struct {\N^\N, \circ}$ since they are not bijective.
Hence we have $f, g \in N$ while $g \circ f = I_\N \in H$.
Also note that $f \circ f$ is not surjective, so $f \circ f \in N$.

By definition of $\RR$:

$x \mathrel \RR y \iff \set {x, y} \subseteq N \lor \set {x, y} \subseteq H$
We now have:

$g \mathrel \RR f \land f \mathrel \RR f$
$\neg \paren {\paren {g \circ f} \mathrel \RR \paren {f \circ f}}$
thus $\RR$ is not a congruence relation, and the quotient structure $\struct {S / \RR, \circ_\RR}$ is not well-defined.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.17 \ \text {(b)}$




