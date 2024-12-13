# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Disjunction/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \lor q} \iff \paren {q \lor p}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \lor q} \iff \paren {q \lor p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Assumption

(None)




2


1

$q \lor p$

Sequent Introduction

1

Disjunction is Commutative


3




$\paren {p \lor q} \implies \paren {q \lor p}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$q \lor p$

Assumption

(None)




5


4

$p \lor q$

Sequent Introduction

4

Disjunction is Commutative


6




$\paren {q \lor p} \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \lor q} \iff \paren {q \lor p}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$





