# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_3



Theorem
$\vdash \paren {\paren {p \implies q} \land \paren {q \implies r} } \implies \paren {p \implies r}$


Proof 1
Let us use the following abbreviations














\(\ds \phi\)

\(\text{ for }\)







\(\ds p \implies q\)




















\(\ds \psi\)

\(\text{ for }\)







\(\ds q \implies r\)




















\(\ds \chi\)

\(\text{ for }\)







\(\ds p \implies r\)










By the tableau method of natural deduction:


$\paren {\paren {p \implies q} \land \paren {q \implies r} } \implies \paren {p \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\phi \land \psi$

Assumption

(None)




2


1

$\phi$

Rule of Simplification: $\land \EE_1$

1




3


1

$\psi$

Rule of Simplification: $\land \EE_2$

1




4


1

$\chi$

Sequent Introduction

2, 3

Hypothetical Syllogism: Formulation 1


5




$\paren {\phi \land \psi} \implies \chi$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged

Expanding the abbreviations leads us back to:

$\paren {\paren {p \implies q} \land \paren {q \implies r} } \implies \paren {p \implies r}$
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.

$\begin{array}{|ccccccc|c|ccc|} \hline
((p & \implies & q) & \land & (q & \implies & r)) & \implies & (p & \implies & r) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \T & \F & \T & \F \\
\F & \T & \F & \T & \F & \T & \T & \T & \F & \T & \T \\
\F & \T & \T & \T & \T & \F & \F & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \T & \F & \F \\
\T & \F & \F & \T & \F & \T & \T & \T & \T & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \T & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 19$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T26}$




