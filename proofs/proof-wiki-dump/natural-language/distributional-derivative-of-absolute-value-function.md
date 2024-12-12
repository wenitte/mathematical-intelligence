# 

Source: https://proofwiki.org/wiki/Distributional_Derivative_of_Absolute_Value_Function



Theorem
Let $H: \R \to \closedint 0 1$ be the Heaviside step function.
Let $\size x$ be the absolute value of $x$.
Let $T_{\size x}$ be the distribution associated with $\size x$.

Then the distributional derivative of $T_{\size x}$ is $T_{2 H - 1}$


Proof













\(\ds \dfrac {\d \size x} {\d x}\)

\(=\)







\(\ds \begin{cases}
                   1 & : x > 0 \\
                  -1 & : x < 0
            \end{cases}\)





















\(\ds \)

\(=\)







\(\ds -1 + \begin{cases}
                   2 & : x > 0 \\
                   0 & : x < 0
            \end{cases}\)





















\(\ds \)

\(=\)







\(\ds -1 + 2 \begin{cases}
                   1 & : x > 0 \\
                   0 & : x < 0
            \end{cases}\)





















\(\ds \)

\(=\)







\(\ds 2 \map H x - 1\)





Definition of Heaviside Step Function



Furthermore:

$\ds \lim_{x \mathop \to 0^+} \size x = \lim_{x \mathop \to 0^-} \size x = 0$
By the Jump Rule:

$T_{\size x}' = T_{2H - 1}$
$\blacksquare$


Also see
Derivative of Absolute Value Function


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




