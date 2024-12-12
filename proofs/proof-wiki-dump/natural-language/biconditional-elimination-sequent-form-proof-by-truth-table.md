# 

Source: https://proofwiki.org/wiki/Biconditional_Elimination/Sequent_Form/Proof_by_Truth_Table

Theorem



\(\text {(1)}: \quad\)









\(\ds p \iff q\)

\(\vdash\)







\(\ds p \implies q\)










\(\text {(2)}: \quad\)









\(\ds p \iff q\)

\(\vdash\)







\(\ds q \implies p\)











Proof
We apply the Method of Truth Tables.
$\begin{array}{|ccc||ccc|ccc|} \hline
p & \iff & q & p & \implies & q & q & \implies & p \\
\hline
\F & \T & \F & \F & \T & \F & \F & \T & \F \\
\F & \F & \T & \F & \T & \T & \T & \F & \F \\
\T & \F & \F & \T & \F & \F & \F & \T & \T \\
\T & \T & \T & \T & \F & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, when $p \iff q$ is true so are both $p \implies q$ and $q \implies p$.
$\blacksquare$





