# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_2/Proof_by_Truth_Table

Theorem













\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds q\)

\(\implies\)







\(\ds r\)




















\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds r\)

\(\)







\(\ds \)











Proof
We apply the Method of Truth Tables to the propositions in turn.
As can be seen for all boolean interpretations by inspection, where the truth values under the main connective on the left hand side (that is, the rightmost $\land$) is $\T$, that under the instance of $r$ on the right hand side is also $\T$:
$\begin{array}{|ccccccccc||c|} \hline
((p & \implies & q) & \land & (q & \implies & r)) & \land & p & r \\
\hline
\F & \T & \F & \T & \F & \T & \F & \F & \F & \F \\
\F & \T & \F & \T & \F & \T & \T & \F & \F & \T \\
\F & \T & \T & \F & \T & \F & \F & \F & \F & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \F & \T \\
\T & \F & \F & \F & \F & \T & \F & \F & \T & \F \\
\T & \F & \F & \F & \F & \T & \T & \F & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \F & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$





