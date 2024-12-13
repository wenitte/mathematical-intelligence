# 

Source: https://proofwiki.org/wiki/Laplace_Transform_Determination/Series_Method



Solution Technique for Laplace Transform
To find the Laplace transform of a function $f$, one can evaluate it as follows:

Let $\map f t$ have a power series expansion given by:














\(\ds \map f t\)

\(=\)







\(\ds a_0 + a_1 t + a_2 t^2 + \dotsb\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty a_n t^n\)










Then the Laplace transform of $f$ can be found by taking the sum of the Laplace transforms of each term in the series:














\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \dfrac {a_0} s + \dfrac {a_1} {s^2} + \dfrac {a_2} {s^3} + \dotsb\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {n! \, a_n} {s^{n + 1} }\)









if $\laptrans {\map f t}$ is convergent for $s > \gamma$.


Proof
From Laplace Transform of Positive Integer Power:

$\laptrans {t^n} = \dfrac {n!} {s^{n + 1} }$

Then it is seen that $\ds \laptrans {\sum_{n \mathop = 0}^\infty a_n t^n}$ is a Linear Combination of Laplace Transforms.
The result follows.
$\blacksquare$


This article, or a section of it, needs explaining.In particular: The significance of $s > \gamma$ is to be established.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Examples
Laplace Transform Determination/Series Method/Examples

Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Methods of Finding Laplace Transforms: $2$. Series method




