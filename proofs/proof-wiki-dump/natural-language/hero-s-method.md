# 

Source: https://proofwiki.org/wiki/Hero%27s_Method



Theorem
Let $a \in \R$ be a real number such that $a > 0$.
Let $x_1 \in \R$ be a real number such that $x_1 > 0$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined recursively by:

$\forall n \in \N_{>0}: x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2$

Then $x_n \to \sqrt a$ as $n \to \infty$.


Lemmata
First we have the following lemmata:

Lemma 1
$\forall n \in \N_{>0}: x_n > 0$
$\Box$

Lemma 2
$\forall n \ge 2: x_n \ge \sqrt a$
$\Box$

Proof 1
Consider $x_n - x_{n + 1}$.














\(\ds x_n - x_{n + 1}\)

\(=\)







\(\ds x_n - \frac {x_n + \dfrac a {x_n} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 x_n} \paren {x_n^2 - a}\)




















\(\ds \)

\(\ge\)







\(\ds 0\)





for $n \ge 2$

\(\quad\) Lemma 2

So, providing we ignore the first term (about which we can state nothing), the sequence $\sequence {x_n}$ is decreasing and bounded below by $\sqrt a$.

Thus by the Monotone Convergence Theorem (Real Analysis), $x_n \to l$ as $n \to \infty$, where $l \ge \sqrt a$.

Now we want to find exactly what that value of $l$ actually is.

By Limit of Subsequence equals Limit of Real Sequence we also have $x_{n + 1} \to l$ as $n \to \infty$.
But $x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2$.
Because $l \ge \sqrt a$ it follows that $l \ne 0$.
So by the Combination Theorem for Sequences:

$x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2 \to \dfrac {l + \dfrac a l} 2$ as $n \to \infty$
Since a Convergent Real Sequence has Unique Limit, that means:

$l = \dfrac {l + \dfrac a l} 2$
and so (after some straightforward algebra):

$l^2 = a$
Thus:

$l = \pm \sqrt a$
and as $l \ge +\sqrt a$ it follows that:

$l = +\sqrt a$

Hence the result.
$\blacksquare$


Proof 2
Let $a > 0$.
We make no statement about $x_1$.
We specify that:

$x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2$
Now:














\(\ds x_{n + 1} - \sqrt a\)

\(=\)







\(\ds \frac {x_n + \dfrac a {x_n} } 2 - \sqrt a\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 x_n} \paren {x_n^2 - 2 x_n \sqrt a + a}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 x_n} \paren {x_n - \sqrt a}^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 x_n} \paren {\dfrac {\paren {x_{n - 1} - \sqrt a}^2} {2 x_{n - 1} } }^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 x_n} \frac 1 {\paren {2 x_{n - 1} }^2} \paren {x_{n - 1} - \sqrt a}^4\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 x_n} \frac 1 {\paren {2 x_{n - 1} }^2} \frac 1 {\paren {2 x_{n - 2} }^4} \paren {x_{n - 2} - \sqrt a}^8\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 x_n} \frac 1 {\paren {2 x_{n - 1} }^2} \cdots \frac 1 {\paren {2 x_1}^{2 n - 1} } \paren {x_1 - \sqrt a}^{2 n}\)










If we now assume that $x_1 \ge \sqrt a$, then it follows from Lemma 2 that $x_n \ge \sqrt a$.
So:














\(\ds \size {x_{n + 1} - \sqrt a}\)

\(\le\)







\(\ds \paren {\frac 1 {2 \sqrt a} }^{1 + 2 + 2^2 + \cdots + 2^{n - 1} } \paren {x_1 - \sqrt a}^{2 n}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 1 {2 \sqrt a} }^{\dfrac {2^n - 1} {2 - 1} } \paren {x_1 - \sqrt a}^{2 n}\)




















\(\ds \)

\(=\)







\(\ds 2 \sqrt a \paren {\frac {x_1 - \sqrt a} {2 \sqrt a} }^{2 n}\)










If $\size y < 1$, then $y^n \to 0$ as $n \to \infty$ from Sequence of Powers of Number less than One.
So, by Limit of Subsequence equals Limit of Real Sequence:

$y^{2^n} \to 0$ as $n \to \infty$
Thus we see that:

$x_n \to \sqrt a$ as $n \to \infty$
provided that:

$\dfrac {x_1 - \sqrt a} {2 \sqrt a} < 1$
that is, that:

$\sqrt a \le x_1 < 3 \sqrt a$

We assumed above that $x_1 \ge \sqrt a$.
Now we have shown that $x_n \to \sqrt a$ as $n \to \infty$ provided that $\sqrt a \le x_1 < 3 \sqrt a$.
However, we have already shown that $x_n \to \sqrt a$ as long as $x_1 \ge 0$.
The advantage to this analysis is that this gives us an opportunity to determine how close $x_n$ gets to $\sqrt a$.
$\blacksquare$


Examples
Square Root of $5$
The calculation of the square root of $5$ by Hero's Method proceeds as follows:














\(\ds x_0\)

\(=\)







\(\ds 2\)





as the initial approximation








\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds \dfrac {2 + \frac 5 2} 2\)




















\(\ds \)

\(=\)







\(\ds 2 \cdotp 25\)














\(\ds \leadsto \ \ \)





\(\ds x_2\)

\(=\)







\(\ds \dfrac {2.25 + \frac 5 {2.25} } 2\)




















\(\ds \)

\(=\)







\(\ds 2 \cdotp 236 \, 111 \, 111 \dots\)














\(\ds \leadsto \ \ \)





\(\ds x_3\)

\(=\)







\(\ds \dfrac {2 \cdotp 236 \, 111 \, 111 \dots + \frac 5 {2 \cdotp 236 \, 111 \, 111 \dots} } 2\)




















\(\ds \)

\(=\)







\(\ds 2 \cdotp 236 \, 067 \, 978 \dots\)














\(\ds \leadsto \ \ \)





\(\ds x_4\)

\(=\)







\(\ds 2 \cdotp 236 \, 067 \, 978 \dots\)









Comparing with Square Root of $5$, we have:

$\sqrt 5 \approx 2 \cdotp 23606 \, 79774 \, 99789 \, 6964 \ldots$
$\blacksquare$


Square Root of $92$
The calculation of the square root of $92$ by Hero's Method proceeds as follows:














\(\ds x_0\)

\(=\)







\(\ds 8 \cdotp 5\)





as the initial approximation








\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds \dfrac {8.5 + \frac {92} {8 \cdotp 5} } 2\)




















\(\ds \)

\(=\)







\(\ds 10 \cdotp 8235\)














\(\ds \leadsto \ \ \)





\(\ds x_2\)

\(=\)







\(\ds \dfrac {10 \cdotp 8235 + \frac {92} {10 \cdotp 8235} } 2\)




















\(\ds \)

\(=\)







\(\ds 9 \cdotp 66176 \dots\)














\(\ds \leadsto \ \ \)





\(\ds x_3\)

\(=\)







\(\ds \dfrac {9 \cdotp 66176 \dots + \frac {92} {9 \cdotp 66176 \dots} } 2\)




















\(\ds \)

\(=\)







\(\ds 9 \cdotp 9519 \dots\)









and so on.
The actual value of $\sqrt {92}$ is:

$\sqrt {92} \approx 9.5917$
$\blacksquare$


Also known as
Hero's Method is also known as Heron's Method.


Source of Name
This entry was named for Heron of Alexandria.


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.2$: Real Sequences: Example $1.2.1 \, \text {(g)}$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.5, \ \S 5.6$: Example
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Hero's method (Heron's method)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Hero's method (Heron's method)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Hero's method
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Hero's method




