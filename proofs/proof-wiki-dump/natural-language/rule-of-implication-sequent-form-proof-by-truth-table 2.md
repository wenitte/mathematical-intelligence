# 

Source: https://proofwiki.org/wiki/Rule_of_Implication/Sequent_Form/Proof_by_Truth_Table

Theorem
The Rule of Implication can be symbolised by the sequent:














\(\ds \paren {p \vdash q}\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \implies q\)

\(\)







\(\ds \)











Proof
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





