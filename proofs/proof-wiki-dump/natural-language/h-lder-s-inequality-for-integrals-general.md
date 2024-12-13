# 

Source: https://proofwiki.org/wiki/H%C3%B6lder%27s_Inequality_for_Integrals/General

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
For $i = 1, \ldots, n$ let $p_i \in \R_{>0}$ such that:

$\ds \sum_{i \mathop = 1}^n \frac 1 {p_i} = 1$
Let $f_i \in \map {\LL^{p_i} } \mu, f_i: X \to \R$, where $\LL$ denotes Lebesgue space.

Then their pointwise product $\ds \prod_{i \mathop = 1}^n f_i$ is integrable, that is:

$\ds \prod_{i \mathop = 1}^n f_i \in \map {\LL^1} \mu$
and:

$\ds \norm {\prod_{i \mathop = 1}^n f_i}_1 = \int \size {\prod_{i \mathop = 1}^n f_i} \rd \mu \le \prod_{i \mathop = 1}^n \norm {f_i}_{p_i}$
where the various instances of $\norm {\, \cdot \,}$ signify $p$-seminorms.


Proof

This article, or a section of it, needs explaining.In particular: Has it been demonstrated for $i = 1$? Best if this were put into the house style of induction proofs.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We use the Principle of Mathematical Induction.
Let it be assumed that the result holds for $i = n - 1$.
We show that the result holds for $i = n$. 

Define:

$q_n := \dfrac {p_n} {p_n - 1}$
and for $i = 1, \ldots, n - 1$, define:

$r_i := p_i \cdot \paren {1 - \dfrac 1 {p_n} }$
Then:

$\dfrac 1 {p_n} + \dfrac 1 {q_n} = 1$
$\ds \sum_{i \mathop = 1}^{n - 1} \dfrac 1 {r_i} = 1$
and:

$q_n \cdot r_i = p_i$

Applying Hölder's Inequality for Integrals to $\ds f := \prod_{i \mathop = 1}^{n - 1} f_i$ and $g := f_n$, we find:














\(\ds \int \size {\prod_{i \mathop = 1}^n f_i} \rd \mu\)

\(\le\)







\(\ds \norm {f_n}_{p_n} \cdot \norm {\prod_{i \mathop = 1}^{n - 1} f_i}_{q_n}\)




















\(\ds \)

\(=\)







\(\ds \norm {f_n}_{p_n} \cdot \paren {\int \prod_{i \mathop = 1}^{n - 1} \size { {f_i}^{q_n} } \rd \mu}^\frac 1 {q_n}\)




















\(\ds \)

\(\le\)







\(\ds \norm {f_n}_{p_n} \cdot \paren {\prod_{i \mathop = 1}^{n-1} \norm { {f_i}^{q_n} }_{r_i} }^\frac 1 {q_n}\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^n \norm {f_i}_{p_i}\)









$\blacksquare$


Source of Name
This entry was named for Otto Ludwig Hölder.





