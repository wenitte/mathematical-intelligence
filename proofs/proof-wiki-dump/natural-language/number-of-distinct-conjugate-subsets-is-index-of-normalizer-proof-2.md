# 

Source: https://proofwiki.org/wiki/Number_of_Distinct_Conjugate_Subsets_is_Index_of_Normalizer/Proof_2

Theorem
Let $G$ be a group.
Let $S$ be a subset of $G$.
Let $\map {N_G} S$ be the normalizer of $S$ in $G$.
Let $\index G {\map {N_G} S}$ be the index of $\map {N_G} S$ in $G$.

The number of distinct subsets of $G$ which are conjugates of $S \subseteq G$ is $\index G {\map {N_G} S}$.


Proof
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
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 54$




