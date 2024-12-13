# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Conjunction/Formulation_1



Theorem
$p \land q \dashv \vdash q \land p$


Proof 1
By the tableau method of natural deduction:


$p \land q \vdash q \land p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Premise

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3


1

$q$

Rule of Simplification: $\land \EE_2$

1




4


1

$q \land p$

Rule of Conjunction: $\land \II$

3, 2



$\Box$

By the tableau method of natural deduction:


$q \land p \vdash p \land q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \land p$

Premise

(None)




2


1

$q$

Rule of Simplification: $\land \EE_1$

1




2


1

$p$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \land q$

Rule of Conjunction: $\land \II$

3, 2



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||ccc|} \hline
p & \land & q & q & \land & p \\
\hline
\F & \F & \F & \F & \F & \F \\
\F & \F & \T & \T & \F & \F \\
\T & \F & \F & \F & \F & \T \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercise $1.2: \ 2$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




