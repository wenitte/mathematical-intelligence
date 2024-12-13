# 

Source: https://proofwiki.org/wiki/Ordered_Set_with_Greatest_Element_whose_Subsets_have_Infimum_is_Complete_Lattice

Theorem
Let $\struct {S, \preccurlyeq}$ be an ordered set such that:

$\struct {S, \preccurlyeq}$ has a greatest element $u$
every non-empty subset of $S$ admits an infimum.

Then $\struct {S, \preccurlyeq}$ is a complete lattice.


Proof
For $\struct {S, \preccurlyeq}$ to be a complete lattice, it has to be such that:

every non-empty subset of $S$ admits both a supremum and an infimum.

Let $T \subseteq S$ be an arbitrary subset of $S$.
We already have by hypothesis that $T$ admits an infimum.
We are to show that $T$ admits a supremum.

By definition of greatest element:

$\forall x \in T: x \preccurlyeq u$
Thus by definition $u$ is an upper bound of $T$.
Let $H \subseteq S$ be the set of all upper bounds of $T$.
Because $u$ is an upper bound of $T$, $u \in H$.
Hence $H$ is not empty.

We have by hypothesis that $H$ has an infimum.
That is:

$\exists v \in H: \forall x \in H: v \preccurlyeq x$
Hence $v$ is by definition a supremum of $T$.
Thus $T$ admits a supremum.
Hence a priori $T$ admits both a supremum and an infimum.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.11 \ \text{(a)}$




