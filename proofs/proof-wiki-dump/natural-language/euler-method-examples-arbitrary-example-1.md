# 

Source: https://proofwiki.org/wiki/Euler_Method/Examples/Arbitrary_Example_1

Example of Use of Euler Method
Consider the differential equation:

$y' = \paren {1 - x} y + \cos x$
with the initial condition:

$\map y 0 = 1$

Then the Euler Method generates:

$y_1 = 1 + 2 h$
as an approximatiion to $\map y h$.


Proof
By definition of the Euler Method:

$y_{n + 1} = y_n + h \map f {x_n, y_n}$
where in this case:

$\map f {x_n, y_n} = \paren {1 - x_n} y_n + \cos x_n$
and:

$x_0 = 0$
$y_0 = \map y {x_0} = \map y 0 = 1$
Hence:














\(\ds y_1\)

\(=\)







\(\ds y_0 + h \map f {x_0, y_0}\)




















\(\ds \)

\(=\)







\(\ds \map y 0 + h \paren {\paren {1 - x_0} \map y 0 + \cos x_0}\)




















\(\ds \)

\(=\)







\(\ds 1 + h \paren {\paren {1 - 0} 1 + \cos 0}\)




















\(\ds \)

\(=\)







\(\ds 1 + h \paren {1 + 1}\)





Cosine of $0 \degrees$














\(\ds \)

\(=\)







\(\ds 1 + 2 h\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euler's method
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's method




