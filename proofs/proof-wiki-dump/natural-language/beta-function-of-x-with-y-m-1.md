# 

Source: https://proofwiki.org/wiki/Beta_Function_of_x_with_y%2Bm%2B1



Theorem
Let $\map \Beta {x, y}$ denote the Beta function.
Then:

$\map \Beta {x, y} = \dfrac {\map {\Gamma_m} y m^x} {\map {\Gamma_m} {x + y} } \map \Beta {x, y + m + 1}$
where $\Gamma_m$ is the partial Gamma function:














\(\ds \map {\Gamma_m} y\)

\(=\)







\(\ds \dfrac {m^y m!} {y \paren {y + 1} \paren {y + 2} \cdots \paren {y + m} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {m^y m!} { y^{\overline {m + 1} } }\)











Proof 1













\(\ds \map \Beta {x, y}\)

\(=\)







\(\ds \dfrac {x + y} y \map \Beta {x, y + 1}\)





Beta Function of x with y+1 by x+y over y














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {x + y} y } \paren {\dfrac {x + y + 1} {y + 1} } \map \Beta {x, y + 1 + 1}\)





applying Beta Function of x with y+1 by x+y over y a second time














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {x + y}^{\overline {m + 1} } } {y^{\overline {m + 1} } } \map \Beta {x, y + m + 1}\)





after $m + 1$ times: rising factorial: $y^{\overline {m + 1} } = y \paren {y + 1} \cdots \paren {y + m}$




Also:














\(\ds \map \Beta {y, m + 1}\)

\(=\)







\(\ds \map \Beta {y, m} \dfrac m {y + m}\)





Beta Function of x with y+1 by x+y over y














\(\ds \)

\(=\)







\(\ds \dfrac {m!} {\paren {y + 1}^{\overline m} } \map \Beta {y, 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {m!} {y^{\overline {m + 1} } }\)










and:














\(\ds \map \Beta {x + y, m + 1}\)

\(=\)







\(\ds \map \Beta {x + y, m} \dfrac m {x + y + m}\)





Beta Function of x with y+1 by x+y over y














\(\ds \)

\(=\)







\(\ds \dfrac {m!} {\paren {x + y}^{\overline {m + 1} } }\)










Hence:














\(\ds \map \Beta {x, y}\)

\(=\)







\(\ds \dfrac {\map \Beta {y, m + 1} } {\map \Beta {x + y, m + 1} } \map \Beta {x, y + m + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\dfrac {m!} {y^{\overline {m + 1} } } } } {\paren {\dfrac {m!} {\paren {x + y}^{\overline {m + 1} } } } } \map \Beta {x, y + m + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\map {\Gamma_m} y} {m^y} } \paren {\dfrac {m^{x + y} } {\map {\Gamma_m} {x + y} } } \map \Beta {x, y + m + 1}\)





$\dfrac {m!} {y^{\overline {m + 1} } } = \dfrac {\map {\Gamma_m} y} {m^y}$ and $\dfrac {\paren {x + y}^{\overline {m + 1} } } {m! }  = \dfrac {m^{x + y} } {\map {\Gamma_m} {x + y} }$














\(\ds \)

\(=\)







\(\ds \dfrac {\map {\Gamma_m} y m^x} {\map {\Gamma_m} {x + y} } \map \Beta {x, y + m + 1}\)





$m^y$ cancels



$\blacksquare$


Proof 2













\(\ds \map \Beta {x, y}\)

\(=\)







\(\ds \dfrac {x + y} y \map \Beta {x, y + 1}\)





Beta Function of x with y+1 by x+y over y














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {x + y} y } \paren {\dfrac {x + y + 1} {y + 1} } \map \Beta {x, y + 1 + 1}\)





applying Beta Function of x with y+1 by x+y over y a second time














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {x + y}^{\overline {m + 1} } } {y^{\overline {m + 1} } } \map \Beta {x, y + m + 1}\)





after $m + 1$ times: rising factorial: $y^{\overline {m + 1} } = y \paren {y + 1} \cdots \paren {y + m}$




Hence:














\(\ds \map \Beta {x, y}\)

\(=\)







\(\ds \dfrac {\paren {x + y}^{\overline {m + 1} } } {y^{\overline {m + 1} } } \map \Beta {x, y + m + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {m^x m^y m!} {m^x m^y m!} } \dfrac {\paren {\dfrac 1 {y^{\overline {m + 1} } } } } {\paren {\dfrac 1 {\paren {x + y}^{\overline {m + 1} } } } } \map \Beta {x, y + m + 1}\)





multiplying by $1$ and rearranging














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\dfrac {m^x m^y m!} {y^{\overline {m + 1} } } } } {\paren {\dfrac {m^x m^y m!} {\paren {x + y}^{\overline {m + 1} } } } } \map \Beta {x, y + m + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\dfrac {m^y m!} {y^{\overline {m + 1} } } } m^x } {\paren {\dfrac {m^x m^y m!} {\paren {x + y}^{\overline {m + 1} } } } } \map \Beta {x, y + m + 1}\)





isolating $m^x$














\(\ds \)

\(=\)







\(\ds \dfrac {\map {\Gamma_m} y m^x} {\map {\Gamma_m} {x + y} } \map \Beta {x, y + m + 1}\)





$\map {\Gamma_m} y = \dfrac {m^y m!} { y^{\overline {m + 1} } }$ and $\map {\Gamma_m} {x + y} = \dfrac {m^{x + y} m!} { \paren {x + y}^{\overline {m + 1} } }$



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $41 \ \text{(a)}$




