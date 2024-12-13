# 

Source: https://proofwiki.org/wiki/Maximum_Function_in_terms_of_Absolute_Value

Theorem
Let $x$ and $y$ be real numbers.

Then:

$\ds \max \set {x, y} = \frac 1 2 \paren {\paren {x + y} + \size {x - y} }$


Proof
We aim to show that: 

$\ds \frac 1 2 \paren {\paren {x + y} + \size {x - y} } = \begin{cases}y & x \le y \\ x & x > y\end{cases}$

Let $x \le y$. 
Then:

$x - y \le 0$
Then, from the definition of the absolute value, we have: 

$\size {x - y} = y - x$
So: 














\(\ds \frac 1 2 \paren {\paren {x + y} + \size {x - y} }\)

\(=\)







\(\ds \frac 1 2 \paren {\paren {x + y} + \paren {y - x} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \times 2 y\)




















\(\ds \)

\(=\)







\(\ds y\)










Let $x > y$.
Then: 

$x - y > 0$
Then, from the definition of the absolute value, we have: 

$\size {x - y} = x - y$
So:














\(\ds \frac 1 2 \paren {\paren {x + y} + \size {x - y} }\)

\(=\)







\(\ds \frac 1 2 \paren {\paren {x + y} + \paren {x - y} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \times 2 x\)




















\(\ds \)

\(=\)







\(\ds x\)










So:

$\ds \frac 1 2 \paren {\paren {x + y} + \size {x - y} } = \begin{cases}y & x \le y \\ x & x > y\end{cases}$
as required.
$\blacksquare$





