# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Four_Square_Theorem

This proof is about Lagrange's Four Square Theorem. For other uses, see Lagrange's Theorem.



Theorem
Every positive integer can be expressed as a sum of four squares.


Proof 1
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


Proof 2
Proof for Odd Primes
Suppose $p$ is an odd prime.  
Define:

$S := \set {\alpha^2 \pmod p: \alpha \in \hointr 0 {\dfrac p 2} \cap \Z}$
Define: 

$S' := \set {-1 - \beta^2 \pmod p: \beta \in \hointr 0 {\dfrac p 2} \cap \Z}$

Suppose for $\alpha, \alpha' \in S$: 

$\alpha^2 \equiv \alpha'^2 \pmod p$
Obviously:

$\paren {\alpha + \alpha'} \paren {\alpha - \alpha'} = \alpha^2 - \alpha'^2 \equiv 0 \pmod p$
Since $0 \le \alpha$, $\alpha' < \dfrac p 2$: 

$\alpha + \alpha' \not \equiv 0 \pmod p$
Therefore $\alpha - \alpha' \equiv 0 \pmod p$.
This shows that $\alpha = \alpha'$.
Thus we have $\size S = \size {\hointr 0 {\dfrac p 2} \cap \Z} = 1 + \dfrac {p - 1} 2 = \dfrac {p + 1} 2$.

Choose $\beta, \beta' \in S'$:

$-1 - \beta^2 \equiv -1 - \beta'^2 \pmod p$
By simple algebraic manipulation:

$-1 - \beta^2 \equiv -1 - \beta'^2 \pmod p \iff \beta^2 \equiv \beta'^2 \pmod p$
Then by the same reasoning as above:

