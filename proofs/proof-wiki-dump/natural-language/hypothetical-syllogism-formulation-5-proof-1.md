# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_5/Proof_1

Theorem
$\vdash \paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$


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










From Hypothetical Syllogism: Formulation 3 we have:

$(1): \quad \vdash \paren {\paren {p \implies q} \land \paren {q \implies r} } \implies \paren {p \implies r}$

By the tableau method of natural deduction:


$\paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\psi \land \phi$

Assumption

(None)




2


1

$\phi \land \psi$

Sequent Introduction

1

Conjunction is Commutative


3


1

$\chi$

Sequent Introduction

2

Hypothetical Syllogism: Formulation 3 (see $(1)$ above)


4




$\paren {\psi \land \phi} \implies \chi$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged


5




$\psi \implies \paren {\phi \implies \chi}$

Sequent Introduction

4

Rule of Exportation


Expanding the abbreviations leads us back to:

$\vdash \paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$
$\blacksquare$





