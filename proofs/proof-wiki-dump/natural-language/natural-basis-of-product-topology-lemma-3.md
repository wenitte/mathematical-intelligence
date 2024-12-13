# 

Source: https://proofwiki.org/wiki/Natural_Basis_of_Product_Topology/Lemma_3



Lemma for Natural Basis of Product Topology
Let $\family {\struct {X_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $X$ be the cartesian product of $\family {X_i}_{i \mathop \in I}$:

$\ds X := \prod_{i \mathop \in I} X_i$

Let $\BB$ be the set of cartesian products of the form $\ds \prod_{i \mathop \in I} U_i$ where:

for all $i \in I : U_i \in \tau_i$
for all but finitely many indices $i : U_i = X_i$

Then:

$\ds \forall B \in \BB : B = \bigcap_{j \mathop \in J} \pr_j^{-1} \sqbrk {U_j}$
where:

$\ds B = \prod_{i \mathop \in I} U_i$
$J = \set{j \in I : U_i \ne X_i}$ is finite.


Proof
Let $B \in \BB$.

Let $B = \ds \prod_{i \mathop \in I} U_i$
where

for all $i \in I : U_i \in \tau_i$
for all but finitely many indices $i : U_i = X_i$

Let $J = \set{j \in I : U_i \ne X_i}$.
Then $J$ is a finite set and:

$\forall i \in I \setminus J : U_i = X_i$

For all $j \in J$, let:

$\pr_j^{-1} \sqbrk {U_j} = \ds \prod_{i \mathop \in I} V^j_i$
where:

$V^j_j = U_j$
$\forall i \ne j : V^j_i = X_i$
Then:














\(\ds \bigcap_{j \mathop \in J} \pr_j^{-1} \sqbrk {U_j}\)

\(=\)







\(\ds \bigcap_{j \mathop \in J} \paren {\prod_{i \mathop \in I} V^j_i}\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop \in I} \paren {\bigcap_{j \mathop \in J}  V^j_i}\)





General Case of Cartesian Product of Intersections




To complete the proof it remains to show that:

$\forall i \in I : U_i = \bigcap_{j \mathop \in J}  V^j_i$
Let $i \in I$.


Case: $i \not \in J$
Let $i \not \in J$.
Then:














\(\ds \bigcap_{j \mathop \in J}  V^j_i\)

\(=\)







\(\ds \bigcap_{j \mathop \in J}  X_i\)





as $\forall j \in J : i \ne j$














\(\ds \)

\(=\)







\(\ds X_i\)





Set Intersection is Idempotent














\(\ds \)

\(=\)







\(\ds U_i\)





Definition of $J$



$\Box$


Case: $i \in J$
Let $i \in J$.
Then:














\(\ds \bigcap_{j \mathop \in J}  V^j_i\)

\(=\)







\(\ds V^i_i \cap \bigcap_{j \mathop \in J \mathop \setminus i}  V^j_i\)




















\(\ds \)

\(=\)







\(\ds U_i \cap \bigcap_{j \mathop \in J \mathop \setminus i}  V^j_i\)





Definition of $V^i_i$














\(\ds \)

\(=\)







\(\ds U_i \cap \bigcap_{j \mathop \in J \mathop \setminus i}  X_i\)





Definition of $V^j_i$ when $j \ne i$














\(\ds \)

\(=\)







\(\ds U_i \cap X_i\)





Set Intersection is Idempotent














\(\ds \)

\(=\)







\(\ds U_i\)





Intersection with Subset is Subset



$\Box$
Thus:

$\ds \forall i \in I : U_i = \bigcap_{j \mathop \in J}  V^j_i$
The result follows.
$\blacksquare$