$\card {S'} = \card S = \dfrac {p + 1} 2$
By the Pigeonhole Principle:

$S \cap S' \ne \O$
Thus $\exists \alpha, \beta \in \Z$:

$(1): \quad \alpha^2 + \beta^2 + 1 \equiv 0 \pmod p$
Define:

$L = \set {\vec x = \tuple {x_1, x_2, x_3, x_4} \in \Z^4: x_1 \equiv \alpha x_3 + \beta x_4 \pmod p, x_2 \equiv \beta x_3 - \alpha x_4 \pmod p}$
If $\vec x$, $\vec y \in L$ and $\vec z = \tuple {z_1, z_2, z_3, z_4}$, then:














\(\ds z_1\)

\(=\)







\(\ds x_1 + y_1\)




















\(\ds \)

\(\equiv\)







\(\ds \alpha x_3 + \beta x_4 + \alpha y_3 + \beta y_4\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \alpha \paren {x_3 + y_3} + \beta \paren {x_4 + y_4}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \alpha z_3 + \beta z_4\)

\(\ds \pmod p\)


















\(\ds z_2\)

\(=\)







\(\ds x_2 + y_2\)




















\(\ds \)

\(\equiv\)







\(\ds \beta x_3 - \alpha x_4 + \beta y_3 - \alpha y_4\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \beta \paren {x_3 + y_3} - \alpha \paren {x_4 + y_4}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \beta z_3 - \alpha z_4\)

\(\ds \pmod p\)












\(\ds \leadsto \ \ \)





\(\ds \vec x + \vec y\)

\(=\)







\(\ds \vec z\)




















\(\ds \)

\(\in\)







\(\ds L\)









So $L$ is closed under vector addition.















\(\ds -x_1\)

\(\equiv\)







\(\ds -\paren {\alpha x_3 + \beta x_4}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \alpha \paren {-x_3} + \beta \paren {-x_4}\)

\(\ds \pmod p\)


















\(\ds -x_2\)

\(\equiv\)







\(\ds -\paren {\beta x_3 - \alpha x_4}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \beta \paren {-x_3} - \alpha \paren {-x_4}\)

\(\ds \pmod p\)












\(\ds \leadsto \ \ \)





\(\ds -\vec x\)

\(\in\)







\(\ds L\)














\(\ds \leadsto \ \ \)





\(\ds L\)

\(\le\)







\(\ds \R^4\)









So $L$ has additive inverses.
By Two-Step Subgroup Test, $\struct {L, +}$ is a subgroup of $\struct {\R^4, +}$.

For each $\vec x = \tuple {x_1, x_2, x_3, x_4} \in L$, one can write:

$\vec x = x_3 \tuple {\alpha, \beta, 1, 0} + x_4 \tuple {\beta, -\alpha, 0, 1} + \floor {\dfrac {x_1} p} \tuple {p, 0, 0, 0} + \floor {\dfrac{x_2} p} \tuple {0, p, 0, 0}$
Thus:

$\set {\tuple {\alpha, \beta, 1, 0}, \tuple {\beta, -\alpha, 0, 1}, \tuple {p, 0, 0, 0}, \tuple {0, p, 0, 0} }$
spans $L$.

Suppose we have for some $c_1, c_2, c_3, c_4 \in \Z$:

$\vec 0 = c_1 \tuple {\alpha, \beta, 1, 0} + c_2 \tuple {\beta, -\alpha , 0, 1} + c_3 \tuple {p, 0, 0, 0} + c_4 \tuple {0, p, 0, 0}$

Extracting the various coordinates:














\(\ds \alpha c_1 + \beta c_2 + p c_3\)

\(=\)







\(\ds 0\)




















\(\ds \beta c_1 - \alpha c_2 + p c_4\)

\(=\)







\(\ds 0\)




















\(\ds c_1\)

\(=\)







\(\ds 0\)




















\(\ds c_2\)

\(=\)







\(\ds 0\)









and so:














\(\ds \alpha c_1 + \beta c_2\)

\(=\)







\(\ds 0\)




















\(\ds \alpha c_1 - \beta c_2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds c_3\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds c_4\)

\(=\)







\(\ds 0\)










So:

$\set {\tuple {\alpha, \beta, 1, 0}, \tuple {\beta, -\alpha, 0, 1}, \tuple {p, 0, 0, 0}, \tuple {0, p, 0, 0} }$
is linearly independent and thus a basis for $L$.

Thus:














\(\ds \map {\dim_\R} {\span_\R L}\)

\(=\)







\(\ds \dim_\Z L\)




















\(\ds \)

\(=\)







\(\ds \card {\set {\tuple {\alpha, \beta, 1, 0}, \tuple {\beta, -\alpha, 0, 1}, \tuple {p, 0, 0, 0}, \tuple {0, p, 0, 0} } }\)




















\(\ds \)

\(=\)







\(\ds 4\)









Thus:

$\span_\R L = \R^4$
So $L$ is a point lattice.
Define the quotient map:

$\varphi: \N_p^2 \times \set {\tuple {0, 0} } \to \Z^4 / L$
$\tuple {x, y, 0, 0} \mapsto \sqbrk {\tuple {x, y, 0, 0} }$

Since quotient maps are surjective:

$\paren {\Z^4 / L} \le \size {\N_p^2 \times \set {\tuple {0, 0} } } = p^2$
So:

$\map \det L = \# \paren {\Z^4 / L} < p^2$

This article, or a section of it, needs explaining.In particular: $\#$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\norm {\, \cdot \,}$ denote the Euclidean metric.


This article, or a section of it, needs explaining.In particular: Work out exactly which version of the Definition:Euclidean Metric links is relevant here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Consider $\map {B_{\sqrt {2 p} } } {\vec 0}$, the open ball of radius $\sqrt {2 p}$.
Then:

$\forall \vec x, \vec y \in \map {B_{\sqrt {2 p} } } {\vec 0}, \forall t \in \closedint 0 1$:













\(\ds \norm {t \vec x + \paren {1 - t} \vec y}\)

\(\le\)







\(\ds \norm {t \vec x} + \norm {\paren {1 - t} \vec y}\)





Definition of Metric














\(\ds \)

\(=\)







\(\ds \size t \norm {\vec x} + \size {1 - t} \norm {\vec y}\)





Definition of Metric














\(\ds \)

\(<\)







\(\ds \size t \sqrt {2 p} + \size {1 - t} \sqrt {2 p}\)





Definition of Open Ball $\map {B_{\sqrt{2 p} } } {\vec 0}$














\(\ds \)

\(=\)







\(\ds \paren {\size t + \size {1 - t} } \sqrt {2 p}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \paren {t + 1 - t} \sqrt{2 p}\)





since $t \in \closedint 0 1 \implies t \ge 0$














\(\ds \)

\(=\)







\(\ds \sqrt {2 p}\)





since $t + 1 - t = 1$ is the multiplicative identity of $\R$




Thus the line between $\vec x$ and $\vec y$ is contained in $\map {B_{\sqrt{2 p} } } {\vec 0}$.
So $\map {B_{\sqrt {2 p} } } {\vec 0}$ is convex.
Let $\vec x \in \map {B_{\sqrt{2 p} } } {\vec 0}$.
Then $\vec x < \sqrt {2 p}$.
That means: 

$\norm {-\vec x} = \size {-1} \norm {\vec x} = \norm {\vec x} < \sqrt{2 p}$
So:

$-\vec x \in \map {B_{\sqrt{2 p} } } {\vec 0}$
Then $\map {B_{\sqrt{2 p} } } {\vec 0}$ is symmetric about the origin. 
By the formula for the volume of an $n$-ball (with respect to the standard measure on $\R^n$):


This article, or a section of it, needs explaining.In particular: Change the above to be a page on $\mathsf{Pr} \infty \mathsf{fWiki}$ -- external links of material of a mathematical nature are disallowed by house rules.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\map {\operatorname {Vol} } {\map {B_{\sqrt{2 p} } } {\vec 0} } = \dfrac {\pi^2 \paren {\sqrt {2 p} }^4} 2 = 2 \pi^2 p^2$
Since $2\pi^2 > 1$:

$\map {\operatorname {Vol} } {\map {B_{\sqrt{2 p} } } {\vec 0} } > \map \det L$
By Minkowski's Theorem:

$L \cap \map {B_{\sqrt{2 p} } } {\vec 0} \ne \O$
Thus, if:

$\vec a = \tuple {a_1, a_2, a_3, a_4} \in L \cap \map {B_{\sqrt{2 p} } } {\vec 0}$
then:

$0 < a_1^2 + a_2^2 + a_3^2 + a_4^2 = \norm {\vec a}^2 < 2 p$

However:














\(\ds a_1^2 + a_2^2 + a_3^2 + a_4^2\)

\(\equiv\)







\(\ds \paren {\alpha a_3 + \beta a_4}^2 + \paren {\beta a_3 - \alpha a_4}^2 + a_3^2 + a_4^2\)

\(\ds \pmod p\)



Definition of $L$














\(\ds \)

\(\equiv\)







\(\ds \alpha^2 a_3^2 + 2 \alpha \beta a_3 a_4 + \beta^2 a_4^2 + \beta^2 a_3^2 - 2 \alpha \beta a_3 a_4 + \alpha^2 a_4^2 + a_3^2 + a_4^2\)

\(\ds \pmod p\)



Binomial Theorem














\(\ds \)

\(\equiv\)







\(\ds \paren {\alpha^2 + \beta^2 + 1} \paren {a_3 + a_4}\)

\(\ds \pmod p\)



Real Multiplication Distributes over Addition














\(\ds \)

\(\equiv\)







\(\ds 0 \paren {a_3 + a_4}\)

\(\ds \pmod p\)



by $(1)$ from above














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)







