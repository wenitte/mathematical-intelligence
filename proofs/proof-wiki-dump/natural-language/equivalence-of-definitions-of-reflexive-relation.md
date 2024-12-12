# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Reflexive_Relation



Theorem
The following definitions of the concept of Reflexive Relation are equivalent:

Definition 1
$\RR$ is reflexive if and only if:

$\forall x \in S: \tuple {x, x} \in \RR$
Definition 2
$\RR$ is reflexive if and only if it is a superset of the diagonal relation: 

$\Delta_S \subseteq \RR$


Proof
Definition 1 implies Definition 2
Let $\RR$ be a relation.
We use a Proof by Contraposition by showing that:

$\Delta_S \nsubseteq \RR \implies \exists x \in S: \tuple {x, x} \notin \RR$
Thus, suppose:

$\Delta_S \nsubseteq \RR$
Then by definition of Diagonal Relation:

$\exists \tuple {x, x} \in S \times S: \tuple {x, x} \notin \RR$
Thus:

$\exists x \in S: \tuple {x, x} \notin \RR$
From Rule of Transposition it follows that:

$\forall x \in S: \tuple {x, x} \in \RR \implies \Delta_S \subseteq \RR$
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation which fulfills the condition:

$\Delta_S \subseteq \RR$

Then:










\(\ds \forall x \in S: \, \)



\(\ds \tuple {x, x}\)

\(\in\)







\(\ds \Delta_S\)





Definition of Diagonal Relation








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \tuple {x, x}\)

\(\in\)







\(\ds \RR\)





Definition of Subset




Thus $\RR$ is reflexive by Definition 1.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Exercise $10.6 \ \text{(a)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Relations: Theorem $3$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations




