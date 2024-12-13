# 

Source: https://proofwiki.org/wiki/Jacobi%27s_Necessary_Condition


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $J$ be a functional, such that:

$J \sqbrk y = \ds \int_a^b \map F {x, y, y'} \rd x$
Let $\map y x$ correspond to the minimum of $J$.
Let:

$F_{y'y'}>0$
along $\map y x$.

Then the open interval $\openint a b$ contains no points conjugate to $a$.


Proof
By Necessary Condition for Twice Differentiable Functional to have Minimum, $J$ is minimised by $y = \map {\hat y} x$ if:

$\delta^2 J \sqbrk {\hat y; h} \ge 0$
for all admissable real functions $h$.
By lemma 1 of Legendre's Condition,

$\ds \delta^2 J \sqbrk {y; h} = \int_a^b \paren {P h'^2 + Q h^2} \rd x$
where:

$P = F_{y' y'}$

This article, or a section of it, needs explaining.In particular: and what is $Q$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Nonnegative Quadratic Functional implies no Interior Conjugate Points, $\openint a b$ does not contain any conjugate points with respect to $J$.
$\blacksquare$


Source of Name
This entry was named for Carl Gustav Jacob Jacobi.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.27$: Jacobi's Necessary Condition. More on Conjugate Points