So $\exists k \in \Z$:

$(2): \quad 0 < a_1^2 + a_2^2 + a_3^2 + a_4^2 = k p \le 2 p$
Dividing $(2)$ by $p$:

$0 < k < 2 \implies k = 1$
Thus:

$a_1^2 + a_2^2 + a_3^2 + a_4^2 = p$
$\Box$


Proof for Composites
Suppose $x, y \in \Z$ are a sum of four squares with neither of $x$ or $y$ being primes.
Suppose either one is equal to $1$.
Then $x * 1 = x$ is a sum of four squares.


This article, or a section of it, needs explaining.In particular: $x * 1$? Is multiplication meant here?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Suppose neither of them is equal to $1$.
Let $\mathbb H$ denote the set of Hurwitz quaternions.
Let $N: \mathbb H \to \R, a + b i + c j + d k \mapsto a^2 + b^2 + c^2 + d^2$ be the standard norm on $\mathbb H$.
Notice:

$x$ is a sum of four squares if and only if $x$ is a norm of a Hurwitz quaternion
Then:

$\exists \mu, \lambda \in \mathbb H: x = \map N \mu, y = \map N \lambda$
From Norm is Homomorphism:

$ x y = \map N \mu \, \map N \lambda = \map N {\mu \lambda}$
Since $\mathbb H$ is a ring, we have:

