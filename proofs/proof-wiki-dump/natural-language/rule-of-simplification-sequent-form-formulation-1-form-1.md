# 

Source: https://proofwiki.org/wiki/Rule_of_Simplification/Sequent_Form/Formulation_1/Form_1



Theorem













\(\ds p \land q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p \land q \vdash p$


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



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|ccc||c|} \hline
p & \land & q & p \\
\hline
\F & \F & \F & \F \\
\F & \F & \T & \F \\
\T & \F & \F & \T \\
\T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, when $p \land q$ is true so is $p$.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables: Exercise $\text{I} \ \mathbf b.$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $7.$




