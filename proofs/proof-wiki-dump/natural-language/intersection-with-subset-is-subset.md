# 

Source: https://proofwiki.org/wiki/Intersection_with_Subset_is_Subset



Theorem
$S \subseteq T \iff S \cap T = S$
where:

$S \subseteq T$ denotes that $S$ is a subset of $T$
$S \cap T$ denotes the intersection of $S$ and $T$.


Proof 1
Let $S \cap T = S$.
Then by the definition of set equality, $S \subseteq S \cap T$.
Thus:














\(\ds S \cap T\)

\(\subseteq\)







\(\ds T\)





Intersection is Subset








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds T\)





Subset Relation is Transitive




Now let $S \subseteq T$.
From Intersection is Subset we have $S \supseteq S \cap T$.
We also have:














\(\ds S\)

\(\subseteq\)







\(\ds T\)














\(\ds \leadsto \ \ \)





\(\ds S \cap S\)

\(\subseteq\)







\(\ds T \cap S\)





Set Intersection Preserves Subsets








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds S \cap T\)





Set Intersection is Idempotent and Intersection is Commutative




So as we have:














\(\ds S \cap T\)

\(\subseteq\)







\(\ds S\)




















\(\ds S \cap T\)

\(\supseteq\)







\(\ds S\)









it follows from the definition of set equality that:

$S \cap T = S$

So we have:














\(\ds S \cap T = S\)

\(\implies\)







\(\ds S \subseteq T\)




















\(\ds S \subseteq T\)

\(\implies\)







\(\ds S \cap T = S\)









and so:

$S \subseteq T \iff S \cap T = S$
from the definition of equivalence.
$\blacksquare$


Proof 2













\(\ds \)

\(\)







\(\ds S \cap T = S\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \paren {x \in S \land x \in T \iff x \in S}\)





Definition of Set Equality








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \paren {x \in S  \implies x \in T}\)





Conditional iff Biconditional of Antecedent with Conjunction








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds S \subseteq T\)





Definition of Subset



$\blacksquare$


Also see
Union with Superset is Superset


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Subsets and Complements; Union and Intersection: Theorem $1$
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 4$: Unions and Intersections
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 9$
1964: William K. Smith: Limits and Continuity ... (previous) ... (next): $\S 2.1$: Sets: Exercise $\text{B} \ 1 \ \text{(a), (b)}$
1965: A.M. Arthurs: Probability Theory ... (previous) ... (next): Chapter $1$: Exercise $1 \ \text {(d)}$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $1$. Sets: Exercise $2$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.3 \ \text{(c)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{B iv}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 5 \ \text{(d)}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.6$: Set Identities and Other Set Relations: Exercise $1 \ \text{(c)}$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 3$: Set Operations: Union, Intersection and Complement: Exercise $1 \ \text{(b)}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 7.3 \ \text {(ii)}$: Unions and Intersections
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.1 \ \text{(vii)}$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): Appendix $\text{A}.2$: Theorem $\text{A}.11$




