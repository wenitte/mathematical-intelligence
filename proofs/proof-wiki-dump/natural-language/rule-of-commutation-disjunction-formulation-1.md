# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Disjunction/Formulation_1



Theorem
$p \lor q \dashv \vdash q \lor p$


Proof 1
By the tableau method of natural deduction:


$p \lor q \vdash q \lor p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$q \lor p$

Rule of Addition: $\lor \II_2$

2




4


4

$p$

Assumption

(None)




5


4

$q \lor p$

Rule of Addition: $\lor \II_1$

4




6


1

$q \lor p$

Proof by Cases: $\text{PBC}$

1, 2 – 3, 4 – 5

Assumptions 2 and 4 have been discharged

$\blacksquare$

By the tableau method of natural deduction:


$q \lor p \vdash p \lor q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \lor p$

Premise

(None)




2


2

$q$

Assumption

(None)




3


2

$p \lor q$

Rule of Addition: $\lor \II_2$

2




4


4

$p$

Assumption

(None)




5


4

$p \lor q$

Rule of Addition: $\lor \II_1$

4




6


1

$p \lor q$

Proof by Cases: $\text{PBC}$

1, 2 – 3, 4 – 5

Assumptions 2 and 4 have been discharged

$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
As can be seen by inspection, in both cases, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccc|} \hline
p & \lor & q & q & \lor & p \\
\hline
\F & \F & \F & \F & \F & \F \\
\F & \T & \T & \T & \T & \F \\
\T & \T & \F & \F & \T & \T \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Also see
Rule of Association
Principle of Commutation


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




