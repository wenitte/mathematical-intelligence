# 

Source: https://proofwiki.org/wiki/Frobenius%27s_Theorem/Lemma_1

Lemma
Let $\struct {A, \oplus}$ be a quadratic real algebra.

Then:

$\quad U = \set {u \in A \setminus \R: u^2 \in \R} \cup \set 0$
is a linear subspace of $A$.


Proof
$U$ is closed under scalar multiplication.
We have to show that $u, v \in U$ implies $u + v \in U$.

Let $\set {u, v, 1}$ be a linearly dependent set.
Then there exist constants $a, b \in \R$ such that $u = av + b$.
Then $u^2 = a^2 v^2 + 2 a b v + b^2$.
Since $u^2$, $a^2 v^2$, and $b^2$ are all real, it follows that $2 a b v \in \R$, that is, $v \in \R$.
Since $0$ is the only real element of $U$, it follows that $v = 0$.
Reversing $u$ and $v$ in the preceding argument shows that also $u = 0$, so that $u + v = 0 \in U$.

Now let $\set {u, v, 1}$ be a linearly independent set.
We have:

$\paren {u + v}^2 + \paren {u - v}^2 = 2 u^2 + 2 v^2 \in \R$
On the other hand, as $A$ is quadratic there exist $\lambda, \mu \in \R$ such that:

$\paren {u + v}^2 - \lambda \paren {u + v} \in \R$
$\paren {u - v}^2 - \mu \paren {u - v} \in R$
Hence:

$\lambda \paren {u + v} + \mu \paren {u - v} \in \R$
However, we have that $\set {u, v, 1}$ is linearly independent.
Therefore $\lambda + \mu = \lambda - \mu = 0$, and so $\lambda = \mu = 0$.
This proves that $u \pm v \in U$.
Thus $U$ is indeed a linear subspace of $A$.
$\blacksquare$





