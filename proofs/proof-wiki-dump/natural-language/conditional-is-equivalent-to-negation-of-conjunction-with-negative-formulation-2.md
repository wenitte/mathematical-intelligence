# 

Source: https://proofwiki.org/wiki/Conditional_is_Equivalent_to_Negation_of_Conjunction_with_Negative/Formulation_2



Theorems
$\vdash \paren {p \implies q} \iff \paren {\neg \paren {p \land \neg q} }$

This can be expressed as two separate theorems:

Forward Implication
$\vdash \paren {p \implies q} \implies \paren {\neg \paren {p \land \neg q} }$
Reverse Implication
$\vdash \paren {\neg \paren {p \land \neg q} } \implies \paren {p \implies q}$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \iff \paren {\neg \paren {p \land \neg q} } $


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


2

$p \land \neg q$

Assumption

(None)




3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


2

$\neg q$

Rule of Simplification: $\land \EE_2$

2




6


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 5




7


1

$\neg \paren {p \land \neg q}$

Proof by Contradiction: $\neg \II$

2 – 6

Assumption 2 has been discharged


8




$\paren {p \implies q} \implies \paren {\neg \paren {p \land \neg q} }$

Rule of Implication: $\implies \II$

1 – 7

Assumption 1 has been discharged


9


9

$\neg \paren {p \land \neg q}$

Assumption

(None)




10


10

$p$

Assumption

(None)




11


11

$\neg q$

Assumption

(None)




12


10, 11

$p \land \neg q$

Rule of Conjunction: $\land \II$

10, 11




13


9, 10, 11

$\bot$

Principle of Non-Contradiction: $\neg \EE$

12, 9




14


9, 10

$q$

Reductio ad Absurdum

11 – 12

Assumption 11 has been discharged


15


9

$p \implies q$

Rule of Implication: $\implies \II$

10 – 14

Assumption 10 has been discharged


16




$\paren {\neg \paren {p \land \neg q} } \implies \paren {p \implies q}$

Rule of Implication: $\implies \II$

9 – 15

Assumption 9 has been discharged


17




$\paren {p \implies q} \iff \paren {\neg \paren {p \land \neg q} }$

Biconditional Introduction: $\iff \II$

8, 16


$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Reductio ad Absurdum.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccc|c|ccccc|} \hline
(p & \implies & q) & \iff & (\neg & (p & \land & \neg & q)) \\
\hline
\F & \T & \F & \T & \T & \F & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \F & \F & \T \\
\T & \F & \F & \T & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 18$




