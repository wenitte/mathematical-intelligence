# 

Source: https://proofwiki.org/wiki/NAND_is_Commutative/Proof_by_Truth_Table

Theorem
$p \uparrow q \dashv \vdash q \uparrow p$


Proof
We apply the Method of Truth Tables:

$\begin{array}{|ccc||ccc|} \hline
p & \uparrow & q & q & \uparrow & p \\
\hline
\F & \T & \F & \F & \T & \F \\
\F & \T & \T & \T & \T & \F \\
\T & \T & \F & \F & \T & \T \\
\T & \F & \T & \T & \F & \T \\
\hline
\end{array}$

As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\blacksquare$





