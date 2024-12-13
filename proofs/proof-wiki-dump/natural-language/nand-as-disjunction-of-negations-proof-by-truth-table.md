# 

Source: https://proofwiki.org/wiki/NAND_as_Disjunction_of_Negations/Proof_by_Truth_Table

Theorem
$p \uparrow q \dashv \vdash \neg p \lor \neg q$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccccc|} \hline
p & \uparrow & q & \neg & p & \lor & \neg & q \\
\hline
\F & \T & \F & \T & \F & \T & \T & \F \\
\F & \T & \T & \T & \F & \T & \F & \T  \\
\T & \T & \F & \F & \T & \T & \T & \F  \\
\T & \F & \T & \F & \T & \F & \F & \T  \\
\hline
\end{array}$
$\blacksquare$





