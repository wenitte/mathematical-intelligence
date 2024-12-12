# 

Source: https://proofwiki.org/wiki/Definition:Constructed_Semantics/Instance_3/Rule_of_Idempotence


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
The Rule of Idempotence:

$(p \lor p) \implies p$
is a tautology in Instance 3 of constructed semantics.


Proof
By the definitional abbreviation for the conditional:

$\mathbf A \implies \mathbf B =_{\text{def}} \neg \mathbf A \lor \mathbf B$
the Rule of Idempotence can be written as:

$\neg \left({p \lor p}\right) \lor p$
This evaluates as follows:

$\begin{array}{|cccc|c|c|} \hline
\neg & (p & \lor & p) & \lor & p \\
\hline
2 & 0 & 0 & 0 & 0 & 0 \\
1 & 1 & 1 & 1 & 1 & 1 \\
0 & 2 & 2 & 2 & 0 & 2 \\
\hline
\end{array}$
$\blacksquare$





