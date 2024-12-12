# 

Source: https://proofwiki.org/wiki/Double_Negation/Formulation_2



Theorem
$\vdash p \iff \neg \neg p$


Proof 1
By the tableau method of natural deduction:


$\vdash p \iff \neg \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$p \implies \neg \neg p$

Theorem Introduction

(None)

Double Negation Introduction: Formulation 2


2




$\neg \neg p \implies p$

Theorem Introduction

(None)

Double Negation Elimination: Formulation 2


3




$p \iff \neg \neg p$

Biconditional Introduction: $\iff \II$

1, 2



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\quad \begin{array}{|c|c|ccc|} \hline
p & \iff & \neg & \neg & p \\
\hline
\F & \T & \F & \T & \F \\
\T & \T & \T & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Intuitionist Perspective
The intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates the Law of Double Negation Elimination from the system of intuitionistic propositional logic.
Hence a difference is perceived between Double Negation Elimination and Double Negation Introduction, whereby it can be seen from the Principle of Non-Contradiction that if a statement is true, then it is not the case that it is false.
However, if all we know is that a statement is not false, we can not be certain that it is actually true without accepting that there are only two possible truth values.
Such distinctions may be important when considering, for example, multi-value logic.

However, when analysing logic from a purely classical standpoint, it is common and acceptable to make the simplification of taking just one Double Negation rule:

$p \dashv \vdash \neg \neg p$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 7$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 17$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T110}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $14.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences: $14$
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables: Example $1.6 \ \text{(c)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (1)$




