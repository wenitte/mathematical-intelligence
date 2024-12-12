# 

Source: https://proofwiki.org/wiki/Between_two_Real_Numbers_exists_Rational_Number

  This article was Featured Proof between 20 June 2013 and 23 December 2013.


Theorem
Let $a, b \in \R$ be real numbers such that $a < b$.
Then:

$\exists r \in \Q: a < r < b$


Corollary: Real Numbers are Densely Ordered
$\forall a, b \in \R: a < b \implies \paren {\exists c \in \R: a < c < b}$


Proof 1
Suppose that $a \ge 0$.
As $a < b$ it follows that $a \ne b$ and so $b - a \ne 0$.
Thus:

$\dfrac 1 {b - a} \in \R$
By the Axiom of Archimedes:

$\exists n \in \N: n > \dfrac 1 {b - a}$
Let $M := \set {x \in \N: \dfrac x n > a}$.
By the Well-Ordering Principle, there exists $m \in \N$ such that $m$ is the smallest element of $M$.
That is:

$m > a n$
and, by definition of smallest element:

$m - 1 \le a n$

As $n > \dfrac 1 {b - a}$, it follows from Ordering of Reciprocals that:

$\dfrac 1 n < b - a$
Thus:














\(\ds m - 1\)

\(\le\)







\(\ds a n\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(\le\)







\(\ds a n + 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac m n\)

\(\le\)







\(\ds a + \frac 1 n\)




















\(\ds \)

\(<\)







\(\ds a + \paren {b - a}\)




















\(\ds \)

\(=\)







\(\ds b\)










Thus we have shown that $a < \dfrac m n < b$.
That is:

$\exists r \in \Q: a < r < b$
such that $r = \dfrac m n$.

Now suppose $a < 0$.
If $b > 0$ then $0 = r$ is a rational number such that $a < r < b$.

Otherwise we have $a < b \le 0$.
Then $0 \le -b < -a$ and there exists $r \in \Q$ such that:

$-b < r < -a$
where $r$ can be found as above.
That is:

$a < -r < b$

All cases have been covered, and the result follows.
$\blacksquare$


Proof 2
As $a < b$ it follows that $a \ne b$ and so $b - a \ne 0$.
Thus:

$\dfrac 1 {b - a} \in \R$
By the Axiom of Archimedes:

$\exists n \in \N: n > \dfrac 1 {b - a}$
Let $M := \set {x \in \Z: x > a n}$.
By Set of Integers Bounded Below has Smallest Element, there exists $m \in \Z$ such that $m$ is the smallest element of $M$.
That is:

$m > a n$
and, by definition of smallest element:

$m - 1 \le a n$

As $n > \dfrac 1 {b - a}$, it follows from Ordering of Reciprocals that:

$\dfrac 1 n < b - a$
Thus:














\(\ds m - 1\)

\(\le\)







\(\ds a n\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(\le\)







\(\ds a n + 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac m n\)

\(\le\)







\(\ds a + \frac 1 n\)




















\(\ds \)

\(<\)







\(\ds a + \paren {b - a}\)




















\(\ds \)

\(=\)







\(\ds b\)










Thus we have shown that $a < \dfrac m n < b$.
That is:

$\exists r \in \Q: a < r < b$
such that $r = \dfrac m n$.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): order properties (of real numbers)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): order properties (of real numbers)




