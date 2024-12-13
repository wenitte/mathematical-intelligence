# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_1/Reverse_Implication

Theorem
$\neg p \lor q \vdash p \implies q$


Proof 1
By the tableau method of natural deduction:


$\neg p \lor q \vdash p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \lor q$

Premise

(None)




2


2

$\neg p$

Assumption

(None)

Pick the first of the disjuncts ...


3


3

$p$

Assumption

(None)

Assume its negation ...


4


2, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 2

... and demonstrate a contradiction


5


2, 3

$q$

Rule of Explosion: $\bot \EE$

4

... from a falsehood, any statement can be derived - pick $q$


6


2

$p \implies q$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged


7


7

$q$

Assumption

(None)

Pick the second of the disjuncts ...


8


8

$p$

Assumption

(None)

... again assume $p$ ...


9


7

$q$

Law of Identity

7

The truth of $q$ still holds


10


7

$p \implies q$

Rule of Implication: $\implies \II$

8 – 9

Assumption 8 has been discharged


11


1

$p \implies q$

Proof by Cases: $\text{PBC}$

1, 2 – 6, 7 – 10

Assumptions 2 and 7 have been discharged

$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$\neg p \lor q \vdash p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \lor q$

Premise

(None)




2


1

$\neg \paren {\neg \neg p \land \neg q}$

Sequent Introduction

1

De Morgan's Laws: Disjunction


3


1

$\neg \neg p \implies q$

Sequent Introduction

2

Conditional is Equivalent to Negation of Conjunction with Negative: $\neg \paren {p \land \neg q} \vdash p \implies q$


4


4

$p$

Assumption

(None)




5


4

$\neg \neg p$

Double Negation Introduction: $\neg \neg \II$

4




6


1, 4

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 5




7


1

$p \implies q$

Rule of Implication: $\implies \II$

4 – 6

Assumption 4 has been discharged
$\blacksquare$




