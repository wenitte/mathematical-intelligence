# 

Source: https://proofwiki.org/wiki/Mapping_from_Totally_Ordered_Set_is_Dual_Order_Embedding_iff_Strictly_Decreasing



Theorem
Let $\left({S, \preceq_1}\right)$ be a totally ordered set.
Let $\left({T, \preceq_2}\right)$ be an ordered set.
Let $\phi: S \to T$ be a mapping.

Then $\phi$ is a dual order embedding if and only if $\phi$ is strictly decreasing.

That is:

$\forall x, y \in S: x \preceq_1 y \iff \phi \left({y}\right) \preceq_2 \phi \left({x}\right)$
if and only if

$\forall x, y \in S: x \prec_1 y \implies \phi \left({y}\right) \prec_2 \phi \left({x}\right)$


Proof
Forward Implication
Let $\phi$ be a dual order embedding.
Then $\phi$ is an order embedding of $\left({S, \preceq_1}\right)$ into $\left({T, \succeq_2}\right)$, where $\succeq_2$ is the dual of $\preceq_2$.
Thus by Mapping from Totally Ordered Set is Order Embedding iff Strictly Increasing:

$\phi: \left({S, \preceq_1}\right) \to \left({T, \succeq_2}\right)$ is strictly increasing.
Thus:

$\forall x, y \in S: x \prec_1 y \implies \phi \left({x}\right) \succ_2 \phi \left({y}\right)$
so:

$\forall x, y \in S: x \prec_1 y \implies \phi \left({y}\right) \prec_2 \phi \left({x}\right)$
Thus $\phi: \left({S, \preceq_1}\right) \to \left({T, \preceq_2}\right)$ is strictly decreasing.
$\Box$


Reverse Implication
Suppose that $\phi: \left({S, \preceq_1}\right) \to \left({T, \preceq_2}\right)$ is strictly decreasing.
Then by the same argument as above:

$\phi: \left({S, \preceq_1}\right) \to \left({T, \preceq_2}\right)$ is strictly increasing.
Thus by Mapping from Totally Ordered Set is Order Embedding iff Strictly Increasing, $\phi$ is an order embedding of $\left({S, \preceq_1}\right)$ into $\left({T, \succeq_2}\right)$.
So $\phi$ is a dual order embedding of $\left({S, \preceq_1}\right)$ into $\left({T, \preceq_2}\right)$.
$\blacksquare$





