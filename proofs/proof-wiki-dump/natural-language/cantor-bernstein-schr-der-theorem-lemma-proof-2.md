# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Lemma/Proof_2

Theorem
Let $S$ be a set.
Let $T \subseteq S$.
Suppose that $f: S \to T$ is an injection.

Then there is a bijection $g: S \to T$.


Proof
Define a mapping $E: \powerset S \to \powerset S$ as:

$\map E K = S \setminus \paren {T \setminus f \sqbrk K}$
where $f \sqbrk K$ is the image of $K$ under $f$.
Then:

$\map E K = \paren {S \setminus T} \cup f \sqbrk K$
By Image of Subset under Relation is Subset of Image and the corollary to Set Union Preserves Subsets, $E$ is increasing.

Thus by Knaster-Tarski Lemma: Power Set, $E$ has a fixed point $X$.
Then by definition of fixed point:

$\map E X = X$
That is:

$\paren {S \setminus \paren {T \setminus f \sqbrk X} } = X$
Taking the set difference from $S$:

$T \setminus f \sqbrk X = S \setminus X$
Let $f'$ be the restriction of $f$ to $X \times f \sqbrk X$.
By Injection to Image is Bijection, $f'$ is a bijection.
By Identity Mapping is Bijection, the identity mapping $I_{S \mathop \setminus X}$ from $S \setminus X$ to $T \setminus f \sqbrk X$ is a bijection.
Thus by Union of Bijections with Disjoint Domains and Codomains is Bijection, $g = f' \cup i$ is the bijection we seek.
$\blacksquare$





