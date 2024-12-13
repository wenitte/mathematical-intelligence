# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Equivalence/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \iff q} \iff \paren {\paren {p \implies q} \land \paren {q \implies p} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \iff q} \iff \paren {\paren {p \implies q} \land \paren {q \implies p} } $


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

$\paren {\paren {p \implies q} \land \paren {q \implies p} }$

Sequent Introduction

1

Rule of Material Equivalence: Formulation 1


3




$\paren {p \iff q} \implies \paren {\paren {p \implies q} \land \paren {q \implies p} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \implies q} \land \paren {q \implies p}$

Assumption

(None)




5


4

$p \iff q$

Sequent Introduction

4

Rule of Material Equivalence: Formulation 1


6




$\paren {\paren {p \implies q} \land \paren {q \implies p} } \implies \paren {p \iff q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \iff q} \iff \paren {\paren {p \implies q} \land \paren {q \implies p} }$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$




