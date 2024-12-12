# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction/Formulation_1/Reverse_Implication



Theorem
$\neg \left({\neg p \lor \neg q}\right) \vdash p \land q$


Proof
By the tableau method of natural deduction:


$\neg \left({\neg p \lor \neg q}\right) \vdash p \land q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \left({\neg p \lor \neg q}\right)$

Premise

(None)




2


2

$\neg \left ({p \land q}\right)$

Assumption

(None)




3


2

$\neg p \lor \neg q$

Sequent Introduction

2

De Morgan's Laws: Disjunction of Negations


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1




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


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.5$: An aside: proof by contradiction: Exercises $1.6: \ 2 \ \text{(b)}$




