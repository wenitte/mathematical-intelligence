# 

Source: https://proofwiki.org/wiki/Rule_of_Implication/Sequent_Form



Theorem
The Rule of Implication can be symbolised by the sequent:














\(\ds \paren {p \vdash q}\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \implies q\)

\(\)







\(\ds \)











Proof 1
By the tableau method of natural deduction:


$\paren {p \vdash q} \vdash p \implies q$


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

$q$

By hypothesis

1

as $p \vdash q$


3


1

$p \implies q$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
$\begin{array}{|c|c||ccc|} \hline
p & q & p & \implies & q\\
\hline
\F & \F & \F & \T & \F \\
\F & \T & \F & \T & \T \\
\T & \F & \T & \F & \F \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen by inspection, only when $p$ is true and $q$ is false, then so is $p \implies q$ also false.
$\blacksquare$


Proof
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.5$: The Rule of Conditional Proof




