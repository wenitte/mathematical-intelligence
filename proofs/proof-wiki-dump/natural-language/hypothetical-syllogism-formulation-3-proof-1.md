# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_3/Proof_1

Theorem
$\vdash \paren {\paren {p \implies q} \land \paren {q \implies r} } \implies \paren {p \implies r}$


Proof
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


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T26}$




