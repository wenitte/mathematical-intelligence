# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_y%27_%3D_Root_of_(x%5E2_%2B_y%5E2)

Theorem
The first order ordinary differential equation:

$(1): \quad x y' = \sqrt {x^2 + y^2}$

is a homogeneous differential equation with solution:

$3 x^2 \ln x = y \sqrt {x^2 + y^2} + x^2 \map \ln {y + \sqrt {x^2 + y^2} } + y^2 + C x^2$


Proof
We divide through by $x$ to show that $(1)$ is homogeneous:














\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \frac {\sqrt {x^2 + y^2} } x\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac {x^2 + y^2} {x^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {1 + \paren {\frac y x}^2}\)










By Solution to Homogeneous Differential Equation, its solution is:

$\ds \ln x = \int \frac {\d z} {\map f {1, z} - z} + C$
where:

$\map f {x, y} = \dfrac {\sqrt {x^2 + y^2} } x$

Thus:














\(\ds \ln x\)

\(=\)







\(\ds \int \frac {\d z} {\sqrt {1 + z^2} - z}\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\sqrt{1 + z^2} + z} \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac {z \sqrt {1 + z^2} } 2 + \frac {\map \ln {\sqrt{1 + z^2} + z} } 2 + \frac {z^2} 2 + k\)





Primitive of $\sqrt {x^2 + a^2}$








\(\ds \leadsto \ \ \)





\(\ds 2 \ln x\)

\(=\)







\(\ds z \sqrt {1 + z^2} + \map \ln {\sqrt{1 + z^2} + z} + z^2 + C\)





where $C = 2 k$














\(\ds \)

\(=\)







\(\ds \frac y x \sqrt {1 + \paren {\frac y x}^2} + \map \ln {\sqrt {1 + \paren {\frac y x}^2} + \frac y x} + \paren {\frac y x}^2 + C\)




















\(\ds \)

\(=\)







\(\ds \frac y x \sqrt {\frac {x^2 + y^2} {x^2} } + \map \ln {\sqrt {\frac {x^2 + y^2} {x^2} } + \frac y x} + \paren {\frac y x}^2 + C\)




















\(\ds \)

\(=\)







\(\ds \frac y x \frac {\sqrt {x^2 + y^2} } x + \map \ln {\frac {\sqrt {x^2 + y^2} } x + \frac y x} + \paren {\frac y x}^2 + C\)














\(\ds \leadsto \ \ \)





\(\ds 2 x^2 \ln x\)

\(=\)







\(\ds y \sqrt {x^2 + y^2} + x^2 \map \ln {y + \sqrt {x^2 + y^2} } - x^2 \ln x + y^2 + C x^2\)














\(\ds \leadsto \ \ \)





\(\ds 3 x^2 \ln x\)

\(=\)







\(\ds y \sqrt {x^2 + y^2} + x^2 \map \ln {y + \sqrt {x^2 + y^2} } + y^2 + C x^2\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $4$




