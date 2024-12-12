# 

Source: https://proofwiki.org/wiki/Dirichlet_L-Function_from_Trivial_Character

Theorem
Let $\chi_0$ be the trivial Dirichlet character modulo $q$.


This article, or a section of it, needs explaining.In particular: Trivial character we got, Dirichlet character we got, we still need a page for trivial Dirichlet character. There exists on another page a link to Definition:Dirichlet Character/Trivial Character which ought to be straightforward to construct.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\map L {s, \chi_0}$ be the Dirichlet $L$-function associated to $\chi_0$.
Let $\map \zeta s$ be the Riemann zeta function.

Then:

$\ds \map L {s, \chi_0} = \map \zeta s \cdot \prod_{p \mathop \divides q} \paren {1 - p^{-s} }$
where $\divides$ denotes divisibility.


This article, or a section of it, needs explaining.In particular: For which $s$? The proof seemingly requires a stronger condition like $\map \Re s > 1$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
By definition:

$\map {\chi_0} a = \begin{cases} 1 & : \gcd \set {a, q} = 1 \\ 0 & : \text{otherwise} \end{cases}$

This article, or a section of it, needs explaining.In particular: Worth specifying the domain of $a$ for added clarity here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Therefore:














\(\ds \map L {s, \chi_0}\)

\(=\)







\(\ds \prod_p \paren {1 - \map \chi p p^{-s} }^{-1}\)





Definition of Euler Product: $p$ ranges over the primes














\(\ds \)

\(=\)







\(\ds \prod_{p \mathop \nmid q} \paren {1 - p^{-s} }^{-1}\)





Fundamental Theorem of Arithmetic: $\gcd \set {p, q} > 1$ if and only if $p \divides q$














\(\ds \)

\(=\)







\(\ds \prod_{p \mathop \divides q} \paren {1 - p^{-s} } \prod_p \paren {1 - p^{-s} }^{-1}\)




















\(\ds \)

\(=\)







\(\ds \map \zeta s \prod_{p \mathop \divides q} \paren {1 - p^{-s} }\)





Definition of Euler Product




This article, or a section of it, needs explaining.In particular: Not sure whether Fundamental Theorem of Arithmetic is where you need to go for $\gcd \set {p, q} > 1$ if and only if $p \divides q$ -- I'm fairly sure there's a result on $\mathsf{Pr} \infty \mathsf{fWiki}$ demonstrating it more directlyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence the result.
$\blacksquare$





