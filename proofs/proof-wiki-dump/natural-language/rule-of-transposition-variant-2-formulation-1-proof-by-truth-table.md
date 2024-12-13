# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_2/Formulation_1/Proof_by_Truth_Table

Theorem
$\neg p \implies q \dashv \vdash \neg q \implies p$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||cccc|} \hline
\neg & p & \implies & q & \neg & q & \implies & p \\
\hline
\T & \F & \T & \F & \T & \F & \T & \F \\
\T & \F & \T & \T & \F & \T & \T & \F \\
\F & \T & \F & \F & \T & \F & \F & \T \\
\F & \T & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$





