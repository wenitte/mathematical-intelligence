# 

Source: https://proofwiki.org/wiki/Rule_of_Simplification/Sequent_Form/Formulation_2/Proof_2

Theorem
$(1): \quad \vdash p \land q \implies p$
$(2): \quad \vdash p \land q \implies q$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.

$\begin{array}{|ccc|c|c||c|c|} \hline
p & \land & q & p & q & p \land q \implies p & p \land q \implies q \\
\hline
\F & \F & \F & \F & \F & \T & \T \\
\F & \F & \T & \F & \T & \T & \T \\
\T & \F & \F & \T & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): truth table
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): truth table




