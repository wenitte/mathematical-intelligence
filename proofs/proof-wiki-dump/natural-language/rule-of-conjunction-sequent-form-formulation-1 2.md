# 

Source: https://proofwiki.org/wiki/Rule_of_Conjunction/Sequent_Form/Formulation_1



Theorem
The Rule of Conjunction can be symbolised by the sequent:














\(\ds p\)

\(\)







\(\ds \)




















\(\ds q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \land q\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$p, q \vdash p \land q$


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


2

$q$

Premise

(None)




3


1, 2

$p \land q$

Rule of Conjunction: $\land \II$

1, 2



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|c|c||ccc|} \hline
p & q & p & \land & q\\
\hline
\F & \F & \F & \F & \F \\
\F & \T & \F & \F & \T \\
\T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, only when both $p$ and $q$ are true, then so is $p \land q$.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables: Exercise $\text{I} \ \mathbf d.$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $8.$




