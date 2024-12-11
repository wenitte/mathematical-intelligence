# 

Source: https://proofwiki.org/wiki/Abelian_Group_Factored_by_Prime/Corollary



Corollary to Abelian Group Factored by Prime
A finite abelian group $G$ can be factored as follows:
Let $\order G = \ds \prod_{i \mathop = 1}^k p_i^{n_i}$ be the prime factorization of the order of $G$.
Then we have:

$G = \ds \prod_{i \mathop = 1}^k H_i$, where $H_i = \set {x \in G : x^{p_i^{n_i} } = e}$
This factorization is unique up to ordering of the factors.


Proof
Let $\ds \prod_{i \mathop = 1}^k p_i^{n_i}$ be the prime factorization of $\order G$.
We proceed by induction on $k$.


Basis for the induction
For $n = 1$, the statement is trivial.


Induction Hypothesis
Now we assume the theorem is true for abelian groups whose order has $k - 1$ distinct prime factors.


Induction Step
Apply Abelian Group Factored by Prime to $G$ and $p_1$. 
By definition, $H = H_1$.

Also, the resulting $K$ has $\order K = \ds \prod_{i \mathop = 2}^k p_i^{n_i}$.
Therefore, it satisfies the induction hypothesis.
It follows that $G = H_1 \times \ds \prod_{i \mathop = 2}^k H_i$.
From:

Subgroup of Abelian Group is Normal
the definition of Sylow $p$-subgroup
all the $H_i$ are normal Sylow $p$-subgroups.

From Sylow $p$-Subgroup is Unique iff Normal, the factorization is unique up to ordering of the factors.
$\blacksquare$





