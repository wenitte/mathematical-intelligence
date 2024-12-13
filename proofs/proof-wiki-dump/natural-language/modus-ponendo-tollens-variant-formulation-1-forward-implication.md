# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Tollens/Variant/Formulation_1/Forward_Implication

Theorem
$\neg \paren {p \land q} \vdash p \implies \neg q$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \land q} \vdash p \implies \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \land q}$

Premise

(None)




2


2

$p$

Assumption

(None)




3


3

$q$

Assumption

(None)




4


2, 3

$p \land q$

Rule of Conjunction: $\land \II$

2, 3




5


1, 2, 5

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 1




6


1, 2

$\neg q$

Proof by Contradiction: $\neg \II$

3 – 5

Assumption 3 has been discharged


7


1

$p \implies \neg q$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$





