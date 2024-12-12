# 

Source: https://proofwiki.org/wiki/Basis_for_Box_Topology



Theorem
Let $\family {\struct {S_i, \tau_i} }_{i \mathop \in I}$ be an $I$-indexed family of topological spaces.
Let $S$ be the cartesian product of $\family {S_i}_{i \mathop \in I}$.
That is:

$\ds S := \prod_{i \mathop \in I} S_i$
Define:

$\ds \BB := \set {\prod_{i \mathop \in I} U_i: \forall i \in I: U_i \in \tau_i}$

Then $\BB$ is a synthetic basis on $S$.


Proof
Let us check the two conditions for $\BB$ to be a synthetic basis in turn.


$(\text B 1)$: Covering
From Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology, we have $S_i \in \tau_i$ for all $i \in I$.
Thus $S = \ds \prod_{i \mathop \in I} S_i \in \BB$.
Hence by Set is Subset of Union: General Result, we have:

$S \subseteq \ds \bigcup \BB$
so $\BB$ is a cover for $S$.
$\Box$


$(\text B 2)$: Intersections are Unions
Let $A = \ds \prod_{i \mathop \in I} U_i$ and $B = \ds \prod_{i \mathop \in I} V_i$ be in $\BB$.
Then by Cartesian Product of Intersections, we have:

$A \cap B = \ds \prod_{i \mathop \in I} \paren {U_i \cap V_i}$
By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets, $U_i \cap V_i \in \tau_i$ for all $i \in I$.

Hence $A \cap B \in \BB$, and in particular, by Union of Singleton:

$A \cap B = \ds \bigcup \set {A \cap B}$
$\Box$

Having verified both conditions, we conclude $\BB$ is a synthetic basis on $S$.
$\blacksquare$


Also see
Definition:Box Topology
Synthetic Basis and Analytic Basis are Compatible




