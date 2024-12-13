# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Tollens/Sequent_Form/Proof_by_Truth_Table

Theorem
The Modus Tollendo Tollens can be symbolised by the sequent:














\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds \neg q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds \neg p\)

\(\)







\(\ds \)











Proof
We apply the Method of Truth Tables to the proposition.
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $\T$, that under the one on the right hand side is also $\T$:

$\begin{array}{|cccccc||cc|} \hline
(p & \implies & q) & \land & \neg & q & \neg & p \\
\hline
\F & \T & \F & \T & \T & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \T & \F \\
\T & \F & \F & \F & \T & \F & \F & \T \\
\T & \T & \T & \F & \F & \T & \F & \T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$

Note that the two formulas are not equivalent, as the relevant columns do not match exactly.


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables




