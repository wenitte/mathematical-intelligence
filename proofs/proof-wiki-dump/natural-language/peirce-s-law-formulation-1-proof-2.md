# 

Source: https://proofwiki.org/wiki/Peirce%27s_Law/Formulation_1/Proof_2

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
This theorem depends on the Law of the Excluded Middle, by way of Reductio ad Absurdum.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





