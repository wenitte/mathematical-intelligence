# 

Source: https://proofwiki.org/wiki/Rule_of_Simplification/Sequent_Form/Formulation_1/Form_2



Theorem













\(\ds p \land q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds q\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p \land q \vdash q$


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

$q$

Rule of Simplification: $\land \EE_2$

1



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|ccc||c|} \hline
p & \land & q & q \\
\hline
\F & \F & \F & \F \\
\F & \F & \T & \T \\
\T & \F & \F & \F \\
\T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, when $p \land q$ is true so is $q$.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement




