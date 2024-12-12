# 

Source: https://proofwiki.org/wiki/Definition:Constructed_Semantics/Instance_2/Rule_of_Commutation


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
The Rule of Commutation:

$\left({p \lor q}\right) \implies \left({q \lor p}\right)$
is a tautology in Instance 2 of constructed semantics.


Proof

This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
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
1 & 1 & 0 & 0 & 0 & 0 & 0 & 1 \\
0 & 1 & 1 & 1 & 0 & 1 & 1 & 1 \\
2 & 1 & 2 & 2 & 0 & 2 & 2 & 1 \\
1 & 2 & 0 & 0 & 0 & 0 & 0 & 2 \\
2 & 2 & 2 & 1 & 0 & 1 & 2 & 2 \\
1 & 2 & 0 & 2 & 0 & 2 & 0 & 2 \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.6$: Independence




