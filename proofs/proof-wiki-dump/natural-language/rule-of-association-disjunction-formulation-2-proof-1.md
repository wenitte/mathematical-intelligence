# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Disjunction/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \paren {q \lor r}$

Assumption

(None)




2


1

$\paren {p \lor q} \lor r$

Sequent Introduction

1

Rule of Association: Formulation 1


3




$\paren {p \lor \paren {q \lor r} } \implies \paren {\paren {p \lor q} \lor r}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \lor q} \lor r$

Assumption

(None)




5


4

$p \lor \paren {q \lor r}$

Sequent Introduction

4

Rule of Association: Formulation 1


6




$\paren {\paren {p \lor q} \lor r} \implies \paren {p \lor \paren {q \lor r} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \lor \paren {q \lor r} } \iff \paren {\paren {p \lor q} \lor r}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$





