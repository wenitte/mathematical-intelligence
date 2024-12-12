# 

Source: https://proofwiki.org/wiki/Free_Commutative_Monoid_is_Commutative_Monoid


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The free commutative monoid on a set $\family {X_j: j \in J}$ is a commutative monoid.


Proof
Let $M$ be the set of all monomials on the indexed set $\family {X_j: j \in J}$.
We are required to show that the following properties hold:












  \(\ds \forall m_1, m_2 \in M:\)

\(\ds m_1 \circ m_2 \in M \)   





Closure   

  










  \(\ds \forall m_1, m_2, m)3 \in M:\)

\(\ds \paren {m_1 \circ m_2} \circ m_3 = m_1 \circ \paren {m_2 \circ m_3} \)   





Associativity   

  










  \(\ds \forall m_1, m_2 \in M:\)

\(\ds m_1 \circ m_2 = m_2 \circ m_1 \)   





Commutativity   

  










  \(\ds \exists e_m \in M: \forall m_1 \in M:\)

\(\ds m_1 \circ e_M = m_1 \)   





Identity   

  

First note that using the multiindex notation described in the definition of monomials, for $r \in \N$, $m_i = \mathbf X^{k^i} \in M$, $i = 1, \ldots, r$, the product of the $m_i$ is given by:

$m_1 \circ \cdots \circ m_r = \mathbf X^{k^1 + \cdots + k^r}$
Here the superscripts enumerate the multiindices, and do not indicate raising to a power.

So to show the closure, associativity and commutativity of monomials under $\circ$, it is sufficient to show the corresponding properties for multiindices under addition defined by:

$\family {k^1 + k^2}_j := k^1_j + k^2_j$

In the following $k^1, k^2, k^3$ are multiindices, that is, families of non-negative integers indexed by $J$ such that only finitely many entries are non-zero.


Proof of Closure
Let $\family {k^1 + k^2}_j = k^1_j + k^2_j \ne 0$.
By definition of multiindex, at least one of $k^1_j$ and $k^2_j$ must be non-zero, and this can only be true for a finite number of entries.
Furthermore, since $k^1_j,\ k^2_j \ge 0$, we have $k^1_j + k^2_j \ge 0$.
Therefore $k^1 + k^2$ has finitely many non-zero entries, and these are all positive, and multiindices are closed under addition.


Proof of Associativity
Using associativity of integer addition, we have: 

$\family {\paren {k^1 + k^2} + k^3}_j = \paren {k^1_j + k^2_j} + k^3_j = k^1_j + \paren {k^2_j + k^3_j} = \family {k^1 + \paren {k^2 + k^3} }_j$
So addition of multiindices is associative.


Proof of Commutativity
Using commutativity of integer addition, we have 

$\family {k^1 + k^2}_j = k^1_j + k^2_j = k^2_j + k^1_j = \family {k^2 + k^1}_j$
So addition of multiindices is commutative.


Proof of Existence of Identity
Let $e_M$ be the multiindex such that $\family {e_M}_j = 0$ for all $j \in J$.
Then:

$\family {e_M + k^1}_j = \family {e_M}_j + k^1_j = \family {k^1}_j$
so $e_M$ is an identity for the set of monomials.
$\blacksquare$





