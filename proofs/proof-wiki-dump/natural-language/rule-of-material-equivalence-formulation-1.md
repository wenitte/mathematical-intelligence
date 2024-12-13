# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Equivalence/Formulation_1



Theorem
The biconditional operation can be interpreted as the conjunction of conditionals:

$p \iff q \dashv \vdash \paren {p \implies q} \land \paren {q \implies p}$


Proof 1
By the tableau method of natural deduction:


$p \iff q \vdash \paren {p \implies q} \land \paren {q \implies p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


1

$p \implies q$

Biconditional Elimination: $\iff \EE_1$

1




3


1

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

1




4


1

$\paren {p \implies q} \land \paren {q \implies p}$

Rule of Conjunction: $\land \II$

2, 3




By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {q \implies p} \vdash p \iff q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {q \implies p}$

Premise

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$q \implies p$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \iff q$

Biconditional Introduction: $\iff \II$

2, 3



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc|ccccccc|} \hline
p & \iff & q & (p & \implies & q) & \land & (q & \implies & p) \\
\hline
\F & \T & \F & \F & \T & \F & \T & \F & \T & \F \\
\F & \F & \T & \F & \T & \T & \F & \T & \F & \F \\
\T & \F & \F & \T & \F & \F & \F & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $4$ The Biconditional
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.1$: What is a Set?
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.1$: You have a logical mind if...: Ponderable $1.1.1$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




