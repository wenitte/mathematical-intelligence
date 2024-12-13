# 

Source: https://proofwiki.org/wiki/Product_of_Hausdorff_Factor_Spaces_is_Hausdorff/General_Result

Theorem
Let $\SS = \family {\struct {S_\alpha, \tau_\alpha} }$ be an indexed family of topological spaces for $\alpha$ in some indexing set $I$.
Let $\ds T = \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\SS$.
Let each of $\struct {S_\alpha, \tau_\alpha}$ for $\alpha \in I$ be $T_2$ (Hausdorff) spaces.

Then $T$ is a $T_2$ (Hausdorff) space.


Proof
Let $x, y \in S : x \ne y$.
Then $x_\alpha \ne y_\alpha$ for some $\alpha \in I$.
Since $\struct {S_\alpha, \tau_\alpha}$ is Hausdorff then:

$\exists U, V \in \tau_\alpha: x_\alpha \in U, y_\alpha \in V : U \cap V = \O$

Let $\pr_\alpha: S \to S_\alpha$ be the projection of $S$ to $S_\alpha$.
Then:














\(\ds \map {\pr_\alpha^\gets} U \cap \map {\pr_\alpha^\gets} V\)

\(=\)







\(\ds \map {\pr_\alpha^\gets} {U \cap V}\)





Preimage of Intersection under Mapping














\(\ds \)

\(=\)







\(\ds \map {\pr_\alpha^\gets} \O\)




















\(\ds \)

\(=\)







\(\ds \O\)










By definition of the projection $\pr_\alpha$:

$\map {\pr_\alpha} x = x_\alpha \in U$
By definition of the preimage under $\pr_\alpha$:

$x \in \map {\pr_\alpha^\gets} U$
Similarly:

$y \in \map {\pr_\alpha^\gets} V$

By definition of the product topology $\tau$:

$\map {\pr_\alpha^\gets} U, \map {\pr_\alpha^\gets} V \in \tau$

Since $x, y \in S$ were arbitrary, it follows that $T$ is a $T_2$ (Hausdorff) space.
$\blacksquare$





