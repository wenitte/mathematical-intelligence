# 

Source: https://proofwiki.org/wiki/Difference_of_Positive_and_Negative_Parts

Theorem
Let $X$ be a set, and let $f: X \to \overline{\R}$ be an extended real-valued function.
Let $f^+$, $f^-: X \to \overline{\R}$ be the positive and negative parts of $f$, respectively.

Then $f = f^+ - f^-$.


Proof
Let $x \in X$. 
Consider the following four cases for the value of $\map f x$ in $\overline{\R}$:

$(1): \quad \map f x = -\infty$

By ordering on extended reals:
$\map {f^+} x = \map \max {0, \map f x} = \map \max {0, -\infty} = 0$
$\map {f^-} x = - \map \min {0, \map f x} = - \map \min {0, -\infty} = +\infty$
By extended real subtraction, it thus follows that:
$\map {f^+} x - \map {f^-} x = 0 - \paren {+\infty} = - \infty = \map f x$

$(2): \quad \map f x \in \openint {-\infty} 0$

Since $\map f x < 0$, it follows that:
$\map {f^+} x = \map \max {0, \map f x} = 0$
$\map {f^-} x = - \map \min {0, \map f x} = - \map f x$
Thence it immediately follows that:
$\map {f^+} x - \map {f^-} x = 0 - \paren {- \map f x} = \map f x$

$(3): \quad \map f x \in \hointr 0 {+\infty}$

Since $\map f x \ge 0$, we obtain:
$\map {f^+} x = \map \max {0, \map f x} = \map f x$
$\map {f^-} x = - \min {0, \map f x} = 0$
Then, these immediately imply:
$\map {f^+} x - \map {f^-} x = \map f x - 0 = \map f x$

$(4): \quad \map f x = +\infty$

By ordering on extended reals:
$\map {f^+} x = \map \max {0, \map f x} = \map \max {0, +\infty} = +\infty$
$\map {f^-} x = - \map \min {0, \map f x} = - \map \min {0, +\infty} = 0$
By extended real subtraction, it now follows that:
$\map {f^+} x - \map {f^-} x = +\infty - 0 = +\infty = \map f x$

In all cases, $\map {f^+} x - \map {f^-} x = \map f x$.
As $x \in X$ was arbitrary, we may conclude that:

$\forall x \in X: \map {f^+} x - \map {f^-} x = \map f x$
That is, we have shown:

$f = f^+ - f^-$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.7 \ \text{(v)}$, $\S 8$: Problem $6$




