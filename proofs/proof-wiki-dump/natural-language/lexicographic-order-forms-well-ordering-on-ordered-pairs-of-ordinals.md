# 

Source: https://proofwiki.org/wiki/Lexicographic_Order_forms_Well-Ordering_on_Ordered_Pairs_of_Ordinals


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The lexicographic order $\preccurlyeq_l$ is a strict well-ordering on $\paren {\On \times \On}$.


Proof 1
This is an instance of Finite Lexicographic Order on Well-Ordered Sets is Well-Ordering.
$\blacksquare$


Proof 2
Total Ordering
Suppose $\tuple {x, y} \preccurlyeq_l \tuple {x, y}$.
Then:

$x < x \lor \paren {x = x \land y < y}$.
Both are contradictory, so $\preccurlyeq_l$ is irreflexive.
$\Box$

Let:

$\tuple {\alpha, \beta} \preccurlyeq_l \tuple {\gamma, \delta}$
and:

$\tuple {\gamma, \delta} \preccurlyeq_l \tuple {\epsilon, \zeta}$

There are two cases:
Let $\alpha < \gamma$.
Then:

$\alpha < \epsilon$
so:

$\tuple {\alpha, \beta} \preccurlyeq_l \tuple {\epsilon, \zeta}$

Let $\alpha = \gamma$.
Then:

$\alpha < \epsilon \lor \paren {\alpha = \epsilon \land \delta < \zeta}$
But also, if $\alpha = \gamma$, then $\beta < \delta$.
Therefore:

$\paren {\alpha = \epsilon \land \beta < \zeta}$
Therefore:

$\tuple {\alpha, \beta} \preccurlyeq_l \tuple {\epsilon, \zeta}$
In either case, $\preccurlyeq_l$ is transitive.
So $\preccurlyeq_l$ is a strict ordering.
$\Box$


Strict Total Ordering
Let:

$\neg \tuple {\alpha, \beta} \preccurlyeq_l \tuple {\gamma, \delta}$
and:

$\neg \tuple {\gamma, \delta} \preccurlyeq_l \tuple {\alpha, \beta}$
Then:

$\neg \alpha < \gamma$
and:

$\neg \gamma < \alpha$
so:

$\alpha = \gamma$
Similarly:

$\neg \beta < \delta$
and:

$\neg \delta < \beta$
so:

$\beta = \delta$
By Equality of Ordered Pairs:

$\tuple {\alpha, \beta} = \tuple {\gamma, \delta}$
Therefore $\preccurlyeq_l$ is a strict total ordering.
$\Box$


Well-Ordering
Let $A$ be a nonempty subset $A$ of $\paren {\On \times \On}$
Let $A$ be any class.
This isn't strictly necessary, but it will not alter the proof.
Let the mapping $1^{st}$ send each ordered pair $\tuple {x, y}$ to its first member $x$.

$1^{st} = \set {\tuple {\tuple {x, y} z}: z = x}$
Then $1^{st}: A \to \On$ is a mapping.
Take $\Img A$, the image of $A$ under $1^{st}$.

$\Img A \subseteq \On$
so by Subset of Ordinals has Minimal Element, $\Img A$ has a minimal element.
Let this minimal element be $\alpha$.
Let $B = \set {y \in \On : \tuple {\alpha, y} \in A}$.
$\alpha$ is a minimal element of $\Img A$.
So:

$\tuple {\alpha, y} \in \Img A$
for some $y \in \On$.
Therefore $B$ is non-empty.
Furthermore, $B$ is some subset of the ordinals.

By Subset of Ordinals has Minimal Element it follows that $B$ has a minimal element.
Let this minimal element be $\beta$.
Therefore:

$\tuple {\alpha, \beta} \in A$
Suppose there is some element $\tuple {\gamma, \delta}$ of $A$ such that:

$\tuple {\gamma, \delta} \preccurlyeq_l \tuple {\alpha, \beta}$
Then:

$\gamma \le \alpha$
But for all ordered pairs in $A$, $\alpha$ is a minimal first element.
Therefore $\gamma = \alpha$
But this implies that $\delta < \beta$ and $\tuple {\alpha, \delta} \in A$.
This contradicts the fact that $\beta$ is the minimal element satisfying $\tuple {\alpha, \beta} \in A$.
From this contradiction it follows that $\tuple {\alpha, \beta}$ is the $\preccurlyeq_l$-minimal element of $A$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 7.54 \ (1)$




