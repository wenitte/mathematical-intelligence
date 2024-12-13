# 

Source: https://proofwiki.org/wiki/Newton%27s_Method/Example/x%5E3_-_2_x_-_5_%3D_0

Example of Use of Newton's Method
The real root of the cubic:

$x^3 - 2 x - 5 = 0$
can be found by using Newton's Method.
Its approximate value is:

$2 \cdotp 09455 \, 1$
This sequence is A007493 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
We are to solve $\map f x = x^3 - 2 x - 5 = 0$ numerically.
By Newton's Method, we are to iterate the solution using:

$x_{n + 1} = x_n - \dfrac {\map f {x_n}} {\map {f'} {x_n}}$
We have $\map {f'} x = 3 x^2 - 2$.
Hence:














\(\ds x_{n + 1}\)

\(=\)







\(\ds x_n - \frac { {x_n}^3 - 2 x_n - 5} {3 x_n^2 - 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 {x_n}^3 + 5} {3 {x_n}^2 - 2}\)










We can start with any number that is close to the solution.
We have:

$\map f 2 = -1 < 0$
$\map f 3 = 16 > 0$
By Intermediate Value Theorem a root exists between $2$ and $3$.
For convenience we set $x_1 = 2$.
Then:














\(\ds x_2\)

\(=\)







\(\ds \frac {2 {x_1}^3 + 5} {3 {x_1}^2 - 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {21} {10}\)




















\(\ds \)

\(=\)







\(\ds \mathbf 2.1\)




















\(\ds x_3\)

\(=\)







\(\ds \frac {2 {x_2}^3 + 5} {3 {x_2}^2 - 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {11 \, 761} {5 \, 615}\)




















\(\ds \)

\(\approx\)







\(\ds \mathbf {2.0945} 6 \, 8 \dots\)




















\(\ds x_4\)

\(=\)







\(\ds \frac {2 {x_3}^3 + 5} {3 {x_3}^2 - 2}\)




















\(\ds \)

\(=\)







\(\ds \frac {4 \, 138 \, 744 \, 325 \, 037} {1 \, 975 \, 957 \, 316 \, 495}\)




















\(\ds \)

\(\approx\)







\(\ds \mathbf {2.09455 \, 1481} 6 \, 98 \dots\)









at $x_4$ we already have the root accurate to $9$ decimal places.
This process can be continued to obtain increasingly accurate results.
$\blacksquare$


Also see
Definition:Wallis's Number




