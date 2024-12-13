# 

Source: https://proofwiki.org/wiki/Principle_of_Dilemma/Formulation_1/Forward_Implication/Proof_1

Theorem
$\paren {p \implies q} \land \paren {\neg p \implies q} \vdash q$


Proof
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

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





