# 

Source: https://proofwiki.org/wiki/Extended_Real_Addition_is_Associative

Theorem
Extended real addition $+_{\overline{\R}}$ is commutative.

That is, for all $x, y, z \in \overline \R$:

$(1): \quad x +_{\overline \R} \paren {y +_{\overline \R} z} = \paren {x +_{\overline \R} y} +_{\overline \R} z$
whenever at least one of the sides is defined.


Proof
When $x, y, z \in \R$, then $(1)$ follows from Real Addition is Associative.

From the definition of $+_{\overline \R}$, it follows that either expression in $(1)$ is defined if and only if at most one of $+\infty$ and $-\infty$ occurs.
The case where neither occurs is already covered above; now assume that $+\infty$ occurs (the case with $-\infty$ is similar).
By Extended Real Addition is Commutative, it suffices to consider the cases $x = +\infty$ and $y = +\infty$.

Suppose $x = +\infty$.
Then as $y \ne -\infty$ and $z \ne -\infty$, it follows that $\paren {+\infty} +_{\overline \R} y = +\infty$, and $\paren {+\infty} +_{\overline \R} z = +\infty$.
Hence the right hand side in $(1)$ equals $+\infty$.
But $y +_{\overline \R} z \ne -\infty$ as well, and so the left hand side also equals $+\infty$.

Now suppose $y = +\infty$.
Then, again, $x +_{\overline \R} \paren {+\infty} = +\infty$ and $\paren {+\infty} +_{\overline \R} z = +\infty$.
The result follows by applying these two equalities in the appropriate order on both the left hand side and the right hand side of $(1)$.

Hence the result, from Proof by Cases.
$\blacksquare$





