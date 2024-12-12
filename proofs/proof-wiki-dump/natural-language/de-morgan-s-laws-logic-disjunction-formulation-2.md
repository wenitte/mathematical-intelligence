# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction/Formulation_2



Theorem
$\vdash \paren {p \lor q} \iff \paren {\neg \paren {\neg p \land \neg q} }$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \lor q} \iff \paren {\neg \paren {\neg p \land \neg q} } $


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

$\neg \paren {\neg p \land \neg q}$

Sequent Introduction

1

De Morgan's Laws (Logic): Disjunction: Formulation 1


3




$\paren {p \lor q} \implies \paren {\neg \paren {\neg p \land \neg q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {\neg p \land \neg q}$

Assumption

(None)




5


4

$p \lor q$

Sequent Introduction

4

De Morgan's Laws (Logic): Disjunction: Formulation 1


6




$\paren {\neg \paren {\neg p \land \neg q} } \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \lor q} \iff \paren {\neg \paren {\neg p \land \neg q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.

$\begin{array}{|ccc|c|cccccc|} \hline
(p & \lor & q) & \iff & (\neg & (\neg & p & \land & \neg & q)) \\
\hline
\F & \F & \F & \T & \F & \T & \F & \T & \T & \F \\
\F & \T & \T & \T & \T & \T & \F & \F & \F & \T \\
\T & \T & \F & \T & \T & \F & \T & \F & \T & \F \\
\T & \T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 15$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 26$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T64}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): and
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): or
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): and
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): or




