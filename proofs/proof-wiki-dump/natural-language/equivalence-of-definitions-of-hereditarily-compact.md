# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Hereditarily_Compact



Theorem
Let $T = \struct {S, \tau}$ be a topological space.

The following definitions of the concept of Hereditarily Compact Space are equivalent:

Definition 1
$T$ is  hereditarily compact if and only if every subspace of $T$ is compact.

Definition 2
$T$ is  hereditarily compact if and only if:

for each family $\family {U_i}_{i \mathop \in I}$ of open sets of $T$, there exists a finite subset $J \subset I$ such that:
$\ds \bigcup_{j \mathop \in J} U_j = \bigcup_{i \mathop \in I} U_i$


Proof
Definition 1 implies Definition 2
Let $T = \struct {S, \tau}$ be hereditarily compact by definition 1.
Let $\family {U_i}_{i \mathop \in I}$ be an indexed family of open sets of $T$.
We have that:

$\ds \bigcup_{i \mathop \in I} U_i \subset S$
By hypothesis, $\ds \bigcup_{i \mathop \in I} U_i$ is compact when considered as a subspace of $T$.
Furthermore, $\ds U_i = U_i \cap \bigcup_{i \mathop \in I} U_i$ is open in $\ds \bigcup_{i \mathop \in I} U_i$, by definition of the subspace topology.
Therefore $\family {U_i}_{i \mathop \in I}$ is an open cover for $\ds \bigcup_{i \mathop \in I} U_i$.
Since $\ds \bigcup_{i \mathop \in I} U_i$ is compact, there exists a finite subcover of $\family {U_i}_{i \mathop \in I}$ for $\ds \bigcup_{i \mathop \in I} U_i$, say $\family {U_j}_{j \mathop \in J}$.
Then by definition of open cover:

$\ds \bigcup_{j \mathop \in J} U_j = \bigcup_{i \mathop \in I} U_i$
Thus $T = \struct {S, \tau}$ is hereditarily compact by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $T = \struct {S, \tau}$ be hereditarily compact by definition 2.
Let $Y \subset S$ be a subspace of $T$.
Let $\family {V_i}_{i \mathop \in I}$ be an open cover for $Y$:

$\ds \bigcup_{i \mathop \in I} V_i = Y$
Then by definition of the subspace topology:

$V_i = U_i \cap Y$
for a certain $V_i \in \tau$
But then $\family {U_i}_{i \mathop \in I}$ is an indexed family of open sets of $T$.
By hypothesis, there exists a finite subset $J \subset I$ such that:

$\ds \bigcup_{j \mathop \in J} U_i = \bigcup_{i \mathop \in I} U_i$
But then:














\(\ds \bigcup_{i \mathop \in I} V_i\)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \paren {U_i \cap Y}\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{i \mathop \in I} U_i} \cap Y\)




















\(\ds \)

\(=\)







\(\ds \paren {\bigcup_{j \mathop \in J} U_j} \cap Y\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} \paren {U_j \cap Y}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{j \mathop \in J} V_j\)










Thus $\family {V_j}_{j \mathop \in J}$ is a finite subcover of $\family {V_i}_{i \mathop \in I}$ for $Y$. 
Thus $Y$ is a compact subspace of $T$.
Thus $T = \struct {S, \tau}$ is hereditarily compact by definition 1.
$\blacksquare$





