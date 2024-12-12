# 

Source: https://proofwiki.org/wiki/Biconditional_as_Disjunction_of_Conjunctions/Formulation_1/Reverse_Implication

Theorem
$\left({p \land q}\right) \lor \left({\neg p \land \neg q}\right) \vdash p \iff q$


Proof
By the tableau method of natural deduction:


$\left({p \land q}\right) \lor \left({\neg p \land \neg q}\right) \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\left({p \land q}\right) \lor \left({\neg p \land \neg q}\right)$

Premise

(None)




2


2

$p \land q$

Assumption

(None)




3


3

$p$

Assumption

(None)




4


2

$q$

Rule of Simplification: $\land \EE_2$

2




5


2

$p \implies q$

Rule of Implication: $\implies \II$

3 – 4

Assumption 3 has been discharged


6


6

$q$

Assumption

(None)




7


2

$p$

Rule of Simplification: $\land \EE_1$

2




8


2

$q \implies p$

Rule of Implication: $\implies \II$

6 – 7

Assumption 6 has been discharged


9


2

$p \iff q$

Biconditional Introduction: $\iff \II$

5, 8




10


10

$\neg p \land \neg q$

Assumption

(None)




11


11

$\neg p$

Assumption

(None)




12


10

$\neg q$

Rule of Simplification: $\land \EE_2$

10




13


10

$\neg p \implies \neg q$

Rule of Implication: $\implies \II$

11 – 12

Assumption 11 has been discharged


14


10

$q \implies p$

Sequent Introduction

13

Rule of Transposition


15


15

$\neg q$

Assumption

(None)




16


10

$\neg p$

Rule of Simplification: $\land \EE_1$

10




17


10

$\neg q \implies \neg p$

Rule of Implication: $\implies \II$

15 – 16

Assumption 15 has been discharged


18


10

$p \implies q$

Sequent Introduction

17

Rule of Transposition


19


10

$p \iff q$

Biconditional Introduction: $\iff \II$

18, 14




20


1

$p \iff q$

Proof by Cases: $\text{PBC}$

1, 2 – 9, 10 – 19

Assumptions 2 and 10 have been discharged

$\blacksquare$





