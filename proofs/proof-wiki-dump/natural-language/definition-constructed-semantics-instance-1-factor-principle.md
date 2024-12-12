# 

Source: https://proofwiki.org/wiki/Definition:Constructed_Semantics/Instance_1/Factor_Principle


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
The Factor Principle:

$\left({p \implies q}\right) \implies \left({\left({r \lor p}\right) \implies \left ({r \lor q}\right)}\right)$
is a tautology in Instance 1 of constructed semantics.


Proof
By the definitional abbreviation for the conditional:

$\mathbf A \implies \mathbf B =_{\text{def}} \neg \mathbf A \lor \mathbf B$
the Factor Principle can be written as:

$\neg \left({\neg p \lor q}\right) \lor \left({\neg \left({r \lor p}\right) \lor \left ({r \lor q}\right)}\right)$
This evaluates as follows:

$\begin{array}{|ccccc|c|cccccccc|} \hline
\neg & (\neg & p & \lor & q) & \lor & (\neg & (r & \lor & p) & \lor & (r & \lor & q)) \\
\hline
1 & 2 & 1 & 2 & 1 & 2 & 2 & 1 & 1 & 1 & 2 & 1 & 1 & 1 \\
1 & 2 & 1 & 2 & 1 & 2 & 1 & 2 & 2 & 1 & 2 & 2 & 2 & 1 \\
1 & 2 & 1 & 2 & 2 & 2 & 2 & 1 & 1 & 1 & 2 & 1 & 2 & 2 \\
1 & 2 & 1 & 2 & 2 & 2 & 1 & 2 & 2 & 1 & 2 & 2 & 2 & 2 \\
2 & 1 & 2 & 1 & 1 & 2 & 1 & 1 & 2 & 2 & 1 & 1 & 1 & 1 \\
2 & 1 & 2 & 1 & 1 & 2 & 1 & 2 & 2 & 2 & 2 & 2 & 2 & 1 \\
1 & 1 & 2 & 2 & 2 & 2 & 1 & 1 & 2 & 2 & 2 & 1 & 2 & 2 \\
1 & 1 & 2 & 2 & 2 & 2 & 1 & 2 & 2 & 2 & 2 & 2 & 2 & 2 \\
\hline
\end{array}$
$\blacksquare$





