# 

Source: https://proofwiki.org/wiki/Disjunction_of_Conditionals



Theorem
$\vdash \paren {p \implies q} \lor \paren {q \implies r}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \lor \paren {q \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$q \lor \neg q$

Law of Excluded Middle

(None)




2


2

$q$

Assumption

(None)




3


2

$p \implies q$

Sequent Introduction

2

True Statement is implied by Every Statement


4


2

$\paren {p \implies q} \lor \paren {q \implies r}$

Rule of Addition: $\lor \II_1$

3




5


5

$\neg q$

Assumption

(None)




6


5

$q \implies r$

Sequent Introduction

5

False Statement implies Every Statement


7


5

$\paren {p \implies q} \lor \paren {q \implies r}$

Rule of Addition: $\lor \II_2$

6




8




$\paren {p \implies q} \lor \paren {q \implies r}$

Proof by Cases: $\text{PBC}$

1, 2 – 4, 5 – 7

Assumptions 2 and 5 have been discharged
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T58}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 2 \ \text{(f)}$




