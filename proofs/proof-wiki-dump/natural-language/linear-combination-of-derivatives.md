# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Derivatives

Theorem
Let $\map f x, \map g x$ be real functions defined on the open interval $I$.
Let $\xi \in I$ be a point in $I$ at which both $f$ and $g$ are differentiable.

Then:

$\map D {\lambda f + \mu g} = \lambda D f + \mu D g$
at the point $\xi$.

It follows from the definition of derivative that if $f$ and $g$ are both differentiable on the interval $I$, then:

$\forall x \in I: \map D {\lambda \map f x + \mu \map g x} = \lambda D \map f x + \mu D \map g x$


Proof













\(\ds \)

\(\)







\(\ds \frac 1 h \paren {\lambda \map f {\xi + h} + \mu \map g {\xi + h} - \lambda \map f \xi - \mu \map g \xi}\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {\frac {\map f {\xi + h} - \map f \xi} h} + \mu \paren {\frac {\map g {\xi + h} - \map g \xi} h}\)




















\(\ds \)

\(\to\)







\(\ds \lambda D \map f \xi + \mu D \map g \xi\)





as $h \to 0$



The result follows from the definition of derivative.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.9 \ \text{(i)}$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.14$: Second Order Linear Equations: Introduction




