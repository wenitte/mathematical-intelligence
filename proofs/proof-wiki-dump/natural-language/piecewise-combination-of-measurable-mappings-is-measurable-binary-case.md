# 

Source: https://proofwiki.org/wiki/Piecewise_Combination_of_Measurable_Mappings_is_Measurable/Binary_Case

Theorem
Let $\struct {X, \Sigma}$ and $\struct {X', \Sigma'}$ be measurable spaces.
Let $f, g: X \to X'$ be $\Sigma \, / \, \Sigma'$-measurable mappings.
Let $E \in \Sigma$ be a measurable set.

Define $h: X \to X'$ by:

$\forall x \in X: \map h x := \begin{cases}
\map f x & : \text {if $x \in E$} \\
\map g x & : \text {if $x \notin E$}
\end{cases}$

Then $h$ is also a $\Sigma \, / \, \Sigma'$-measurable mapping.


Proof
Let $E' \in \Sigma'$ be a $\Sigma'$-measurable set.
Then by definition of preimage:

$\map {h^{-1} } {E'} = \set {x \in X: \map h x \in E'}$
Expanding the definition of $h$, this translates into:

$\map {h^{-1} } {E'} = \set {x \in E: \map f x \in E'} \cup \set {x \in \relcomp X E: \map g x \in E'}$
where $\complement$ denotes set complement.

That is, we have:

$\map {h^{-1} } {E'} = \paren {E \cap \map {f^{-1} } {E'} } \cup \paren {\relcomp X E \cap \map {g^{-1} } {E'} }$
All sets on the right hand side are $\Sigma$-measurable.
By Sigma-Algebra Closed under Intersection and Sigma-Algebra Closed under Union, so is $\map {h^{-1} } {E'}$.

Since $E' \in \Sigma'$ was arbitrary, $h$ is a $\Sigma \, / \, \Sigma'$-measurable mapping.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 8$: Problem $3 \ \text{(i)}$




