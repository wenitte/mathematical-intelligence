# 

Source: https://proofwiki.org/wiki/Rule_of_Addition/Sequent_Form/Formulation_1/Form_1



Theorem













\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor q\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p \vdash p \lor q$


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


1

$p \lor q$

Rule of Addition: $\lor \II_1$

1



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|c||ccc|} \hline
p & p & \lor & q \\
\hline
\F & \F & \F & \F \\
\F & \F & \T & \T \\
\T & \T & \T & \F \\
\T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, when $p$ is true so is $p \lor q$.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables: Exercise $\text{I} \ \mathbf a.$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $9.$




