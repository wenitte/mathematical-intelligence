# 

Source: https://proofwiki.org/wiki/Peirce%27s_Law/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {\paren {p \implies q} \implies p} \implies p$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective are $\T$ for all boolean interpretations.
$\begin{array}{|ccccc|c|c|}\hline
((p & \implies & q) & \implies & p) & \implies & p \\
\hline
\F & \T & \F & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \F \\
\T & \F & \F & \T & \T & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.4.1$: The meaning of logical connectives: Exercise $1.8: \ 2$




