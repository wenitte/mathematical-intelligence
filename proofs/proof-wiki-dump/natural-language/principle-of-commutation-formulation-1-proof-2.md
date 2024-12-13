# 

Source: https://proofwiki.org/wiki/Principle_of_Commutation/Formulation_1/Proof_2

Theorem
$p \implies \paren {q \implies r} \dashv \vdash q \implies \paren {p \implies r}$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccc||ccccc|} \hline
p & \implies & (q & \implies & r) & q & \implies & (p & \implies & r) \\
\hline
F & T & F & T & F & F & T & F & T & F \\
F & T & F & T & T & F & T & F & T & T \\
F & T & T & F & F & T & T & F & T & F \\
F & T & T & T & T & T & T & F & T & T \\
T & T & F & T & F & F & T & T & F & F \\
T & T & F & T & T & F & T & T & T & T \\
T & F & T & F & F & T & F & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$





