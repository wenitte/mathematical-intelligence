# 

Source: https://proofwiki.org/wiki/Conditional_is_Equivalent_to_Negation_of_Conjunction_with_Negative/Formulation_1/Reverse_Implication



Theorem
$\neg \paren {p \land \neg q} \vdash p \implies q$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \land \neg q} \vdash p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \land \neg q}$

Premise

(None)




2


1

$\neg p \lor \neg \neg q$

Sequent Introduction

1

De Morgan's Laws: Disjunction of Negations


3


1

$p \implies \neg \neg q$

Sequent Introduction

2

Rule of Material Implication


4


4

$p$

Assumption

(None)




5


1, 4

$\neg \neg q$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 4




6


1, 4

$q$

Double Negation Elimination: $\neg \neg \EE$

5




7


1

$p \implies q$

Rule of Implication: $\implies \II$

4 – 6

Assumption 4 has been discharged
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorems $35 \ \text{(b)}$




