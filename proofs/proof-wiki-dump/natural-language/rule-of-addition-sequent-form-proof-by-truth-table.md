# 

Source: https://proofwiki.org/wiki/Rule_of_Addition/Sequent_Form/Proof_by_Truth_Table

Theorem
The Rule of Addition can be symbolised by the sequents:




\(\text {(1)}: \quad\)









\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor q\)

\(\)







\(\ds \)












\(\text {(2)}: \quad\)









\(\ds q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor q\)

\(\)







\(\ds \)











Proof
We apply the Method of Truth Tables.
$\begin{array}{|c|c||ccc|} \hline
p & q & p & \lor & q\\
\hline
\F & \F & \F & \F & \F \\
\F & \T & \F & \T & \T \\
\T & \F & \T & \T & \F \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, whenever either $p$ or $q$ (or both) are true, then so is $p \lor q$.
$\blacksquare$





