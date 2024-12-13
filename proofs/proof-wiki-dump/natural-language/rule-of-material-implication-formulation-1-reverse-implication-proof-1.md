# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_1/Reverse_Implication/Proof_1

Theorem
$\neg p \lor q \vdash p \implies q$


Proof
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


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Example $1.20$




