# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction/Formulation_1/Reverse_Implication



Theorem
$\neg \paren {\neg p \land \neg q} \vdash p \lor q$


Proof
By the tableau method of natural deduction:


$\neg \paren {\neg p \land \neg q} \vdash p \lor q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {\neg p \land \neg q}$

Premise

(None)




2


2

$\neg \paren {p \lor q}$

Assumption

(None)




3


2

$\neg p \land \neg q$

Sequent Introduction

2

De Morgan's Laws: Conjunction of Negations


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1




5


1

$p \lor q$

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
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $36 \ \text{(b)}$




