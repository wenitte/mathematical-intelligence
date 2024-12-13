# 

Source: https://proofwiki.org/wiki/Prime_Magic_Square/Examples/Order_3/Smallest



Example of Order $3$ Prime Magic Square
This order $3$ prime magic square has the smallest elements:

$\begin{array}{|c|c|c|}
\hline 67 & 1 & 43 \\
\hline 13 & 37 & 61 \\
\hline 31 & 73 & 7 \\
\hline
\end{array}$


Proof
For the purpose of this magic square only, we consider $1$ as a prime.

A simple parity argument can show that $2$ cannot be included in a prime magic square:
If it is, the row containing $2$ sum to an even number, while a row not containing $2$ will sum to an odd number.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: I'm drawing a blank on how to present the following result clearlyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
We aim to show that all elements of an order $3$ prime magic square has the same remainder when divided by $3$.
There are two parts to this:


$3$ cannot be used
For simplicity, we denote the numbers in the cells by their remainders when divided by $3$.
Note that $3$ is the only prime divisible by $3$.
We define the off-diagonals as:

$\begin{array}{|c|c|c|}
\hline * &  &  \\
\hline  & * &  \\
\hline  &  & * \\
\hline
\end{array}
\begin{array}{|c|c|c|}
\hline  & * &  \\
\hline  &  & * \\
\hline * &  &  \\
\hline
\end{array}
\begin{array}{|c|c|c|}
\hline  &  & * \\
\hline * &  &  \\
\hline  & * &  \\
\hline
\end{array}
\begin{array}{|c|c|c|}
\hline  &  & * \\
\hline  & * &  \\
\hline * &  &  \\
\hline
\end{array}
\begin{array}{|c|c|c|}
\hline  & * &  \\
\hline * &  &  \\
\hline  &  & * \\
\hline
\end{array}
\begin{array}{|c|c|c|}
\hline * &  &  \\
\hline  &  & * \\
\hline  & * &  \\
\hline
\end{array}$
We also observe that, by switching rows and columns, the numbers in each row and column remains unchanged, while the two diagonals become two off-diagonals sharing one cell.
Therefore the position of the numbers do not matter in the most part.

Suppose $3$ is used in the square.
Without loss of generality there are only two cases:

Case $1$: The row containing $3$ has numbers with all remainders
We have:

$\begin{array}{|c|c|c|}
\hline 0 & 1 & 2 \\
\hline  &  &  \\
\hline  &  &  \\
\hline
\end{array}$
Hence the row sum is divisible by $3$.
Since:

$1 + 1 \equiv 2 \pmod 3$
$2 + 2 \equiv 1 \pmod 3$
$1 + 2 \equiv 0 \pmod 3$
there is a unique way to fill in the columns:

$\begin{array}{|c|c|c|}
\hline 0 & 1 & 2 \\
\hline 1 & 1 & 2 \\
\hline 2 & 1 & 2 \\
\hline
\end{array}$
Note that the order of $1$ and $2$ in the leftmost column do not matter due to symmetry.
The sums of rows $2$ and $3$ are not divisible by $3$.
Hence this case cannot occur.
$\Box$


Case $2$: The row containing $3$ leave out numbers with some remainder
Without loss of generality suppose $2$ is not used.
Then:

$\begin{array}{|c|c|c|}
\hline 0 & 1 & 1 \\
\hline  &  &  \\
\hline  &  &  \\
\hline
\end{array}$
Filling in the columns:

$\begin{array}{|c|c|c|}
\hline 0 & 1 & 1 \\
\hline 1 & 2 & 2 \\
\hline 1 & 2 & 2 \\
\hline
\end{array}$
All off-diagonals sum to $1$, which is not $1 + 1 = 2$.
Hence this case cannot occur.
$\Box$


Primes of remainder $1, 2$ cannot be mixed
Without loss of generality suppose there are $2$ $1$'s and $1$ $2$.
Then the row sum is not divisible by $3$.
We have:

$\begin{array}{|c|c|c|}
\hline 1 & 1 & 2 \\
\hline  &  &  \\
\hline  &  &  \\
\hline
\end{array}$
Filling in the first and third columns:

$\begin{array}{|c|c|c|}
\hline 1 & 1 & 2 \\
\hline 1 &  & 1 \\
\hline 2 &  & 1 \\
\hline
\end{array}$
Finally, filling up the rows:

$\begin{array}{|c|c|c|}
\hline 1 & 1 & 2 \\
\hline 1 & 2 & 1 \\
\hline 2 & 1 & 1 \\
\hline
\end{array}$
There must be an off-diagonal with sum divisible by $3$.
Hence this case cannot occur.
$\Box$

Using this result, we divide the primes $\le 73$ into two groups:

Remainder of $1$: $\set {1, 7, 13, 19, 31, 37, 43, 61, 67, 73}$
Remainder of $2$: $\set {5, 11, 17, 23, 29, 41, 47, 53, 59, 71}$
We only need to show these primes cannot form a smaller magic square.

Consider:

$\begin{array}{|c|c|c|}
\hline a & b & c \\
\hline d & e & f \\
\hline g & h & i \\
\hline
\end{array}$
Let $C$ be the magic constant.
Then:














\(\ds 4C\)

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









Hence $e = \dfrac C 3$, which is $\dfrac 1 9$ of the sum of all numbers in the square.
We have:

$1 + 7 + 13 + 19 + 31 + 37 + 43 + 61 + 67 + 73 = 352$
$5 + 11 + 17 + 23 + 29 + 41 + 47 + 53 + 59 + 71 = 356$
$352$ and $356$ have remainders $1$ and $5$ when divided by $9$.
In the lists:

$1, 19, 37, 73$ have a remainder of $1$ when divided by $9$.
$5, 23, 41, 59$ have a remainder of $5$ when divided by $9$.
Omitting each number gives the corresponding center square values:

$39, 37, 35, 31$ for the first list
$39, 37, 35, 33$ for the second list
Only $31, 37$ of the first list are possible candidates.
However:

$73 + 31 > 93$
Hence $31$ fail to produce a magic square.
This leaves $37$, which possibility is demonstrated above.
$\blacksquare$


Also see
Magic Constant of Smallest Prime Magic Square


Sources
Weisstein, Eric W. "Prime Magic Square." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/PrimeMagicSquare.html




