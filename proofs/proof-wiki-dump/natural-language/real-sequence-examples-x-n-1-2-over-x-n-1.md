# 

Source: https://proofwiki.org/wiki/Real_Sequence/Examples/x(n%2B1)_%3D_2_over_x(n)%2B1

Example of Real Sequence
Let $\sequence {x_n}$ denote the real sequence defined as:

$x_n = \begin {cases} a : 0 < a < 1 & : n = 1 \\ \dfrac 2 {x_n + 1} & : n > 1 \end {cases}$
Then the subsequences $\sequence {x_{2 n} }$ and $\sequence {x_{2 n + 1} }$ are both monotone:

$\sequence {2 n}$ is strictly decreasing
$\sequence {2 n + 1}$ is strictly increasing
Hence $\sequence {x_n} \to 1$ as $n \to \infty$.


Proof
We are given that $0 < x_1 < 1$.
Then we have that:

$\dfrac 2 {0 + 1} > x_2 > \dfrac 2 {1 + 1}$
That is:

$1 < x_2 < 2$
Then we have that:

$\dfrac 2 {1 + 1} > x_3 > \dfrac 2 {2 + 1}$
That is:

$\dfrac 2 3 < x_3 < 1$
and so certainly:

$0 < x_3 < 1$

Hence in general:

$0 < x_n < 1 \implies 1 < x_{n + 1} < 2$
and:

$1 < x_n < 2 \implies 0 < x_{n + 1} < 1$
So:

for $n$ odd, $0 < x_n < 1$
for $n$ even, $1 < x_n < 2$
Now we show:














\(\ds x_{n + 2}\)

\(=\)







\(\ds \dfrac 2 {x_{n + 1} + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {\frac 2 {x_n + 1} + 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {\frac {2 + x_n + 1} {x_n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 x_n + 2} {x_n + 3}\)










We calculate the difference between $x_n$ and $x_{n + 2}$:














\(\ds x_n - x_{n + 2}\)

\(=\)







\(\ds x_n - \dfrac {2 x_n + 2} {x_n + 3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_n \paren {x_n + 3} - \paren {2 x_n + 2} } {x_n + 3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {x_n^2 + x_n - 1} {x_n + 3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {x_n + 2} \paren {x_n - 1} } {x_n + 3}\)









and we see that:

if $0 < x_n < 1$ then $x_n - x_{n + 2} < 0$
if $1 < x_n < 2$ then $x_n - x_{n + 2} > 0$
Hence it follows that:

for $n$ odd, $\sequence {2 n + 1}$ is strictly increasing
for $n$ even, $\sequence {2 n}$ is strictly decreasing
and the result follows from Convergence of Odd and Even Subsequences to Same Limit.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 13$




