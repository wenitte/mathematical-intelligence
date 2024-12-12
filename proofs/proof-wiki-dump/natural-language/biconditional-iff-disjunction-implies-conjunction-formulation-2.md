# 

Source: https://proofwiki.org/wiki/Biconditional_iff_Disjunction_implies_Conjunction/Formulation_2

Theorem
$\vdash \paren {p \iff q} \iff \paren {\paren {p \lor q} \implies \paren {p \land q} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \iff q} \iff \paren {\paren {p \lor q} \implies \paren {p \land q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Assumption

(None)




2


1

$\paren {p \lor q} \implies \paren {p \land q}$

Sequent Introduction

1

Biconditional iff Disjunction implies Conjunction: Formulation 1


3




$\paren {p \iff q} \implies \paren {\paren {p \lor q} \implies \paren {p \land q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \lor q} \implies \paren {p \land q}$

Assumption

(None)




5


4

$p \iff q$

Sequent Introduction

4

Biconditional iff Disjunction implies Conjunction: Formulation 1


6




$\paren {\paren {p \lor q} \implies \paren {p \land q} } \implies \paren {p \iff q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \iff q} \iff \paren {\paren {p \lor q} \implies \paren {p \land q} }$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$




