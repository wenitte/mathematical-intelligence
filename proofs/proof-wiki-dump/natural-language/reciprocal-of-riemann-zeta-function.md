# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Riemann_Zeta_Function

Theorem
For $\map \Re z > 1$:

$\ds \frac 1 {\map \zeta z} = \sum_{k \mathop = 1}^\infty \frac{\mu \left({k}\right)} {k^z}$
where:

$\zeta$ is the Riemann zeta function
$\mu$ is the Möbius function.


Proof
By Sum of Reciprocals of Powers as Euler Product:














\(\ds \frac 1 {\map \zeta z}\)

\(=\)







\(\ds \prod_{\text {$p$ prime} } \paren {1 - p^{-z} }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \frac 1 {2^z} } \paren {1 - \frac 1 {3^z} } \paren {1 - \frac 1 {5^z} } \paren {1 - \frac 1 {7^z} } \paren {1 - \frac 1 {11^z} } \cdots\)










The expansion of this product will be:

$\ds 1 + \sum_{\text {$n$ prime} } \paren {\frac{-1} {n^z} } + \sum_{n \mathop = p_1 p_2} \paren {\frac {-1} {p_1^z} \frac {-1} {p_2^z} } + \sum_{n \mathop = p_1 p_2 p_3} \paren {\frac {-1} {p_1^z} \frac {-1} {p_2^z} \frac {-1}{p_3^z} } + \cdots$
which is precisely:

$\ds \sum_{n \mathop = 1}^\infty \frac {\map \mu n} {n^z}$
as desired.


This article contains statements that are justified by handwavery.In particular: get this from Dirichlet Series of Inverse of Arithmetic Function insteadYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$





