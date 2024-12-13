# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Left_Distributive/Formulation_2/Forward_Implication

Theorem
$\vdash \paren {p \land \paren {q \lor r} } \implies \paren {\paren {p \land q} \lor \paren {p \land r} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \land \paren {q \lor r} } \implies \paren {\paren {p \land q} \lor \paren {p \land r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \paren {q \lor r}$

Assumption

(None)




2


1

$\paren {\paren {p \land q} \lor \paren {p \land r} }$

Sequent Introduction

1

Conjunction is Left Distributive over Disjunction: Formulation 1


3




$\paren {p \land \paren {q \lor r} } \implies \paren {\paren {p \land q} \lor \paren {p \land r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$





