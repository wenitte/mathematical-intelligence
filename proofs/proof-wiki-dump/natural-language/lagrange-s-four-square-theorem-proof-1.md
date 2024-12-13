# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Four_Square_Theorem/Proof_1



Theorem
Every positive integer can be expressed as a sum of four squares.


Proof
$1$ can trivially be expressed as a sum of four squares:

$1 = 1^2 + 0^2 + 0^2 + 0^2$

From Product of Sums of Four Squares it is sufficient to show that each prime can be expressed as a sum of four squares.

The prime number $2$ certainly can: $2 = 1^2 + 1^2 + 0^2 + 0^2$.

It remains to consider the odd primes.


Existence of $m: 1 \le m < p$ such that $m p$ is the sum of $4$ squares
Suppose that some multiple $m p$ of the odd prime $p$ can be expressed as:

$m p = a^2 + b^2 + c^2 + d^2, 1 \le m < p$
If $m = 1$, we have the required expression.
If not, then after some algebra we can descend to a smaller multiple of $p$ which is also the sum of four squares:

$m_1 p = a_1^2 + b_1^2 + c_1^2 + d_1^2, 1 \le m_1 < m$

Next we need to show that there really is a multiple of $p$ which is a sum of four squares.
From this multiple we can descend in a finite number of steps to $p$ being a sum of four squares.

Since $p$ is odd and greater than $2$, $\dfrac {p - 1} 2$ is an integer.
There are $\dfrac {p + 1} 2$ integers $a_1, a_2, \ldots$ such that $0 \le a_i \le \dfrac {p - 1} 2$.
For each $a_i$, let $r_i$ be the remainder when ${a_i}^2$ is divided by $p$.
We have:

$\forall r_i: 0 \le r_i \le p - 1$

Aiming for a contradiction, suppose:

$\exists a_1, a_2: 0 \le a_2 < a_1 \le \dfrac {p - 1} 2: {a_1}^2 = q_1 p + r, {a_2}^2 = q_2 p + r$
That is, two different integers in that range which have the same remainder.
Then:














\(\ds {a_1}^2 - {a_2}^2\)

\(=\)







\(\ds \paren {q_1 - q_2} p\)














\(\ds \leadsto \ \ \)





\(\ds p\)

\(\divides\)







\(\ds \paren { {a_1}^2 - {a_2}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_1 - a_2} \paren {a_1 + a_2}\)









By Euclid's Lemma for Prime Divisors, either:

$p \divides a_1 - a_2$
or:

$p \divides a_1 + a_2$
But both $a_1 - a_2$ and $a_1 + a_2$ are positive integers less than $p$.
From Absolute Value of Integer is not less than Divisors, this is impossible.
Hence by Proof by Contradiction, it is not the case that:

$\exists a_1, a_2: 0 \le a_2 < a_1 \le \dfrac {p - 1} 2: {a_1}^2 = q_1 p + r, {a_2}^2 = q_2 p + r$

To each $r_i$, add $1$ and subtract the result from $p$:

$\forall r_i: s_i = p - \paren {r_i + 1}$
Thus we have $\dfrac {p + 1} 2$ distinct positive integers $s_i$ such that:

$0 \le s_i \le p - 1$
Out of these $r_i$ and $s_i$, there must exist some $r$ and $s$ such that $r = s$, otherwise there would be:

$\dfrac {p + 1} 2 + \dfrac {p + 1} 2 = p + 1$
distinct positive integers less than $p$.
So take such an $r$ and $s$ such that $r = s$.
By construction:

$\exists a, b \in \Z: 0 \le a, b \le \dfrac {p - 1} 2$
such that:

