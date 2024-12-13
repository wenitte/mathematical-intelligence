# 

Source: https://proofwiki.org/wiki/If_Double_Integral_of_a(x,_y)h(x,_y)_vanishes_for_any_C%5E2_h(x,_y)_then_C%5E0_a(x,_y)_vanishes


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\map \alpha {x, y}$, $\map h {x, y}$ be functions in $\R$.


There is believed to be a mistake here, possibly a typo.In particular: should that be $\R^2$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $\alpha \in C^0$ in a closed region $R$ whose boundary is $\Gamma$.
Let $h \in C^2$ in $R$ and $h = 0$ on $\Gamma$.
Let:

$\ds \iint_R \map \alpha {x, y} \map h {x, y} \rd x \rd y = 0$

Then $\map \alpha {x, y}$ vanishes everywhere in $R$.


Proof
Aiming for a contradiction, suppose $\map \alpha {x, y}$ is nonzero at some point in $R$.
Then $\map \alpha {x, y}$ is also nonzero in some disk $D$ such that:

$\paren {x - x_0}^2 + \paren {y - y_0}^2 \le \epsilon^2$

Suppose:

$\map h {x, y} = \map \sgn {\map \alpha {x, y} } \paren {\epsilon^2 - \paren {x - x_0}^2 + \paren {y - y_0}^2}^3$
in this disk and $0$ elsewhere.
Thus $\map h {x, y}$ satisfies conditions of the theorem.

However:

$\ds \iint_R \map \alpha {x, y} \map h {x, y} \rd x \rd y = \iint_D \size {\map \alpha {x, y} } \paren {\epsilon^2 - \paren {x - x_0}^2 + \paren {y - y_0}^2}^3 \ge 0$
Hence the result, by Proof by Contradiction.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations: $\S 1.5$: The Case of Several Variables




