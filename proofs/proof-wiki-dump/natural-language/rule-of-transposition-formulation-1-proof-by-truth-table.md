# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Formulation_1/Proof_by_Truth_Table

Theorem
A statement and its contrapositive have the same truth value:

$p \implies q \dashv \vdash \neg q \implies \neg p$

Its abbreviation in a tableau proof is $\textrm {TP}$.


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccccc|} \hline
p & \implies & q & \neg & q & \implies & \neg & p \\
\hline
\F & \T & \F & \T & \F & \T & \T & \F \\
\F & \T & \T & \F & \T & \T & \T & \F \\
\T & \F & \F & \T & \F & \F & \F & \T \\
\T & \T & \T & \F & \T & \T & \F & \T \\
\hline
\end{array}$
$\blacksquare$





