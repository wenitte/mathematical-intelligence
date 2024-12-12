# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Boubaker_Polynomials

Theorem
The Boubaker polynomials, defined as:   

$\map {B_n} x = \begin{cases}
1 & : n = 0 \\
x & : n = 1 \\
x^2 + 2 & : n = 2 \\
x \map {B_{n - 1} } x - \map {B_{n - 2} } x & : n > 2 \end{cases}$
have as an ordinary generating function:

$\ds \map {f_{B_n, \operatorname {ORD} } } {x, t} = \sum_{n \mathop = 0}^{\infty} \map {B_n} x t^n = \frac {1 + 3 t^2} {1 + t \paren {t - x} }$


Proof













\(\ds \map f {x, t}\)

\(=\)







\(\ds 1 + x t + \paren {x^2 + 2} t^2 + \sum_{n \mathop = 3}^\infty \paren {x \map {B_{n - 1} } x t^n - \map {B_{n - 2} } x t^n}\)





Recursive definition of $\map {B_n} x$ for $n > 2$














\(\ds \)

\(=\)







\(\ds 1 + x t + \paren {x^2 + 2} t^2 + x t \sum_{n \mathop = 3}^\infty \map {B_{n - 1} } x t^{n - 1} - t^2 \sum_{n \mathop = 3}^\infty \map {B_{n - 2} } x t^{n - 2}\)




















\(\ds \)

\(=\)







\(\ds 1 + x t + \paren {x^2 + 2} t^2 + x t \paren {\map f {x, t} - 1 - x t} - t^2 \paren {\map f {x, t} - 1}\)


















\(\ds \leadsto \ \ \)





\(\ds \paren {1 - x t + t^2} \map f {x, t}\)

\(=\)







\(\ds 1 + x t + x^2 t^2 + 2 t^2 - x t - x^2 t^2 + t^2\)




















\(\ds \)

\(=\)







\(\ds 1 + 3 t^2\)














\(\ds \leadsto \ \ \)





\(\ds \map f {x, t}\)

\(=\)







\(\ds \frac {1 + 3 t^2} {1 + t \paren {t - x} }\)









$\blacksquare$





