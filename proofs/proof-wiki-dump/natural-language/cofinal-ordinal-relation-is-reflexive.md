# 

Source: https://proofwiki.org/wiki/Cofinal_Ordinal_Relation_is_Reflexive

Theorem
Let $x$ be an ordinal.

Then $x$ is cofinal to itself.
That is:

$\operatorname{cof} \left({x, x}\right)$


Proof

This article needs to be linked to other articles.In particular: to $\le$, mostly. Some of the results have their own pages alreadyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Each of the conditions for cofinal ordinals shall be verified:


$x \le x$ follows by Set is Subset of Itself.
The mapping $f: x \to x$ can simply be the identity mapping $I_x$:

$I_x: x \to x$

Moreover, $a < b \implies I_x \left({a}\right) < I_x \left({b}\right)$ by the definition of the identity mapping.
Therefore:

$I_x$ is strictly increasing.

Finally, $I_x \left({a}\right) \ge a$ by definition of identity mapping.
It follows by Existential Generalisation that:

$\forall a \in x: \exists b \in x: I_x \left({b}\right) \ge a$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.52 \ (1)$




