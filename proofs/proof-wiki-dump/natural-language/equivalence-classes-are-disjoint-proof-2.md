# 

Source: https://proofwiki.org/wiki/Equivalence_Classes_are_Disjoint/Proof_2

Theorem
Let $\RR$ be an equivalence relation on a set $S$.

Then all $\RR$-classes are pairwise disjoint:

$\tuple {x, y} \notin \RR \iff \eqclass x \RR \cap \eqclass y \RR = \O$


Proof
Suppose that for $x, y \in S$:

$\eqclass x \RR \cap \eqclass y \RR \ne \O$
Let:

$z \in \eqclass x \RR$
$z \in \eqclass y \RR$
Then by definition of equivalence class:

$\tuple {x, z} \in \RR$
$\tuple {y, z} \in \RR$

Let $c \in \eqclass x \RR$.
That is:

$\tuple {x, c} \in \RR$
By definition of equivalence relation, $\RR$ is symmetric so:

$\tuple {z, x} \in \RR$
By definition of equivalence relation, $\RR$ is transitive so:

$\tuple {z, x} \in \RR \land \tuple {x, c} \in \RR \implies \tuple {z, c} \in \RR$
and

$\tuple {y, z} \in \RR \land \tuple {z, c} \in \RR \implies \tuple {y, c} \in \RR$
So we have $c \in \eqclass y \RR$.
By definition of subset:

$\eqclass x \RR \subseteq \eqclass y \RR$

Similarly, let $c \in \eqclass y \RR$.
That is:

$\tuple {y, c} \in \RR$
By definition of equivalence relation, $\RR$ is symmetric so:

$\tuple {z, y} \in \RR$
By definition of equivalence relation, $\RR$ is transitive so:

$\tuple {z, y} \in \RR \land \tuple {y, c} \in \RR \implies \tuple {z, c} \in \RR$
and

$\tuple {x, z} \in \RR \land \tuple {z, c} \in \RR \implies \tuple {x, c} \in \RR$
So we have $c \in \eqclass x \RR$.
By definition of subset:

$\eqclass y \RR \subseteq \eqclass x \RR$

That is:

$\eqclass x \RR \subseteq \eqclass y \RR$
and

$\eqclass y \RR \subseteq \eqclass x \RR$
By definition of set equality:

$\eqclass x \RR = \eqclass y \RR$

Thus:

$\eqclass x \RR \cap \eqclass y \RR \ne \O \implies \eqclass x \RR = \eqclass y \RR$
and the result follows.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Relations: Theorem $4$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.3 \ (3)$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: Exercises: $1.8$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Lemma $3.1$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Equivalence Relations




