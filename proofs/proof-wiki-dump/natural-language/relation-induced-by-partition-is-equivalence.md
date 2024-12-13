# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Partition_is_Equivalence



Theorem
Let $\mathbb S$ be a partition of a set $S$.
Let $\RR$ be the relation induced by $\mathbb S$.

Then:

$(1): \quad \RR$ is unique
$(2): \quad \RR$ is an equivalence relation on $S$.
Hence $\mathbb S$ is the quotient set of $S$ by $\RR$, that is:

$\mathbb S = S / \RR$


Proof
From the definition of Relation Induced by Partition, we define the relation $\RR$ on $S$ by:

$\RR = \set {\tuple {x, y}: \paren {\exists T \in \mathbb S: x \in T \land y \in T} }$


Test for Equivalence
We are to show that $\RR$ is an equivalence relation.
Checking in turn each of the criteria for equivalence:


Reflexive
$\RR$ is reflexive:














\(\ds \)

\(\)







\(\ds \paren {x \in T \land x \in T}\)





Rule of Idempotence














\(\ds \)

\(\leadstoandfrom\)







\(\ds \tuple {x, x} \in \RR\)





Definition of $\RR$



$\Box$


Symmetric
$\RR$ is symmetric:














\(\ds \)

\(\)







\(\ds \tuple {x, y} \in \RR\)




















\(\ds \)

\(\leadsto\)







\(\ds x \in T \land y \in T\)





Definition of $\RR$














\(\ds \)

\(\leadsto\)







\(\ds y \in T \land x \in T\)





Rule of Commutation














\(\ds \)

\(\leadsto\)







\(\ds \tuple {y, x} \in \RR\)





Definition of $\RR$



$\Box$


Transitive
$\RR$ is transitive:














\(\ds x \in T \land y \in T\)

\(\leadstoandfrom\)







\(\ds \tuple {x, y} \in \RR\)





Definition of $\RR$














\(\ds y \in T \land z \in T\)

\(\leadstoandfrom\)







\(\ds \tuple {y, z} \in \RR\)





Definition of $\RR$














\(\ds \paren {x \in T \land y \in T} \land \paren {y \in T \land z \in T}\)

\(\leadstoandfrom\)







\(\ds \tuple {x, z} \in \RR\)





Definition of $\RR$



$\Box$

So $\RR$ is reflexive, symmetric and transitive.
Hence, by definition, $\RR$ is an equivalence relation.
$\Box$


Test for Uniqueness
Now by definition of a partition, we have that:

$\mathbb S$ partitions $S \implies \forall x \in S: \exists T \in \mathbb S: x \in T$

Also:














\(\ds x, y \in T\)

\(\leadsto\)







\(\ds \tuple {x, y} \in \RR\)





Definition of $\RR$














\(\ds x \in T_1, y \in T_2, T_1 \ne T_2\)

\(\leadsto\)







\(\ds \tuple{x, y} \notin \RR\)





Definition of Set Partition




Thus $\mathbb S$ is the set of $\RR$-classes constructed above, and no other relation can be constructed in this way.
$\blacksquare$


Also see
Fundamental Theorem on Equivalence Relations for the converse.


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 3$: Equivalence relations
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 7$: Relations
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.2$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.4$. Equivalence classes: Example $37$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $2$. Equivalence Relations: Exercise $4$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Theorem $10.2$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.3$: Theorem $5$ Part $\text {II}$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1.4$: Decomposition of a set into classes. Equivalence relations: Theorem $4$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Equivalence Relations: $\S 17 \alpha$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.4$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.8$: Quotient spaces
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.3$: Equivalence Relations: Problem Set $\text{A}.3$: $16$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.4$: Equivalence relations
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions: Exercise $10 \ \text {(b)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.3$: Relations: Remark $2.3.1$




