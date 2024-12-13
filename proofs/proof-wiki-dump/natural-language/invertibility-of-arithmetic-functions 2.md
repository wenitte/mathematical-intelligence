# 

Source: https://proofwiki.org/wiki/Invertibility_of_Arithmetic_Functions



Theorem
Let $f: \N \to \C$ be an arithmetic function.

Then $f$ has a Dirichlet inverse if and only if:

$\map f 1 \ne 0$


Proof
Let $*$ denote Dirichlet convolution.
Let $\varepsilon$ denote the identity arithmetic function.


Sufficient Condition
Let $f$ have a Dirichlet inverse $g$:

$f * g = \varepsilon$
Then:














\(\ds 1\)

\(=\)







\(\ds \map \varepsilon 1\)





Definition of Identity Arithmetic Function














\(\ds \)

\(=\)







\(\ds \map {\paren {f * g} } 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{d \mathop \divides 1} \map f d \map g {d^{-1} }\)





Definition of Dirichlet Convolution














\(\ds \)

\(=\)







\(\ds \map f 1 \map g 1\)





Divisors of One



Thus $\map f 1 \ne 0$.
$\Box$


Necessary Condition
Suppose that $\map f 1 \ne 0$.
We want to find an arithmetic function $g$ such that:

$(1): \quad \map {\paren {f * g} } 1 = 1$
$(2): \quad \map {\paren {f * g} } n = 0$ for all $n > 1$
We have:

$\map {\paren {f * g} } 1 = \map f 1 \map g 1$
So we have no choice but to define:

$\map g 1 = \paren {\map f 1}^{-1}$
and condition $(1)$ is satisfied.

Condition $(2)$ can be written as:














\(\ds 0\)

\(=\)







\(\ds \sum_{d \mathop \divides n} \map f d \map g {\frac n d}\)




















\(\ds \)

\(=\)







\(\ds \map f 1 \map g n + \sum_{\substack {d \mathop \divides n \\ d \mathop > 1} } \map f d \map g {\frac n d}\)










That is:

$\map g n = -\dfrac 1 {\map f 1} \ds \sum_{\substack {d \mathop \divides n \\ d \mathop > 1} } \map f d \map g {\frac n d}$
We can recursively define $g$ by this formula, starting with $\map g 1$ as above.
By definition, $g$ then satisfies:

$g * f = \varepsilon$
$\blacksquare$


Also see
Units of Ring of Arithmetic Functions




