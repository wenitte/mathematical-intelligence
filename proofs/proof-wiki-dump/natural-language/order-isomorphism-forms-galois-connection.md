# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_forms_Galois_Connection

Theorem
Let $L_1 = \struct {S_1, \preceq_1}$, $L_2 = \struct {S_2, \preceq_2}$ be ordered sets.
Let $f:S_1 \to S_2$ be an order isomorphism between $L_1$ and $L_2$.

Then $\struct {f, f^{-1} }$ is a Galois connection.


Proof
Let $t \in S_2$, $s \in S_1$.
We will prove that:

$t \preceq_2 \map f s \implies \map {f^{-1} } t \preceq_1 s$
Assume that:

$t \preceq_2 \map f s$
By Inverse of Order Isomorphism is Order Isomorphism:

$f^{-1}$ is an order isomorphism.
By definition of order isomorphism:

$f^{-1}$ is an order embedding.
By definition of order embedding:

$\map {f^{-1} } t \preceq_1 \map {f^{-1} } {\map f s}$
Thus by definition of bijection:

$\map {f^{-1} } t \preceq_1 s$
$\Box$

We will prove that:

$\map {f^{-1} } t \preceq_1 s \implies t \preceq_2 \map f s$
Assume that:

$\map {f^{-1} } t \preceq_1 s$
By definition of order embedding:

$\map f {\map {f^{-1} } t} \preceq_2 \map f s$
Thus by definition of bijection:

$t \preceq_2 \map f s$
$\blacksquare$


Sources
Mizar article WAYBEL15:6




