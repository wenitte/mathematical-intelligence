# 

Source: https://proofwiki.org/wiki/Gelfond-Schneider_Theorem/Lemma_3

Lemma
Let $r$ and $R$ be two real numbers such that $0 < r \le R$.
Let $\map {f_1} z, \map {f_2} z, \ldots, \map {f_L} z$ be:

analytic in $D \subseteq \C: D = \set {z : \size z < R}$
continuous on the closure $D$, that is, $D^- = \set {z: \size z \le R}$.
Let $\zeta_1, \ldots, \zeta_L$ be complex numbers such that:

$\forall j \in \set {1, 2, \ldots, L}: \size {\zeta_j} \le r$

Then the determinant:

$\Delta = \det \begin {bmatrix}
\map {f_1} {\zeta_1} & \cdots & \map {f_L} {\zeta_1} \\
\vdots & \ddots & \vdots \\
\map {f_1} {\zeta_L} & \cdots & \map {f_L} {\zeta_L}
\end{bmatrix}$
satisﬁes:

$\ds \size \Delta \le \paren {\frac R r}^{−L \paren {L − 1} / 2} L! \prod_{\lambda \mathop = 1}^L \size {f_λ}_R$


Proof
Let $\map h z$ be the determinant of the $L \times L$ matrix $\sqbrk {\map {f_j} {\zeta_i z} }$.
Then $\map h z$ is:

analytic in $D' = \set {z: \size z < R / r}$
continuous on $D'^- = \set {z: \size z \le R / r}$.

Let $M = L \paren {L − 1} / 2$, and write:

$\ds \map {f_j} {\zeta_i z} = \sum_{k \mathop = 0}^{M − 1} \map {b_k} j \zeta_i^k z^k + z^M \map{g_{i, j} } z$
where:

$\map {b_k} j \in \C$ for each $k$
$\map {g_{i, j} } z$ is analytic in $D'$
$\map {g_{i, j} } z$ is  continuous on $D'^-$
By evaluating along the columns it is seen that the determinant is linear in its columns.
So we can view $\map h z$ as $z^M$ times an analytic function plus terms involving the factor:

$z^{n_1 + \cdots + n_L} \det \sqbrk {\zeta_i^{n_j} }$
where the $n_j$ denote non-negative integers.
Observe that the determinant in this last expression is zero if the $n_j$ are not distinct.
Therefore, the non-zero terms of this form satisfy:

$n_1 + n_2 + \cdots + n_L \ge 0 + 1 + \cdots + \paren {L − 1} = \dfrac {L \paren {L − 1} } 2$
Hence, we deduce that $\map h z$ is divisible by $z^M$.
More precisely, $\dfrac {\map h z} {z^M}$ is analytic in $D'$ and continuous on $D'^-$.
Therefore, by Gelfond-Schneider Theorem: Lemma $2$, for any $w \in D'$:

$\ds \size {\frac {\map h w} {w^M} } \le \size {\frac {\map h z} {z^M} }_{R / r} = \paren {\frac r R}^M \size {\map h z}_{R / r}$
For $\size z = R / r$, we get that $\size {\zeta_i z} \le R$.
We create a bound for $\size {\map h z}_{R / r}$ by multiplying the number of terms in $\det \sqbrk {\map {f_j} {\zeta_i z} }$ by an obvious upper bound on the maximum such term.
Thus:

$\ds \size {\map h z}_{R / r} \le L! \prod_{\lambda \mathop = 1}^L \size {f_λ}_R$
Observe that $\size \Delta = \size {\map h 1}$ and $1 \le R / r$.
We deduce that

$\ds \size \Delta \le \paren {\frac r R}^M \size {\map h z}_{R / r} \le \paren {\frac r R}^M L! \prod_{\lambda \mathop = 1}^L \size {f_λ}_R$
giving the desired conclusion.
$\blacksquare$





