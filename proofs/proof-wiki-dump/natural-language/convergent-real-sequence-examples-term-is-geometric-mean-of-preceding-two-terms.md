# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/Term_is_Geometric_Mean_of_Preceding_Two_Terms

Example of Convergent Real Sequence
Let $a, b \in \R_{>0}$ be (strictly) positive real numbers such that $a \le b$.
Let $a, b \in \R_{>0}$ be such that $a \le p \le q \le b$.
Let $\sequence {x_n}_{n \mathop \in \N_{>0} }$ be the sequence in $\R$ defined as:

$x_n = \begin {cases} p & : n = 1 \\ q & : n = 2 \\ \sqrt{x_{n - 1}  x_{n - 2} } & : n > 2 \end {cases}$
That is, beyond the first $2$ terms, each term is the geometric mean of the previous $2$ terms.
Then $\sequence {x_n}$ converges.


Proof
First note that:

$a \le x_i \le b$ for $i \in \set {1, 2}$.
It can be shown by Proof by Mathematical Induction that:

$\forall n \in \N_{>0}: a \le x_n \le b$
Then:














\(\ds a\)

\(\le\)







\(\ds x_{n + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac a b\)

\(\le\)







\(\ds \dfrac {x_{n + 1} } b\)




















\(\ds \)

\(\le\)







\(\ds \dfrac {x_{n + 1} } {x_n}\)










and:














\(\ds x_{n + 1}\)

\(\le\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x_{n + 1} } a\)

\(\le\)







\(\ds \dfrac b a\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x_{n + 1} } {x_n}\)

\(\le\)







\(\ds \dfrac b a\)









That is:

$\dfrac a b \le \dfrac {x_{n + 1} } {x_n} \le \dfrac b a$

Then we have:














\(\ds {x_{n + 2} }^2 - {x_{n + 1} }^2\)

\(=\)







\(\ds x_{n + 1} x_n - {x_{n + 1} }^2\)




















\(\ds \)

\(=\)







\(\ds x_{n + 1} \paren {x_n - x_{n + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \size {x_{n + 2} - x_{n + 1} }\)

\(=\)







\(\ds \dfrac {x_{n + 1} } {x_{n + 2} + x_{x + 1} } \size {x_n - x_{n - 1} }\)




















\(\ds \)

\(\le\)







\(\ds \dfrac b {a + b} \size {x_n - x_{n - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \size {x_{n + 2} - x_{n + 1} }\)

\(=\)







\(\ds \paren {\dfrac b {a + b} }^{n - 1} \size {x_2 - x_1}\)










Let $n > m$ be arbitrary. Then:














\(\ds \size {x_n - x_m}\)

\(=\)







\(\ds \size {\paren {x_n - x_{n - 1} } + \paren {x_{n - 1} - x_{n - 2} } + \dotsb + \paren {x_{m + 1} - x_m} }\)




















\(\ds \)

\(\le\)







\(\ds \size {x_n - x_{n - 1} } + \size {x_{n - 1} - x_{n - 2} } + \dotsb + \size {x_{m + 1} - x_m}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \paren {\paren {\dfrac b {a + b} }^{n - 3} + \paren {\dfrac b {a + b} }^{n - 4} + \dotsb + \paren {\dfrac b {a + b} }^{m - 2} } \size {x_2 - x_1}\)




















\(\ds \)

\(<\)







\(\ds \paren {\dfrac b {a + b} }^{m - 2} \paren {\sum_{k \mathop = 0}^\infty \paren {\dfrac b {a + b} }^k } \size {x_2 - x_1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac b {a + b} }^{m - 2} \paren {\dfrac 1 {1 - \frac b {a + b} } } \size {x_2 - x_1}\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \paren {\dfrac b {a + b} }^{m - 2} \paren {\dfrac {a + b} a} \size {x_2 - x_1}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $m \to \infty$



Therefore $\sequence {x_n}$ is a Cauchy sequence and hence converges.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.21 \ (2)$




