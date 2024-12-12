# 

Source: https://proofwiki.org/wiki/Disjunction_of_Conditional_and_Converse/Proof_1



Theorem
$\vdash \paren {p \implies q} \lor \paren {q \implies p}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \lor \paren {q \implies p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$p \lor \neg p$

Law of Excluded Middle

(None)




2


2

$p$

Assumption

(None)




3


2

$q \implies p$

Sequent Introduction

2

True Statement is implied by Every Statement


4


2

$\paren {p \implies q} \lor \paren {q \implies p}$

Rule of Addition: $\lor \II_2$

2




5


5

$\neg p$

Assumption

(None)




6


5

$p \implies q$

Sequent Introduction

5

False Statement implies Every Statement


7


5

$\paren {p \implies q} \lor \paren {q \implies p}$

Rule of Addition: $\lor \II_1$

7




8




$\paren {p \implies q} \lor \paren {q \implies p}$

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
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $54$




