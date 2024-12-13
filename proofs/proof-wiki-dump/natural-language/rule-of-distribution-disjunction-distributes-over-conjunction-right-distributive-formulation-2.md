# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Right_Distributive/Formulation_2

Theorem
The disjunction operator is right distributive over the conjunction operator:

$\vdash \paren {\paren {q \land r} \lor p} \iff \paren {\paren {q \lor p} \land \paren {r \lor p} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\paren {q \land r} \lor p} \iff \paren {\paren {q \lor p} \land \paren {r \lor p} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {q \land r} \lor p$

Assumption

(None)




2


1

$\paren {q \lor p} \land \paren {r \lor p}$

Sequent Introduction

1

Conjunction is Right Distributive over Disjunction: Formulation 1


3




$\paren {\paren {q \land r} \lor p} \implies \paren {\paren {q \lor p} \land \paren {r \lor p} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {q \lor p} \land \paren {r \lor p}$

Assumption

(None)




5


4

$\paren {q \land r} \lor p$

Sequent Introduction

4

Conjunction is Right Distributive over Disjunction: Formulation 1


6




$\paren {\paren {q \lor p} \land \paren {r \lor p} } \implies \paren {\paren {q \land r} \lor p}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {\paren {q \land r} \lor p} \iff \paren {\paren {q \lor p} \land \paren {r \lor p} }$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$




