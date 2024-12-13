# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_over_a_x_squared_plus_b_x_plus_c/Examples/6_x%5E2_%2B_10_x_%2B_5_over_3_x%5E2_%2B_4_x_%2B_2

Example of Use of Primitive of $\dfrac {x^2} {a x^2 + b x + c}$
$\ds \int \dfrac {6 x^2 + 10 x + 5} {3 x^2 + 4 x + 2} \rd x = 2 x + \dfrac 1 3 \ln \size {3 x^3 + 4 x + 2} - \dfrac 1 {3 \sqrt 2} \arctan \dfrac {3 x + 2} {\sqrt 2} + C$


Proof 1













\(\ds \int \dfrac {6 x^2 + 10 x + 5} {3 x^2 + 4 x + 2} \rd x\)

\(=\)







\(\ds \int \dfrac {6 x^2 + 8 x + 4} {3 x^2 + 4 x + 2} \rd x + \int \dfrac {2 x + 1} {3 x^2 + 4 x + 2} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \int 2 \rd x + \int \dfrac {2 x + 1} {3 x^2 + 4 x + 2} \rd x\)





simplification














\(\ds \)

\(=\)







\(\ds 2 x + \int \dfrac {2 x + 1} {3 x^2 + 4 x + 2} \rd x\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds 2 x + \dfrac 1 3 \ln \size {3 x^2 + 4 x + 2} - \dfrac 1 {3 \sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C\)





Primitive of $\dfrac {2 x + 1} {3 x^2 + 4 x + 2}$



$\blacksquare$


Proof 2













\(\ds \int \dfrac {6 x^2 + 10 x + 5} {3 x^2 + 4 x + 2} \rd x\)

\(=\)







\(\ds 6 \int \dfrac {x^2} {3 x^2 + 4 x + 2} \rd x + 10 \int \dfrac x {3 x^2 + 4 x + 2} \rd x + 5 \int \dfrac {\d x} {3 x^2 + 4 x + 2}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds 6 \paren {\frac x 3 - \frac 4 {2 \times 3^2} \ln \size {3 x^2 + 4 x + 2} + \frac {4^2 - 2 \times 3 \times 2} {2 \times 3^2} \int \frac {\d x} {3 x^2 + 4 x + 2} } + 10 \int \dfrac x {3 x^2 + 4 x + 2} \rd x + 5 \int \dfrac {\d x} {3 x^2 + 4 x + 2}\)





Primitive of $\dfrac {x^2} {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds 2 x - \frac 4 3 \ln \size {3 x^2 + 4 x + 2} + \frac 4 3 \int \frac {\d x} {3 x^2 + 4 x + 2} + 10 \int \dfrac x {3 x^2 + 4 x + 2} \rd x + 5 \int \dfrac {\d x} {3 x^2 + 4 x + 2}\)





simplification














\(\ds \)

\(=\)







\(\ds 2 x - \frac 4 3 \ln \size {3 x^2 + 4 x + 2} + 10 \int \dfrac x {3 x^2 + 4 x + 2} \rd x + \dfrac {19} 3 \int \dfrac {\d x} {3 x^2 + 4 x + 2}\)





further simplification














\(\ds \)

\(=\)







\(\ds 2 x - \frac 4 3 \ln \size {3 x^2 + 4 x + 2} + 10 \paren {\frac 1 {2 \times 3} \ln \size {3 x^2 + 4 x + 2} - \frac 4 {2 \times 3} \int \frac {\d x} {3 x^2 + 4 x + 2} } + \dfrac {19} 3 \int \dfrac {\d x} {3 x^2 + 4 x + 2}\)





Primitive of $\dfrac x {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds 2 x - \frac 4 3 \ln \size {3 x^2 + 4 x + 2} + \frac 5 3 \ln \size {3 x^2 + 4 x + 2} - \frac {20} 3 \int \frac {\d x} {3 x^2 + 4 x + 2} + \dfrac {19} 3 \int \dfrac {\d x} {3 x^2 + 4 x + 2}\)





simplification














\(\ds \)

\(=\)







\(\ds 2 x + \frac 1 3 \ln \size {3 x^2 + 4 x + 2} - \dfrac 1 3 \int \frac {\d x} {3 x^2 + 4 x + 2}\)





further simplification














\(\ds \)

\(=\)







\(\ds 2 x + \frac 1 3 \ln \size {3 x^2 + 4 x + 2} - \dfrac 1 3 \paren {\dfrac 1 {\sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } } + C\)





Primitive of $\dfrac 1 {3 x^2 + 4 x + 2}$














\(\ds \)

\(=\)







\(\ds 2 x + \frac 1 3 \ln \size {3 x^2 + 4 x + 2} - \dfrac 1 {3 \sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C\)





simplification



$\blacksquare$





