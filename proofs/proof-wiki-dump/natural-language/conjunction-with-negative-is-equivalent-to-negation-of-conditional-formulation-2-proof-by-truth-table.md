# 

Source: https://proofwiki.org/wiki/Conjunction_with_Negative_is_Equivalent_to_Negation_of_Conditional/Formulation_2/Proof_by_Truth_Table

Theorem
$\vdash \paren {p \land \neg q} \iff \paren {\neg \paren {p \implies q} }$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|cccc|c|cccc|} \hline
p & \land & \neg & q & \iff & \neg & (p & \implies & q) \\
\hline
\F & \F & \T & \F & \T & \F & \F & \T & \F \\
\F & \F & \F & \T & \T & \F & \F & \T & \T \\
\T & \T & \T & \F & \T & \T & \T & \F & \F \\
\T & \F & \F & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 7$: Determining the Truth Values of Complex Propositions




