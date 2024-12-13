# 

Source: https://proofwiki.org/wiki/Natural_Basis_of_Product_Topology/Lemma_2

Lemma for Natural Basis of Product Topology
Let $\family {\struct {X_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $X$ be the cartesian product of $\family {X_i}_{i \mathop \in I}$:

$\ds X := \prod_{i \mathop \in I} X_i$
Let $\BB$ be the set of cartesian products of the form $\ds\prod_{i \mathop \in I} U_i$ where:

for all $i \in I : U_i \in \tau_i$
for all but finitely many indices $i : U_i = X_i$

Then:

$\forall B_1, B_2 \in \BB : B_1 \cap B_2 \in \BB$


Proof
Let $B_1, B_2 \in \BB$.

Let $B_1 = \ds \prod_{i \mathop \in I} U_i$ where:

for all $i \in I : U_i \in \tau_i$
for all but finitely many indices $i : U_i = X_i$
Let $J_1$ be the finite set of indices such that:

$J_1 = \set {j \in I : U_i \neq X_i}$

Let $B_2 = \ds \prod_{i \mathop \in I} V_i$ where:

for all $i \in I : V_i \in \tau_i$
for all but finitely many indices $i : V_i = X_i$
Let $J_2$ be the finite set of indices such that:

$J_2 = \set{j \in I : V_i \neq X_i}$

Then:














\(\ds B_1 \cap B_2\)

\(=\)







\(\ds \paren{\prod_{i \mathop \in I} U_i } \cap \paren{\prod_{i \mathop \in I} V_i}\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop \in I} \paren{ U_i \cap V_i}\)





General Case of Cartesian Product of Intersections




Now:










\(\ds \forall i \in I: \, \)



\(\ds U_i, V_i \in \tau_i\)

\(\leadsto\)







\(\ds U_i \cap V_i \in \tau_i\)





Definition of topology $\tau_i$



and 










\(\ds \forall i \in I \setminus \paren {J_1 \cup J_2}: \, \)



\(\ds U_i \cap V_i\)

\(=\)







\(\ds X_i \cap X_i\)





Definition of $J_1$ and $J_2$














\(\ds \)

\(=\)







\(\ds X_i\)





Set Intersection is Idempotent



From Finite Union of Finite Sets is Finite, $J_1 \cup J_2$ is finite.
Then:

for all but finitely many indices $i : U_i \cap V_i = X_i$
Thus $B_1 \cap B_2 \in \BB$
$\blacksquare$





