# 

Source: https://proofwiki.org/wiki/Schreier-Zassenhaus_Theorem



Theorem
Let $G$ be a finite group.
Let $\HH_1$ and $\HH_2$ be two normal series for $G$.

Then $\HH_1$ and $\HH_2$ have refinements of equal length whose factors are isomorphic.


Proof
Suppose that:

$(1): \quad \set e = G_0 \lhd G_1 \lhd \cdots \lhd G_{n - 1} \lhd G_n = G$
and:

$(2): \quad \set e = H_0 \lhd H_1 \lhd \cdots \lhd H_{m - 1} \lhd H_m = G$
are two normal series for $G$.

Let a new series be formed:

$(3): \quad \set e = \hat G_0 \subseteq \hat G_1 \subseteq \cdots \subseteq \hat G_{n m - 1} \subseteq \hat G_{n m} = G$
such that:

$\hat G_k = G_q \paren {G_{q + 1} \cap H_r}$
for $k = q m + r$, where $0 \le q < n$ and $0 \le r \le m$.
For completeness, define $\hat G_{n m} = G_n$.

Note that, by the above construction:

$\hat G_{q m} = G_q \paren {G_{q + 1} \cap H_0} = G_q \paren {\set e} = G_q$
This implies that each group in $(1)$ also appears in $(3)$.

It needs to be demonstrated that $\hat G_k$ is well-defined.
Consider the ambiguity of $k = q m + r$ in the following cases:

When $m \nmid k$, there is none.
When $m \divides k$, we have:
$k = q m + m = \paren {q + 1} m$
For $(3)$ to be well-defined, we require:

$G_q \paren {G_{q + 1} \cap H_m} = G_{q + 1} \paren {G_{q + 2} \cap H_0}$
Note that the right hand side is just:

$G_{q + 1} \paren {G_{q + 2} \cap \set e} = G_{q + 1} \paren {\set e} = G_{q + 1}$
The left hand side is:

$G_q \paren {G_{q + 1} \cap H_m} = G_q \paren {G_{q + 1} \cap G} = G_q G_{q + 1} = G_{q + 1}$
Thus the construction is verified.

It next needs to be demonstrated that:

$\hat G_k \lhd \hat G_{k + 1}$
Choose the representation of $k$ in which $r < m$.
It follows that:

$\hat G_{k + 1} = G_q \paren {G_{q + 1} \cap H_{r + 1} }$
Since $H_{r + 1} \rhd H_r$:

$\hat G_{k + 1} = G_q \paren {G_{q + 1} \cap H_{r + 1} } \rhd G_q \paren {G_{q + 1} \cap H_r} = \hat G_k$
That is, $\hat G_k$ is a normal subgroup of $\hat G_{k + 1}$.

$(A): \quad$ But note that $(3)$ may not actually be a normal series as it is possible that $\hat G_k = \hat G_{k + 1}$ for some $k$.
Having created series $(3)$, we use the same procedure to form:

$(4): \quad \set e = \hat H_0 \subseteq \hat H_1 \subseteq \cdots \subseteq \hat H_{n m - 1} \subseteq \hat H_{n m} = G$
such that:

$\hat H_k = H_q \paren {H_{q + 1} \cap G_r}$
for $k = q n + r$, where $0 \le q < m$ and $0 \le r \le n$.
The same statements that were made about $(3)$ also hold about $(4)$.
Now let $k = u m + v$ and $l = v n + u$.

It follows that:














\(\ds \frac {\hat G_{k + 1} } {\hat G_k}\)

\(=\)







\(\ds \frac {G_u \paren {G_{u + 1} \cap H_{v + 1} } } {G_u \paren {G_{u + 1} \cap H_v} }\)





from above














\(\ds \)

\(\cong\)







\(\ds \frac {H_v \paren {H_{v + 1} \cap G_{u + 1} } } {H_v \paren {H_{v + 1} \cap G_u} }\)





Zassenhaus Lemma














\(\ds \)

\(=\)







\(\ds \frac {\hat H_{l + 1} } {\hat H_l}\)





from above



So $(3)$ and $(4)$ have isomorphic factors.

In $(A)$ it was remarked that some of the factors in these isomorphic series may have redundant elements where $\hat G_k = \hat G_{k + 1}$ and similarly for $\hat H_l = \hat H_{l + 1}$.
As the series consist of isomorphic elements, all we now have to do is remove these redundant elements from both (they will occur at the same place).
Hence we end up with two refinements of equal length whose factors are isomorphic.
$\blacksquare$


Also known as
The Schreier-Zassenhaus Theorem is also known as the Schreier Refinement Theorem.


Source of Name
This entry was named for Otto Schreier and Hans Julius Zassenhaus‎.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Normal and Composition Series: $\S 72$. The Schreier-Zassenhous Theorem




