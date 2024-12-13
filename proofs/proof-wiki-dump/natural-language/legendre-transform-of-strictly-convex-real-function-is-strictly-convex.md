# 

Source: https://proofwiki.org/wiki/Legendre_Transform_of_Strictly_Convex_Real_Function_is_Strictly_Convex


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\map f x$ be a strictly convex real function.

Then the function $\map {f^*} p$ acquired through the Legendre Transform is also strictly convex.


Proof













\(\ds \frac {\d f^*} {\d p}\)

\(=\)







\(\ds -\frac {\d \map f {\map x p} } {\d p} + \frac {\map \d {p \map x p} } {\d p}\)





Definition of Legendre Transform














\(\ds \)

\(=\)







\(\ds -f' \frac {\d x} {\d p} + x + p \frac {\d x} {\d p}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -p \frac {\d x} {\d p} + x + p \frac {\d x} {\d p}\)





Definition of $p$














\(\ds \)

\(=\)







\(\ds x\)






















\(\ds \frac {\d^2 f^*} {\d p^2}\)

\(=\)







\(\ds \map {x'} p\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map {p'} x}\)





Derivative of Inverse Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\map {f} x}\)





Definition of $p$




We have that $\map f x$ is real and strictly convex.
Hence, by Real Function is Strictly Convex iff Derivative is Strictly Increasing, $\map {f'} x$ is strictly increasing.
Then:

$\map {f} x > 0$
Therefore, the first derivative of $f^*$ is strictly increasing.
By Real Function is Strictly Convex iff Derivative is Strictly Increasing, $f^*$ is strictly convex.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.18$: The Legendre Tranformation




