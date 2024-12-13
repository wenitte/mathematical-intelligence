# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_4/Proof_1

Theorem
$\vdash \paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$


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


$\paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {\phi \land \psi} \implies \chi$

Theorem Introduction

(None)

Hypothetical Syllogism: Formulation 3


2




$\phi \implies \paren {\psi \implies \chi}$

Sequent Introduction

1

Rule of Exportation

Expanding the abbreviations leads us back to:

$\vdash \paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$
$\blacksquare$





