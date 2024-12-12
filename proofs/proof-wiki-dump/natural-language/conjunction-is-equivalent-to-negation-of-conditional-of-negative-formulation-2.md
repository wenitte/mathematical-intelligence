# 

Source: https://proofwiki.org/wiki/Conjunction_is_Equivalent_to_Negation_of_Conditional_of_Negative/Formulation_2



Theorem
$\vdash \paren {p \land q} \iff \paren {\neg \paren {p \implies \neg q} }$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \land q} \iff \paren {\neg \paren {p \implies \neg q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$\neg \paren {p \implies \neg q}$

Sequent Introduction

1

Conjunction is Equivalent to Negation of Conditional of Negative: Formulation 1: Forward Implication


3




$\paren {p \land q} \implies \paren {\neg \paren {p \implies \neg q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {p \implies \neg q}$

Assumption

(None)




5


4

$p \land q$

Sequent Introduction

4

Conjunction is Equivalent to Negation of Conditional of Negative: Formulation 1: Reverse Implication


6




$\paren {\neg \paren {p \implies \neg q} \implies \paren {p \land q} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \land q} \iff \paren {\neg \paren {p \implies \neg q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccc|c|ccccc|} \hline
(p & \land & q) & \iff & (\neg & (p & \implies & \neg & q)) \\
\hline
\F & \F & \F & \T & \F & \F & \T & \T & \F \\
\F & \F & \T & \T & \F & \F & \T & \F & \T \\
\T & \F & \F & \T & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 3$: Theorem $\text{T38}$




