# 

Source: https://proofwiki.org/wiki/Principle_of_Dilemma/Formulation_2/Forward_Implication

Theorem
$\vdash \paren {p \implies q} \land \paren {\neg p \implies q} \implies q$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \land \paren {\neg p \implies q} \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {\neg p \implies q}$

Assumption

(None)




2


1

$q$

Sequent Introduction

1

Principle of Dilemma: Formulation 1


3




$\paren {p \implies q} \land \paren {\neg p \implies q} \implies q$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \land \paren {\neg p \implies q} \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {\neg p \implies q}$

Assumption

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$\neg p \implies q$

Rule of Simplification: $\land \EE_2$

1




4


4

$\neg q$

Assumption

(None)




5


1, 4

$\neg p$

Modus Tollendo Tollens (MTT)

2, 4




6


1, 4

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 5




7


1, 4

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 6




8


1

$\neg \neg q$

Proof by Contradiction: $\neg \II$

4 – 7

Assumption 4 has been discharged


9


1

$q$

Double Negation Elimination: $\neg \neg \EE$

8




10




$\paren {p \implies q} \land \paren {\neg p \implies q} \implies q$

Rule of Implication: $\implies \II$

1 – 9

Assumption 1 has been discharged
$\blacksquare$




