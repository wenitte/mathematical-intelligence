# 

Source: https://proofwiki.org/wiki/Dirichlet%27s_Theorem_on_Arithmetic_Sequences/Lemma_1


This article needs to be linked to other articles.In particular: bounded, finiteYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Dirichlet's Theorem on Arithmetic Sequences
Let $a, q$ be coprime integers.
Let $\PP_{a, q}$ be the set of primes $p$ such that $p \equiv a \pmod q$.

Let $\chi$ be a Dirichlet character modulo $q$.
Let:

$\ds \map f s = \sum_p \map \chi p p^{-s}$
If $\chi$ is non-trivial then $\map f s$ is bounded as $s \to 1$.
If $\chi$ is the trivial character then:

$\map f s \sim \map \ln {\dfrac 1 {s - 1} }$
as $s \to 1$.


Proof
By Logarithm of Dirichlet L-Functions:

$(1): \quad \ds \sum_p \map \chi p p^{-s} = \ln \map L {s, \chi} - \sum_p \sum_{n \mathop \ge 2} \frac {\map \chi p^n} {n p^{n s} }$
If $\chi$ is non-trivial, then by L-Function does not Vanish at One, $\ln \map L {s, \chi}$ is bounded as $s \to 1$.
If $\chi$ is trivial, then by Analytic Continuation of Dirichlet L-Function, $\map L {s, \chi}$ has a simple pole at $s = 1$.
Therefore, in this case:

$\map L {s, \chi} \sim \dfrac \lambda {s - 1}$
where $\lambda$ is the residue of $\map L {s, \chi}$ at $1$, and:

$\ln \map L {s, \chi} \sim \map \ln {\dfrac \lambda {s - 1} } \sim \map \ln {\dfrac 1 {s - 1} }$
Thus if we can show that the second term of $(1)$ is bounded, the result holds.

On $\map \Re s > 1$:














\(\ds \size {\sum_p \sum_{n \mathop \ge 2} \frac {\map \chi p^n} {n p^{n s} } }\)

\(\le\)







\(\ds \sum_p \sum_{n \mathop \ge 2} \frac 1 {\size {p^s}^n}\)




















\(\ds \)

\(=\)







\(\ds \sum_p \frac 1 {\size {p^{2 s} } \, \size {p^s - 1}^n}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(\le\)







\(\ds \sum_p \frac 1 {p^2}\)





because $\map \Re s > 1$














\(\ds \)

\(\le\)







\(\ds \sum_n \frac 1 {n^2}\)









This last is $\map \zeta 2$ where $\zeta$ is the Riemann zeta function, so is finite.
$\blacksquare$





