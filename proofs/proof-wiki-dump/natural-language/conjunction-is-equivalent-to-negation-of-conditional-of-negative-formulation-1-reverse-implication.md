# 

Source: https://proofwiki.org/wiki/Conjunction_is_Equivalent_to_Negation_of_Conditional_of_Negative/Formulation_1/Reverse_Implication

Theorem
$\neg \paren {p \implies \neg q} \vdash p \land q$


Proofs
By the tableau method of natural deduction:


$\neg \paren {p \implies \neg q} \vdash p \land q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \implies \neg q}$

Premise

(None)




2


2

$\neg \paren {p \land q}$

Assumption

(None)

Assume the negation of what is to be proved ...


3


2

$p \implies \neg q$

Sequent Introduction

2

Modus Ponendo Tollens


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1

... and demonstrate a contradiction


5


1

$p \land q$

Reductio ad Absurdum

2 – 4

Assumption 2 has been discharged

$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Reductio ad Absurdum.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





