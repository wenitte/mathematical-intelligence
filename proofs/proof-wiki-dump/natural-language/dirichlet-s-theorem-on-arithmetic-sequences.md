# 

Source: https://proofwiki.org/wiki/Dirichlet%27s_Theorem_on_Arithmetic_Sequences



Theorem
Let $a, q$ be coprime integers.
Let $\PP_{a, q}$ be the set of primes $p$ such that $p \equiv a \pmod q$.

Then $\PP_{a, q}$ has Dirichlet density:

$\map \phi q^{-1}$
where $\phi$ is Euler's phi function.

In particular, $\PP_{a, q}$ is infinite.


Proof
Lemma 1
Let $\chi$ be a Dirichlet character modulo $q$.
Let:

$\ds \map f s = \sum_p \map \chi p p^{-s}$
If $\chi$ is non-trivial then $\map f s$ is bounded as $s \to 1$.
If $\chi$ is the trivial character then:

$\map f s \sim \map \ln {\dfrac 1 {s - 1} }$
as $s \to 1$.
$\Box$

Define:

$\eta_{a, q} : n \mapsto \begin {cases} 1 & : n \equiv a \pmod q \\ 0 & : \text {otherwise} \end {cases}$


Lemma 2
Let $G = \paren {\Z / q \Z}^\times$.
Let $G^*$ be the dual group of Dirichlet characters on $G$.


This article, or a section of it, needs explaining.In particular: Explain the notation $\paren {\Z / q \Z}^\times$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then for all $n \in \N$:

$\ds \map {\eta_{a, q} } n = \sum_{\chi \mathop \in G^*} \frac {\map {\overline \chi} a} {\map \phi q} \, \map \chi n$
$\Box$

We have:














\(\ds \sum_{p \mathop \in \PP_{a, q} } p^{-s}\)

\(=\)







\(\ds \sum_p \map {\eta_{a, q} } p p^{-s}\)




















\(\ds \)

\(=\)







\(\ds \sum_p \sum_{\chi \mathop \in G^*} \frac {\map {\overline \chi} a} {\map \phi q} \, \map \chi p p^{-s}\)





Lemma 2














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \phi q} \sum_p \frac {\map {\chi_0} p} {p^s} + \sum_{\substack {\chi \mathop \in G^* \\ \chi \mathop \ne \chi_0} } \frac {\map {\overline \chi} a} {\map \phi q} \sum_p \map \chi p p^{-s}\)





where $\chi_0$ is the trivial character on $G$



By Lemma 1, the first term grows like $\dfrac 1 {\map \phi q} \ln \dfrac 1 {s - 1}$ as $s \to 1$, while all other terms are bounded.
That is:

$\ds \sum_{p \mathop \in \PP_{a, q} } \frac 1 {p^s} \sim \frac 1 {\map \phi q} \, \map \ln {\dfrac 1 {s - 1} }$
as $s \to 1$. 
$\blacksquare$


Also known as
Dirichlet's Theorem on Arithmetic Sequences is also known just as Dirichlet's Theorem.
However, there is more than one theorem named such, so it is preferable to use the full form.


Source of Name
This entry was named for Johann Peter Gustav Lejeune Dirichlet.


Historical Note
Dirichlet's Theorem on Arithmetic Sequences was first proved by Peter Dirichlet in $1837$.


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Exercise $9$ (mentioned, but not proved)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.28$: Dirichlet ($\text {1805}$ – $\text {1859}$)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.16$: The Sequence of Primes: Theorem $4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Dirichlet's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Dirichlet's theorem




