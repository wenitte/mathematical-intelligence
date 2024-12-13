# 

Source: https://proofwiki.org/wiki/Principle_of_Dilemma/Formulation_1/Forward_Implication



Theorem
$\paren {p \implies q} \land \paren {\neg p \implies q} \vdash q$


Proof 1
By the tableau method of natural deduction:


$\left({p \implies q}\right) \land \left({\neg p \implies q}\right) \vdash q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\left({p \implies q}\right) \land \left({\neg p \implies q}\right)$

Premise

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$\neg p \implies q$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \lor \neg p \implies q \lor q$

Sequent Introduction

2, 3

Constructive Dilemma


5




$p \lor \neg p$

Law of Excluded Middle

(None)




6


1

$q \lor q$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 5




7


1

$q$

Sequent Introduction

6

Rule of Idempotence: Disjunction

$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$\left({p \implies q}\right) \land \left({\neg p \implies q}\right) \vdash q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\left({p \implies q}\right) \land \left({\neg p \implies q}\right)$

Premise

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$\neg p \implies q$

Rule of Simplification: $\land \EE_2$

1




4




$p \lor \neg p$

Law of Excluded Middle

(None)




5


5

$p$

Assumption

(None)




6


1, 5

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 5




7


7

$\neg p$

Assumption

(None)




8


1, 7

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 7




9


1

$q$

Proof by Cases: $\text{PBC}$

4, 5 – 6, 7 – 8

Assumptions 5 and 7 have been discharged

$\blacksquare$


Proof 3
From the Constructive Dilemma we have:

$p \implies q, r \implies s \vdash p \lor r \implies q \lor s$
from which, changing the names of letters strategically:

$p \implies q, \neg p \implies q \vdash p \lor \neg p \implies q \lor q$
From Law of Excluded Middle, we have:

$\vdash p \lor \neg p$
From the Rule of Idempotence we have:

$q \lor q \vdash q$
and the result follows by Hypothetical Syllogism.
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 3$: Exercises, Group $\text{I}: \ 15$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.12$: Valid Arguments




