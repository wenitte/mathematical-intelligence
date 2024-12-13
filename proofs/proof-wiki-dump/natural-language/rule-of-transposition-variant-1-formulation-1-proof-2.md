# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_1/Formulation_1/Proof_2

Theorem
$p \implies \neg q \dashv \vdash q \implies \neg p$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||cccc|} \hline
p & \implies & \neg & q & q & \implies & \neg & p \\
\hline
F & T & T & F & F & T & T & F \\
F & T & F & T & T & T & T & F \\
T & F & T & F & F & F & F & T \\
T & T & F & T & T & T & F & T \\
\hline
\end{array}$
$\blacksquare$





