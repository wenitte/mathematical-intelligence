# 

Source: https://proofwiki.org/wiki/Definition:Constructed_Semantics/Instance_4/Factor_Principle


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
The Factor Principle:

$\vdash \paren {p \implies q} \implies \paren {\paren {r \lor p} \implies \paren {r \lor q} }$


$\paren {p \implies q} \implies \paren {\paren {r \lor p} \implies \paren {r \lor q} }$
is a tautology in Instance 4 of constructed semantics.


Proof

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By the definitional abbreviation for the conditional:

$\mathbf A \implies \mathbf B =_{\text{def}} \neg \mathbf A \lor \mathbf B$
the Factor Principle can be written as:

$\neg \paren {\neg p \lor q} \lor \paren {\neg \paren {r \lor p} \lor \paren {r \lor q} }$
This evaluates as follows:

$\begin{array}{|ccccc|c|cccccccc|} \hline
\neg & (\neg & p & \lor & q) & \lor & (\neg & (r & \lor & p) & \lor & (r & \lor & q)) \\
\hline
1 & 1 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
1 & 0 & 2 & 0 & 0 & 0 & 1 & 0 & 0 & 2 & 0 & 0 & 0 & 0 \\
1 & 2 & 3 & 0 & 0 & 0 & 1 & 0 & 0 & 3 & 0 & 0 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 & 0 & 1 & 1 & 0 & 0 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 2 & 0 & 0 & 0 & 0 & 1 & 2 & 2 & 0 & 1 & 0 & 0 \\
1 & 2 & 3 & 0 & 0 & 0 & 2 & 1 & 3 & 3 & 0 & 1 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 & 0 & 1 & 2 & 0 & 0 & 0 & 2 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 0 & 2 & 2 & 1 & 0 & 2 & 0 & 0 \\
1 & 0 & 2 & 0 & 0 & 0 & 0 & 2 & 2 & 2 & 0 & 2 & 0 & 0 \\
1 & 2 & 3 & 0 & 0 & 0 & 1 & 2 & 0 & 3 & 0 & 2 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 & 0 & 1 & 3 & 0 & 0 & 0 & 3 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 & 0 & 2 & 3 & 3 & 1 & 0 & 3 & 0 & 0 \\
1 & 0 & 2 & 0 & 0 & 0 & 2 & 3 & 3 & 2 & 0 & 3 & 0 & 0 \\
1 & 2 & 3 & 0 & 0 & 0 & 2 & 3 & 3 & 3 & 0 & 3 & 0 & 0 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 1 \\
1 & 0 & 2 & 0 & 1 & 0 & 1 & 0 & 0 & 2 & 0 & 0 & 0 & 1 \\
0 & 2 & 3 & 2 & 1 & 0 & 1 & 0 & 0 & 3 & 0 & 0 & 0 & 1 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 1 & 1 & 1 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 1 & 1 \\
1 & 0 & 2 & 0 & 1 & 0 & 0 & 1 & 2 & 2 & 0 & 1 & 1 & 1 \\
0 & 2 & 3 & 2 & 1 & 0 & 2 & 1 & 3 & 3 & 2 & 1 & 1 & 1 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 & 2 & 0 & 0 & 1 & 2 & 2 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 0 & 2 & 2 & 1 & 0 & 2 & 2 & 1 \\
1 & 0 & 2 & 0 & 1 & 0 & 0 & 2 & 2 & 2 & 0 & 2 & 2 & 1 \\
0 & 2 & 3 & 2 & 1 & 0 & 1 & 2 & 0 & 3 & 1 & 2 & 2 & 1 \\
0 & 1 & 0 & 1 & 1 & 0 & 1 & 3 & 0 & 0 & 3 & 3 & 3 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 0 & 3 & 1 & 1 & 0 & 3 & 3 & 1 \\
1 & 0 & 2 & 0 & 1 & 0 & 2 & 3 & 3 & 2 & 0 & 3 & 3 & 1 \\
0 & 2 & 3 & 2 & 1 & 0 & 2 & 3 & 3 & 3 & 0 & 3 & 3 & 1 \\
0 & 1 & 0 & 2 & 2 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 2 \\
1 & 0 & 1 & 0 & 2 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 2 \\
1 & 0 & 2 & 0 & 2 & 0 & 1 & 0 & 0 & 2 & 0 & 0 & 0 & 2 \\
0 & 2 & 3 & 2 & 2 & 0 & 1 & 0 & 0 & 3 & 0 & 0 & 0 & 2 \\
0 & 1 & 0 & 2 & 2 & 0 & 1 & 1 & 0 & 0 & 2 & 1 & 2 & 2 \\
1 & 0 & 1 & 0 & 2 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 2 & 2 \\
1 & 0 & 2 & 0 & 2 & 0 & 0 & 1 & 2 & 2 & 0 & 1 & 2 & 2 \\
0 & 2 & 3 & 2 & 2 & 0 & 2 & 1 & 3 & 3 & 2 & 1 & 2 & 2 \\
0 & 1 & 0 & 2 & 2 & 0 & 1 & 2 & 0 & 0 & 2 & 2 & 2 & 2 \\
1 & 0 & 1 & 0 & 2 & 0 & 0 & 2 & 2 & 1 & 0 & 2 & 2 & 2 \\
1 & 0 & 2 & 0 & 2 & 0 & 0 & 2 & 2 & 2 & 0 & 2 & 2 & 2 \\
0 & 2 & 3 & 2 & 2 & 0 & 1 & 2 & 0 & 3 & 2 & 2 & 2 & 2 \\
0 & 1 & 0 & 2 & 2 & 0 & 1 & 3 & 0 & 0 & 3 & 3 & 3 & 2 \\
1 & 0 & 1 & 0 & 2 & 0 & 2 & 3 & 3 & 1 & 0 & 3 & 3 & 2 \\
1 & 0 & 2 & 0 & 2 & 0 & 2 & 3 & 3 & 2 & 0 & 3 & 3 & 2 \\
0 & 2 & 3 & 2 & 2 & 0 & 2 & 3 & 3 & 3 & 0 & 3 & 3 & 2 \\
2 & 1 & 0 & 3 & 3 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 3 \\
1 & 0 & 1 & 0 & 3 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 0 & 3 \\
1 & 0 & 2 & 0 & 3 & 0 & 1 & 0 & 0 & 2 & 0 & 0 & 0 & 3 \\
1 & 2 & 3 & 0 & 3 & 0 & 1 & 0 & 0 & 3 & 0 & 0 & 0 & 3 \\
2 & 1 & 0 & 3 & 3 & 0 & 1 & 1 & 0 & 0 & 3 & 1 & 3 & 3 \\
1 & 0 & 1 & 0 & 3 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 3 & 3 \\
1 & 0 & 2 & 0 & 3 & 0 & 0 & 1 & 2 & 2 & 0 & 1 & 3 & 3 \\
1 & 2 & 3 & 0 & 3 & 0 & 2 & 1 & 3 & 3 & 0 & 1 & 3 & 3 \\
2 & 1 & 0 & 3 & 3 & 0 & 1 & 2 & 0 & 0 & 0 & 2 & 0 & 3 \\
1 & 0 & 1 & 0 & 3 & 0 & 0 & 2 & 2 & 1 & 0 & 2 & 0 & 3 \\
1 & 0 & 2 & 0 & 3 & 0 & 0 & 2 & 2 & 2 & 0 & 2 & 0 & 3 \\
1 & 2 & 3 & 0 & 3 & 0 & 1 & 2 & 0 & 3 & 0 & 2 & 0 & 3 \\
2 & 1 & 0 & 3 & 3 & 0 & 1 & 3 & 0 & 0 & 3 & 3 & 3 & 3 \\
1 & 0 & 1 & 0 & 3 & 0 & 2 & 3 & 3 & 1 & 0 & 3 & 3 & 3 \\
1 & 0 & 2 & 0 & 3 & 0 & 2 & 3 & 3 & 2 & 0 & 3 & 3 & 3 \\
1 & 2 & 3 & 0 & 3 & 0 & 2 & 3 & 3 & 3 & 0 & 3 & 3 & 3 \\
\hline
\end{array}$
$\blacksquare$


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




