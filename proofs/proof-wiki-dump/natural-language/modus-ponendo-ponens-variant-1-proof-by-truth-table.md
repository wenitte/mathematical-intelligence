# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_1/Proof_by_Truth_Table

Theorem
$p \vdash \paren {p \implies q} \implies q$


Proof
We apply the Method of Truth Tables.
$\begin{array}{|c|ccccc|} \hline
p & (p & \implies & q) & \implies & q\\
\hline
\F & \F & \T & \F & \F & \F \\
\F & \F & \T & \T & \T & \T \\
\T & \T & \F & \F & \T & \F \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen by inspection, when $p$ is true, the value of the main connective is also true.
$\blacksquare$





