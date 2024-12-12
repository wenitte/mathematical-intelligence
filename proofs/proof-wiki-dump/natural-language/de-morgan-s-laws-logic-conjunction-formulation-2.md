# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction/Formulation_2



Theorem
$\vdash \paren {p \land q} \iff \paren {\neg \paren {\neg p \lor \neg q} }$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \land q} \iff \paren {\neg \paren {\neg p \lor \neg q} } $


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

$\neg \paren {\neg p \lor \neg q}$

Sequent Introduction

1

De Morgan's Laws (Logic): Conjunction: Formulation 1


3




$\paren {p \land q} \implies \paren {\neg \paren {\neg p \lor \neg q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {\neg p \lor \neg q}$

Assumption

(None)




5


4

$p \land q$

Sequent Introduction

4

De Morgan's Laws (Logic): Conjunction: Formulation 1


6




$\paren {\neg \paren {\neg p \lor \neg q} } \implies \paren {p \land q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \land q} \iff \paren {\neg \paren {\neg p \lor \neg q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccc|c|cccccc|} \hline
(p & \land & q) & \iff & (\neg & (\neg & p & \lor & \neg & q))  \\
\hline
\F & \F & \F & \T & \F & \T & \F & \T & \T & \F \\
\F & \F & \T & \T & \F & \T & \F & \T & \F & \T \\
\T & \F & \F & \T & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 14$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 24$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T63}$




