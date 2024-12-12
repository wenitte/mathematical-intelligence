# 

Source: https://proofwiki.org/wiki/Bound_for_Negative_Part_of_Pointwise_Sum_of_Functions

Theorem
Let $X$ be a set. 
Let $f, g : X \to \overline \R$ be extended real-valued function.
Suppose that the pointwise sum $f + g$ is well-defined, that is: 

there exists no $x \in X$ such that $\set {\map f x, \map g x} = \set {\infty, -\infty}$.

Then: 

$\paren {f + g}^- \le f^- + g^-$
where $\paren {f + g}^-$, $f^-$ and $g^-$ denote the negative parts of $f + g$, $f$ and $g$ respectively.


Proof
Let $x \in X$. 
From the definition of the negative part, we have: 

$\map {f^-} x = -\min \set {\map f x, 0}$
and:

$\map {g^-} x = -\min \set {\map g x, 0}$

Suppose first that $\map f x$ and $\map g x$ are finite.
From Minimum Function in terms of Absolute Value, we then have:

$\ds \map {f^-} x = \frac {\size {\map f x} - \map f x} 2$
and:

$\ds \map {g^-} x = \frac {\size {\map g x} - \map g x} 2$
We then have: 














\(\ds \map {\paren {f + g}^-} x\)

\(=\)







\(\ds -\min \set {\map f x + \map g x, 0}\)





Definition of Negative Part














\(\ds \)

\(=\)







\(\ds \frac {\size {\map f x + \map g x} - \paren {\map f x + \map g x} } 2\)





Minimum Function in terms of Absolute Value














\(\ds \)

\(\le\)







\(\ds \frac {\size {\map f x} + \size {\map g x} - \paren {\map f x + \map g x} } 2\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \frac {\size {\map f x} - \map f x} 2 + \frac {\size {\map g x} - \map g x} 2\)




















\(\ds \)

\(=\)







\(\ds \map {f^-} x + \map {g^-} x\)










Now suppose that $\map f x = +\infty$. 
Then $\map g x > -\infty$.
We then have:

$\map f x + \map g x = +\infty$
So:

$\map {\paren {f + g}^-} x = 0$
and:

$\map {f^-} x = 0$
Since: 

$\map {g^-} x \ge 0$
we have that: 

$\map {\paren {f + g}^-} x \le \map {f^-} x + \map {g^-} x$
Swapping $f$ for $g$, we also get the result if $\map g x = +\infty$ and $\map f x > -\infty$.

Now suppose that $\map f x = -\infty$
Then $\map g x < \infty$.
Then: 

$\map f x + \map g x = -\infty$
So:

$\map {\paren {f + g}^-} x = \infty$
and:

$\map {f^-} x = \infty$
So the inequality: 

$\map {\paren {f + g}^-} x \le \map {f^-} x + \map {g^-} x$
holds trivially. 
Swapping $f$ for $g$, we also get the result if $\map g x = -\infty$ and $\map f x < \infty$.
$\blacksquare$





