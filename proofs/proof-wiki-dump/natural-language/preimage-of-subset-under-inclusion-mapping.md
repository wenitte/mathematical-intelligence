# 

Source: https://proofwiki.org/wiki/Preimage_of_Subset_under_Inclusion_Mapping

Theorem
Let $S$ be a set.
Let $H \subseteq S$ be a subset of $S$.
Let $i_H: H \to S$ be the inclusion mapping on $H$.

Let $T \subseteq S$.
Then:

$i_H^{-1} \sqbrk T = T \cap H$
where $i_H^{-1} \sqbrk T$ is the preimage of $T$ under $i_H$.


Proof
Let $x \in i_H^{-1} \sqbrk T$.
By the definition of inclusion mapping:

$\map {i_H} x = x$
By definition of preimage of $T$:

$\map {i_H} x \in T$
Thus $x \in T$.
By definition of inclusion mapping:

$x \in \Dom {i_H} = H$
So $x \in T$ and $x \in H$ and so by definition of set intersection:

$x \in T \cap H$
Thus by definition of subset:

$i_H^{-1} \sqbrk T \subseteq T \cap H$

Now let $x \in T \cap H$.
As $H = \Dom {i_H}$ it follows that:

$x \in \Dom {i_H}$
As $x \in T \cap H$ it follows by definition of set intersection that $x \in T$.
Thus:

$\map {i_H} x \in T$
and so by definition of preimage of $T$:

$x \in i_H^{-1} \sqbrk T$
Thus by definition of subset:

$T \cap H \subseteq i_H^{-1} \sqbrk T$

The result follows by definition of set equality.
$\blacksquare$





