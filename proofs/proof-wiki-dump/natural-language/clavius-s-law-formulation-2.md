# 

Source: https://proofwiki.org/wiki/Clavius%27s_Law/Formulation_2



Theorem
$\vdash \left({\neg p \implies p}\right) \implies  p$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {\neg p \implies p} \implies  p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies p$

Premise

(None)




2


1

$p$

Sequent Introduction

1

Clavius's Law: Formulation 1


3




$\paren {\neg p \implies p} \implies  p$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$\vdash \paren {\neg p \implies p} \implies  p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies p$

Premise

(None)




2




$p \lor \neg p$

Law of Excluded Middle

(None)




3


3

$\neg p$

Assumption

(None)

Either $p$ is false ...


4


1, 3

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


5

$p$

Assumption

(None)

... or $p$ is true


6


1

$p$

Proof by Cases: $\text{PBC}$

2, 3 – 4, 5 – 5

Assumptions 3 and 5 have been discharged


7




$\paren {\neg p \implies p} \implies  p$

Rule of Implication: $\implies \II$

1 – 6

Assumption 1 has been discharged
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth value under the main connective is true for all boolean interpretations.

$\begin{array}{|cccc|c|c|} \hline
(\neg & p & \implies & p) & \implies & p \\
\hline
\T & \F & \F & \F & \T & \F \\
\F & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Source of Name
This entry was named for Christopher Clavius.


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}$: Exercise $11 \ \text{(a)}$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Exercise $1 \ \text{(e)}$
Metamath: theorem pm2.18: Law of Clavius




