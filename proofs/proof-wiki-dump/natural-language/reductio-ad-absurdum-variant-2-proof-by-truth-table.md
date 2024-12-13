# 

Source: https://proofwiki.org/wiki/Reductio_ad_Absurdum/Variant_2/Proof_by_Truth_Table

Theorem
$\neg p \implies \paren {q \land \neg q} \vdash p$


Proof
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccccc||c|} \hline
\neg & p & \implies & (q & \land & \neg & q) & p \\
\hline
\T & \F & \F & \F & \F & \T & \F & \F \\
\T & \F & \F & \T & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \F & \T \\
\F & \T & \T & \T & \F & \F & \T & \T \\
\hline
\end{array}$
$\blacksquare$





