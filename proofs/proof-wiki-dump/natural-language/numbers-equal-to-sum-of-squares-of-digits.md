# 

Source: https://proofwiki.org/wiki/Numbers_Equal_to_Sum_of_Squares_of_Digits



Theorem
There are exactly $2$ integers which are equal to the sum of the squares of their digits when expressed in base $10$:

$0 = 0^2$
$1 = 1^2$


Proof
We see the cases $0$ and $1$ above hold.

Suppose $N > 1$ is equal to the sum of the squares of their digits when expressed in base $10$.
Since $N^2 > N$, $N$ cannot be a $1$-digit integer.

Suppose $N$ is a $2$-digit integer.
Write $N = \sqbrk {a b} = 10 a + b$.
Then we have $a^2 + b^2 = 10 a + b$.
This can be reduced to $b \paren {b - 1} = a \paren {10 - a}$.
Since $b \paren {b - 1}$ is even, $a$ must be even as well.

The list of possible values of $a \paren {10 - a}$ are:

$2 \paren {10 - 2} = 8 \paren {10 - 8} = 16$
$4 \paren {10 - 4} = 6 \paren {10 - 6} = 24$

The list of possible values of $b \paren {b - 1}$ are:

$b \paren {b - 1} \le 4 \paren {4 - 1} = 12$ for $b \le 4$
$5 \paren {5 - 1} = 20$
$b \paren {b - 1} \ge 6 \paren {6 - 1} = 30$ for $b \ge 6$

We see that they do not coincide.
Thus $N$ cannot be a $2$-digit integer.

Suppose $100 \le N \le 199$.
Write $N = \sqbrk {1 a b} = 100 + 10 a + b$.
Then we have $1^2 + a^2 + b^2 = 100 + 10 a + b$.
This can be reduced to $b \paren {b - 1} = a \paren {10 - a} + 99$.
But we have $b \paren {b - 1} < 9 \times 8 = 72 < 99 \le a \paren {10 - a} + 99$.
So $N$ cannot be in this range.

Suppose $200 \le N \le 299$.
Then the sum of the squares of their digits cannot exceed $2^2 + 9^2 + 9^2 = 186 < 200$.
So $N$ cannot be in this range.

Suppose $300 \le N \le 999$.
Then the sum of the squares of their digits cannot exceed $9^2 + 9^2 + 9^2 = 243 < 300$.
So $N$ cannot be in this range.

Suppose $N$ is a $k$-digit integer with $k \ge 4$.
Then the sum of the squares of their digits cannot exceed $9^2 \times k$.
We have:














\(\ds N\)

\(\ge\)







\(\ds 10^{k - 1}\)





The smallest $k$-digit number














\(\ds \)

\(\ge\)







\(\ds 100 \paren {1 + 9 \paren {k - 3} }\)





Bernoulli's Inequality














\(\ds \)

\(>\)







\(\ds 81 \paren {k + 8 k - 26}\)




















\(\ds \)

\(>\)







\(\ds 9^2 \times k\)





From $k \ge 4$



So $N$ cannot be greater than $1$.
$\blacksquare$


Historical Note
This result was presented without proof in François Le Lionnais and Jean Brette: Les Nombres Remarquables of $1983$.
However, they failed to note that it is important to stress the fact that it depends on the number base.
While it holds for base $10$, it is not true for base $3$:

$5$ expressed in base $3$ is $12$, while $1^2 + 2^2 = 5$


Sources
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0$




