# 

Source: https://proofwiki.org/wiki/Intersection_is_Subset



Theorem
The intersection of two sets is a subset of each:

$S \cap T \subseteq S$
$S \cap T \subseteq T$


General Result
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $\mathbb S \subseteq \powerset S$.

Then:

$\ds \forall T \in \mathbb S: \bigcap \mathbb S \subseteq T$


Family of Sets
In the context of a family of sets, the result can be presented as follows:

Let $\family {S_\alpha}_{\alpha \mathop \in I}$ be a family of sets indexed by $I$.

Then:

$\ds \forall \beta \in I: \bigcap_{\alpha \mathop \in I} S_\alpha \subseteq S_\beta$
where $\ds \bigcap_{\alpha \mathop \in I} S_\alpha$ is the intersection of $\family {S_\alpha}_{\alpha \mathop \in I}$.


Proof













\(\ds x\)

\(\in\)







\(\ds S \cap T\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds S \land x \in T\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds S\)





Rule of Simplification








\(\ds \leadsto \ \ \)





\(\ds S \cap T\)

\(\subseteq\)







\(\ds S\)





Definition of Subset




Similarly for $T$.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Subsets and Complements; Union and Intersection
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 8 \ \text{(f)}$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.3$. Intersection: Example $13$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 5$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 7$: Unions and Intersections
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.1 \ \text{(ii)}$




