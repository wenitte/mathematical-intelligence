# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Variant/Formulation_2



Theorem
$\vdash \paren {p \lor q} \iff \paren {\neg p \implies q}$


Proof 1
By the tableau method of natural deduction:


$\vdash \left({p \lor q}\right) \iff \left({\neg p \implies q}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Assumption

(None)




2


1

$\neg p \implies q$

Sequent Introduction

1

Modus Tollendo Ponens: Formulation 1


3




$\left({p \lor q}\right) \implies \left({\neg p \implies q}\right)$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg p \implies q$

Assumption

(None)




5


4

$p \lor q$

Sequent Introduction

4

Modus Tollendo Ponens: Formulation 1


6




$\left({\neg p \implies q}\right) \implies \left({p \lor q}\right)$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\left({p \lor q}\right) \iff \left({\neg p \implies q}\right)$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccc|c|cccc|} \hline
p & \lor & q & \iff & \neg & p & \implies & q \\
\hline
\F & \F & \F & \T & \T & \F & \F & \F \\
\F & \T & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \T & \F & \T & \T & \F \\
\T & \T & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T45}$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2):$: The remaining rules of inference: $16$
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables: Exercise $5 \ \text{(b)}$