$a^2 = q_1 p + r$
$b^2 = q_2 p + r'$
$s = p - \paren {r' + 1}$
Adding these up:

$a^2 + b^2 + s = \paren {q_1 + q_2 + 1} p + r - 1$
As $r = s$, we can write this as:

$a^2 + b^2 + 1 = m p$
where $m = q_1 + q_2 + 1$.
Thus we have that:

$m p = a^2 + b^2 + 1^2 + 0^2$
and so is a sum of four squares such that:

$m = \dfrac {a^2 + b^2 + 1} p < \dfrac 1 p \paren {\dfrac {p^2} 4 + \dfrac {p^2} 4 + 1} < p$
We have by hypothesis that:

$1 \le m < p$

To recapitulate: what has been proved is that there exists an integer $m$ such that $1 \le m < p$ such that $m p$ is the sum of four squares.
Note the restriction on $m$:

if $m = 0$ or $m = p$, then $m p = 0 = 0^2$ or $m p = p^2$, both of which are trivially the sum of four squares.


Every prime $p > 2$ written as sum of $4$ squares
Let $m$ be the smallest positive integer such that:

$(1): \quad m p = {x_1}^2 + {x_2}^2 + {x_3}^2 + {x_4}^2$
for integers $x_1, x_2, x_3, x_4$.
It has already been demonstrated that $m < p$.
It remains to be shown that $m = 1$.

Aiming for a contradiction, suppose $m$ is even.
Let $(1)$ be written as:

$(2): \quad \dfrac m 2 p = \paren {\dfrac {x_1 + x_2} 2}^2 + \paren {\dfrac {x_1 - x_2} 2}^2 + \paren {\dfrac {x_3 + x_4} 2}^2 + \paren {\dfrac {x_3 - x_4} 2}^2$
Then $m p$ is also even.
We have that Parity of Integer equals Parity of its Square.
Thus there are three possibilities:

$\text{(i)}: \quad$ All the $x_i$'s are even.
$\text{(ii)}: \quad$ All the $x_i$'s are odd.
$\text{(iii)}: \quad$ Two of the $x_i$'s are odd, and two of the $x_i$'s are even.
In case $\text{(i)}$ and $\text{(ii)}$ the numbers in parentheses in $(2)$ are integers.
In case $\text{(iii)}$, either $x_1$ and $x_2$ have the same parity or they do not.
If they do, then the numbers in parentheses in $(2)$ are integers.
If they do not, then each of the numbers in parentheses in $(2)$ are odd integers divided by $4$.
Thus $\dfrac m 2 p$ would not be even.
So, given that $\dfrac m 2 p$ is even, it follows that the numbers in parentheses in $(2)$ are integers.
But $\dfrac m 2$ is an integer and $\dfrac m 2 < m$.
This contradicts the statement that $m$ is the smallest positive integer such that $m p$ is the sum of $4$ squares.
By Proof by Contradiction it follows that $m$ is odd.

Aiming for a contradiction, suppose $m \ge 3$.
Again, let $(1)$ be written as:

$(2): \quad \dfrac m 2 p = \paren {\dfrac {x_1 + x_2} 2}^2 + \paren {\dfrac {x_1 - x_2} 2}^2 + \paren {\dfrac {x_3 + x_4} 2}^2 + \paren {\dfrac {x_3 - x_4} 2}^2$
Divide each $x_i$ by $m$ to obtain a remainder $r_i$ such that $0 \le r_i \le m - 1$.
Define $y_i$ as:

$y_i := \begin{cases} r_i & : 0 \le r_i \le \dfrac {m - 1} 2 \\ r_i - m & : \dfrac {m + 1} 2 \le r_i \le m - 1 \end{cases}$
Then:

$x_i = q_i m + y_i$
where:

$-\dfrac {m - 1} 2 \le y_i \le \dfrac {m - 1} 2$
We have that $y_i = x_i - q_i m$.

Hence $(1)$ gives:














\(\ds \)

\(\)







\(\ds {y_1}^2 + {y_2}^2 + {y_3}^2 + {y_4}^2\)




















\(\ds \)

\(=\)







\(\ds {x_1}^2 + {x_2}^2 + {x_3}^2 + {x_4}^2\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds 2 m \paren {x_1 q_1 + x_2 q_2 + x_3 q_3 + x_4 q_4}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds m^2 \paren { {q_1}^2 + {q_2}^2 + {q_3}^2 + {q_4}^2}\)




















\(\ds \)

\(=\)







\(\ds m p - 2 m \paren {x_1 q_1 + x_2 q_2 + x_3 q_3 + x_4 q_4}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds m^2 \paren { {q_1}^2 + {q_2}^2 + {q_3}^2 + {q_4}^2}\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds m n\)









where $n \in \Z_{\ge 0}$.

Aiming for a contradiction, suppose $n = 0$.
Then all the $y$'s would be zero.
Then all the $x$'s would be divisible by $m$ and so:

$m \paren {\paren {\dfrac {x_1} m}^2 + \paren {\dfrac {x_2} m}^2 + \paren {\dfrac {x_3} m}^2 + \paren {\dfrac {x_4} m}^2} = p$
which means $m \divides p$.
But this is impossible, as $1 < m < p$ and $p$ is prime.
Thus by Proof by Contradiction, $n \ne 0$.

We also have:














\(\ds m n\)

\(=\)







\(\ds {y_1}^2 + {y_2}^2 + {y_3}^2 + {y_4}^2\)




















\(\ds \)

\(<\)







\(\ds 4 \paren {\dfrac m 2}^2\)




















\(\ds \)

\(=\)







\(\ds m^2\)









and so $n < m$.

Multiplying $(1)$ by $(3)$:




\(\text {(4)}: \quad\)









\(\ds m^2 n p\)

\(=\)







\(\ds \paren { {x_1}^2 + {x_2}^2 + {x_3}^2 + {x_4}^2} \paren { {y_1}^2 + {y_2}^2 + {y_3}^2 + {y_4}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {x_1 y_1 + x_2 y_2 + x_3 y_3 + x_4 y_4}^2\)





Product of Sums of Four Squares














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {x_1 y_2 - x_2 y_1 - x_3 y_4 + x_4 y_3}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {x_1 y_3 + x_2 y_4 - x_3 y_1 - x_4 y_2}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {x_1 y_4 - x_2 y_3 + x_3 y_2 - x_4 y_1}^2\)









Each of the squared numbers on the right hand side is a multiple of $m$, as can be shown for example:














\(\ds \)

\(\)







\(\ds x_1 y_1 + x_2 y_2 + x_3 y_3 + x_4 y_4\)




















\(\ds \)

\(=\)







\(\ds x_1 \paren {x_1 - q_1 m} + x_2 \paren {x_2 - q_2 m} + x_3 \paren {x_3 - q_3 m} + x_4 \paren {x_4 - q_4 m}\)




















\(\ds \)

\(=\)







\(\ds \paren { {x_1}^2 + {x_2}^2 + {x_3}^2 + {x_4}^2} - m \paren {x_1 q_1 + x_2 q_2 + x_3 q_3 + x_4 q_4}\)




















\(\ds \)

\(=\)







\(\ds m p - m \paren {x_1 q_1 + x_2 q_2 + x_3 q_3 + x_4 q_4}\)




















\(\ds \)

\(=\)







\(\ds m z_1\)










and:














\(\ds \)

\(\)







\(\ds x_1 y_2 - x_2 y_1 - x_3 y_4 + x_4 y_3\)




















\(\ds \)

\(=\)







\(\ds x_1 \paren {x_2 - q_2 m} - x_2 \paren {x_1 - q_1 m} - x_3 \paren {x_4 - q_4 m} + x_4 \paren {x_3 - q_3 m}\)




















\(\ds \)

\(=\)







\(\ds m \paren {-x_1 q_1 + x_2 q_1 + x_3 q_4 + x_4 q_3}\)




















\(\ds \)

\(=\)







\(\ds m p - m \paren {x_1 q_1 + x_2 q_2 + x_3 q_3 + x_4 q_4}\)




















\(\ds \)

\(=\)







\(\ds m z_2\)









where $z_1$ and $z_2$ are integers
Similarly:














\(\ds x_1 y_3 + x_2 y_4 - x_3 y_1 - x_4 y_2\)

\(=\)







\(\ds m z_3\)




















\(\ds x_1 y_4 - x_2 y_3 + x_3 y_2 - x_4 y_1\)

\(=\)







\(\ds m z_4\)









for some integers $z_3$ and $z_4$.
Substituting these $m z_1$, $m z_2$, $m z_3$, $m z_4$ back into $(4)$ and dividing by $m^2$ gives:

$n p = \dfrac {\paren {m z_1}^2} {m^2} + \dfrac {\paren {m z_2}^2} {m^2} + \dfrac {\paren {m z_3}^2} {m^2} + \dfrac {\paren {m z_4}^2} {m^2} = {z_1}^2 + {z_2}^2 + {z_3}^2 + {z_4}^2$
where $1 \le n < m$.
But this contradicts the minimality of $m$.
Thus by Proof by Contradiction, $m < 3$.

It remains that $m = 1$ and so $p$ can be expressed as the sum of $4$ squares.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous): Chapter $\text {B}.26$: Extensions of the Complex Number System. Algebras, Quaternions, and Lagrange's Four Squares Theorem




