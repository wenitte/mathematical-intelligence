# 

Source: https://proofwiki.org/wiki/Equality_of_Towers_in_Set

Theorem
Let $X$ be a non-empty set.
Let $\struct {T_1, \preccurlyeq_1}$ and $\struct {T_2, \preccurlyeq_2}$ be towers in $X$.

Then either:

$\struct {T_1, \preccurlyeq_1} = \struct {T_2, \preccurlyeq_2}$
or:

$\struct {T_1, \preccurlyeq_1}$ is an initial segment of $\struct {T_2, \preccurlyeq_2}$
or:

$\struct {T_2, \preccurlyeq_2}$ is an initial segment of $\struct {T_1, \preccurlyeq_1}$


Proof
By the definition of tower:

$\struct {T_1, \preccurlyeq_1}$ and $\struct {T_2, \preccurlyeq_2}$ are well-ordered sets.
By Wosets are Isomorphic to Each Other or Initial Segments, either:

$(1): \quad$ the towers are order isomorphic to each other
or:

$(2): \quad$ one is order isomorphic to an initial segment in the other.

Without loss of generality, in case  $(2)$, assume that $\struct {T_1, \preccurlyeq_1}$ is order isomorphic to an initial segment in $\struct {T_2, \preccurlyeq_2}$.
By Order Isomorphism iff Strictly Increasing Surjection, there exists a strictly increasing mapping:

$i: \struct {T_1, \preccurlyeq_1} \to \struct {T_2, \preccurlyeq_2}$
such that $i \sqbrk {T_1}$, the image set of $T_1$ under $i$, is equal to $T_2$ or to an initial segment of $T_2$.
From Characterization of Strictly Increasing Mapping on Woset, we can characterize $i$ as follows:

$\forall t \in T_1: \map i t = \map \min {T_2 \setminus i \sqbrk {S_t} }$
and:

$i \sqbrk {S_t} = S_{\map i t}$

Define:

$Y = \set {y \in T_1: \map i y = y}$
Then for any $t \in T_1$ and $S_t \subseteq Y$:














\(\ds t\)

\(=\)







\(\ds \map c {X \setminus S_t}\)





Definition of Tower in Set














\(\ds \)

\(=\)







\(\ds \map c {X \setminus i \sqbrk {S_t} }\)





by definition of $Y$














\(\ds \)

\(=\)







\(\ds \map c {X \setminus S_{\map i t} }\)





as $i \sqbrk {S_t} = S_{\map i t}$














\(\ds \)

\(=\)







\(\ds \map i t\)





Definition of Tower in Set




So $\map i y = y$ for any initial segment $S_t \subseteq Y$.
By Induction on Well-Ordered Set, $Y = T$.
Thus $i$ is the identity mapping from $T_1$ onto its image.
Recall that the image set of $i$ is $T_2$ or an initial segment of $T_2$.
So $T_1 = T_2$ or an initial segment of $T_2$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) $\S 1.11$ Supplementary Exercise $7$




