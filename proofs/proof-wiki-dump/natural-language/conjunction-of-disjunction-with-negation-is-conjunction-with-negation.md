# 

Source: https://proofwiki.org/wiki/Conjunction_of_Disjunction_with_Negation_is_Conjunction_with_Negation

Theorem
$\paren {p \lor q} \land \neg q \dashv \vdash p \land \neg q$


Proof
By the tableau method of natural deduction:


$p \land \neg q \vdash \paren {p \lor q} \land \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \neg q$

Premise

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$p \lor q$

Rule of Addition: $\lor \II_1$

2




4


1

$\neg q$

Rule of Simplification: $\land \EE_2$

1




5


1

$\paren {p \lor q} \land \neg q$

Rule of Conjunction: $\land \II$

3, 4


$\Box$

and its converse:
By the tableau method of natural deduction:


$\paren {p \lor q} \land \neg q \vdash p \land \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \land \neg q$

Premise

(None)




2


1

$\paren {p \land \neg q} \lor \paren {q \land \neg q}$

Sequent Introduction

1

Conjunction Distributes over Disjunction


3


3

$q \land \neg q$

Assumption

(None)




4


3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 3




5




$\neg \paren {q \land \neg q}$

Proof by Contradiction: $\neg \II$

3 – 4

Assumption 3 has been discharged


6


1

$p \land \neg q$

Sequent Introduction

2, 5

Disjunctive Syllogism
$\blacksquare$




