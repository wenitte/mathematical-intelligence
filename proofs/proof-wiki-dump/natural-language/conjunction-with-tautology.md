# 

Source: https://proofwiki.org/wiki/Conjunction_with_Tautology



Theorem
A conjunction with a tautology:

$p \land \top \dashv \vdash p$


Proof by Natural Deduction
By the tableau method of natural deduction:


$p \land \top \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land \top$

Premise

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1



$\Box$

By the tableau method of natural deduction:


$p \vdash p \land \top$


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




$q \lor \neg q$

Law of Excluded Middle

(None)




3




$\top$

Law of Excluded Middle

(None)




4


1

$p \land \top$

Rule of Conjunction: $\land \II$

1, 3


$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.
$\begin{array}{|c|ccc||c|} \hline
p & p & \land & \top & \top \\
\hline
\F & \F & \F & \T & \T \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




