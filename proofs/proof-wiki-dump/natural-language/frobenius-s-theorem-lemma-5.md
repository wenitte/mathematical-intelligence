# 

Source: https://proofwiki.org/wiki/Frobenius%27s_Theorem/Lemma_5

Lemma
Let $A$ be a quadratic real division algebra.
Let:

$U = \left\{{u \in A \setminus \R: u^2 \in \R}\right\} \cup \left\{{0}\right\}$
where $\setminus$ denotes set difference.
Suppose $e_1, \ldots, e_k \in U$ are such that:

$\forall i \le k: e_i^2 = -1$
$\forall i, j \le k, i \ne j: e_i e_j = -e_j e_i$

If $U$ is not equal to the linear span of $e_1, \ldots, e_k$, then there exists $e_{k+1} \in U$ such that:

$e_{k+1}^2 = -1$
$\forall i \le k: e_i e_{k+1} = -e_{k+1} e_i$


Proof
From Lemma 1, $U$ is a linear subspace of $A$ such that:

$\forall u, v \in U: u v + v u \in \R$
$A = \R \oplus U$
Pick $u \in U$ that is not contained in the linear span of $e_1, \ldots, e_k$.
By Lemma 1, we can set $\alpha_i = \dfrac 1 2 \left({u e_i + e_i u}\right) \in \R$.
Note that $v = u + \alpha_1 e_1 + \cdots + \alpha_k e_k$ satisfies $e_i v = v e_i$ for all $i \le k$.
Let $e_{k+1}$ be a scalar multiple of $v$ such that $e_{k+1}^2 = -1$ (whose existence follows from Lemma 1: Assertion 4).
Then $e_{k+1}$ has all desired properties.
$\blacksquare$





