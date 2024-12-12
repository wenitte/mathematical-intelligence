# 

Source: https://proofwiki.org/wiki/Equivalence_Class_holds_Equivalent_Elements



Theorem
Let $\RR$ be an equivalence relation on a set $S$.

Then:

$\tuple {x, y} \in \RR \iff \eqclass x \RR = \eqclass y \RR$


Proof
Necessary Condition
First we prove that $\tuple {x, y} \in \RR \implies \eqclass x \RR = \eqclass y \RR$.
Suppose:

$\tuple {x, y} \in \RR: x, y \in S$
Then:














\(\ds z\)

\(\in\)







\(\ds \eqclass x \RR\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, z}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Class








\(\ds \leadsto \ \ \)





\(\ds \tuple {z, x}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Relation: $\RR$ is symmetric








\(\ds \leadsto \ \ \)





\(\ds \tuple {z, y}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Relation: $\RR$ is transitive








\(\ds \leadsto \ \ \)





\(\ds \tuple {y, z}\)

\(\in\)







\(\ds \RR\)





Definition of Equivalence Relation: $\RR$ is symmetric








\(\ds \leadsto \ \ \)





\(\ds z\)

\(\in\)







\(\ds \eqclass y \RR\)





Definition of Equivalence Class



So:

$\eqclass x \RR \subseteq \eqclass y \RR$

Now:














\(\ds \tuple {x, y} \in \RR\)

\(\implies\)







\(\ds \eqclass x \RR \subseteq \eqclass y \RR\)





(see above)














\(\ds \tuple {x, y} \in \RR\)

\(\implies\)







\(\ds \tuple {y, x} \in \RR\)





Definition of Equivalence Relation: $\RR$ is symmetric














\(\ds \)

\(\leadsto\)







\(\ds \eqclass y \RR \subseteq \eqclass x \RR\)





from above














\(\ds \)

\(\leadsto\)







\(\ds \eqclass y \RR = \eqclass x \RR\)





Definition of Set Equality




... so we have shown that:

$\tuple {x, y} \in \RR \implies \eqclass x \RR = \eqclass y \RR$
$\Box$


Sufficient Condition
Next we prove that $\eqclass x \RR = \eqclass y \RR \implies \tuple {x, y} \in \RR$.
By definition of set equality:

$\eqclass x \RR = \eqclass y \RR$
means:

$\paren {x \in \eqclass x \RR \iff x \in \eqclass y \RR}$
So by definition of equivalence class:

$\tuple {y, x} \in \RR$
Hence by definition of equivalence relation: $\RR$ is symmetric

$\tuple {x, y} \in \RR$
So we have shown that

$\eqclass x \RR = \eqclass y \RR \implies \tuple {x, y} \in \RR$

Thus, we have:














\(\ds \tuple {x, y} \in \RR\)

\(\implies\)







\(\ds \eqclass x \RR = \eqclass y \RR\)




















\(\ds \eqclass x \RR = \eqclass y \RR\)

\(\implies\)







\(\ds \tuple {x, y} \in \RR\)









$\Box$

So by equivalence:

$\tuple {x, y} \in \RR \iff \eqclass x \RR = \eqclass y \RR$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.4$. Equivalence classes: Lemma $\text{(i)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Relations: Theorem $4$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Equivalence Relations: $\S 17$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.3 \ (2)$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 17.2, \ \S 17.3$: Equivalence classes
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Equivalence Relations




