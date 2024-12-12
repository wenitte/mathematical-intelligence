# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction_of_Negations/Formulation_1/Reverse_Implication

Theorem
$\neg \paren {p \lor q} \vdash \neg p \land \neg q$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \lor q} \vdash \neg p \land \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \lor q}$

Premise

(None)




5


5

$p$

Assumption

(None)




3


2

$p \lor q$

Rule of Addition: $\lor \II_1$

2




4


1, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1




5


1

$\neg p$

Proof by Contradiction: $\neg \II$

2 – 4

Assumption 2 has been discharged


6


6

$q$

Assumption

(None)




7


6

$p \lor q$

Rule of Addition: $\lor \II_2$

6




8


1, 7

$\bot$

Principle of Non-Contradiction: $\neg \EE$

7, 1




9


1

$\neg q$

Proof by Contradiction: $\neg \II$

6 – 8

Assumption 6 has been discharged


10


1

$\neg p \land \neg q$

Rule of Conjunction: $\land \II$

5, 9


$\blacksquare$