$\mu \lambda \in \mathbb H$
and thus $x y$ is a sum of four squares.
From the Fundamental Theorem of Arithmetic, every number can be written as a unique product of primes.  
Then 


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Also known as
Some sources use the plural form for Lagrange's Four Square Theorem , as Lagrange's Four Squares Theorem.
Some omit Lagrange's name, and refer to this as just the Four Squares Theorem.
Some sources refer to this as just Lagrange's Theorem, but this is ambiguous as there is more than one theorem with Lagrange's name on it.


Examples
Example: $1$
$1$ can be trivially expressed as the sum of $4$ squares:

$1 = 1^2 + 0^2 + 0^2 + 0^2$


Example: $23$
$23$ can be expressed as the sum of $4$ squares thus:

$23 = 3^2 + 3^2 + 2^2 + 1^2$


Example: $59$
$59$ can be expressed as the sum of $4$ squares thus:














\(\ds 59\)

\(=\)







\(\ds 7^2 + 3^2 + 1^2 + 0^2\)




















\(\ds \)

\(=\)







\(\ds 5^2 + 5^2 + 3^2 + 0^2\)




















\(\ds \)

\(=\)







\(\ds 5^2 + 4^2 + 3^2 + 3^2\)











Also see
Waring's Problem


Source of Name
This entry was named for Joseph Louis Lagrange.


Historical Note
It is suggested by some sources that the result of Lagrange's Four Square Theorem was known, at least empirically, by Diophantus of Alexandria.
Some sources suggest that the theorem was originally stated formally by Pierre de Fermat.
However, it appears that Claude Gaspard Bachet de Méziriac published the results of his having tested it thoroughly up to $120$, and stated the theorem in his $1621$ translation of the Arithmetica of Diophantus.
Fermat read about it in his copy of that work, and studied it, but appears to have failed to find a proof, as no proof of his can be found.
Leonhard Paul Euler investigated the problem, discussing it with Christian Goldbach in around $1730$, publishing a proof of a weaker version around that time.
It was finally proved by Joseph Louis Lagrange in $1770$. The proof was published in $1772$.
Euler subsequently submitted a proof of his own in $1772$, which was finally published in $1780$.


Sources
1772: J.-L. Lagrange: Démonstration d'un théorème d'arithmétique (Nouveaux mémoires de l'Académie royale des sciences et belles-lettres de Berlin, Année 1770 pp. 123 – 133)
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-5}$ The Use of Computers in Number Theory: Exercise $5$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $4$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): four squares theorem
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.2$: More about Numbers: Irrationals, Perfect Numbers and Mersenne Primes
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Lagrange's theorem: 1. (J.L. Lagrange, 1772)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Lagrange's theorem: 1. (J.L. Lagrange, 1772)
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Fermat
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): four squares theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Lagrange's Theorem (sum of four squares)




