# 

Source: https://proofwiki.org/wiki/Definition:Constructed_Semantics/Instance_5/Rule_of_Commutation


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
The Rule of Commutation:

$\left({p \lor q}\right) \implies \left({q \lor p}\right)$
is a tautology in Instance 5 of constructed semantics.


Proof
By the definitional abbreviation for the conditional:

$\mathbf A \implies \mathbf B =_{\text{def}} \neg \mathbf A \lor \mathbf B$
the Rule of Commutation can be written as:

$\neg \left({p \lor q}\right) \lor \left({q \lor p}\right)$
This evaluates as follows:

$\begin{array}{|cccc|c|ccc|} \hline
\neg & (p & \lor & q) & \lor & (q & \lor & p) \\
\hline
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
1 & 0 & 0 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 0 & 2 & 0 & 2 & 0 & 0 \\
1 & 0 & 0 & 3 & 0 & 3 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 & 0 & 0 & 1 \\
0 & 1 & 1 & 1 & 0 & 1 & 1 & 1 \\
3 & 1 & 2 & 2 & 0 & 2 & 2 & 1 \\
0 & 1 & 3 & 3 & 0 & 3 & 3 & 1 \\
1 & 2 & 0 & 0 & 0 & 0 & 0 & 2 \\
3 & 2 & 2 & 1 & 0 & 1 & 2 & 2 \\
3 & 2 & 2 & 2 & 0 & 2 & 2 & 2 \\
1 & 2 & 0 & 3 & 0 & 3 & 0 & 2 \\
1 & 3 & 0 & 0 & 0 & 0 & 0 & 3 \\
0 & 3 & 3 & 1 & 0 & 1 & 3 & 3 \\
1 & 3 & 0 & 2 & 0 & 2 & 0 & 3 \\
0 & 3 & 3 & 3 & 0 & 3 & 3 & 3 \\
\hline
\end{array}$
$\blacksquare$





