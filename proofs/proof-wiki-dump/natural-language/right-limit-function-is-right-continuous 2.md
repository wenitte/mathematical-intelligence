# 

Source: https://proofwiki.org/wiki/Right_Limit_Function_is_Right-Continuous

Theorem
Let $I$ be an open interval.
Let $f : I \to \R$ be a real function such that:

for each $x \in I$, the right limit:
$\ds \lim_{y \mathop \to x^+} \map f y$
exists.
Define $f_\leftarrow : I \to \R$ by:

$\ds \map {f_\leftarrow} x = \lim_{y \mathop \to x^+} \map f y$
for each $x \in I$.

Then $f_\leftarrow$ is right-continuous.
Further, if $f$ is right-continuous at $x$, then $\map {f_\leftarrow} x = \map f x$. 


Proof
Let $\epsilon > 0$. 
Let $x \in I$. 
By the definition of the right limit at $x$, there exists $\delta > 0$ such that for all $y \in I$ satisfying $x < y < x + \delta$, we have:

$\ds \size {\map f y - \map {f_\leftarrow} x} < \frac \epsilon 3$
Take $y \in I$ such that $x < y < x + \delta$. 
Let $\sequence {x_n}_{n \in \N}$ be a sequence with $x < x_n < \delta$ and $x_n \to x$. 
For example, we may take:

$\ds x_n = x + \frac \delta {n + 1}$
for each $n \ge 1$. 
Also let $\sequence {y_n}_{n \in \N}$ be a sequence with $y < y_n < x + \delta$ and $y_n \to y$. 
For example, we may take:

$\ds y_n = y + \frac {\paren {x + \delta} - y} {n + 1}$
for each $n \ge 1$.
By Limit of Function by Convergent Sequences: Corollary, we have:

$\map f {x_n} \to \map {f_\leftarrow} x$
and:

$\map f {y_n} \to \map {f_\leftarrow} y$
as $n \to \infty$. 
We can now write:














\(\ds \size {\map f {x_n} - \map f {y_n} }\)

\(=\)







\(\ds \size {\map f {x_n} - \map f {y_n} - \map {f_\leftarrow} x + \map {f_\leftarrow} x}\)




















\(\ds \)

\(\le\)







\(\ds \size {\map f {x_n} - \map {f_\leftarrow} x} + \size {\map {f_\leftarrow} x - \map f {y_n} }\)




















\(\ds \)

\(<\)







\(\ds \frac {2 \epsilon} 3\)





since $x_n \in \openint x {x + \delta}$ and $y_n \in \openint x {x + \delta}$



Taking $n \to \infty$ and using the Squeeze Theorem, we have:

$\ds \size {\map {f_\leftarrow} x - \map {f_\leftarrow} y} \le \frac {2 \epsilon} 3 < \epsilon$
for all $y \in \openint x {x + \delta}$. 
Hence we have shown that if $x \in I$, then there exists $\delta > 0$ such that whenever $y \in \openint x {x + \delta}$ we have:

$\size {\map {f_\leftarrow} x - \map {f_\leftarrow} y} < \epsilon$

Finally, if right-continuous at $x$, then:

$\ds \lim_{y \mathop \to x^+} \map f y = \map f x$
That is:

$\map {f_\leftarrow} x = \map f x$
by the definition of $f_\leftarrow$.
$\blacksquare$





