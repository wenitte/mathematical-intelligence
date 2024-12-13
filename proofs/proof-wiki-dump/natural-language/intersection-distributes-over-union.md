# 

Source: https://proofwiki.org/wiki/Intersection_Distributes_over_Union



Theorem
Set intersection is distributive over set union:

$R \cap \paren {S \cup T} = \paren {R \cap S} \cup \paren {R \cap T}$


Family of Sets
Let $I$ be an indexing set.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ be a indexed family of subsets of a set $S$.
Let $B \subseteq S$.

Then:

$\ds \map {\bigcup_{\alpha \mathop \in I} } {A_\alpha \cap B} = \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap B$
where $\ds \bigcup_{\alpha \mathop \in I} A_\alpha$ denotes the union of $\family {A_\alpha}_{\alpha \mathop \in I}$.


General Result
Let $S$ and $T$ be sets.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T$ be a subset of $\powerset T$.

Then:

$\ds S \cap \bigcup \mathbb T = \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$


Proof













\(\ds \)

\(\)







\(\ds x \in R \cap \paren {S \cup T}\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in R \land \paren {x \in S \lor x \in T}\)





Definition of Set Union and Definition of Set Intersection














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in R \land x \in S} \lor \paren {x \in R \land x \in T}\)





Conjunction is Left Distributive over Disjunction














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \paren {R \cap S} \cup \paren {R \cap T}\)





Definition of Set Union and Definition of Set Intersection



$\blacksquare$


Demonstration by Venn Diagram
 
In the left hand diagram, $R$ is depicted in yellow and $S \cup T$ is depicted in blue.
Their intersection $R \cap \paren {S \cup T}$ where they overlap is depicted in green.

In the right hand diagram, $\paren {R \cap S}$ is depicted in yellow and $\paren {R \cap T}$ is depicted in blue.
Their intersection, where they overlap,  is depicted in green.
Their union is the total shaded area: yellow, blue and green.

As can be seen by inspection, the areas are the same.


Examples
$3$ Arbitrarily Chosen Sets
Let:














\(\ds A\)

\(=\)







\(\ds \set {3, -i, 4, 2 + i, 5}\)




















\(\ds B\)

\(=\)







\(\ds \set {-i, 0, -1, 2 + i}\)




















\(\ds C\)

\(=\)







\(\ds \set {- \sqrt 2 i, \dfrac 1 2, 3}\)











Intersection with Union













\(\ds A \cap \paren {B \cup C}\)

\(=\)







\(\ds \set {3, -i, 4, 2 + i, 5} \cap \set {-i, 0, -\sqrt 2 i, -1, 2 + i, \dfrac 1 2, 3}\)




















\(\ds \)

\(=\)







\(\ds \set {3, -i, 2 + i}\)











Union of Intersections













\(\ds \paren {A \cap B} \cup \paren {A \cap C}\)

\(=\)







\(\ds \set {-i, 2 + i} \cup \set 3\)




















\(\ds \)

\(=\)







\(\ds \set {3, -i, 2 + i}\)










Thus it is seen that:

$A \cap \paren {B \cup C} = \paren {A \cap B} \cup \paren {A \cap C}$


Arbitrary Integer Sets
Let:














\(\ds A\)

\(=\)







\(\ds \set {2, 4, 6, 8, \dotsc}\)




















\(\ds B\)

\(=\)







\(\ds \set {1, 3, 5, 7, \dotsc}\)




















\(\ds C\)

\(=\)







\(\ds \set {1, 2, 3, 4}\)









Then:

$\paren {A \cup B} \cap C = \set {1, 2, 3, 4} = \paren {A \cap C} \cup \paren {B \cap C}$


Also known as
The result Intersection Distributes over Union, along with Union Distributes over Intersection, are together known as:

the distributive laws (of set theory)
the distributive properties (of set theory).


Also see
Union Distributes over Intersection
Class Intersection Distributes over Class Union


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Subsets and Complements; Union and Intersection: Theorem $2 \ \text{(d)}$
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 4$: Unions and Intersections
1961: John G. Hocking and Gail S. Young: Topology ... (previous) ... (next): A Note on Set-Theoretic Concepts: $(3)$
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 8 \ \text{(e)}$
1965: A.M. Arthurs: Probability Theory ... (previous) ... (next): Chapter $1$: Set Theory: $1.3$: Set operations
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.5$. The algebra of sets: Example $17$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Theorem $3.1$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $1$ Set Theory: $1$. Sets and Functions: $1.2$: Operations on sets: $(1)$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 7 \ \text{(b)}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.6$: Set Identities and Other Set Relations: Theorem $6.2$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: $\text{(d)}$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets: Exercise $2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 7.4 \ \text{(i)}$: Unions and Intersections
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Point Sets: $122 \ \text{(e)}$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.2$: Sets: Exercise $1 \ \text{(vii)}$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.2$: Operations on Sets: Exercise $1.2.1 \ \text{(vi)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 1$: Fundamental Concepts
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): $\S 2$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): distributive
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): Appendix $\text{A}.2$: Theorem $\text{A}.10$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): algebra of sets: $\text {(vi)}$




