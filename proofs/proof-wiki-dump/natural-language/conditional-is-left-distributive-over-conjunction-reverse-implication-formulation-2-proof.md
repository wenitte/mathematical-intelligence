# 

Source: https://proofwiki.org/wiki/Conditional_is_Left_Distributive_over_Conjunction/Reverse_Implication/Formulation_2/Proof

Theorem
$\vdash \paren {\paren {p \implies q} \land \paren {p \implies r} } \implies \paren {p \implies \paren {q \land r} }$


Proof
Let us use the following abbreviations














\(\ds \phi\)

\(\text {for}\)







\(\ds \paren {p \implies q} \land \paren {p \implies r}\)




















\(\ds \psi\)

\(\text {for}\)







\(\ds p \implies \paren {q \land r}\)










By the tableau method of natural deduction:


$\paren {\paren {p \implies q} \land \paren {p \implies r} } \implies \paren {p \implies \paren {q \land r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\phi$

Assumption

(None)




2


1

$\psi$

Sequent Introduction

1

Conditional is Left Distributive over Conjunction: Formulation 1


3




$\phi \implies \psi$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


Expanding the abbreviations leads us back to:

$\paren {\paren {p \implies q} \land \paren {p \implies r} } \implies \paren {p \implies \paren {q \land r} }$
$\blacksquare$





