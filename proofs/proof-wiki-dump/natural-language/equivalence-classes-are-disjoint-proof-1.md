# 

Source: https://proofwiki.org/wiki/Equivalence_Classes_are_Disjoint/Proof_1

Theorem
Let $\RR$ be an equivalence relation on a set $S$.

Then all $\RR$-classes are pairwise disjoint:

$\tuple {x, y} \notin \RR \iff \eqclass x \RR \cap \eqclass y \RR = \O$


Proof
First we show that:

$\tuple {x, y} \notin \RR \implies \eqclass x \RR \cap \eqclass y \RR = \O$

Suppose two $\RR$-classes are not disjoint:














\(\ds \eqclass x \RR \cap \eqclass y \RR \ne \O\)

\(\leadsto\)







\(\ds \exists z: z \in \eqclass x \RR \cap \eqclass y \RR\)





Definition of Empty Set














\(\ds \)

\(\leadsto\)







\(\ds \exists z: z \in \eqclass x \RR \land z \in \eqclass y \RR\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds \exists z: \paren {\tuple {x, z} \in \RR} \land \paren {\tuple {y, z} \in \RR}\)





Definition of Equivalence Class














\(\ds \)

\(\leadsto\)







\(\ds \exists z: \paren {\tuple {x, z} \in \RR} \land \paren {\tuple {z, y} \in \RR}\)





Definition of Symmetric Relation: $\RR$ is symmetric














\(\ds \)

\(\leadsto\)







\(\ds \tuple {x, y} \in \RR\)





Definition of Transitive Relation: $\RR$ is transitive




Thus we have shown that $\eqclass x \RR \cap \eqclass y \RR \ne \O \implies \tuple {x, y} \in \RR$.

Therefore, by the Rule of Transposition:

$\tuple {x, y} \notin \RR \implies \eqclass x \RR \cap \eqclass y \RR = \O$

Now we show that:

$\eqclass x \RR \cap \eqclass y \RR = \O \implies \tuple {x, y} \notin \RR$

Suppose $\tuple {x, y} \in \RR$.














\(\ds \)

\(\)







\(\ds y \in \eqclass y \RR\)





Definition of Equivalence Class














\(\ds \)

\(\)







\(\ds \tuple {x, y} \in \RR\)





by hypothesis














\(\ds \)

\(\leadsto\)







\(\ds y \in \eqclass x \RR\)





Definition of Equivalence Class














\(\ds \)

\(\leadsto\)







\(\ds y \in \eqclass x \RR \land y \in \eqclass y \RR\)





Rule of Conjunction














\(\ds \)

\(\leadsto\)







\(\ds y \in \eqclass x \RR \cap \eqclass y \RR\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds \eqclass x \RR \cap \eqclass y \RR \ne \O\)





Definition of Empty Set




Thus we have shown that:

$\tuple {x, y} \in \RR \implies \eqclass x \RR \cap \eqclass y \RR \ne \O$

Therefore, by the Rule of Transposition:

$\eqclass x \RR \cap \eqclass y \RR = \O \implies \paren {x, y} \notin \RR$

Using the rule of Biconditional Introduction on these results:

$\eqclass x \RR \cap \eqclass y \RR = \O \iff \paren {x, y} \notin \RR$
and the proof is complete.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.4$. Equivalence classes: Lemma $\text{(ii)}$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.3$: Equivalence Relations: Theorem $\text{A}.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 17.4, \ \S 17.5 \ \text{(ii)}$: Equivalence classes




