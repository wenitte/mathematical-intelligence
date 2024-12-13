# 

Source: https://proofwiki.org/wiki/Method_of_Truth_Tables/Proof_of_Tautology



Proof Technique
This is used to establish whether or not a given propositional formula is a tautology for boolean interpretations; that, is valid in all boolean interpretations.

Let $P$ be a propositional formula we wish to validate.
Subsequently, determine its truth table.
In the column under the main connective of $P$ itself can be found the truth value of $P$ for each boolean interpretation.

If this contains nothing but $\T$, then $P$ is a tautology.
If this contains nothing but $\F$, then $P$ is a contradiction.
If this contains $\T$ for some boolean interpretations and $\F$ for others, then $P$ is a contingent statement.


Examples
Peirce's Law
Consider the truth table for Peirce's Law:

$P = \paren {\paren {p \implies q} \implies p} \implies p$
which is:
$\begin{array}{cc||ccccccc}
p & q & ((p & \implies & q) & \implies & p) & \implies & p \\
\hline
\F & \F & \F & \T & \F & \F & \F & \T & \F \\
\F & \T & \F & \T & \T & \F & \F & \T & \F \\
\T & \F & \T & \F & \F & \T & \T & \T & \T \\
\T & \T & \T & \T & \T & \T & \T & \T & \T \\
\end{array}$
The main connective of $P$ is the rightmost instance of $\implies$.
The column beneath that connective is all $\T$, so $\paren {\paren {p \implies q} \implies p} \implies p$ is a tautology.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.3$: The Construction and Application of Truth-Tables
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 4$: Using the Definitions
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.6$: Truth Tables and Tautologies




