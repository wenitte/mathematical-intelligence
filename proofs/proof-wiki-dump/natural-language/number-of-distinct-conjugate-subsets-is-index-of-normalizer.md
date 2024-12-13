# 

Source: https://proofwiki.org/wiki/Number_of_Distinct_Conjugate_Subsets_is_Index_of_Normalizer



Theorem
Let $G$ be a group.
Let $S$ be a subset of $G$.
Let $\map {N_G} S$ be the normalizer of $S$ in $G$.
Let $\index G {\map {N_G} S}$ be the index of $\map {N_G} S$ in $G$.

The number of distinct subsets of $G$ which are conjugates of $S \subseteq G$ is $\index G {\map {N_G} S}$.


Proof 1
We have that:

$S^a = S^b \iff S^{a b^{-1}} = S$ (reference to be determined).
That is:

$S^a = S^b \iff a b^{-1} \in \map {N_G} S$
which is equivalent to:

$a^{-1} \equiv b^{-1} \pmod {\map {N_G} S}$
Thus we have a bijection between:

the conjugacy class $\conjclass S$ of subsets of $G$ conjugate to $S$
and:
the left coset space $G / \map {N_G} S$
given by $S^a \to a^{-1} \map {N_G} S$.

Since $G / \map {N_G} S$ has $\index G {\map {N_G} S}$ elements, the result follows.
$\blacksquare$


Proof 2
Let $G$ act on its power set $\powerset G$ by the rule:

$\forall g \in G, S \in \powerset G: g * S := S^{g^{-1} } = \set {x \in G: g^{-1} x g \in S}$
That is, the conjugacy action on subsets.
From Conjugacy Action on Subsets is Group Action, $*$ is a  group action.
The orbit of $S \in \powerset G$ is the conjugacy class of $S$.
That is, $\Orb S$ is the set of distinct subsets of $G$ which are conjugate to $S$
The stabilizer of $S$ is its normalizer $\map {N_G} S$.
From the Orbit-Stabilizer Theorem:

$\order {\Orb x} = \index G {\Stab x} = \dfrac {\order G} {\order {\Stab x} }$
from which the result follows directly.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Exercise $5.16 \ \text{(ii)}$




