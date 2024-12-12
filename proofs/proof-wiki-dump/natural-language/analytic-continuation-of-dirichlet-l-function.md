# 

Source: https://proofwiki.org/wiki/Analytic_Continuation_of_Dirichlet_L-Function


This article needs to be linked to other articles.In particular: analytic continuation, analytic, etc.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\chi : G := \paren {\Z / q \Z}^\times \to \C^\times$ be a Dirichlet character modulo $q$.


This article, or a section of it, needs explaining.In particular: $\C^\times$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\map L {s, \chi}$ be the Dirichlet $L$-function for $\chi$.

Let $\chi$ be the trivial character.
Then $\map L {s, \chi}$ has an analytic continuation to $\C$ except for a simple pole at $s = 1$.

Let $\chi$ be non-trivial.
Then $\map L {s, \chi}$ is analytic on $\map \Re s > 0$.


Proof
Let $\chi$ be the trivial character.
Then by Dirichlet L-Function from Trivial Character:

$\ds \map L {s, \chi} = \map \zeta s \cdot \prod_{p \mathop \divides q} \paren {1 - p^{-s} }$
where $\divides$ denotes divisibility.
Also, by Poles of Riemann Zeta Function, $\zeta$ is analytic on $\C$ except for a simple pole at $s = 1$.
Since $\map L {s, \chi}$ is just $\zeta$ times some constant, the same holds for this function.

If $\chi$ is non-trivial, then by the Orthogonality Relations for Characters:

$\ds \sum_{x \mathop \in G} \map \chi x = 0$
By definition, $\chi$ is $q$-periodic, and zero on integers not coprime to $q$.
So for any $M \in \N$:

$\ds \sum_{n \mathop = M + 1}^{M + Q} \map \chi n = 0$

Let $M, N \in \N$ be arbitrary.
Let $d$ be such that $M + q d \le N \le M + q \paren {d + 1}$.

Then:














\(\ds \sum_{n \mathop = M}^N \map \chi n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{d - 1} \sum_{n \mathop = 0}^{q - 1} \map \chi {M + k q + n} + \sum_{n \mathop = M + q d}^N \map \chi n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = M \mathop + q d}^N \map \chi n\)





because $\chi$ is $q$-periodic, and zero on integers not coprime to $q$














\(\ds \)

\(\le\)







\(\ds q\)





because $\size {N - M + q d} \le q$



So the coefficients $\map \chi n$ of $\map L {s, \chi}$ have bounded partial sums.
Therefore, by Convergence of Dirichlet Series with Bounded Partial Sums, $\map L {s, \chi}$ converges locally uniformly to an analytic function on $\map \Re s > 0$.
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: Should be extended to all of $\C$, put the above down to get to Dirichlet's theoremYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




