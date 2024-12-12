# 

Source: https://proofwiki.org/wiki/Definition:Constructed_Semantics/Instance_1/Rule_of_Addition


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
The Rule of Addition:

$q \implies (q \lor p)$
is a tautology in Instance 1 of constructed semantics.


Proof
By the definitional abbreviation for the conditional:

$\mathbf A \implies \mathbf B =_{\text{def}} \neg \mathbf A \lor \mathbf B$
the Rule of Addition can be written as:

$\neg q \lor \left({p \lor q}\right)$
This evaluates as follows:

$\begin{array}{|cc|c|ccc|} \hline
\neg & q & \lor & (p & \lor & q) \\
\hline
2 & 1 & 2 & 1 & 1 & 1 \\
1 & 2 & 2 & 1 & 2 & 2 \\
2 & 1 & 2 & 2 & 2 & 1 \\
1 & 2 & 2 & 2 & 2 & 2 \\
\hline
\end{array}$
$\blacksquare$





