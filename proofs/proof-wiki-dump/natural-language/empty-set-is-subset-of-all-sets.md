# 

Source: https://proofwiki.org/wiki/Empty_Set_is_Subset_of_All_Sets



Theorem
The empty set $\O$ is a subset of every set (including itself).
That is:

$\forall S: \O \subseteq S$


Proof 1
By the definition of subset, $\O \subseteq S$ means:

$\forall x: \paren {x \in \O \implies x \in S}$
By the definition of the empty set:

$\forall x: \neg \paren {x \in \O}$
Thus $\O \subseteq S$ is vacuously true.
$\blacksquare$


Proof 2
$S \subseteq T$ means:

every element of $S$ is also in $T$
or, equivalently:

every element that is not in $T$ is not in $S$ either.

Thus:














\(\ds \)

\(\)







\(\ds S \subseteq T\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \forall x \in S: x \in T\)





Definition of Subset














\(\ds \)

\(\leadstoandfrom\)







\(\ds \neg \paren {\exists x \in S: \neg \paren {x \in T} }\)





De Morgan's Laws (Predicate Logic)



which means there is no element in $S$ which is not also in $T$.

There are no elements of $\O$, from the definition of the empty set.
Therefore $\O$ has no elements that are not also in any other set.
Thus, from the above, all elements of $\O$ are all (vacuously) in every other set.
$\blacksquare$


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Subsets and Complements; Union and Intersection
1961: John G. Hocking and Gail S. Young: Topology ... (previous) ... (next): A Note on Set-Theoretic Concepts
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.1$
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $1$. Elementary Operations on Sets
1965: A.M. Arthurs: Probability Theory ... (previous) ... (next): Chapter $1$: Set Theory: $1.2$: Sets and subsets
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.2$. Sets
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{B ii}$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $1$ Set Theory: $1$. Sets and Functions: $1.1$: Basic definitions
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 3$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.3$: Subsets: Remark $3.3$
1971: Patrick J. Murphy and Albert F. Kempf: The New Mathematics Made Simple (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets: Subsets
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 2$: Sets and functions: Sets
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 2$: Sets and Subsets
1991: Richard S. Millman and George D. Parker: Geometry: A Metric Approach with Models (2nd ed.) ... (previous) ... (next): $\S 1.2$: Sets and Equivalence Relations
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.5 \ \text{(iv)}$
1993: Richard J. Trudeau: Introduction to Graph Theory ... (previous) ... (next): $2$. Graphs: Sets
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): null set (empty set)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): null set (empty set)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): subset (i)




