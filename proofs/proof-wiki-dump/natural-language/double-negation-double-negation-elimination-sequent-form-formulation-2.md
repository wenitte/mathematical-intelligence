# 

Source: https://proofwiki.org/wiki/Double_Negation/Double_Negation_Elimination/Sequent_Form/Formulation_2



Theorem
$\vdash \neg \neg p \implies p$


Proof
By the tableau method of natural deduction:


$\vdash \neg \neg p \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \neg p$

Assumption

(None)




2


1

$p$

Double Negation Elimination: $\neg \neg \EE$

1




3




$\neg \neg p \implies p$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$
Intuitionist Perspective
The intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates the Law of Double Negation Elimination from the system of intuitionistic propositional logic.
Hence a difference is perceived between Double Negation Elimination and Double Negation Introduction, whereby it can be seen from the Principle of Non-Contradiction that if a statement is true, then it is not the case that it is false.
However, if all we know is that a statement is not false, we can not be certain that it is actually true without accepting that there are only two possible truth values.
Such distinctions may be important when considering, for example, multi-value logic.

However, when analysing logic from a purely classical standpoint, it is common and acceptable to make the simplification of taking just one Double Negation rule:

$p \dashv \vdash \neg \neg p$


Also see
Double Negation Elimination implies Law of Excluded Middle


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 16$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T11}$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $40$




