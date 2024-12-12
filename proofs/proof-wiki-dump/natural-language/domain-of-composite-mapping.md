# 

Source: https://proofwiki.org/wiki/Domain_of_Composite_Mapping

Theorem
Let $S_1, S_2, S_3$ be sets.
Let $f_1: S_1 \to S_2$ and $f_2: S_2 \to S_3$ be mappings.
Let $f_2 \circ f_1: S_1 \to S_3$ be the composite mapping of $f_1$ and $f_2$.

Then:

$\Dom {f_1} = \Dom {f_2 \circ f_1}$
where $\Dom {f_1}$ denotes the domain of $f_1$.


Proof
By definition of composition of mappings:

$f_2 \circ f_1 := \set {\tuple {x, z} \in S_1 \times S_3: \exists y \in S_2: \tuple {x, y} \in f_1 \land \tuple {y, z} \in f_2}$

This article, or a section of it, needs explaining.In particular: Not quite what that definition says any moreYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $x \in \Dom {f_2 \circ f_1}$.
Then:

$\exists z \in S_3: \tuple {x, z} \in S_1 \times S_3$
and:

$\exists y \in S_2: \tuple {x, y} \in f_1$
That is:

$x \in \Dom {f_1}$
Thus by definition of subset:

$\Dom {f_2 \circ f_1} \subseteq \Dom {f_1}$

Now suppose $x \in \Dom {f_1}$.
By the definition of mapping:

$\exists y \in S_2: \tuple {x, y} \in f_1$
As $f_2$ is likewise a mapping:

$\exists z \in S_3: \tuple {y, z} \in f_2$
and so by definition of composition of mappings:

$\tuple {x, z} \in S_1 \times S_3$
and so:

$x \in \Dom {f_2 \circ f_1}$
Thus by definition of subset:

$\Dom {f_1} \subseteq \Dom {f_2 \circ f_1}$

By definition of set equality:

$\Dom {f_1} = \Dom {f_2 \circ f_1}$
$\blacksquare$


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.14$: Composition of Functions




