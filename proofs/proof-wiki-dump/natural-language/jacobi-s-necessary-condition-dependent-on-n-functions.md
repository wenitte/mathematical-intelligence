# 

Source: https://proofwiki.org/wiki/Jacobi%27s_Necessary_Condition/Dependent_on_N_Functions


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $J$ be a functional, such that:

$J \sqbrk {\mathbf y} = \ds \int_a^b \map F {x, \mathbf y, \mathbf y'} \rd x$
where $\mathbf y = \paren {\sequence {y_i}_{1 \le i \le N} }$ is an N-dimensional real vector.
Let $\map {\mathbf y} x$ correspond to the minimum of $J$.
Let the $N\times N$ matrix $\mathbf P = F_{y_i' y_j'}$ be positive definite along $\map {\mathbf y} x$.

Then the open interval $\openint a b$ contains no points conjugate to $a$.


Proof
By Necessary Condition for Twice Differentiable N Function dependent Functional to have Minimum, $J$ is minimised by $y = \map {\mathbf {\hat y} } x$ if:

$\delta^2 J \sqbrk {\mathbf {\hat y}; \mathbf h} \ge 0$
for all admissable real functions $\mathbf h$.
By lemma 1 of Legendre's Condition:

$\ds \delta^2 J \sqbrk {\mathbf y; \mathbf h} = \int_a^b \paren {\mathbf h' \mathbf P \mathbf h' + \mathbf h \mathbf Q \mathbf h} \rd x$
where:

$\mathbf P = F_{y_i' y_j'}$
By Nonnegative Quadratic N function dependent Functional implies no Interior Conjugate Points, $\openint a b$ does not contain any conjugate points with respect to $J$.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.29$: Generalization to n Unknown Functions




