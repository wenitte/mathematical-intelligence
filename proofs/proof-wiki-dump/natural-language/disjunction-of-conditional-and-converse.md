# 

Source: https://proofwiki.org/wiki/Disjunction_of_Conditional_and_Converse



Theorem
Given any two statements, one of them implies the other.

$\vdash \paren {p \implies q} \lor \paren {q \implies p}$

That is, given any conditional, either it is true or its converse is.


Proof 1
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


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations, proving a tautology.

$\begin{array}{|ccccccc|} \hline
(p & \implies & q) & \lor & (q & \implies & p) \\
\hline
\F & \T & \F & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \F \\
\T & \F & \F & \T & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Also see
Smullyan's Drinking Principle
Paradoxes of Material Implication, in which category this result is sometimes grouped


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 2 \ \text{(e)}$




