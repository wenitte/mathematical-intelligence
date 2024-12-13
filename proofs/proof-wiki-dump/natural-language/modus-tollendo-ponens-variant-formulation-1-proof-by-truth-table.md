# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Variant/Formulation_1/Proof_by_Truth_Table

Theorem
$p \lor q \dashv \vdash \neg p \implies q$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc||cccc|} \hline
p & \lor & q & \neg & p & \implies & q \\
\hline
\F & \F & \F & \T & \F & \F & \F \\
\F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \F & \T & \T & \F \\
\T & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems: $\S 1.4.1$: Exercise $1.8: \ 1$




