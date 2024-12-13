# 

Source: https://proofwiki.org/wiki/Numbers_whose_Cube_equals_Sum_of_Sequence_of_that_many_Squares



Theorem
The integers $m$ in the following sequence all have the property that $m^3$ is equal to the sum of $m$ consecutive squares:

$m^3 = \ds \sum_{k \mathop = 1}^m \paren {n + k}^2$
for some $n \in \Z_{\ge 0}$:

$0, 1, 47, 2161, 99 \, 359, 4 \, 568 \, 353, \ldots$
This sequence is A189173 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
We have:




\(\text {(1)}: \quad\)









\(\ds m^3\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \paren {n + k}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \paren {n^2 + 2 n k + k^2}\)




















\(\ds \)

\(=\)







\(\ds n^2 \sum_{k \mathop = 1}^m 1 + 2 n \sum_{k \mathop = 1}^m k +  \sum_{k \mathop = 1}^m k^2\)




















\(\ds \)

\(=\)







\(\ds m n^2 + 2 n \frac {m \paren {m + 1} } 2 + \frac {m \paren {m + 1} \paren {2 m + 1} } 6\)





Closed Form for Triangular Numbers, Sum of Sequence of Squares








\(\ds \leadsto \ \ \)





\(\ds m^2\)

\(=\)







\(\ds n^2 + n \paren {m + 1} + \frac {\paren {m + 1} \paren {2 m + 1} } 6\)










Thus we have the quadratic equation:

$n^2 + \paren {m + 1} n + \dfrac {\paren {m + 1} \paren {2 m + 1} } 6 - m^2 = 0$

From Solution to Quadratic Equation:














\(\ds n\)

\(=\)







\(\ds \dfrac {-\paren {m + 1} \pm \sqrt {\paren {m + 1}^2 - 4 \paren {\dfrac {\paren {m + 1} \paren {2 m + 1} } 6 - m^2} } } 2\)




















\(\ds \)

\(=\)







\(\ds - \dfrac {m + 1} 2 \pm \frac 1 2 \sqrt {m^2 + 2 m + 1 - 2 \paren {\dfrac {2 m^2 + 3 m + 1} 3} - 4 m^2}\)




















\(\ds \)

\(=\)







\(\ds - \dfrac {m + 1} 2 \pm \frac 1 2 \sqrt {5 m^2 + 2 m + 1 - \dfrac {4 m^2 + 6 m + 2} 3}\)




















\(\ds \)

\(=\)







\(\ds - \dfrac {m + 1} 2 \pm \frac 1 2 \sqrt {\frac {15 m^2 + 6 m + 3 - 4 m^2 - 6 m - 2 + 6 m^2} 3}\)




















\(\ds \)

\(=\)







\(\ds - \dfrac {m + 1} 2 \pm \frac 1 2 \sqrt {\frac {11 m^2 + 1} 3}\)




















\(\ds \)

\(=\)







\(\ds - \dfrac {m + 1} 2 \pm \frac 1 2 \sqrt {\frac {33 m^2 + 3} 9}\)




















\(\ds \)

\(=\)







\(\ds - \dfrac {m + 1} 2 \pm \frac 1 6 \sqrt {33 m^2 + 3}\)










Let $t := +\sqrt {33 m^2 + 3}$.
We are given that $m$ is an integer.
Let $n$ be an integer.
Then $t$ is a rational number which is the square root of an integer.
Therefore $t$ is an integer.
Now let $t$ be an integer.
Then $3$ is a divisor of $t^2$.
Thus $3$ is a divisor of $t$.
It follows that $\dfrac t 3$ and $m + 1$ have the same parity.
Thus either $\dfrac {m + 1} 2$ and $\dfrac t 6$ are both integers or both half-integers.
Hence $n$ is an integer
Thus it has been demonstrated that $n$ is an integer if and only if $t$ is an integer.

Thus, finding the solutions of $(1)$ is equivalent to finding the solutions to the Diophantine equation:

$(3): \quad t^2 - 33m^2 = 3$

We first note the degenerate solution:

$t = 6, m = 1$

Consider Pell's equation:

$(4): \quad x^2 - 33 y^2 = 1$
By Solution to Pell's Equation, the first positive solution to $(4)$ is:

