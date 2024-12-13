# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Mapping_is_Equivalence_Relation



Theorem
Let $f: S \to T$ be a mapping.
Let $\RR_f \subseteq S \times S$ be the relation induced by $f$:

$\tuple {s_1, s_2} \in \RR_f \iff \map f {s_1} = \map f {s_2}$

Then $\RR_f$ is an equivalence relation.


Proof
We need to show that $\RR_f$ is an equivalence relation.

Checking in turn each of the criteria for equivalence:


Reflexive
$\RR_f$ is reflexive:

$\forall x \in S: \map f x = \map f x \implies x \mathrel {\RR_f} x$
$\Box$


Symmetric
$\RR_f$ is symmetric:














\(\ds x\)

\(\RR_f\)







\(\ds y\)





by definition








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds \map f y\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \map f y\)

\(=\)







\(\ds \map f x\)





Equality is Equivalence Relation, and so Symmetric








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\RR_f\)







\(\ds x\)





Definition of $f$



$\Box$


Transitive
$\RR_f$ is transitive:














\(\ds x\)

\(\RR_f\)







\(\ds y\)


















\(\, \ds \land \, \)

\(\ds y\)

\(\RR_f\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds \map f y\)





Definition of $f$












\(\, \ds \land \, \)

\(\ds \map f y\)

\(=\)







\(\ds \map f z\)





Definition of $f$








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds \map f z\)





Equality is Equivalence Relation, and so Transitive








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR_f\)







\(\ds z\)





Definition of $f$



$\Box$

Thus $\RR_f$ is reflexive, symmetric and transitive, and is therefore an equivalence relation.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Factoring Functions: Theorem $10$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Example $6.6$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations: Exercise $2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $10$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.4$: Equivalence relations
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Exercise $3.4 \ \text{(a)}$




