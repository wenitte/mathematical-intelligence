# 

Source: https://proofwiki.org/wiki/Internal_Direct_Product_Theorem/General_Result/Proof_2

Theorem
Let $G$ be a group whose identity is $e$.
Let $\sequence {H_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of subgroups of $G$.

Then $G$ is the internal group direct product of $\sequence {H_k}_{1 \mathop \le k \mathop \le n}$ if and only if:

$(1): \quad G = H_1 H_2 \cdots H_n$
$(2): \quad \sequence {H_k}_{1 \mathop \le k \mathop \le n}$ is a sequence of independent subgroups
$(3): \quad \forall k \in \set {1, 2, \ldots, n}: H_k \lhd G$
where $H_k \lhd G$ denotes that $H_k$ is a normal subgroup of $G$.


Proof
It is to be shown that:

The group $\struct {G, \circ}$ is the internal group direct product of $\sequence {H_n}$ if and only if:

$(1): \quad$ Each $H_1, H_2, \ldots, H_n$ is a normal subgroup of $G$
$(2): \quad$ Each element $g$ of $G$ can be expressed uniquely in the form:
$g = h_1 \circ h_2 \circ \cdots \circ h_n$
where $h_i \in H_i$ for all $i \in \set {1, 2, \ldots, n}$.

by definition of Internal Group Direct Product.

Condition $(3)$ already gives that $H_i$ is normal for all $i \in \set {1, 2, \ldots, n}$.

Condition $(1)$ gives us that each element $g$ of $G$ can be expressed in the form:

$g = h_1 h_2 \dotsm h_n$ with $h_i \in H_i$ for all $i \in \set {1, 2, \ldots, n}$.

It is now shown that this expression is unique.
Suppose that:

$g = h_1 h_2 \dotsm h_n = k_1 k_2 \dotsm k_n$
where $h_i, k_i \in H_i$ for all $i \in \set {1, 2, \ldots, n}$ and $h_j \ne k_j$ for at least one $j$.
Let $j$ be the largest integer such that $h_j \ne k_j$, so that $h_i = k_i$ for $i > j$.
Cancelling $h_i$ for $i > j$ gives:

$h_i h_2 \dotsm h_j = k_1 k_2 \dotsm k_j$
and so:

$h_j {k_j}^{-1} = \paren {h_1 h_2 \dotsm h_{j - 1} }^{-1} \paren {k_1 k_2 \dotsm k_{j - 1} } \in \paren {H_1 H_2 \dotsm H_{j - 1} } \cap G_j$
But by condition $(2)$:

$\paren {H_1 H_2 \dotsm H_{j - 1} } \cap G_j = \set e$
by definition of independent subgroups.
Thus $h_j = k_j$, which contradicts our assertion that $h_j \ne k_j$.
Hence the decomposition is unique.
$\blacksquare$



This needs considerable tedious hard slog to complete it.In particular: Only one direction shownTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Proposition $13.5$




