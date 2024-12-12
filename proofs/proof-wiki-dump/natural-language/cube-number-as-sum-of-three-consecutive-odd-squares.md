# 

Source: https://proofwiki.org/wiki/Cube_Number_as_Sum_of_Three_Consecutive_Odd_Squares



Theorem
$1331 = 11^3 = 19^2 + 21^2 + 23^2$
No other such sequence of $3$ consecutive odd squares has the same property.


Proof













\(\ds 19^2 + 21^2 + 23^2\)

\(=\)







\(\ds 361 + 441 + 529\)




















\(\ds \)

\(=\)







\(\ds 1331\)









Any sequence of $3$ consecutive odd integers that have squares that sum to a cube would satisfy:

$m^3 = \paren {n - 2}^2 + n^2 + \paren {n + 2}^2$
where $n$ is the middle number of the sequence, with $m, n \in \Z$.

Expanding the right hand side:














\(\ds m^3\)

\(=\)







\(\ds \paren {n - 2}^2 + n^2 + \paren {n + 2}^2\)




















\(\ds \)

\(=\)







\(\ds n^2 - 4 n + 4 + n^2 + n^2 + 4 n + 4\)





Square of Sum, Square of Difference














\(\ds \)

\(=\)







\(\ds 3 n^2 + 8\)









Substituting $x = 3 m$ and $y = 9 n$:














\(\ds \paren {\frac x 3}^3\)

\(=\)







\(\ds 3 \paren {\frac y 9}^2 + 8\)














\(\ds \leadsto \ \ \)





\(\ds \frac {x^3} {27}\)

\(=\)







\(\ds \frac {y^2} {27} + 8\)














\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(=\)







\(\ds x^3 - 216\)









which is an elliptic curve.
According to LMFDB, this elliptic curve has exactly $5$ lattice points:

$\tuple {6, 0}, \tuple {10, \pm 28}, \tuple {33, \pm 189}$
which correspond to these values of $n$:

$0, \pm \dfrac {28} 9, \pm 21$

$\pm \dfrac {28} 9$ are not integers.
The other possibilities are:

the trivial $0 = \paren {-2}^2 + 0^2 + 2^2$
the less trivial $11^3 = \paren {-23}^2 + \paren {-21}^2 + \paren {-19}^2$
The first is not a set of consecutive odd squares.
The second gives the same set of consecutive odd squares.
Hence there are no more solutions.
$\blacksquare$


Historical Note
In his Curious and Interesting Numbers, 2nd ed. of $1997$, David Wells attributes this result to Michal Stajsczak, but gives no context.


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1331$
The LMFDB Collaboration, The L-functions and Modular Forms Database, Elliptic Curve 576/e/3, $2013$ [Online; accessed 7-Apr-2022]




