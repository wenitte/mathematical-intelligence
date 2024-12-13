# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Right_Distributive/Formulation_1/Proof

Theorem
$\left({q \land r}\right) \lor p \dashv \vdash \left({q \lor p}\right) \land \left({r \lor p}\right)$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||ccccccc|} \hline
(q & \land & r) & \lor & p & (q & \lor & p) & \land & (r & \lor & p) \\
\hline
F & F & F & F & F & F & F & F & F & F & F & F \\
F & F & F & T & T & F & T & T & T & F & T & T \\
F & F & T & F & F & F & F & F & F & T & T & F \\
F & F & T & T & T & F & T & T & T & T & T & T \\
T & F & F & F & F & T & T & F & F & F & F & F \\
T & F & F & T & T & T & T & T & T & F & T & T \\
T & T & T & T & F & T & T & F & T & T & T & F \\
T & T & T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$





