# 

Source: https://proofwiki.org/wiki/False_Statement_implies_Every_Statement/Formulation_1



Theorem













\(\ds \neg p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \implies q\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$\neg p \vdash p \implies q$


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


1

$\neg p \lor q$

Rule of Addition: $\lor \II_1$

1




3


1

$p \implies q$

Sequent Introduction

2

Rule of Material Implication
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, where the truth value in the relevant column on the left hand side is $\T$, that under the one on the right hand side is also $\T$:
$\begin{array}{|cc||ccc|} \hline
\neg & p & p & \implies & q \\
\hline
\T & \F & \F & \T & \F \\
\T & \F & \F & \T & \T \\
\F & \F & \T & \F & \F \\
\F & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 2 \ \text{(b)}$




