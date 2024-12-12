# 

Source: https://proofwiki.org/wiki/Cauchy_Distribution_is_Symmetric_about_Median

Theorem
Let $X$ be a continuous random variable with a Cauchy distribution:

$\map {f_X} x = \dfrac 1 {\pi \lambda \paren {1 + \paren {\frac {x - \gamma} \lambda }^2} }$
for:

$\lambda \in \R_{>0}$
$\gamma \in \R$
$X$ is (reflectionally) symmetric about the vertical line through the median $\gamma$.


Proof
Recall from Median of Cauchy Distribution‎ that $\gamma$ is indeed the median of $X$.














\(\ds \map {f_X} {2 \gamma - x}\)

\(=\)







\(\ds \frac 1 {\pi \lambda \paren {1 + \paren {\frac {(2 \gamma - x) - \gamma} \lambda}^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\pi \lambda \paren {1 + \paren {\frac {\gamma - x} \lambda}^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\pi \lambda \paren {1 + \paren {\frac {x - \gamma} \lambda}^2} }\)




















\(\ds \)

\(=\)







\(\ds \map {f_X} x\)









So $X$ is symmetric about the line $x = \gamma$.
$\blacksquare$


This article, or a section of it, needs explaining.In particular: needs a link to an analytic geometrical demonstration that plane reflection is indeed governed by that equationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cauchy distribution




