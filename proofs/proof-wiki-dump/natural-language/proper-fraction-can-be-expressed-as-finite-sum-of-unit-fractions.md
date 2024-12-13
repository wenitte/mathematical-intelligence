# 

Source: https://proofwiki.org/wiki/Proper_Fraction_can_be_Expressed_as_Finite_Sum_of_Unit_Fractions



Theorem
Let $\dfrac p q$ denote a proper fraction expressed in canonical form.
Then it is always possible to express $\dfrac p q$ as the sum of a finite number of distinct unit fractions:














\(\ds \dfrac p q\)

\(=\)







\(\ds \sum_{\substack {1 \mathop \le k \mathop \le m \\ n_j \mathop \le n_{j + 1} } } \dfrac 1 {n_k}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {n_1} + \dfrac 1 {n_2} + \dotsb + \dfrac 1 {n_m}\)











Proof using Fibonacci's Greedy Algorithm
We use Fibonacci's Greedy Algorithm:
Fibonacci's Greedy Algorithm is as follows:

$(1) \quad$ Let $p = x_0$ and $q = y_0$ and set $k = 0$.
$(2) \quad$ Is $x_k = 1$? If so, the algorithm has finished.
$(3) \quad$ Find the largest unit fraction $\dfrac 1 {m_k}$ less than $\dfrac {x_k} {y_k}$.
$(4) \quad$ Calculate $\dfrac {x_{k + 1} } {y_{k + 1} } = \dfrac {x_k} {y_k} - \dfrac 1 {m_k}$ expressed in canonical form.
$(5) \quad$ Go to step $(2)$.
The above constitutes an algorithm, for the following reasons:


Inputs
The input to this algorithm is the proper fraction $\dfrac p q$.
$\Box$


Definiteness
Steps $(1)$, $(2)$ and $(5)$ are trivially definite.

Step $(3)$:
We have:














\(\ds \ceiling {\dfrac {y_k} {x_k} }\)

\(\ge\)







\(\ds \dfrac {y_k} {x_k}\)





Definition of Ceiling Function








\(\ds \leadsto \ \ \)





\(\ds \dfrac {x_k} {y_k}\)

\(\ge\)







\(\ds \dfrac 1 {\ceiling {y_k / x_k} }\)









while:














\(\ds \ceiling {\dfrac {y_k} {x_k} } - 1\)

\(\le\)







\(\ds \dfrac {y_k} {x_k}\)





Definition of Ceiling Function








\(\ds \leadsto \ \ \)





\(\ds \dfrac {x_k} {y_k}\)

\(\le\)







\(\ds \dfrac 1 {\ceiling {y_k / x_k} - 1}\)









Hence $\dfrac 1 {\ceiling {y_k / x_k} }$ is the largest unit fraction less than $\dfrac {x_k} {y_k}$.
$\Box$


Finiteness
In order for the algorithm to terminate after a finite number of steps, at some stage step $(2)$ is to be executed where $x_m = 1$.
Hence it is to be shown that at the end of step $(4)$ $x_k = 1$ for some $k$.

We have:














\(\ds \dfrac {x_k} {y_k} - \dfrac 1 {m_k}\)

\(=\)







\(\ds \dfrac {x_k} {y_k} - \dfrac 1 {\ceiling {y_k / x_k} }\)





from step $(3)$ above














\(\ds \)

\(=\)







\(\ds \dfrac {x_k \ceiling {y_k / x_k} } {y_k \ceiling {y_k / x_k} }\)





common denominator














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-y_k} \bmod {x_k} } {y_k \ceiling {y_k / x_k} }\)










We know that $x_k$ is not a divisor of $y_k$ as $\dfrac {x_k} {y_k}$ is expressed in canonical form.
Hence:

$0 < \paren {-y_k} \bmod {x_k} < x_k$
Hence the numerator of $\dfrac {\paren {-y_k} \bmod {x_k} } {y_k \ceiling {y_k / x_k} }$ is strictly less than $x_k$.
Expressing $\dfrac {\paren {-y_k} \bmod {x_k} } {y_k \ceiling {y_k / x_k} }$ in the canonical form $\dfrac {x_{k + 1} } {y_{k + 1} }$ may reduce the numerator further, but will not increase it.
Hence:

$x_{k + 1} < x_k$
and so by the Method of Infinite Descent it must eventually be the case that:

$x_m = 1$
for some $m \in \N$.
$\Box$


Outputs
The output to this algorithm is the summation $\displaystyle \sum_{\substack {1 \mathop \le k \mathop \le m \\ n_j \mathop \le n_{j + 1} } } \dfrac 1 {n_k}$.
$\Box$


Effective
Each step of the algorithm is basic enough to be done exactly and in a finite length of time.

It is seen that every time step $(3)$ is executed, another unit fraction is generated.
When, at some stage after step $(4)$, $x_k = 1$, again a unit fraction has been generated.
But now it is not necessary to go through the algorithm again, and so at step $(2)$ the algorithm terminates.
It has output a sequence of unit fractions all of which have different denominators, which together add up to $\dfrac p q$.


This needs considerable tedious hard slog to complete it.In particular: It still needs to be established that the denominators are in fact all different.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\Box$

All criteria are seen to hold.
The result follows.
$\blacksquare$


Sources
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Egyptian Fractions




