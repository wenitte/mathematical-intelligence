# 

Source: https://proofwiki.org/wiki/Biconditional_with_Tautology



Theorem
A biconditional with a tautology:

$p \iff \top \dashv \vdash p$


Proof by Natural Deduction
By the tableau method of natural deduction:


$p \iff \top \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff \top$

Premise

(None)




2




$\top$

Rule of Top-Introduction: $\top \II$

(None)




3


1

$\top \implies p$

Biconditional Elimination: $\iff \EE_2$

1




4


1

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3



$\Box$

By the tableau method of natural deduction:


$p \vdash p \iff \top$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\top$

Premise

(None)




2


2

$p$

Assumption

(None)




3




$\top$

Rule of Top-Introduction: $\top \II$

(None)




4




$p \implies \top$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged


5


2

$\top \implies p$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


6


2

$p \iff \top$

Biconditional Introduction: $\iff \II$

4, 5



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, in each case, the truth values in the appropriate columns match for all boolean interpretations.
$\begin{array}{|c|ccc||c|ccc|} \hline
p & p & \iff & \top & p \\
\hline
F & F & F & T & F \\
T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




