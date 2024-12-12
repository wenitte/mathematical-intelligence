# 

Source: https://proofwiki.org/wiki/Contradictory_Antecedent



Theorem
A conditional with a contradiction as antecedent:

$\bot \implies p \dashv \vdash \top$


Proof by Natural Deduction
By the tableau method of natural deduction:


$\bot \implies p \vdash \top$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\bot \implies p$

Premise

(None)




2




$\top$

Rule of Top-Introduction: $\top \II$

(None)



$\Box$

By the tableau method of natural deduction:


$\top \vdash \bot \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\bot$

Assumption

(None)




2


2

$\top$

Premise

(None)




3


1

$p$

Rule of Explosion: $\bot \EE$

1




4




$\bot \implies p$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.
$\begin{array}{|c|ccc||c|} \hline
p & \bot & \implies & p & \top \\
\hline
\F & \F & \T & \F & \T \\
\T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Also see
Rule of Explosion


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




