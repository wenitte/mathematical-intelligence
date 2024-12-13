# 

Source: https://proofwiki.org/wiki/L-Function_does_not_Vanish_at_One


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\psi$ be a non-trivial Dirichlet character modulo $q$.
Let $\map L {s, \chi}$ be the Dirichlet $L$-function associated to $\chi$.

Then $\map L {1, \chi} \ne 0$.


Proof
Let $G^*$ be the group of characters modulo $q$.


This article, or a section of it, needs explaining.In particular: "group of characters modulo $q$" - we have the definition for character, and we have (somewhere) the definition of the ring of integers modulo $q$, but not this entity.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\ds \map {\zeta_q} s = \prod_{\chi \mathop \in G^*} \map L {s, \chi} R$.
Among the factors of $\zeta_q$ is the the $L$-function associated to the trivial character, which by Analytic Continuation of Dirichlet L-Function we know to have a simple pole at $s = 1$.
Aiming for a contradiction, suppose $\map L {1, \psi} = 0$. 
Then the zero of this factor kills the pole of the principal $L$-function.

So by Analytic Continuation of Dirichlet L-Function $\zeta_q$ is analytic on $\map \Re s > 0$.
For $\map \Re s > 1$ we have:














\(\ds \map {\zeta_q} s\)

\(=\)







\(\ds \prod_{\chi \mathop \in G^*} \prod_p \frac 1 {1 - \map \chi p p^{-s} }\)





Definition of Euler Product, where $p$ ranges over the primes














\(\ds \)

\(=\)







\(\ds \prod_{p \mathop \nmid q} \prod_{\chi \mathop \in G^*}  \frac 1 {1 - \map \chi p p^{-s} }\)





because the Euler product is absolutely convergent



For any prime $p$, let $f_p$ be the order of $p$ mod $q$.


This article, or a section of it, needs explaining.In particular: orderYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\map \chi p^{f_p} = \map \chi {p^{f_p} } = \map \chi 1 = 1$
So $\map \chi p$ is an $f_p$th root of unity.
Moreover by the Orthogonality Relations for Characters each distinct such root occurs $\map \phi q / f_p$ times among the numbers $\map \chi p$ where $\chi \in G^*$.
Also, letting $\xi$ be a primitive $f_p$th root of unity we find that for any $u \in \C$:

$\ds \prod_{i \mathop = 0}^{f_p} \paren {1 - \xi^i u} = 1 - u^\xi$
Putting these facts together:

$\ds \prod_{\chi \mathop \in G^*} \frac 1 {1 - \map \chi p p^{-s} } = \paren {\frac 1 {1 - p^{-f_p s} } }^{\map \phi q / f_p}$

Therefore:














\(\ds \map {\zeta_q} s\)

\(=\)







\(\ds \prod_{p \mathop \divides q} \paren {\frac 1 {1 - p^{-f_p s} } }^{\map \phi q / f_p}\)




















\(\ds \)

\(=\)







\(\ds \prod_{p \mathop \divides q} \paren {1 + p^{-f_p s} + p^{-2 f_p s} + \cdots}^{\map \phi q / f_p}\)










Also, if $\chi_0$ is the trivial character modulo $q$, by definition of Euler product we have:

$\ds \map L {\map \phi q s, \chi_0} = \prod_{p \mathop \nmid q} \paren {1 + p^{-\map \phi q s} + p^{-2 \map \phi q s} + \cdots}$
from which we see that for $s \in \R_{\ge 0}$:

$\map {\zeta_q} s \ge \map L {\map \phi q s, \chi_0}$
However, by Analytic Continuation of Dirichlet L-Function, $\map L {\map \phi q s, \chi_0}$ diverges for $s = \map \phi q^{-1}$, and therefore so does $\map {\zeta_q} s$.
But we showed above that $\map {\zeta_q} s$ converges for $\map \Re s > 0$, a contradiction.
$\blacksquare$





