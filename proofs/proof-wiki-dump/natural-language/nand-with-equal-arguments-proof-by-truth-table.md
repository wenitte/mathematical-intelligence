# 

Source: https://proofwiki.org/wiki/NAND_with_Equal_Arguments/Proof_by_Truth_Table

Theorem
$p \uparrow p \dashv \vdash \neg p$
That is, the NAND of a proposition with itself corresponds to the negation operation.


Proof
We apply the Method of Truth Tables:

$\begin{array}{|ccc||cc|} \hline
p & \uparrow & p & \neg & p \\
\hline
\F & \T & \F & \T & \F \\
\T & \F & \T & \F & \T \\
\hline
\end{array}$

As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.5$: Further Logical Constants




