# 

Source: https://proofwiki.org/wiki/Cantor%27s_Diagonal_Argument/Corollary

Theorem
Let $S$ be a set such that $\card S > 1$, that is, such that $S$ is not a singleton.
Let $\mathbb G$ be the set of all mappings from the integers $\Z$ to $S$:

$\mathbb G = \set {f: \Z \to S}$
Then $\mathbb G$ is uncountably infinite.


Proof
Let $\mathbb F$ be the set of all mappings from the natural numbers $\N$ to $S$:

$\mathbb F = \set {f: \N \to S}$
From Cantor's Diagonal Argument, $\mathbb F$ is uncountably infinite.
Let $s \in S$ be an arbitrary distinguished element of $S$.
Let $\mathbb H$ be the set of mappings $h: \Z \to S$ defined as:

$\forall f \in \mathbf F: \forall x \in \Z: \map h x = \begin {cases} \map f x & : x \ge \0 \\ s & : x < 0 \end {cases}$
It can be shown that $\mathbf H$ and $\mathbf F$ are equivalent.
Hence as $\mathbb F$ is uncountable, $\mathbf H$ is likewise uncountable.
We also have that $\mathbf H$ is a subset of $\mathbf G$.

Aiming for a contradiction, suppose $\mathbf G$ is countable.
Then from Subset of Countable Set is Countable it follows that $\mathbf H$ is countable.
Hence by Proof by Contradiction it follows that $\mathbf G$ is uncountable.
$\blacksquare$





