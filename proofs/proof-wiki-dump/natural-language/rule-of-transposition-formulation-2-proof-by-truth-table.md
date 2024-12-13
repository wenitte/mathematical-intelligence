# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \implies q} \iff \paren {\neg q \implies \neg p}$


Proof
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc|c|ccccc|} \hline
p & \implies & q) & \iff & (\neg & q & \implies & \neg & p) \\
\hline
\F & \T & \F & \T & \T & \F & \T & \T & \F \\
\F & \T & \T & \T & \F & \T & \T & \T & \F \\
\T & \F & \F & \T & \T & \F & \F & \F & \T \\
\T & \T & \T & \T & \F & \T & \T & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 13$: Logical Equivalences: Exercise $\text{(A)} \ 7$




