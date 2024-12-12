# 

Source: https://proofwiki.org/wiki/Conjunction_with_Contradiction



Theorem
A conjunction with a contradiction:

$p \land \bot \dashv \vdash \bot$


Proof by Natural Deduction
By the tableau method of natural deduction:


$p \land \bot \vdash \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \bot$

Premise

(None)




2


1

$\bot$

Rule of Simplification: $\land \EE_2$

1



$\Box$

By the tableau method of natural deduction:


$\bot \vdash p \land \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\bot$

Premise

(None)




2


1

$p \land \bot$

Rule of Explosion: $\bot \EE$

1

From a bottom, we can prove what we like

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.
$\begin{array}{|c|ccc||c|ccc|} \hline
\bot & p & \land & \bot & p \\
\hline
F & F & F & F & F \\
F & T & F & F & T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




