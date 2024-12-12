# 

Source: https://proofwiki.org/wiki/Dirichlet%27s_Theorem_on_Arithmetic_Sequences/Lemma_2

Lemma for Dirichlet's Theorem on Arithmetic Sequences
Let $a, q$ be coprime integers.
Let $\PP_{a, q}$ be the set of primes $p$ such that $p \equiv a \pmod q$.
Define:

$\eta_{a, q} : n \mapsto \begin{cases}
1 & : n \equiv a \pmod q\\
0 & : \text{otherwise}
\end{cases}$

Let $G = \paren {\Z / q \Z}^\times$.
Let $G^*$ be the dual group of Dirichlet characters on $G$.


This article, or a section of it, needs explaining.In particular: Explain the notation $\paren {\Z / q \Z}^\times$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then for all $n \in \N$:

$\ds \map {\eta_{a, q} } n = \sum_{\chi \mathop \in G^*} \frac {\map {\overline \chi} a} {\map \phi q} \, \map \chi n$


Proof
There is only one $x \in G$ such that $\map \eta x \ne 0$, and this equals $\map \eta a = 1$.


This article, or a section of it, needs explaining.In particular: Back up the above statement by a link or an explanation. Are we sure that $\map \eta x$ means $\map {\eta_{a, q} } x$ here?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
So:

$\ds \sum_{x \mathop \in G} \map {\eta_{a, q} } x \, \map {\overline \chi} x = \map {\overline \chi} a$
Therefore, by Discrete Fourier Transform on Abelian Group we have for all $x \in G$:

$\ds \map \eta x = \frac 1 {\map \phi q} \sum_{\chi \mathop \in G^*} \map {\overline \chi} a \, \map \chi x$
as required.
$\blacksquare$





