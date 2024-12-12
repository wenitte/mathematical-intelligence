# 

Source: https://proofwiki.org/wiki/Definition:Constructed_Semantics/Instance_1/Rule_of_Commutation


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
The Rule of Commutation:

$\left({p \lor q}\right) \implies \left({q \lor p}\right)$
is a tautology in Instance 1 of constructed semantics.


Proof
By the definitional abbreviation for the conditional:

$\mathbf A \implies \mathbf B =_{\text{def}} \neg \mathbf A \lor \mathbf B$
the Rule of Commutation can be written as:

$\neg \left({p \lor q}\right) \lor \left({q \lor p}\right)$
This evaluates as follows:

$\begin{array}{|cccc|c|ccc|} \hline
\neg & (p & \lor & q) & \lor & (q & \lor & p) \\
\hline
2 & 1 & 1 & 1 & 2 & 1 & 1 & 1 \\
1 & 1 & 2 & 2 & 2 & 2 & 2 & 1 \\
1 & 2 & 2 & 1 & 2 & 1 & 2 & 2 \\
1 & 2 & 2 & 2 & 2 & 2 & 2 & 2 \\
\hline
\end{array}$
$\blacksquare$





