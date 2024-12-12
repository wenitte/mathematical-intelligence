# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Relation



Theorem
The following definitions of the concept of Transitive Relation are equivalent:

Definition 1
$\RR$ is a transitive relation if and only if:

$\tuple {x, y} \in \RR \land \tuple {y, z} \in \RR \implies \tuple {x, z} \in \RR$
that is:

$\set {\tuple {x, y}, \tuple {y, z} } \subseteq \RR \implies \tuple {x, z} \in \RR$
Definition 2
$\RR$ is a transitive relation if and only if:

$\RR \circ \RR \subseteq \RR$
where $\circ$ denotes composite relation.


Proof
Definition 1 implies Definition 2
Let $\RR$ be a relation which fulfills the condition:

$\tuple {x, y} \in \RR \land \tuple {y, z} \in \RR \implies \tuple {x, z} \in \RR$

Then:














\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \RR \circ \RR\)














\(\ds \leadsto \ \ \)

\(\ds \exists y \in \RR: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Composition of Relations












\(\, \ds \land \, \)

\(\ds \tuple {y, z}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \RR\)





Definition 1 of Transitive Relation








\(\ds \leadsto \ \ \)





\(\ds \RR \circ \RR\)

\(\subseteq\)







\(\ds \RR\)





Definition of Subset




Thus $\RR$ is transitive by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\RR$ be a relation that fulfills the condition:

$\RR \circ \RR \subseteq \RR$
Aiming for a contradiction, suppose $\RR$ does not fulfill the condition:

$\tuple {x, y} \in \RR \land \tuple {y, z} \in \RR \implies \tuple {x, z} \in \RR$
Then:










\(\ds \exists \paren {\tuple {x, y} \in \RR \land \tuple {y, z} \in \RR}: \, \)



\(\ds \tuple {x, z}\)

\(\notin\)







\(\ds \RR\)





Definition of Non-Transitive Relation








\(\ds \leadsto \ \ \)

\(\ds \exists \tuple {x, z} \in \RR \circ \RR: \, \)



\(\ds \tuple {x, z}\)

\(\notin\)







\(\ds \RR\)





Definition of Composition of Relations








\(\ds \leadsto \ \ \)





\(\ds \RR \circ \RR\)

\(\nsubseteq\)







\(\ds \RR\)





Definition of Subset



This contradicts our statement that $\RR \circ \RR \subseteq \RR$.
Hence by Proof by Contradiction $\RR$ does fulfills the condition:

$\tuple {x, y} \in \RR \land \tuple {y, z} \in \RR \implies \tuple {x, z} \in \RR$

Thus $\RR$ is transitive by definition 1.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Exercise $10.6 \ \text{(c)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Relations: Theorem $3$




