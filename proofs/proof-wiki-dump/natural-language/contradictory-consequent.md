# 

Source: https://proofwiki.org/wiki/Contradictory_Consequent



Theorem
A conditional with a contradiction as consequent:

$p \implies \bot \dashv \vdash \neg p$


Proof by Natural Deduction
By the tableau method of natural deduction:


$p \implies \bot \vdash \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \bot$

Premise

(None)




2


2

$p$

Assumption

(None)




3


1, 2

$\bot$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


1

$\neg p$

Proof by Contradiction: $\neg \II$

2 – 3

Assumption 2 has been discharged

$\Box$

By the tableau method of natural deduction:


$\neg p \vdash p \implies \bot$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


1,2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 2




4


1

$p \implies \bot$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.
$\begin{array}{|c|ccc||cc|} \hline
p & p & \implies & \bot & \neg & p \\
\hline
\F & \F & \T & \F & \T & \F \\
\T & \T & \F & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Also see
Proof by Contradiction


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




