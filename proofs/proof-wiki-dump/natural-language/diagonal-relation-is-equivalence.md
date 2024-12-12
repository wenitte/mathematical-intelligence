# 

Source: https://proofwiki.org/wiki/Diagonal_Relation_is_Equivalence



Theorem
The diagonal relation $\Delta_S$ on a set $S$ is always an equivalence in $S$.


Proof
Checking in turn each of the criteria for equivalence:


Reflexive









\(\ds \forall x \in S: \, \)



\(\ds x\)

\(=\)







\(\ds x\)





Definition of Equals








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, x}\)

\(\in\)







\(\ds \Delta_S\)





Definition of Diagonal Relation



So $\Delta_S$ is reflexive.
$\Box$


Symmetric









\(\ds \forall x, y \in S: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \Delta_S\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Definition of Diagonal Relation








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds x\)





Equality is Symmetric








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, x}\)

\(\in\)







\(\ds \Delta_S\)





Definition of Diagonal Relation



So $\Delta_S$ is symmetric.
$\Box$


Transitive









\(\ds \forall x, y, z \in S: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \Delta_S \land \tuple {y, z} \in \Delta_S\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y \land y = z\)





Definition of Diagonal Relation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds z\)





Equality is Transitive








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \Delta_S\)





Definition of Diagonal Relation



So $\Delta_S$ is transitive.
$\blacksquare$


Examples
Equality of Integers is Equivalence
Let $\Z$ denote the set of integers.
Let $\RR$ denote the relation on $\Z$ defined as:

$\forall x, y \in \Z: x \mathrel \RR y \iff x = y$
Then $\RR$ is an equivalence relation such that the equivalence classes are singletons.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 7$: Relations
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.2$. Equivalence relations: Example $29$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Relations
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Introduction: Review of Algebra, Geometry, and Trigonometry: $\text{0-1}$: The Real Numbers
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Example $6.7$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.3$: Equivalence Relations: $(1)$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 16$: Equivalence relations
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.4$: Equivalence relations
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.3$: Relations: Example $2.3.3$




