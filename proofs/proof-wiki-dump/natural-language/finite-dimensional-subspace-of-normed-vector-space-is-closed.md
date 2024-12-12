# 

Source: https://proofwiki.org/wiki/Finite_Dimensional_Subspace_of_Normed_Vector_Space_is_Closed



Theorem
Let $V$ be a normed vector space.
Let $W$ be a finite dimensional subspace of $V$. 
And the ground field $K$ is complete.


There is believed to be a mistake here, possibly a typo.In particular: grammarYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Then $W$ is closed.



This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Proof 1
Suppose that $\dim W = n$.
Let: 

$\set {e_1, e_2, \ldots, e_n}$
be a basis for $W$.
Aiming for a contradiction, suppose that $W$ is not a closed set.
Then there exists a convergent sequence $\sequence {w_k}$ in $W$ such that: 

$w_k \to w$ in $V$
where $w \in V \setminus W$.
Note that:

$\set {e_1, e_2, \ldots, e_n}$
is linearly independent in $W$, and hence $V$.
Note that since $w \not \in W$, $w$ cannot be written as a linear combination of elements of $\set {e_1, e_2, \ldots, e_n}$.
So:

$\set {e_1, e_2, \ldots, e_n, w}$
is linearly independent in $V$.

So consider the subspace:

$W^* = \span \set {e_1, e_2, \ldots, e_n, w}$.
Using the sequence $\sequence {w_n}$ from before, write: 

$w_k = \tuple {w_k^{\paren 1}, w_k^{\paren 2}, \ldots, w_k^{\paren n}, 0} \in W^*$
and:

$w = \tuple {0, 0, \ldots, 0, 1} \in W^*$
Since Norms on Finite-Dimensional Real Vector Space are Equivalent, $w_k\to w$ in direct product norm.
Since sequence of vectors converges iff each component converges, we necessarily have: 

$w_k^{\paren j} \to 0$
for each $1 \le j \le n$.
However, since the $(n+1)$-th component of $w_k$ is 0 and that of $w$ is $1$, we would also have: 

$0 \to 1$
Clearly this is impossible, so we have derived a contradiction.
So $W$ is necessarily closed.
$\blacksquare$


Proof 2
Because $K$ is complete, the finite dimensional normed space $W$ is complete.
By Subspace of Complete Metric Space is Closed iff Complete, $W$ is closed.
$\blacksquare$


Necessity of completeness of the ground field

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
$K = \Q$ is not complete.
$W = \Q$
$V = \Q \sqbrk {\sqrt 2}$
Since

$\dim_K W = 1$
$W$ is a finite dimensional subspace of $V$. 
But $W$ is not closed in $V$.


Also see
Finite-Dimensional Subspace of Hausdorff Topological Vector Space is Closed


Source
This article incorporates material from every finite dimensional subspace of a normed space is closed on PlanetMath, which is licensed under the Creative Commons Attribution/Share-Alike License.




