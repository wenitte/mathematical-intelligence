# 

Source: https://proofwiki.org/wiki/Conjunction_with_Negative_is_Equivalent_to_Negation_of_Conditional/Formulation_2



Theorem
$\vdash \paren {p \land \neg q} \iff \paren {\neg \paren {p \implies q} }$

This can be expressed as two separate theorems:

Forward Implication
$\vdash \paren {p \land \neg q} \implies \paren {\neg \paren {p \implies q} }$
Reverse Implication
$\vdash \paren {\neg \paren {p \implies q} } \implies \paren {p \land \neg q}$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \land \neg q} \iff \paren {\neg \paren {p \implies q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \neg q$

Assumption

(None)




2


1

$\neg \paren {p \implies q}$

Sequent Introduction

1

Conjunction with Negative is Equivalent to Negation of Conditional: Formulation 1: Forward Implication


3




$\paren {p \land \neg q} \implies \paren {\neg \paren {p \implies q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {p \implies q}$

Assumption

(None)




5


4

$p \land \neg q$

Sequent Introduction

4

Conjunction with Negative is Equivalent to Negation of Conditional: Formulation 1:Reverse Implication


6




$\paren {\neg \paren {p \implies q} } \implies \paren {p \land \neg q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \land \neg q} \iff \paren {\neg \paren {p \implies q} }$

Biconditional Introduction: $\iff \II$

3, 6


$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|cccc|c|cccc|} \hline
p & \land & \neg & q & \iff & \neg & (p & \implies & q) \\
\hline
\F & \F & \T & \F & \T & \F & \F & \T & \F \\
\F & \F & \F & \T & \T & \F & \F & \T & \T \\
\T & \T & \T & \F & \T & \T & \T & \F & \F \\
\T & \F & \F & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$





