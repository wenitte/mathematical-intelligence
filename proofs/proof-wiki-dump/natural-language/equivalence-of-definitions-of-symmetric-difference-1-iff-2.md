# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Symmetric_Difference/(1)_iff_(2)



Theorem
Let $S$ and $T$ be sets.
The following definitions of the concept of symmetric difference $S \symdif T$ between $S$ and $T$ are equivalent:

Definition 1
$S \symdif T := \paren {S \setminus T} \cup \paren {T \setminus S}$
Definition 2
$S \symdif T = \paren {S \cup T} \setminus \paren {S \cap T}$


Proof













\(\ds S \symdif T\)

\(=\)







\(\ds \paren {S \setminus T} \cup \paren {T \setminus S}\)





Definition 1 of Symmetric Difference














\(\ds \)

\(=\)







\(\ds \paren {\paren {S \cup T} \setminus T} \cup \paren {\paren {S \cup T} \setminus S}\)





Set Difference with Union is Set Difference














\(\ds \)

\(=\)







\(\ds \paren {S \cup T} \setminus \paren {T \cap S}\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {S \cup T} \setminus \paren {S \cap T}\)





Intersection is Commutative



$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 8 \ \text{(g)}$
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1$: Sets and Functions: Problem $4 \ \text{(b)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 8 \alpha$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Exercise $14$




