# 

Source: https://proofwiki.org/wiki/Conditions_for_Internal_Ring_Direct_Sum

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\sequence {\struct {S_k, +, \circ} }$ be a sequence of subrings of $R$.

Then $R$ is the ring direct sum of $\sequence {S_k}_{1 \mathop \le k \mathop \le n}$ if and only if:

$(1): \quad R = S_1 + S_2 + \cdots + S_n$
$(2): \quad \sequence {\struct {S_k, +} }_{1 \mathop \le k \mathop \le n}$ is a sequence of independent subgroups of $\struct {R, +}$
$(3): \quad \forall k \in \closedint 1 n: S_k$ is an ideal of $R$.


Proof
Let $S$ be the cartesian product of $\sequence {\struct {S_k, +} }$
First note that $\phi$ is a group homomorphism from $\struct {S, +}$ to $\struct {R, +}$, as:

$\ds \sum_{j \mathop = 1}^n \paren {x_j + y_j} = \sum_{j \mathop = 1}^n x_j + \sum_{j \mathop = 1}^n y_j$ from Associativity on Indexing Set.
So $\phi$ is a ring homomorphism if and only if:

$\ds \paren {\sum_{j \mathop = 1}^n x_j} \circ \paren {\sum_{j \mathop = 1}^n y_j} = \sum_{j \mathop = 1}^n \paren {x_j \circ y_j}$

Now, let:

$\struct {S, +, \circ}$ be the cartesian product of $\sequence {\struct {S_k, +, \circ} }$
$\phi: S \to R$ be the mapping defined as:
$\map \phi {x_1, x_2, \ldots, x_n} = x_1 + x_2 + \cdots x_n$
Clearly $\phi$ is a surjection if and only if $(1)$ holds.
By Internal Direct Product Generated by Subgroups, $\phi$ is a ring isomorphism if and only if $(1)$ and $(2)$ hold.

Let $\phi: S \to R$ be a ring isomorphism.
By Canonical Injection from Ideal of External Direct Sum of Rings, $\map {\inj_k} {S_k}$ is an ideal of $S$.
So $\map \phi {\map {\inj_k} {S_k} }$ is an ideal of $R$.
But $\phi$ and $\pr_k$ coincide on $\map {\inj_k} {S_k}$.
So:

$\map \phi {\map {\inj_k} {S_k} } = \map {\pr_k} {\map {\inj_k} {S_k} } = S_k$
and so $(3)$ holds.

Now suppose $(3)$ holds, and the $S_k$ are all ideals of $R$.
By $(2)$ and by definition of independent subgroups:

$i \ne j \implies S_i \cap S_j = \set {0_R}$
So for all $\tuple {x_1, x_2, \ldots, x_n}, \tuple {y_1, y_2, \ldots, y_n} \in S$:














\(\ds \map \phi {x_1, x_2, \ldots, x_n} \circ \map \phi {y_1, y_2, \ldots, y_n}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n x_i} \circ \paren {\sum_{j \mathop = 1}^n y_j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {\sum_{j \mathop = 1}^n x_i \circ y_j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n x_i \circ y_i\)




















\(\ds \)

\(=\)







\(\ds \map \phi {x_1, x_2, \ldots, x_n} \circ \map \phi {y_1, y_2, \ldots, y_n}\)









because as $S_i, S_j$ are ideals, we have:

$x_i \circ j_j = S_i \cap S_j = \set {0_R}$
Hence the three conditions are sufficient for $\phi$ to be a ring isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.9$
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 3.1$: Direct sums: Lemma $3.3$



