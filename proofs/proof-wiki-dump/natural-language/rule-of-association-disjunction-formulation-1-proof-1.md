# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Disjunction/Formulation_1/Proof_1

Theorem
$p \lor \paren {q \lor r} \dashv \vdash \paren {p \lor q} \lor r$


Proof
By the tableau method of natural deduction:


$p \lor \paren {q \lor r} \vdash \paren {p \lor q} \lor r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \paren {q \lor r}$

Premise

(None)




2


2

$p$

Assumption

(None)

By assuming the first main disjunct ...


3


2

$p \lor q$

Rule of Addition: $\lor \II_1$

2




4


2

$\paren {p \lor q} \lor r$

Rule of Addition: $\lor \II_1$

3

... the conclusion is derived


5


5

$q \lor r$

Assumption

(None)

Then assume the second main disjunct ...


6


6

$q$

Assumption

(None)

... and by assuming the first disjunct of that second main disjunct ...


7


6

$p \lor q$

Rule of Addition: $\lor \II_2$

6




8


6

$\paren {p \lor q} \lor r$

Rule of Addition: $\lor \II_1$

7

... the conclusion is derived


9


9

$r$

Assumption

(None)

Then assume the second disjunct of that second main disjunct ...


10


9

$\paren {p \lor q} \lor r$

Rule of Addition: $\lor \II_2$

9

... and likewise the same conclusion is derived


11


5

$\paren {p \lor q} \lor r$

Proof by Cases: $\text{PBC}$

5, 6 – 8, 9 – 10

Assumptions 6 and 9 have been discharged


12


1

$\paren {p \lor q} \lor r$

Proof by Cases: $\text{PBC}$

1, 2 – 4, 5 – 11

Assumptions 2 and 5 have been discharged
$\Box$

By the tableau method of natural deduction:


$\paren {p \lor q} \lor r \vdash p \lor \paren {q \lor r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \lor r$

Premise

(None)




2


2

$p \lor q$

Assumption

(None)




3


3

$p$

Assumption

(None)




4


3

$p \lor \paren {q \lor r}$

Rule of Addition: $\lor \II_1$

3




5


5

$q$

Assumption

(None)




6


5

$q \lor r$

Rule of Addition: $\lor \II_1$

5




7


5

$p \lor \paren {q \lor r}$

Rule of Addition: $\lor \II_2$

6




8


2

$p \lor \paren {q \lor r}$

Proof by Cases: $\text{PBC}$

2, 3 – 4, 5 – 7

Assumptions 3 and 5 have been discharged


9


9

$r$

Assumption

(None)




10


9

$q \lor r$

Rule of Addition: $\lor \II_2$

9




11


9

$p \lor \paren {q \lor r}$

Rule of Addition: $\lor \II_2$

10




12


1

$p \lor \paren {q \lor r}$

Proof by Cases: $\text{PBC}$

1, 2 – 8, 9 – 11

Assumptions 2 and 9 have been discharged
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Example $1.17$




