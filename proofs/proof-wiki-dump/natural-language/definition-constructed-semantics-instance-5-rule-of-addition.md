# 

Source: https://proofwiki.org/wiki/Definition:Constructed_Semantics/Instance_5/Rule_of_Addition


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
The Rule of Addition:

$q \implies (q \lor p)$
is a tautology in Instance 5 of constructed semantics.


Proof

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By the definitional abbreviation for the conditional:

$\mathbf A \implies \mathbf B =_{\text{def}} \neg \mathbf A \lor \mathbf B$
the Rule of Addition can be written as:

$\neg q \lor \left({p \lor q}\right)$
This evaluates as follows:

$\begin{array}{|cc|c|ccc|} \hline
\neg & q & \lor & (p & \lor & q) \\
\hline
1 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 1 \\
3 & 2 & 0 & 0 & 0 & 2 \\
0 & 3 & 0 & 0 & 0 & 3 \\
1 & 0 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 1 & 1 \\
3 & 2 & 0 & 1 & 2 & 2 \\
0 & 3 & 0 & 1 & 3 & 3 \\
1 & 0 & 0 & 2 & 0 & 0 \\
0 & 1 & 0 & 2 & 2 & 1 \\
3 & 2 & 0 & 2 & 2 & 2 \\
0 & 3 & 0 & 2 & 0 & 3 \\
1 & 0 & 0 & 3 & 0 & 0 \\
0 & 1 & 0 & 3 & 3 & 1 \\
3 & 2 & 0 & 3 & 0 & 2 \\
0 & 3 & 0 & 3 & 3 & 3 \\
\hline
\end{array}$
$\blacksquare$