$x = 23, y = 4$
Thus all the solutions to $(4)$ are:

$x = 1, y = 0$
and:

$x = \pm x_n, y = \pm y_n$
where:

$(5): \quad x_n + y_n \sqrt {33} = \paren {23 + 4 \sqrt {33} }^n$
for all positive integers $n$.

Using the solution of $(3)$:

$t = 6, m = 1$
we can obtain another solution of $(3)$ by using:

$\paren {6 + \sqrt {33} } \paren {x + y \sqrt {33} } = t + m \sqrt {33}$
where:

$(6): \quad t = 6 x + 33 y, m = x + 6 y$

Thus:

$t - m \sqrt {33} = \paren {6 - \sqrt {33} } \paren {x - y \sqrt {33} }$
from which:














\(\ds t^2 - 33 m^2\)

\(=\)







\(\ds \paren {t - m \sqrt {33} } \paren {t + m \sqrt {33} }\)




















\(\ds \)

\(=\)







\(\ds \paren {6 - \sqrt {33} } \paren {6 + \sqrt {33} } \paren {x - y \sqrt {33} } \paren {x + y \sqrt {33} }\)




















\(\ds \)

\(=\)







\(\ds \paren {6^2 - 1 \times 33} \paren {x^2 - 33 y^2}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 1\)




















\(\ds \)

\(=\)







\(\ds 4\)









Thus it is demonstrated that $\tuple {t, m}$ is a solution of $(3)$.

Now let $\tuple {t, m}$ be any solution of $(3)$.
Let:

$x = 2 t - 11 m$
$y = \dfrac {6 m - t} 3$
We have that:

$t^2 - 33 m^2 = 3$
and so:

$3$ is a divisor of $t^2$
and so:

$3$ is a divisor of $t$
and so $x$ and $y$ are both integers.

$x$ and $y$ are seen to be solutions to $(4)$, and:

$t = 6 x + 33 y$
$m = x + 6 y$
Thus from $(5)$ and $(6)$ it follows that the solutions of $(3)$ with $m > 1$ are obtained from $x = \pm x_n, y = \pm y_n$ in $(5)$.
It follows further that all values of $m$ in such solutions are odd.
The trivial solution $x = 1, y - 0$ of $(4)$ corresponds to $m = 1, t = 6$ of $(3)$.

Thus we have that all the values of $m$ are given by:

$m_n = x_n + 6 y_n$
where:

$x_n + y_n \sqrt {33} = \paren {23 + 4 \sqrt {33} }^n$

We can set up a recursive process to calculate $\tuple {x_n, y_n}$ of $(4)$ and the corresponding $\tuple {t_n, m_n}$ of $(3)$ as follows:

$(7): \quad \tuple {x_n, y_n} = \begin{cases}
\tuple {23, 4} & : n = 1 \\
\tuple {23 x_{n - 1} + 132 y_{n - 1}, 23 y_{n - 1}, 4 x_{n - 1} } & : n > 1
\end{cases}$
$(8): \quad \tuple {t_n, m_n} = \begin{cases}
\tuple {6, 1} & : n = 0 \\
\tuple {23 t_{n - 1} + 132 m_{n - 1}, 23 t_{n - 1}, 4 m_{n - 1} } & : n > 0
\end{cases}$

Using $(8)$, the values of $m$ for $n \ge 1$ are found to be:

$m_1 = 47, m_2 = 2161, m_3 = 99 \, 359, \ldots$
$\blacksquare$


Examples
$47$ as Sum of Sequence of $47$ Squares
$\ds 47^3 = \sum_{k \mathop = 1}^{47} \paren {21 + k}^2$


$2161$ as Sum of Sequence of $2161$ Squares
$\ds 2161^3 = \sum_{k \mathop = 1}^{2161} \paren {988 + k}^2$


$99 \, 359$ as Sum of Sequence of $99 \, 359$ Squares
$\ds 99 \, 359^3 = \sum_{k \mathop = 1}^{99 \, 359} \paren {45 \, 449 + k}^2$


Sources
Feb. 1987: Ion Cucurezeanu and Gertrude Ehrlich: E3064 (Amer. Math. Monthly Vol. 94, no. 2: pp. 190 – 192)  www.jstor.org/stable/2322431
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $103,823$




