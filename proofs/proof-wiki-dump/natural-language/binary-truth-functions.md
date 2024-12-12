# 

Source: https://proofwiki.org/wiki/Binary_Truth_Functions

Theorem
There are $16$ distinct binary truth functions:

Two constant operations:
$\map {f_\F} {p, q} = \F$
$\map {f_\T} {p, q} = \T$
Two projections:
$\map {\pr_1} {p, q} = p$
$\map {\pr_2} {p, q} = q$
Two negated projections:
$\map {\overline {\pr_1} } {p, q} = \neg p$
$\map {\overline {\pr_2} } {p, q} = \neg q$


The conjunction: $p \land q$
The disjunction: $p \lor q$
Two conditionals:
$p \implies q$
$q \implies p$
The biconditional: $p \iff q$
The exclusive or: $\map \neg {p \iff q}$
Two negated conditionals:
$\map \neg {p \implies q}$
$\map \neg {q \implies p}$
The NAND: $p \uparrow q$
The NOR: $p \downarrow q$


Proof
From Count of Truth Functions there are $2^{\paren {2^2} } = 16$ distinct truth functions on $2$ variables.
These can be depicted in a truth table as follows:
$\begin{array}{|r|cccc|} \hline
p                                & \T & \T & \F & \F \\
q                                & \T & \F & \T & \F \\
\hline
\map {f_\T} {p, q}               & \T & \T & \T & \T \\
p \lor q                         & \T & \T & \T & \F \\
p \impliedby q                   & \T & \T & \F & \T \\
\map {\pr_1} {p, q}              & \T & \T & \F & \F \\
p \implies q                     & \T & \F & \T & \T \\
\map {\pr_2} {p, q}              & \T & \F & \T & \F \\
p \iff q                         & \T & \F & \F & \T \\
p \land q                        & \T & \F & \F & \F \\
p \uparrow q                     & \F & \T & \T & \T \\
\map \neg {p \iff q}             & \F & \T & \T & \F \\
\map {\overline {\pr_2} } {p, q} & \F & \T & \F & \T \\
\map \neg {p \implies q}         & \F & \T & \F & \F \\
\map {\overline {\pr_1} } {p, q} & \F & \F & \T & \T \\
\map \neg {p \impliedby q}       & \F & \F & \T & \F \\
p \downarrow q                   & \F & \F & \F & \T \\
\map {f_\F} {p, q}               & \F & \F & \F & \F \\
\hline
\end{array}$
That accounts for all $16$ of them.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.5$: Further Logical Constants
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables
1993: M. Ben-Ari: Mathematical Logic for Computer Science ... (previous) ... (next): Chapter $2$: Propositional Calculus: $\S 2.1$: Boolean operators
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.4.1$: Figure $2.5$




