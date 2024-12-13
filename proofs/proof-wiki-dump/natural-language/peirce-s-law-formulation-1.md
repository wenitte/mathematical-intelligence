# 

Source: https://proofwiki.org/wiki/Peirce%27s_Law/Formulation_1



Theorem
$\paren {p \implies q} \implies p \vdash p$


Proof 1
By the tableau method of natural deduction:


$\paren {p \implies q} \implies p \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \implies p$

Premise

(None)




2




$p \lor \neg p$

Law of Excluded Middle

(None)




3


3

$\neg p$

Assumption

(None)




4


3

$p \implies q$

Sequent Introduction

3

False Statement implies Every Statement


5


1, 3

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 4




6


6

$p$

Assumption

(None)




7


1

$p$

Proof by Cases: $\text{PBC}$

2, 3 – 5, 6 – 6

Assumptions 3 and 6 have been discharged
$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$\paren {p \implies q} \implies p \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \implies p$

Premise

(None)




2


2

$\neg p$

Assumption

(None)




3


2

$p \implies q$

Sequent Introduction

2

False Statement implies Every Statement


4


1,2

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1,2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 4




6


1

$p$

Reductio ad Absurdum

2 – 5

Assumption 2 has been discharged
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Source of Name
This entry was named for Charles Sanders Peirce.





