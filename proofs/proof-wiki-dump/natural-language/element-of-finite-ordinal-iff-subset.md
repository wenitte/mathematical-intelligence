# 

Source: https://proofwiki.org/wiki/Element_of_Finite_Ordinal_iff_Subset

Theorem
Let $m, n$ be distinct finite ordinals.

Then:

$m \in n \iff m \subseteq n$


Proof
Let $m \in n$.
Since $n$ is an ordinal, it is transitive.
Therefore, it follows directly that $m \subseteq n$.

Now let $m \subseteq n$.
We have by hypothesis that $m \ne n$.
From Natural Numbers are Comparable it follows that either $m \in n$ or $n \in m$.

Suppose $n \in m$.
Then $\exists x \in m: m \subseteq x$ which contradicts Finite Ordinal is not Subset of one of its Elements.
The only option left is that $m \in n$.

Hence the result.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic




