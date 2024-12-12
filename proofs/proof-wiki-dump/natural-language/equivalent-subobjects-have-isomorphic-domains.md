# 

Source: https://proofwiki.org/wiki/Equivalent_Subobjects_have_Isomorphic_Domains

Theorem
Let $\mathbf C$ be a metacategory.
Let $C$ be an object of $\mathbf C$.
Let $\mathbf{Sub}_{\mathbf C} \left({C}\right)$ be the category of subobjects of $C$.

Let $m, m'$ be equivalent subobjects of $C$.
Then there exists an isomorphism $f: m \to m'$.


Proof
For brevity, let us write $\operatorname{dom} m = B$ and $\operatorname{dom} m' = B'$.
Since $m$ and $m'$ are equivalent subobjects of $C$, we have that:

$m \subseteq m'$ and $m' \subseteq m$
where $\subseteq$ denotes the inclusion relation on subobjects.
That is, there exist morphisms $f: m \to m'$ and $f': m' \to m$ of $\mathbf{Sub}_{\mathbf C} \left({C}\right)$.
Hence, we have morphisms:

$f \circ f': m' \to m'$
$f' \circ f: m \to m$
By Category of Subobjects is Preorder Category, these are the unique such morphisms.
It follows that both are identity morphisms:

$f \circ f' = \operatorname{id}_{m'}$
$f' \circ f = \operatorname{id}_m$
That is, $f: m \to m'$ is an isomorphism.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.1$




