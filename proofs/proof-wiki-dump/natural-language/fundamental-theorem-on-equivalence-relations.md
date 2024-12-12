# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_on_Equivalence_Relations

  This article was Featured Proof between 21st May 2012 and 3rd July 2012.




Theorem
Let $\RR \subseteq S \times S$ be an equivalence on a set $S$.

Then the quotient set $S / \RR$ of $S$ by $\RR$ forms a partition of $S$.


Proof
To prove that $S / \RR$ is a partition of $S$, we have to prove:

$(1): \quad \ds \bigcup {S / \RR} = S$
$(2): \quad \eqclass x \RR \ne \eqclass y \RR \iff \eqclass x \RR \cap \eqclass y \RR = \O$
$(3): \quad \forall \eqclass x \RR \in S / \RR: \eqclass x \RR \ne \O$

Taking each proposition in turn:


Union of Equivalence Classes is Whole Set
The set of $\RR$-classes constitutes the whole of $S$:
We have that:










\(\ds \forall x \in S: \, \)



\(\ds x\)

\(\in\)







\(\ds \eqclass x \RR\)





Definition of Equivalence Class




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \set {y \in S: x \mathrel \RR y}\)





Definition of Equivalence Class




and:














\(\ds \eqclass x \RR\)

\(=\)







\(\ds \set {y: x \mathrel \RR y}\)





Definition of Equivalence Class




\(\text {(2)}: \quad\)









\(\ds \)

\(\subseteq\)







\(\ds S\)





Definition of Subset




Then:














\(\ds S\)

\(=\)







\(\ds \bigcup_{x \mathop \in S} \set x\)





Definition of Union of Set of Sets














\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{x \mathop \in S} \eqclass x \RR\)





from $(1)$














\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{x \mathop \in S} S\)





from $(2)$














\(\ds \)

\(=\)







\(\ds S\)









$\Box$


Equivalence Classes are Disjoint
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
$\Box$


Equivalence Class is not Empty









\(\ds \forall \eqclass x \RR \subseteq S: \exists x \in S: \, \)



\(\ds x\)

\(\in\)







\(\ds \eqclass x \RR\)





Definition of Equivalence Class








\(\ds \leadsto \ \ \)





\(\ds \eqclass x \RR\)

\(\ne\)







\(\ds \O\)





Definition of Empty Set



$\Box$

Thus all conditions for $S / \RR$ to be a partition are fulfilled.
$\blacksquare$


Examples
Arbitrary Equivalence on Set of $6$ Elements: $1$
Let $S = \set {1, 2, 3, 4, 5, 6}$.

Let $\RR \subset S \times S$ be a relation on $S$ defined as:

$\RR = \set {\tuple {1, 1}, \tuple {1, 2}, \tuple {1, 3}, \tuple {2, 1}, \tuple {2, 2}, \tuple {2, 3}, \tuple {3, 1}, \tuple {3, 2}, \tuple {3, 3}, \tuple {4, 4}, \tuple {4, 5}, \tuple {5, 4}, \tuple {5, 5}, \tuple {6, 6} }$

Then $\RR$ is an equivalence relation which partitions $S$ into:














\(\ds \eqclass 1 \RR\)

\(=\)







\(\ds \set {1, 2, 3}\)




















\(\ds \eqclass 4 \RR\)

\(=\)







\(\ds \set {4, 5}\)




















\(\ds \eqclass 6 \RR\)

\(=\)







\(\ds \set 6\)











Arbitrary Equivalence on Set of $6$ Elements: $2$
Let $S = \set {1, 2, 3, 4, 5, 6}$.

Let $\RR \subset S \times S$ be an equivalence relation on $S$ with the properties:














\(\ds 1\)

\(\RR\)







\(\ds 3\)




















\(\ds 3\)

\(\RR\)







\(\ds 4\)




















\(\ds 2\)

\(\RR\)







\(\ds 6\)
















\(\ds \forall a \in A: \, \)



\(\ds \size {\eqclass a \RR}\)

\(=\)







\(\ds 3\)










Then the equivalence classes of $\RR$ are:














\(\ds \eqclass 1 \RR\)

\(=\)







\(\ds \set {1, 3, 4}\)




















\(\ds \eqclass 2 \RR\)

\(=\)







\(\ds \set {2, 5, 6}\)











Also see
Relation Induced by Partition is Equivalence for the converse.


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 3$: Equivalence relations
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Relations: Theorem $6$
1959: E.M. Patterson: Topology (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Topological Spaces: $\S 10$. Equivalence Relations
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 7$: Relations
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.2$: Theorem $1.10$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.4$. Equivalence classes
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Theorem $10.1$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.3$: Theorem $5$ Part $\text{I}$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1.4$: Decomposition of a set into classes. Equivalence relations: Theorem $4$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.4$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.8$: Quotient spaces
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.3$: Equivalence Relations: Theorem $\text{A}.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 17.5$: Equivalence classes
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.5$ Relations: Equivalence Relations
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.4$: Equivalence relations
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.5$: Relations: Exercise $1.5.2$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $2$: Maps and relations on sets: Proposition $2.29$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions: Exercise $10 \ \text {(a)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Equivalence Relations
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): $\S 2.3$: Relations: Theorem $2.3.1$
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 3.4$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): equivalence relation
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): partition (of a set)




