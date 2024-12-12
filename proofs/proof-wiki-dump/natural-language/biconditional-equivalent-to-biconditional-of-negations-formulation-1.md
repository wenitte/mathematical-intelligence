# 

Source: https://proofwiki.org/wiki/Biconditional_Equivalent_to_Biconditional_of_Negations/Formulation_1



Theorem
$p \iff q \dashv \vdash \neg p \iff \neg q$

This can be expressed as two separate theorems:

Forward Implication
$p \iff q \vdash \neg p \iff \neg q$
Reverse Implication
$\neg p \iff \neg q \vdash p \iff q$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, in all cases the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||ccccc|} \hline
p & \iff & q & \neg & p & \iff & \neg & q \\
\hline
\F & \T & \F & \T & \F & \T & \T & \F \\
\F & \F & \T & \T & \F & \F & \F & \T \\
\T & \F & \F & \F & \T & \F & \T & \F \\
\T & \T & \T & \F & \T & \T & \F & \T \\
\hline
\end{array}$
$\blacksquare$





