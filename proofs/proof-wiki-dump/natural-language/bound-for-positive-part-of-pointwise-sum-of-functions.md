# 

Source: https://proofwiki.org/wiki/Bound_for_Positive_Part_of_Pointwise_Sum_of_Functions

Theorem
Let $X$ be a set.
Let $f, g : X \to \overline \R$ be extended real-valued function.
Suppose that the pointwise sum $f + g$ is well-defined, that is: 

there exists no $x \in X$ such that $\set {\map f x, \map g x} = \set {\infty, -\infty}$.

Then: 

$\paren {f + g}^+ \le f^+ + g^+$
where $\paren {f + g}^+$, $f^+$ and $g^+$ denote the positive parts of $f + g$, $f$ and $g$ respectively.


Proof
Let $x \in X$. 
From the definition of the positive part, we have: 

$\map {f^+} x = \max \set {\map f x, 0}$
and:

$\map {g^+} x = \max \set {\map g x, 0}$

Suppose first that $\map f x$ and $\map g x$ are finite. 
From Maximum Function in terms of Absolute Value, we then have: 

$\ds \map {f^+} x = \frac {\map f x + \size {\map f x} } 2$
and:

$\ds \map {g^+} x = \frac {\map g x + \size {\map g x} } 2$
We then have: 














\(\ds \map {\paren {f + g}^+} x\)

\(=\)







\(\ds \max \set {\map f x + \map g x, 0}\)





Definition of Positive Part














\(\ds \)

\(=\)







\(\ds \frac {\paren {\map f x + \map g x} + \size {\map f x + \map g x} } 2\)





Maximum Function in terms of Absolute Value














\(\ds \)

\(\le\)







\(\ds \frac {\paren {\map f x + \map g x} + \size {\map f x} + \size {\map g x} } 2\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \frac {\map f x + \size {\map f x} } 2 + \frac {\map g x + \size {\map g x} } 2\)




















\(\ds \)

\(=\)







\(\ds \map {f^+} x + \map {g^+} x\)










Now suppose that $\map f x = +\infty$. 
Then $\map g x > -\infty$.
We then have: 

$\map f x + \map g x = +\infty$
So:

$\map {\paren {f + g}^+} x = +\infty$
and: 

$\map {f^+} x = +\infty$
So the inequality:

$\map {\paren {f + g}^+} x \le \map {f^+} x + \map {g^+} x$
holds trivially. 
Swapping $f$ for $g$, we also get the result if $\map g x = +\infty$ and $\map f x > -\infty$. 

Now suppose that $\map f x = -\infty$
Then $\map g x < \infty$.
Then: 

$\map f x + \map g x = -\infty$
So:

$\map {\paren {f + g}^+} x = 0$
and: 

$\map {f^+} x = 0$
We have that: 

$\map {g^+} x \ge 0$
so: 

$\map {\paren {f + g}^+} x \le \map {f^+} x + \map {g^+} x$
Swapping $f$ for $g$, we also get the result if $\map g x = -\infty$ and $\map f x < \infty$.
$\blacksquare$





