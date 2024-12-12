# 

Source: https://proofwiki.org/wiki/Bourbaki-Witt_Fixed_Point_Theorem



Theorem
Let $\struct {X, \le}$ be a non-empty chain complete ordered set (that is, an ordered set in which every chain has a supremum).
Let $f: X \to X$ be an inflationary mapping, that is, so that $\map f x \ge x$.

Then for every $x \in X$ there exists $y \in X$ where $y \ge x$ such that $\map f y = y$.


Proof
Let $\gamma$ be the Hartogs number of $X$.
Suppose that $x \in X$.

Define $g : \gamma \to X$ by transfinite recursion as follows: 

$\map g 0 = x$
$\map g {\alpha + 1} = \map f {\map g \alpha}$
$\map g \alpha = \sup \set {\map g \beta: \beta < \alpha}$ when $\alpha$ is a limit ordinal.

That $f$ is inflationary guarantees both that:

$(1) \quad \set {\map g \beta: \beta < \alpha}$ is a chain for each $\alpha < \gamma$
$(2) \quad g$ is increasing.

This article, or a section of it, needs explaining.In particular: I'm not sure whether further explanation is needed as to why the above should be so, or whether I'm just slow.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
If $g$ is strictly increasing, then $g$ is strictly monotone and, by Strictly Monotone Mapping with Totally Ordered Domain is Injective, an injection.
But by definition of Hartogs number, $\gamma$ is the least ordinal such that there is no injection from $\gamma$ to $X$.
Therefore there must be some $\alpha < \beta < \gamma$ with $\map g \alpha = \map g \beta$.
Then:

$\alpha + 1 \le \beta$
so:

$\map g \alpha \le \map g {\alpha + 1} \le \map g \beta = \map g \alpha$
whence:

$\map f {\map g \alpha} = \map g \alpha$
Because $x = \map g 0$:

$\exists y \in \map g \gamma \subseteq \set {y \in X : x \le y}: \map f y = y$
$\blacksquare$


Source of Name
This entry was named for Nicolas Bourbaki and Ernst Witt.


Sources
1949: Nicolas Bourbaki: Sur le théorème de Zorn (Archiv der Mathematik Vol. 2, no. 6: pp. 434 – 437)
1951: Ernst Witt: Beweisstudien zum Satz von M. Zorn (Math. Nachr. Vol. 4: pp. 434 – 438)




