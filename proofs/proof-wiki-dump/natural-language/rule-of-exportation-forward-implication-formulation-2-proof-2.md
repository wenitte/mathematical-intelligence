# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Forward_Implication/Formulation_2/Proof_2

Theorem
$\vdash \left({\left ({p \land q}\right) \implies r}\right) \implies \left({p \implies \left ({q \implies r}\right)}\right)$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccccc|c|ccccc|} \hline
((p & \land & q) & \implies & r) & \implies & (p & \implies & (q & \implies & r)) \\
\hline
F & F & F & T & F & T & F & T & F & T & F \\
F & F & F & T & T & T & F & T & F & T & T \\
F & F & T & T & F & T & F & T & T & F & F \\
F & F & T & T & T & T & F & T & T & T & T \\
T & F & F & T & F & T & T & T & F & T & F \\
T & F & F & T & T & T & T & T & F & T & T \\
T & T & T & F & F & T & T & F & T & F & F \\
T & T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$





