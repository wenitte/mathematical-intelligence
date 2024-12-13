# 

Source: https://proofwiki.org/wiki/Peirce%27s_Law/Formulation_1/Proof_1

Theorem
$\paren {p \implies q} \implies p \vdash p$


Proof
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


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





