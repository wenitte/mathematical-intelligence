# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Variant/Formulation_1/Forward_Implication

Theorem
$p \lor q \vdash \neg p \implies q$


Proof
By the tableau method of natural deduction:


$p \lor q \vdash \neg p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Premise

(None)




2


2

$p$

Assumption

(None)

Pick the first of the disjuncts ...


3


3

$\neg p$

Assumption

(None)

Assume its negation ...


4


2, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 3

... which introduces a contradiction


5


2, 3

$q$

Rule of Explosion: $\bot \EE$

4

... from a falsehood, any statement can be derived - pick $q$


6


2

$\neg p \implies q$

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

$\neg p$

Assumption

(None)

... again assume the negation of $p$


9


7

$q$

Law of Identity

7

$q$ still holds


10


7

$\neg p \implies q$

Rule of Implication: $\implies \II$

8 – 9

Assumption 8 has been discharged


11


1

$\neg p \implies q$

Proof by Cases: $\text{PBC}$

1, 2 – 6, 7 – 10

Assumptions 2 and 7 have been discharged

$\blacksquare$





