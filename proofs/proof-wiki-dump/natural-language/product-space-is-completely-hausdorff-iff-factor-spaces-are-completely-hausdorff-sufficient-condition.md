# 

Source: https://proofwiki.org/wiki/Product_Space_is_Completely_Hausdorff_iff_Factor_Spaces_are_Completely_Hausdorff/Sufficient_Condition

Theorem
Let $\SS = \family {\struct {S_\alpha, \tau_\alpha} }$ be an indexed family of topological spaces for $\alpha$ in some indexing set $I$.
Let $\ds T = \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\SS$.
Let each of $\struct {S_\alpha, \tau_\alpha}$ for $\alpha \in I$ be completely Hausdorff spaces.

Then $T$ is a completely Hausdorff spaces.


Proof
Let $x, y \in S : x \ne y$ be arbitrary.
Then $x_\alpha \ne y_\alpha$ for some $\alpha \in I$.
Since $\struct {S_\alpha, \tau_\alpha}$ is completely Hausdorff spaces then:

$\exists U, V \in \tau_\alpha: x_\alpha \in U, y_\alpha \in V : U^- \cap V^- = \O$

Let $\pr_\alpha: S \to S_\alpha$ be the projection of $S$ to $S_\alpha$.
Then:














\(\ds \map {\pr_\alpha^\gets} {U^-} \cap \map {\pr_\alpha^\gets} {V^-}\)

\(=\)







\(\ds \map {\pr_\alpha^\gets} {U^- \cap V^-}\)





Preimage of Intersection under Mapping














\(\ds \)

\(=\)







\(\ds \map {\pr_\alpha^\gets} \O\)




















\(\ds \)

\(=\)







\(\ds \O\)










From Preimage of Subset is Subset of Preimage:

$\map {\pr_\alpha^\gets} U \subseteq \map {\pr_\alpha^\gets} {U^-}$
and

$\map {\pr_\alpha^\gets} V \subseteq \map {\pr_\alpha^\gets} {V^-}$

From Projection from Product Topology is Open and Continuous:General Result

$\pr_\alpha: S \to S_\alpha$ is continuous.

From Continuity Defined from Closed Sets:

$\map {\pr_\alpha^\gets} {U^-}, \map {\pr_\alpha^\gets} {V^-}$ are closed in $T$

From Set Closure is Smallest Closed Set in Topological Space:

$\paren {\map {\pr_\alpha^\gets} U}^- \subseteq \map {\pr_\alpha^\gets} {U^-}$
and

$\paren {\map {\pr_\alpha^\gets} V}^- \subseteq \map {\pr_\alpha^\gets} {V^-}$

From Subsets of Disjoint Sets are Disjoint:

$\paren {\map {\pr_\alpha^\gets} U}^- \cap \paren{\map {\pr_\alpha^\gets} V}^- = \O$

By definition of the projection $\pr_\alpha$:

$\map {\pr_\alpha} x = x_\alpha \in U$
By definition of the preimage under $\pr_\alpha$:

$x \in \map {\pr_\alpha^\gets} U$
Similarly:

$y \in \map {\pr_\alpha^\gets} V$

By definition of the product topology $\tau$:

$\map {\pr_\alpha^\gets} U, \map {\pr_\alpha^\gets} V \in \tau$

As $x, y \in S$ were arbitrary, it follows that $T$ is a completely Hausdorff space by definition.
$\blacksquare$





