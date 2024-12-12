# 

Source: https://proofwiki.org/wiki/Euler%27s_Integral_Theorem



Theorem
$H_n = \ln n + \gamma + \map \OO {\dfrac 1 n}$
where:

$H_n$ denotes the $n$th harmonic number
$\gamma$ denotes the Euler-Mascheroni constant
$\map \OO {\dfrac 1 n}$ denotes big-$\OO$ of $\dfrac 1 n$.


Proof 1
Recall the definition of the floor function:
The floor function of $x$ is the unique integer $\floor x$ such that:

$\floor x \le x < \floor x + 1$

For all $n \in \N_{>0}$:














\(\ds H_n - \ln n\)

\(=\)







\(\ds 1 + \int_1 ^n \dfrac {\floor u} {u^2} \rd u - \ln n\)





Integral Expression of Harmonic Number














\(\ds \)

\(=\)







\(\ds 1 + \int_1 ^n \dfrac {\floor u} {u^2} \rd u - \int_1 ^n \dfrac 1 u \rd u\)





Definition of Real Natural Logarithm














\(\ds \)

\(=\)







\(\ds 1 - \int_1 ^n \dfrac {u - \floor u} {u^2} \rd u\)





Integral Operator is Linear




Let $N \ge n \ge 1$.
By Sum of Integrals on Adjacent Intervals for Integrable Functions:

$\ds (1): \quad \paren {H_n - \ln n} - \paren {H_N - \ln N} = \int_n^N \dfrac {u - \floor u} {u^2} \rd u$
On the other hand, from Definition of Floor Function follows:

$\forall u \in \R_{\ge 1} : 0 \le \dfrac {u - \floor u} {u^2} \le \dfrac 1 {u^2}$
In view of Integral Operator is Positive, integrating the above inequality on $\closedint n N$:




\(\text {(2)}: \quad\)









\(\ds 0\)

\(\le\)







\(\ds \int_n^N \dfrac {u - \floor u} {u^2} \rd u\)




















\(\ds \)

\(\le\)







\(\ds \int_n^N \dfrac 1 {u^2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n - \dfrac 1 N\)




















\(\ds \)

\(\le\)







\(\ds \dfrac 1 n\)









From $(1)$ and $(2)$, it follows:

$(3): \quad 0 \le \paren {H_n - \ln n} - \paren {H_N - \ln N} \le \dfrac 1 n$

In particular, $\sequence {H_n - \ln n}$ is a Cauchy sequence.
Thus the limit $\gamma$, the Euler-Mascheroni constant, exists by Cauchy's Convergence Criterion.

In $(3)$, for each $n \in \N$, let $N \to \infty$.
Then:

$\forall n \in \N : 0 \le H_n - \ln n - \gamma \le \dfrac 1 n$
$\blacksquare$


Proof 2
Recall the definition of the floor function:
The floor function of $x$ is the unique integer $\floor x$ such that:

$\floor x \le x < \floor x + 1$

Hence:

$0 \le x - \floor x < 1$
For all $n \in \N_{>0}$:














\(\ds H_n - \ln n - \gamma\)

\(=\)







\(\ds H_n - \ln n - \lim_{k \mathop \to +\infty} \paren {H_k - \ln k}\)





Definition of Euler-Mascheroni Constant and Existence of Euler-Mascheroni Constant














\(\ds \)

\(=\)







\(\ds 1 + \int_1^n \dfrac {\floor u} {u^2} \rd u - \ln n - \lim_{k \mathop \to +\infty} \paren {1 + \int_1^k \dfrac {\floor u} {u^2} \rd u - \ln k}\)





Integral Expression of Harmonic Number














\(\ds \)

\(=\)







\(\ds \int_1^n \dfrac {\floor u} {u^2} \rd u - \int_1^n \dfrac 1 u \rd u - \lim_{k \mathop \to +\infty} \paren {\int_1 ^k \dfrac {\floor u} {u^2} \rd u - \int_1^k \dfrac 1 u \rd u }\)





Definition of Real Natural Logarithm














\(\ds \)

\(=\)







\(\ds \lim_{k \mathop \to +\infty} \paren {-\int_n^k \dfrac {\floor u} {u^2} \rd u + \int_n^k \dfrac 1 u \rd u }\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds \lim_{k \mathop \to +\infty} \paren {\int_n^k \dfrac {u - \floor u} {u^2} \rd u }\)





Integral Operator is Linear














\(\ds \)

\(<\)







\(\ds \lim_{k \mathop \to +\infty} \paren {\int_n^k \dfrac 1 {u^2} \rd u }\)





Since $0 \le x - \floor x < 1$














\(\ds \)

\(=\)







\(\ds \intlimits {-\dfrac 1 u} n \infty\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \paren {0 - \paren {-\dfrac 1 n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n\)









From Existence of Euler-Mascheroni Constant Proof 1, we have:

$\ds \Delta_n = \sum_{k \mathop = 1}^n \dfrac 1 k - \int_1^n \dfrac 1 x \rd x$
is decreasing and bounded below by zero.
Therefore:

$H_n - \ln n \ge 0$
Therefore:

$\forall n \in \N_{>0} : 0 \le \size {H_n - \ln n - \gamma} < \dfrac 1 n$
$\blacksquare$


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): Preface to first edition: Prerequisites: $\text {(iii)}$




