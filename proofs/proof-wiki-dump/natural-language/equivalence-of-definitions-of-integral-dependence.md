# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Integral_Dependence


It has been suggested that this page or section be merged into Equivalence of Definitions of Integral Element of Algebra.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $A$ be an extension of a commutative ring with unity $R$.
For $x \in A$, the following are equivalent:




\(\text {(1)}: \quad\)









\(\ds \)

\(\)







\(\ds \) $x$ is integral over $R$ \(\)










\(\text {(2)}: \quad\)









\(\ds \)

\(\)







\(\ds \) The $R$-module $R \sqbrk x$ is finitely generated \(\)










\(\text {(3)}: \quad\)









\(\ds \)

\(\)







\(\ds \) There exists a subring $B$ of $A$ such that $x \in B$, $R \subseteq B$ and $B$ is a finitely generated $R$-module \(\)










\(\text {(4)}: \quad\)









\(\ds \)

\(\)







\(\ds \) There exists a subring $B$ of $A$ such that $x B \subseteq B$ and $B$ is finitely generated over $R$ \(\)










\(\text {(5)}: \quad\)









\(\ds \)

\(\)







\(\ds \) There exists a faithful $R \sqbrk x$-module $B$ that is finitely generated as an $R$-module \(\)











Proof
$(1) \implies (2)$
By hypothesis, there exist $r_0, \ldots, r_{n - 1} \in R$ such that:

$x^n + r_{n - 1} x^{n - 1} + \cdots + r_1 x + r_0 = 0$
So the powers $x^k$, $k \ge n$ can be written as an $R$-linear combination of:

$\set {1, \ldots, x^{n - 1} }$
Therefore this set generates $R \sqbrk x$.
$\Box$


$(2) \implies (3)$
$B = R \sqbrk x$ trivially satisfies the required conditions.
$\Box$


$(3) \implies (4)$
By $(3)$ we have an $R$-module $B$ such that $R \subseteq B$, $B$ is finitely generated over $R$.
Also, $x \in B$, so $x B \subseteq B$ as required.
$\Box$


$(4) \implies (5)$
By $(4)$ we have an $R \sqbrk x$-module $B$ that is finitely generated over $R$.
Let $y$ lie in the annihilator $\map {\operatorname {Ann}_{R \sqbrk x} } B$
We have that $1 \in B$.
Then in particular $y \cdot 1 = 0$, and $y = 0$.
Therefore, $B$ is faithful over $R \sqbrk x$.
$\Box$


$(5) \implies (1)$
Let $B$ be as in $(5)$, say generated by $m_1, \ldots, m_n \in B$.
Then there are $r_{i j} \in R$, $i, j = 1,\ldots, n$ such that:

$\ds x \cdot m_i = \sum_{j \mathop = 1}^n r_{i j} m_j$
Let $b_{i j} = x \delta_{i j} - r_{i j}$ where $\delta_{i j}$ is the Kronecker delta.
Then:

$\ds \sum_{j \mathop = 1}^n b_{i j} m_j = 0, \quad i = 1, \ldots, n$

So, let $M = \sqbrk {b_{i j} }_{1 \le i, j \le n}$.
Then by Cramer's Rule:

$\paren {\det M} m_i = 0$, $i = 1, \ldots, n$
Since $\det M \in R \sqbrk x$, also $\det M \in \map {\operatorname {Ann}_{R \sqbrk x} } B$.
So $\det M = 0$ by hypothesis.
But $\det M = 0$ is a monic polynomial in $x$ with coefficients in $R$.
Thus $x$ is integral over $R$.
$\blacksquare$


Sources
2011: J.S. Milne: Algebraic Number Theory: Chapter $2$ Ring of Integers: Dedekind’s proof that the integral elements form a ring: Proposition $2.4$



