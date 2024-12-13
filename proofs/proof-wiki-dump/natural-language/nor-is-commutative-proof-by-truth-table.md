# 

Source: https://proofwiki.org/wiki/NOR_is_Commutative/Proof_by_Truth_Table

Theorem
$p \downarrow q \dashv \vdash q \downarrow p$


Proof
Apply the Method of Truth Tables:

$\begin{array}{|ccc||ccc|} \hline
p & \downarrow & q & q & \downarrow & p \\
\hline
\F & \T & \F & \F & \T & \F \\
\F & \F & \T & \T & \F & \F \\
\T & \F & \F & \F & \F & \T \\
\T & \F & \T & \T & \F & \T \\
\hline
\end{array}$

As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\blacksquare$





