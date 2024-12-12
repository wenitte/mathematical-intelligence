# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Set_Equality



Theorem
The following definitions of the concept of Set Equality are equivalent:

Definition 1
$S$ and $T$ are equal if and only if they have the same elements:

$S = T \iff \paren {\forall x: x \in S \iff x \in T}$
Definition 2
$S$ and $T$ are equal if and only if both:

$S$ is a subset of $T$
and

$T$ is a subset of $S$


Proof
Definition 1 implies Definition 2
Let $S = T$ by Definition 1.
Then:














\(\ds S\)

\(=\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds \leftparen {x \in S}\)

\(\iff\)







\(\ds \rightparen {x \in T}\)





Definition of Set Equality








\(\ds \leadsto \ \ \)





\(\ds \leftparen {x \in S}\)

\(\implies\)







\(\ds \rightparen {x \in T}\)





Biconditional Elimination








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds T\)





Definition of Subset




Similarly:














\(\ds S\)

\(=\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds \leftparen {x \in S}\)

\(\iff\)







\(\ds \rightparen {x \in T}\)





Definition of Set Equality








\(\ds \leadsto \ \ \)





\(\ds \leftparen {x \in T}\)

\(\implies\)







\(\ds \rightparen {x \in S}\)





Biconditional Elimination








\(\ds \leadsto \ \ \)





\(\ds T\)

\(\subseteq\)







\(\ds S\)





Definition of Subset




Thus by the Rule of Conjunction:

$S \subseteq T \land T \subseteq S$
and so $S$ and $T$ are equal by Definition 2.
$\Box$


Definition 2 implies Definition 1
Let $S = T$ by Definition 2:

$S \subseteq T \land T \subseteq S$

First:














\(\ds S\)

\(\subseteq\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds \leftparen {x \in S}\)

\(\implies\)







\(\ds \rightparen {x \in T}\)





Definition of Subset



Then:














\(\ds T\)

\(\subseteq\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds \leftparen {x \in T}\)

\(\implies\)







\(\ds \rightparen {x \in S}\)





Definition of Subset




Thus by Biconditional Introduction:

$\forall x: \paren {x \in S \iff x \in T}$
and so $S$ and $T$ are equal by Definition 1.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Subsets and Complements; Union and Intersection
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 1$: The Axiom of Extension
1961: John G. Hocking and Gail S. Young: Topology ... (previous) ... (next): A Note on Set-Theoretic Concepts
1963: George F. Simmons: Introduction to Topology and Modern Analysis ... (previous) ... (next): $\S 1$: Sets and Set Inclusion
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.1$: Theorem $1.1$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.2$. Subsets
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 1$: The Language of Set Theory
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.2$. Sets
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $1$ Set Theory: $1$. Sets and Functions: $1.1$: Basic definitions
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 3$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Theorem $1.1 \ \text{(c)}$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.1$: Sets and Subsets
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 6.3$: Subsets
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.1$: What is a Set?: Exercise $1.1.2$




