# 

Source: https://proofwiki.org/wiki/Biconditional_as_Disjunction_of_Conjunctions/Formulation_1/Forward_Implication

Theorem
$p \iff q \vdash \left({p \land q}\right) \lor \left({\neg p \land \neg q}\right)$


Proof
By the tableau method of natural deduction:


$p \iff q \vdash \left({p \land q}\right) \lor \left({\neg p \land \neg q}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


1

$p \implies q$

Biconditional Elimination: $\iff \EE_1$

1




3


1

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

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


1, 5

$p \land q$

Rule of Conjunction: $\land \II$

5, 6




8


1, 5

$\left({p \land q}\right) \lor \left({\neg p \land \neg q}\right)$

Rule of Addition: $\lor \II_1$

7




9


9

$\neg p$

Assumption

(None)




10


1, 9

$\neg q$

Modus Tollendo Tollens (MTT)

3, 9




11


1, 9

$\neg p \land \neg q$

Rule of Conjunction: $\land \II$

9, 10




12


1, 9

$\left({p \land q}\right) \lor \left({\neg p \land \neg q}\right)$

Rule of Addition: $\lor \II_2$

11




13


1

$\left({p \land q}\right) \lor \left({\neg p \land \neg q}\right)$

Proof by Cases: $\text{PBC}$

1, 5 – 8, 9 – 12

Assumptions 5 and 9 have been discharged

$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





