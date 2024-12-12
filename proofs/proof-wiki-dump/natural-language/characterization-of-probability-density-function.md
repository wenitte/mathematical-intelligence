# 

Source: https://proofwiki.org/wiki/Characterization_of_Probability_Density_Function

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X: \Omega \to \R$ be a continuous random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $\Omega_X = \Img X$, the image of $X$.

Let the probability density function of $X$ is the mapping $f_X: \R \to \closedint 0 1$ be defined as:

$\forall x \in \R: \map {f_X} x = \begin {cases}
\ds \lim_{\epsilon \mathop \to 0^+} \frac {\map \Pr {x - \frac \epsilon 2 \le X \le x + \frac \epsilon 2} } \epsilon & : x \in \Omega_X \\
0 & : x \notin \Omega_X
\end {cases}$
Suppose that the cumulative distribution function of $X$ defines a continuously differentiable real function $F_X: x \mapsto \map \Pr {X \le x}$.
Then the probability density function of $X$ is the mapping $f_X: \R \to \closedint 0 1$ satisfies:

$\dfrac \d {\d x} \map {F_X} x = \map {f_X} x$.


Proof













\(\ds \map \Pr {x - \frac \epsilon 2 \le X \le x + \frac \epsilon 2}\)

\(=\)







\(\ds \map {F_X} {x + \frac \epsilon 2} - \map {F_X} {x - \frac \epsilon 2} + \map \Pr {X = x -\frac \epsilon 2}\)




















\(\ds \)

\(=\)







\(\ds \map {F_X} {x + \frac \epsilon 2} - \map {F_X} {x - \frac \epsilon 2}\)





Probability of Continuous Random Variable at Single Point is Zero








\(\ds \leadsto \ \ \)





\(\ds \map {f_X} x\)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0^+} \frac {\map {F_x} {x + \frac \epsilon 2} - \map {F_x} {x - \frac \epsilon 2} } \epsilon\)




















\(\ds \)

\(=\)







\(\ds \dfrac \d {\d x} \map {F_X} x\)





Continuous Derivative as Average of One-Sided Derivatives



$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Sources
2001: Michael A. Bean: Probability: The Science of Uncertainty: $\S 4.1$




