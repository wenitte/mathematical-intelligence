# 

Source: https://proofwiki.org/wiki/Non-Injective_Mapping_may_be_Strictly_Order-Preserving_and_Order-Reversing

Theorem
Let $\struct {S, \prec_1}$ and $\struct {T, \prec_2}$ be strictly ordered sets.
Let $\phi: S \to T$ be a mapping.
Let $\pi: S \to T$ be a mapping with the property that:

$\forall x, y \in S: x \prec_1 y \iff \map \pi x \prec_2 \map \pi y$

Then it is not necessarily the case that $\pi$ is an injection.


Proof
Proof by Counterexample:
Let $S = \set {\O, \set a, \set b, \set {a, b} }$ and $T = \set {1, 2, 3}$.
Let $\prec_1$ be the proper subset relation:

$\forall x, y \in S: x \prec_1 y \iff x \subsetneq y$
Let $\prec_2$ be the usual strict ordering on the integers $1, 2, 3$:

$\forall x, y \in T: x \prec_2 y \iff x < y$
Let $\pi = \set {\tuple {\O, 1}, \tuple {\set a, 2}, \tuple {\set b, 2}, \tuple {\set {a, b}, 3} }$.
By inspection it is seen that $\pi: S \to T$ is a mapping which is specifically not an injection, as $\map \pi {\set a} = \map \pi {\set b}$.
Equally by inspection it can be seen that:

$\forall x, y \in S: x \prec_1 y \iff \map \pi x \prec_2 \map \pi y$
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $20 \ \text {(b)}$




