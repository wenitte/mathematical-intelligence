# 

Source: https://proofwiki.org/wiki/Alternating_Series_Test



Theorem
Let $\sequence {a_n}_{N \mathop \ge 0}$ be a decreasing sequence of positive terms in $\R$ which converges with a limit of zero.
That is, let $\forall n \in \N: a_n \ge 0, a_{n + 1} \le a_n, a_n \to 0$ as $n \to \infty$

Then the series:

$\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} a_n = a_1 - a_2 + a_3 - a_4 + \dotsb$
converges.


Proof
First we show that for each $n > m$, we have $0 \le a_{m + 1} - a_{m + 2} + a_{m + 3} - \dotsb \pm a_n \le a_{m + 1}$.

Lemma
For all natural numbers $n, m$ with $n > m$ we have: 

$\ds \sum_{k \mathop = m + 1}^n \paren {-1}^k a_k \le a_{m + 1}$
$\Box$

Therefore for each $n > m$, we have:

$0 \le a_{m + 1} - a_{m + 2} + a_{m + 3} - \dotsb \pm a_n \le a_{m + 1}$

Now, let $\sequence {s_n}$ be the sequence of partial sums of the series:
:$\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} a_n$

Let $\epsilon > 0$.
Since $a_n \to 0$ as $n \to \infty$:

$\exists N: \forall n > N: a_n < \epsilon$
But $\forall n > m > N$, we have:














\(\ds \sequence {s_n - s_m}\)

\(=\)







\(\ds \size {\paren {a_1 - a_2 + a_3 - \dotsb \pm a_n} - \paren {a_1 - a_2 + a_3 - \dotsb \pm a_m} }\)




















\(\ds \)

\(=\)







\(\ds \size {\paren {a_{m + 1} - a_{m + 2} + a_{m + 3} - \dotsb \pm a_n} }\)




















\(\ds \)

\(\le\)







\(\ds a_{m + 1}\)





from the above














\(\ds \)

\(<\)







\(\ds \epsilon\)





as $m + 1 > N$



Thus we have shown that $\sequence {s_n}$ is a Cauchy sequence.
The result follows from Convergent Sequence is Cauchy Sequence.
$\blacksquare$


Also known as
The Alternating Series Test is also seen referred to as Leibniz's Alternating Series Test, for Gottfried Wilhelm von Leibniz.
Some sources hyphenate: Alternating-Series Test


Historical Note
The Alternating Series Test is attributed to Gottfried Wilhelm von Leibniz.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.13$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): alternating series test or Leibniz's alternating series test
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.2$: Summary of convergence tests: Theorem $1.5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): alternating series
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): alternating series
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): alternating series test




