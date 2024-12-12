# 

Source: https://proofwiki.org/wiki/Conjunction_with_Negative_is_Equivalent_to_Negation_of_Conditional/Formulation_1/Reverse_Implication

Theorem
$\neg \paren {p \implies q} \vdash p \land \neg q$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \implies q} \vdash p \land \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \implies q}$

Premise

(None)




2


2

$\neg \paren {p \land \neg q}$

Assumption

(None)




3


2

$p \implies q$

Sequent Introduction

2

Conditional is Equivalent to Negation of Conjunction with Negative


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1




5


1

$p \land \neg q$

Reductio ad Absurdum

2 – 4

Assumption 2 has been discharged

$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Reductio ad Absurdum.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





