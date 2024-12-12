# 

Source: https://proofwiki.org/wiki/Disjunction_with_Contradiction



Theorem
A disjunction with a contradiction:

$p \lor \bot \dashv \vdash p$


Proof by Natural Deduction
By the tableau method of natural deduction:


$p \lor \bot \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \bot$

Premise

(None)




2


2

$p$

Assumption

(None)




3


3

$\bot$

Assumption

(None)




4


3

$p$

Rule of Explosion: $\bot \EE$

3




5


1

$p$

Proof by Cases: $\text{PBC}$

1, 2 – 2, 3 – 4

Assumptions 2 and 3 have been discharged
$\Box$

By the tableau method of natural deduction:


$p \vdash p \lor \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


1

$p \lor \bot$

Rule of Addition: $\lor \II_1$

1


$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.
$\begin{array}{|c|ccc||c|ccc|} \hline
\bot & p & p & \lor & \bot \\
\hline
\F & \F & \F & \F & \F \\
\F & \T & \T & \T & \F \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




