# 

Source: https://proofwiki.org/wiki/No_Perfect_Magic_Cube_of_Order_Less_than_5_Exists



Theorem
Apart from the trivial order $1$ case, no perfect magic cube exists whose order is $4$ or less.


Proof
Order $2$
Consider a layer of the order $2$ perfect magic cube:

$\begin{array}{|c|c|}
\hline  a & b \\
\hline  c & d \\
\hline
\end{array}$
Then we must have $a + b = a + c$.
So $b = c$, so they are not distinct, so this array cannot be a layer of a perfect magic cube.
$\Box$


Order $3$
Let $C$ be the magic constant of an order $3$ perfect magic cube.
Consider a layer of the perfect magic cube:

$\begin{array}{|c|c|c|}
\hline  a & b & c \\
\hline  d & e & f \\
\hline  g & h & i \\
\hline
\end{array}$
The sum of all elements in this layer is $3 C$.
We also have:














\(\ds 4 C\)

\(=\)







\(\ds \paren {a + e + i} + \paren {b + e + h} + \paren {c + e + g} + \paren {d + e + f}\)





These are all lines passing through the center














\(\ds \)

\(=\)







\(\ds \paren {a + b + c + d + e + f + g + h + i} + 3 e\)





Center counted $4$ times














\(\ds \)

\(=\)







\(\ds 3 C + 3 e\)









This gives $e = \dfrac C 3$.
However these equations applies for every layer of the perfect magic cube.
So the center of every layer is equal to $\dfrac C 3$.
They are not distinct, so there cannot exist a order $3$ perfect magic cube.
$\Box$


Order $4$
Let $C$ be the magic constant of an order $4$ perfect magic cube.
Consider a layer of the perfect magic cube:

$\begin{array}{|c|c|c|c|}
\hline  a & b & c & d \\
\hline  e & f & g & h \\
\hline  i & j & k & l \\
\hline  m & n & o & p \\
\hline
\end{array}$
The sum of all elements in this layer is $4 C$.
We also have:














\(\ds 6 C\)

\(=\)







\(\ds \paren {a + b + c + d} + \paren {d + h + l + p} + \paren {m + n + o + p} + \paren {a + e + i + m} + \paren {a + f + k + p} + \paren {d + g + j + m}\)





These are all the diagonals and edges














\(\ds \)

\(=\)







\(\ds \paren {a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p} + 2 \paren {a + d + m + p}\)





Corners counted thrice














\(\ds \)

\(=\)







\(\ds 4 C + 2 \paren {a + d + m + p}\)









So the sum of the corners is equal to $C$.
These equations apply to all layers, including the diagonal layers.

Now consider the full perfect magic cube, but only the corners:

$\begin{array}{|c|c|c|c|}
\hline  a & \phantom b & \phantom b & c \\
\hline   &  &  &  \\
\hline   &  &  &  \\
\hline  b &  &  & d \\
\hline
\end{array}
\begin{array}{|c|c|c|c|}
\hline  \phantom b & \phantom b & \phantom b & \phantom b \\
\hline   &  &  &  \\
\hline   &  &  &  \\
\hline   &  &  &  \\
\hline
\end{array}
\begin{array}{|c|c|c|c|}
\hline  \phantom b & \phantom b & \phantom b & \phantom b \\
\hline   &  &  &  \\
\hline   &  &  &  \\
\hline   &  &  &  \\
\hline
\end{array}
\begin{array}{|c|c|c|c|}
\hline  e & \phantom b & \phantom b & * \\
\hline   &  &  &  \\
\hline   &  &  &  \\
\hline  f &  &  & * \\
\hline
\end{array}$
From our discussion above, we have:

$\paren {a + b + c + d} = \paren {a + b + e + f} = \paren {c + d + e + f} = C$
Hence:














\(\ds a + b\)

\(=\)







\(\ds \frac 1 2 \paren {\paren {a + b + c + d} + \paren {a + b + e + f} - \paren {c + d + e + f} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {C + C - C}\)




















\(\ds \)

\(=\)







\(\ds \frac C 2\)









Therefore any two adjacent corners sum up to $\dfrac C 2$.
However this implies $a + c = \dfrac C 2 = a + b$.
So $b = c$, so they are not distinct, so there cannot exist a order $4$ perfect magic cube.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $8$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $8$




