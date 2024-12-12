# 

Source: https://proofwiki.org/wiki/Beta_Function_of_x%2B1_with_y_plus_Beta_Function_of_x_with_y%2B1

Theorem
Let $\map \Beta {x, y}$ denote the Beta function.
Then:

$\map \Beta {x + 1, y} + \map \Beta {x, y + 1} = \map \Beta {x, y}$


Proof
By definition:














\(\ds \map \Beta {x + 1, y} + \map \Beta {x, y + 1}\)

\(=\)







\(\ds \int_0^1 t^x \left({1 - t}\right)^{y - 1} \rd t + \int_0^1 t^{x - 1} \left({1 - t}\right)^y \rd t\)





Definition of Beta Function














\(\ds \)

\(=\)







\(\ds \int_0^1 \left({t^x \left({1 - t}\right)^{y - 1} + t^{x - 1} \left({1 - t}\right)^y}\right) \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 t^{x - 1} \left({1 - t}\right)^{y - 1} \left({t + 1 - t}\right) \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 t^{x - 1} \left({1 - t}\right)^{y - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \map \Beta {x, y}\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $40 \ \text{(b)}$




