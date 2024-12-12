# 

Source: https://proofwiki.org/wiki/Beta_Function_of_x_with_y%2B1_by_x%2By_over_y

Theorem
Let $\map \Beta {x, y}$ denote the Beta function.
Then:

$\map \Beta {x, y} = \dfrac {x + y} y \map \Beta {x, y + 1}$


Proof
By definition of Beta function:

$\ds \map \Beta {x + 1, y} = \int_0^1 t^x \paren {1 - t}^{y - 1} \rd t$
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds t x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds x t^{x - 1}\)





Power Rule for Derivatives




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \paren {1 - t}^{y - 1}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds -\frac {\paren {1 - t}^y} y\)





Primitive of Power




Then:














\(\ds \)

\(\)







\(\ds \int_0^1 t^{x - 1} \paren {1 - t}^{y - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \sqbrk {t^x \frac {-\paren {1 - t}^y} y}_0^1 - \int_0^1 x t^{x - 1} \frac {-\paren {1 - t}^y} y \rd t\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac x y \int_0^1 t^{x - 1} \paren {1 - t}^y \rd t\)





as the left hand term vanishes














\(\ds \)

\(=\)







\(\ds \frac x y \map \Beta {x, y + 1}\)





Definition of Beta Function




Hence:














\(\ds \map \Beta {x, y}\)

\(=\)







\(\ds \map \Beta {x + 1, y} + \map \Beta {x, y + 1}\)





Beta Function of x+1 with y plus Beta Function of x with y+1














\(\ds \)

\(=\)







\(\ds \frac x y \map \Beta {x, y + 1} + \map \Beta {x, y + 1}\)





from above














\(\ds \)

\(=\)







\(\ds \frac {x + y} y \map \Beta {x, y + 1}\)





simplifying



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $40 \ \text{(c)}$




