# 

Source: https://proofwiki.org/wiki/Rule_of_Addition/Sequent_Form/Formulation_2/Proof_by_Truth_Table

Theorem



\(\text {(1)}: \quad\)









\(\ds \vdash p\)

\(\implies\)







\(\ds \paren {p \lor q}\)










\(\text {(2)}: \quad\)









\(\ds \vdash q\)

\(\implies\)







\(\ds \paren {p \lor q}\)











Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives are $T$ for all boolean interpretations.
$\begin{array}{|c|c|ccccc|ccccc|} \hline
p & q & p & \implies & (p & \lor & q) & q & \implies & (p & \lor & q) \\
\hline
\F & \F & \F & \T & \F & \F & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \F & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \T & \T & \T & \T & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$





