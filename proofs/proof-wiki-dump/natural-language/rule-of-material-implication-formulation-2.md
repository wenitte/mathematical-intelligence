# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_2



Theorem
$\vdash \paren {p \implies q} \iff \paren {\neg p \lor q}$

This can be expressed as two separate theorems:

Forward Implication
$\vdash \left({p \implies q}\right) \implies \left({\neg p \lor q}\right)$
Reverse Implication
$\vdash \paren {\neg p \lor q} \implies \paren {p \implies q}$


Proof 1
By the tableau method of natural deduction:


$\paren {p \implies q} \iff \paren {\neg p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Assumption

(None)




2


1

$\neg p \lor q$

Sequent Introduction

1

Rule of Material Implication: Formulation 1


3




$\paren {p \implies q} \implies \paren {\neg p \lor q}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg p \lor q$

Assumption

(None)




5


4

$p \implies q$

Sequent Introduction

4

Rule of Material Implication: Formulation 1


6




$\paren {\neg p \lor q} \implies \paren {p \implies q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \implies q} \iff \paren {\neg p \lor q}$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$


Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Rule of Material Implication/Formulation 1/Forward Implication.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccc|c|cccc|} \hline
(p & \implies & q) & \iff & (\neg & p & \lor & q) \\
\hline
\F & \T & \F & \T & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \T & \T & \F & \F \\
\T & \T & \T & \F & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}$: Exercise $11 \ \text{(b)}$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $\text {RF} \, 17$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $\text D \, 25$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text {T46}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $16.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2):$: The remaining rules of inference: $16$




