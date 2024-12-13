# 

Source: https://proofwiki.org/wiki/Rule_of_Association/Conjunction/Formulation_1/Proof_2

Theorem
$p \land \left({q \land r}\right) \dashv \vdash \left({p \land q}\right) \land r$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccc||ccccc|} \hline
p & \land & (q & \land & r) & (p & \land & q) & \land & r \\
\hline
F & F & F & F & F & F & F & F & F & F \\
F & F & F & F & T & F & F & F & F & T \\
F & F & T & F & F & F & F & T & F & F \\
F & F & T & T & T & F & F & T & F & T \\
T & F & F & F & F & T & F & F & F & F \\
T & F & F & F & T & T & F & F & F & T \\
T & F & T & F & F & T & T & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$





