# 

Source: https://proofwiki.org/wiki/Euler%27s_Integral_Theorem/Proof_2

Theorem
$H_n = \ln n + \gamma + \map \OO {\dfrac 1 n}$
where:

$H_n$ denotes the $n$th harmonic number
$\gamma$ denotes the Euler-Mascheroni constant
$\map \OO {\dfrac 1 n}$ denotes big-$\OO$ of $\dfrac 1 n$.


Proof
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





