# 

Source: https://proofwiki.org/wiki/Rule_of_Addition/Sequent_Form/Formulation_1/Form_2

Theorem













\(\ds q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor q\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$q \vdash p \lor q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q$

Premise

(None)




2


1

$p \lor q$

Rule of Addition: $\lor \II_2$

1



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|c||ccc|} \hline
q & p & \lor & q \\
\hline
\F & \F & \F & \F \\
\T & \F & \T & \T \\
\F & \T & \T & \F \\
\T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, when $q$ is true so is $p \lor q$.
$\blacksquare$





