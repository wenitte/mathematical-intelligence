# 

Source: https://proofwiki.org/wiki/Hero%27s_Method/Proof_2



Theorem
Let $a \in \R$ be a real number such that $a > 0$.
Let $x_1 \in \R$ be a real number such that $x_1 > 0$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined recursively by:

$\forall n \in \N_{>0}: x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2$

Then $x_n \to \sqrt a$ as $n \to \infty$.


Proof
First we have the following lemmata:


Lemma 1
$\forall n \in \N_{>0}: x_n > 0$
$\Box$


Lemma 2
$\forall n \ge 2: x_n \ge \sqrt a$
$\Box$

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


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.6$: Example




