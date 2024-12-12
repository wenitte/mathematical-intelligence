# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Residue_Classes

Theorem
Let $m \in \Z_{>0}$ be a (strictly) positive integer.
Let $\Z_m$ be the set of residue classes modulo $m$.

Then:

$\card {Z_m} = m$
where $\card {\, \cdot \,}$ denotes cardinality.


Proof
By definition of the set of residue classes modulo $m$, $Z_m$ is the quotient set of congruence modulo $m$:

$\Z_m = \dfrac \Z {\RR_m}$
where $\RR_m$ is the congruence relation modulo $m$ on the set of all $a, b \in \Z$:

$\RR_m = \set {\tuple {a, b} \in \Z \times \Z: \exists k \in \Z: a = b + k m}$

Thus by definition $\Z_m$ is the set of residue classes modulo $m$:

$\Z_m = \set {\eqclass 0 m, \eqclass 1 m, \ldots, \eqclass {m - 1} m}$
Hence:














\(\ds \card {\Z_m}\)

\(=\)







\(\ds \card {\set {0, 1, \ldots, m - 1} }\)




















\(\ds \)

\(=\)







\(\ds m\)









$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.3$: Equivalence Relations: Problem Set $\text{A}.3$: $18$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 18.3$: Congruence classes
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.5$ Relations: Equivalence Relations: Example $1.4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): congruence class
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): congruence class (residue class)




