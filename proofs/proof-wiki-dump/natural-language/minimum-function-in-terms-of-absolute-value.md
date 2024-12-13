# 

Source: https://proofwiki.org/wiki/Minimum_Function_in_terms_of_Absolute_Value

Theorem
Let $x$ and $y$ be real numbers.

Then:

$\ds \min \set {x, y} = \frac 1 2 \paren {\paren {x + y} - \size {x - y} }$


Proof
We aim to show that: 

$\ds \frac 1 2 \paren {\paren {x + y} - \size {x - y} } = \begin{cases}x & x \le y \\ y & x > y\end{cases}$
Let $x \le y$, then: 

$x - y \le 0$
so, by the definition of absolute value, we have: 

$\size {x - y} = y - x$
So, for $x \le y$, we have: 














\(\ds \frac 1 2 \paren {\paren {x + y} - \size {x - y} }\)

\(=\)







\(\ds \frac 1 2 \paren {\paren {x + y} - \paren {y - x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 x} 2\)




















\(\ds \)

\(=\)







\(\ds x\)









Now let $x > y$, then:

$x - y > 0$
so, by the definition of absolute value, we have: 

$\size {x - y} = x - y$
So, for $x > y$ we have: 














\(\ds \frac 1 2 \paren {\paren {x + y} - \size {x - y} }\)

\(=\)







\(\ds \frac 1 2 \paren {\paren {x + y} - \paren {x - y} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 y} 2\)




















\(\ds \)

\(=\)







\(\ds y\)









so:

$\ds \frac 1 2 \paren {\paren {x + y} - \size {x - y} } = \begin{cases}x & x \le y \\ y & x > y\end{cases}$
as required.
$\blacksquare$





