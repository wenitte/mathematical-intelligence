# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_1/Proof_by_Truth_Table

Theorem
$p \implies q \dashv \vdash \neg p \lor q$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin {array} {|ccc||cccc|} \hline
p & \implies & q & \neg & p & \lor & q \\
\hline
\F & \T & \F & \T & \F & \T & \F \\
\F & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \T & \F & \F \\
\T & \T & \T & \F & \T & \T & \T \\
\hline
\end {array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.3$: Basic Truth-Tables of the Propositional Calculus
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 1$: Some mathematical language: Connectives
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables: Example $1.4 \ \text{(a)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.4.1$: The meaning of logical connectives: Exercise $1.8: \ 1$




