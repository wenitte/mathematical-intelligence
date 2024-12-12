# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Mean_Theorem



Theorem
Let $x_1, x_2, \ldots, x_n \in \R$ be real numbers which are all positive.
Let $A_n$ be the arithmetic mean of $x_1, x_2, \ldots, x_n$.
Let $G_n$ be the geometric mean of $x_1, x_2, \ldots, x_n$.

Then:

$A_n \ge G_n$
with equality holding if and only if:

$\forall i, j \in \set {1, 2, \ldots, n}: x_i = x_j$
That is, if and only if all terms are equal.


Proof 1
The arithmetic mean of $x_1, x_2, \ldots, x_n$ is defined as:

$\ds A_n = \frac 1 n \paren {\sum_{k \mathop = 1}^n x_k}$

The geometric mean of $x_1, x_2, \ldots, x_n$ is defined as:

$\ds G_n = \paren {\prod_{k \mathop = 1}^n x_k}^{1/n}$

We prove the result by induction:
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

For all positive real numbers $x_1, x_2, \ldots, x_n: A_n \ge G_n$.

$\map P 1$ is true, as this just says:

$\dfrac {x_1} 1 \ge {x_1}^{1/1}$
which is trivially true.


Basis for the Induction
$\map P 2$ is the case:

$\dfrac {x_1 + x_2} 2 \ge \sqrt {x_1 x_2}$
As $x_1, x_2 > 0$ we can take their square roots and do the following:














\(\ds 0\)

\(\le\)







\(\ds \paren {\sqrt {x_1} - \sqrt {x_2} }^2\)




















\(\ds \)

\(=\)







\(\ds x_1 - 2\sqrt {x_1 x_2} + x_2\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {x_1 x_2}\)

\(\le\)







\(\ds \frac {x_1 + x_2} 2\)









This is our basis for the induction.


Induction Hypothesis
Now we show that:

$(1): \quad$ If $\map P {2^k}$ is true, where $k \ge 1$, then it logically follows that $\map P {2^{k + 1} }$ is true
$(2): \quad$ If $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k - 1}$ is true.
The result will follow by Forward-Backward Induction.

This is our first induction hypothesis:

$A_{2^k} \ge G_{2^k}$

Then we need to show:

$A_{2^{k + 1} } \ge G_{2^{k + 1} }$


Induction Step
This is our induction step:
Let $m = 2^k$.
Then $2^{k + 1} = 2 m$.
Because $\map P m$ is true:

$\paren {x_1 x_2 \dotsm x_m}^{1/m} \le \dfrac 1 m \paren {x_1 + x_2 + \dotsb + x_m}$
Also:

$\paren {x_{m + 1} x_{m + 2} \dotsm x_{2 m} }^{1/m} \le \dfrac 1 m \paren {x_{m + 1} + x_{m + 2} + \dotsb + x_{2 m} }$
But we have $\map P 2$, so:

$\paren {\paren {x_1 x_2 \dotsm x_m}^{1/m} \paren {x_{m + 1} x_{m + 2} \dotsm x_{2 m} }^{1/m} }^{1/2} \le \dfrac 1 2 \paren {\dfrac {x_1 + x_2 + \cdots + x_m} m + \dfrac {x_{m + 1} + x_{m + 2} + \dotsb + x_{2 m} } m}$
So:

$\paren {x_1 x_2 \dotsm x_{2 m} }^{1/2m} \le \dfrac {x_1 + x_2 + \dotsb + x_{2 m} } {2 m}$
So $\map P {2 m} = \map P {2^{k + 1} }$ holds.
So $\map P {2^n}$ holds for all $n$ by induction.

Now suppose $\map P k$ holds.
Then:














\(\ds \paren {x_1 x_2 \dotsm x_{k - 1} G_{k - 1} }^{1/k}\)

\(\le\)







\(\ds \dfrac {x_1 + x_2 + \dotsm + x_{k - 1} + G_{k - 1} } k\)














\(\ds \leadsto \ \ \)





\(\ds \paren {G_{k - 1}^{k - 1} G_{k - 1} }^{1/k}\)

\(\le\)







\(\ds \dfrac {\paren {k - 1} A_{k - 1} + G_{k - 1} } k\)














\(\ds \leadsto \ \ \)





\(\ds k G_{k - 1}\)

\(\le\)







\(\ds \paren {k - 1} A_{k - 1} + G_{k - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {k - 1} G_{k - 1}\)

\(\le\)







\(\ds \paren {k - 1} A_{k - 1}\)














\(\ds \leadsto \ \ \)





\(\ds G_{k - 1}\)

\(\le\)







\(\ds A_{k - 1}\)









So $\map P k \implies \map P {k - 1}$ and the result follows by Forward-Backward Induction.

Therefore $A_n \ge G_n$ for all $n$.
$\blacksquare$


Proof 2
Let:

$\map f x = \ln x$
for $x > 0$.
With a view to apply Jensen's Inequality: Real Analysis: Corollary, we can show that $f$ is concave on $\openint 0 \infty$. 
By Second Derivative of Concave Real Function is Non-Positive, it is sufficient to show that $\map {f} x \le 0$ for all $x > 0$. 
We have, by Derivative of Natural Logarithm:

$\map {f'} x = \dfrac 1 x$
We then have, by Derivative of Power:

$\map {f} x = -\dfrac 1 {x^2}$ 
As $x^2 > 0$ for all $x > 0$, we have:

$\dfrac 1 {x^2} > 0$
Therefore: 

$-\dfrac 1 {x^2} = \map {f} x < 0$
so $f$ is indeed concave on $\openint 0 \infty$.
As $x_1, x_2, \ldots, x_n$ are all positive, they all lie in the interval $\openint 0 \infty$. 
We therefore have, by Jensen's Inequality: Real Analysis: Corollary: 

$\ds \map \ln {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} } \ge \frac {\sum_{k \mathop = 1}^n \lambda_k \map \ln {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}$
for real $\lambda_1, \lambda_2, \ldots, \lambda_n \ge 0$, with at least one of which being non-zero. 
As $n$ is a positive integer, we have: 

$\dfrac 1 n > 0$
We can therefore set: 

$\lambda_i = \dfrac 1 n$
for $1 \le i \le n$.
This gives: 














\(\ds \map \ln {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} }\)

\(=\)







\(\ds \map \ln {\frac {\sum_{k \mathop = 1}^n x_k} {n \sum_{k \mathop = 1}^n \frac 1 n} }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac {\sum_{k \mathop = 1}^n x_k} n}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {A_n}\)





Definition of Arithmetic Mean



and:














\(\ds \frac {\sum_{k \mathop = 1}^n \lambda_k \map \ln {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}\)

\(=\)







\(\ds \frac {\sum_{k \mathop = 1}^n \map \ln {x_k} } {n \sum_{k \mathop = 1}^n \frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds \frac {\sum_{k \mathop = 1}^n \map \ln {x_k} } n\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n \map \ln {\prod_{k \mathop = 1}^n x_k}\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \map \ln {\paren {\prod_{k \mathop = 1}^n x_k}^{1/n} }\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \map \ln {G_n}\)





Definition of Geometric Mean



We therefore have: 

$\map \ln {A_n} \ge \map \ln {G_n}$
Note that for $x > 0$: 

$\dfrac 1 x = \map {f'} x > 0$
Therefore, by Derivative of Monotone Function, $f$ is increasing on $\openint 0 \infty$. 
We therefore have: 

$A_n \ge G_n$
$\blacksquare$


Proof 3
For $p \in \R$, let $\map {M_p} {x_1, x_2, \ldots, x_n}$ denote the Hölder mean with exponent $p$ of $x_1, x_2, \ldots, x_n$.
By definition of Hölder Mean with $p = 0$:

$\map {M_0} {x_1, x_2, \ldots, x_n} = \map G {x_1, x_2, \ldots, x_n}$
From Hölder Mean for Exponent 1 is Arithmetic Mean:

$\map {M_1} {x_1, x_2, \ldots, x_n} = \map G {x_1, x_2, \ldots, x_n}$
The result follows from Inequality of Hölder Means:

$0 < 1 \implies \map {M_0} {x_1, x_2, \ldots, x_n} < \map {M_1} {x_1, x_2, \ldots, x_n}$
unless $x_1 = x_2 = \cdots = x_n$, in which case:

$\map {M_0} {x_1, x_2, \ldots, x_n} = \map {M_1} {x_1, x_2, \ldots, x_n}$
Hence the result.
$\blacksquare$


Proof of Equality Condition
Necessary Condition
Let:

$\forall i, j \in \set {1, 2, \ldots, n}: x_i = x_j = x$

Then:














\(\ds A_n\)

\(=\)







\(\ds \dfrac 1 n \sum_{j \mathop = 1}^n x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 n n x\)




















\(\ds \)

\(=\)







\(\ds x\)
























\(\ds G_n\)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^n x}^{\frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds \paren {x^n}^{\frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds x\)










So:

$A_n = G_n = x$
$\Box$


Sufficient Condition
Let $A_n = G_n$.
We prove the result by induction:
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$A_n = G_n \implies \forall i, j \in \set {1, 2, \ldots, n}: x_i = x_j$

$\map P 1$ is true, as this just says:














\(\ds A_1\)

\(=\)







\(\ds G_1\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 1 \sum_{j \mathop = 1}^1 x_j\)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^1 x_j}^{1/1}\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds x_1\)









which is trivially true.


Basis for the Induction
$\map P 2$ is the case:














\(\ds A_2\)

\(=\)







\(\ds G_2\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x_1 + x_2} 2\)

\(=\)







\(\ds \sqrt {x_1 x_2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\dfrac {x_1 + x_2} 2}^2\)

\(=\)







\(\ds x_1 x_2\)














\(\ds \leadsto \ \ \)





\(\ds x_1^2 + 2 x_1 x_2 + x_2^2\)

\(=\)







\(\ds 4 x_1 x_2\)














\(\ds \leadsto \ \ \)





\(\ds x_1^2 - 2 x_1 x_2 + x_2^2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_1 - x_2}^2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(=\)







\(\ds x_2\)









This is our basis for the induction.


Induction Hypothesis
Now we show that:

$(1): \quad$ If $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {2 k}$ is true
$(2): \quad$ If $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k - 1}$ is true.
The result will follow by Forward-Backward Induction.

This is our first induction hypothesis:

$A_k = G_k \implies \forall i, j \in \set {1, 2, \ldots, k}: x_i = x_j = x$

Also, let:

$A_k' := \ds \dfrac 1 k \sum_{j \mathop = k + 1}^{2 k} x_j = y$
and:

$G_k' := \ds \paren {\prod_{j \mathop = k + 1}^{2 k} }^{1 / k} x_j = y$
By the induction hypothesis:

$A_k' = G_k' \implies \forall i, j \in \set {k + 1, k + 2, \ldots, 2 k}: x_i = x_j = y$

We need to show:

$A_{2 k} = G_{2 k} \implies \forall i, j \in \set {1, 2, \ldots, 2 k}: x_i = x_j = x$


Induction Step
This is our induction step:
Suppose:

$A_{2 k} = G_{2 k}$

Let:

$A_k' := \ds \dfrac 1 k \sum_{j \mathop = k + 1}^{2 k} x_j = y$
and:

$G_k' := \ds \paren {\prod_{j \mathop = k + 1}^{2 k} }^{1 / k} x_j = y$
By the induction hypothesis:

$A_k' = G_k' \implies \forall i, j \in \set {k + 1, k + 2, \ldots, 2 k}: x_i = x_j = y$

Then:














\(\ds A_{2 k}\)

\(=\)







\(\ds \dfrac 1 {2 k} \sum_{j \mathop = 1}^{2 k} x_j\)





Definition of Arithmetic Mean














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 k} \paren {\sum_{j \mathop = 1}^k x_j + \sum_{j \mathop = k + 1}^{2 k} x_j}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {\dfrac 1 k \sum_{j \mathop = 1}^k x_j + \dfrac 1 k \sum_{j \mathop = k + 1}^{2 k} x_j}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {A_k + A_k'}\)





Definition of Arithmetic Mean














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \paren {x + y}\)





Definition of $A_k$ and $A_k'$


















\(\ds G_{2 k}\)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^{2 k} x_j}^{1 / 2 k}\)





Definition of Geometric Mean














\(\ds \)

\(=\)







\(\ds \paren {\paren {\prod_{j \mathop = 1}^{2 k} x_j}^{1 / k} }^{1 / 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {\prod_{j \mathop = 1}^k x_j}^{1 / k} \times \paren {\prod_{j \mathop = k + 1}^{2 k} x_j}^{1 / k} }^{1 / 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {G_k G_k'}^{1 / 2}\)





Definition of Geometric Mean














\(\ds \)

\(=\)







\(\ds \paren {x y}^{1 / 2}\)





Definition of $G_k$ and $G_k'$




Then:














\(\ds A_{2 k}\)

\(=\)







\(\ds G_{2 k}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 2 \paren {x + y}\)

\(=\)







\(\ds \paren {x y}^{1 / 2}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Basis for the Induction



That is:

$\forall i, j \in \set {1, 2, \ldots, k}: x_i = x_j = x$
$\forall i, j \in \set {k + 1, k + 2, \ldots, 2 k}: x_i = x_j = x$
Hence:

$\forall i, j \in \set {1, 2, \ldots, 2 k}: x_i = x_j = x$

Now suppose $\map P k$ holds.
Then:














\(\ds G_{k - 1}\)

\(=\)







\(\ds A_{k - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {k - 1} G_{k - 1}\)

\(=\)







\(\ds \paren {k - 1} A_{k - 1}\)














\(\ds \leadsto \ \ \)





\(\ds k G_{k - 1}\)

\(=\)







\(\ds \paren {k - 1} A_{k - 1} + G_{k - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {G_{k - 1}^{k - 1} G_{k - 1} }^{1/k}\)

\(=\)







\(\ds \dfrac {\paren {k - 1} A_{k - 1} + G_{k - 1} } k\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_1 x_2 \dotsm x_{k - 1} G_{k - 1} }^{1 / k}\)

\(=\)







\(\ds \dfrac {x_1 + x_2 + \dotsm + x_{k - 1} + G_{k - 1} } k\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x_1 x_2 \dotsm x_{k - 1} G_{k - 1} }^{1 / k}\)

\(=\)







\(\ds \dfrac {x_1 + x_2 + \dotsm + x_{k - 1} + G_{k - 1} } k\)









But:

$\paren {x_1 x_2 \dotsm x_{k - 1} G_{k - 1} }^{1 / k}$ is the geometric mean of $\set {x_1, x_2, \ldots, x_{k - 1}, G_{k - 1} }$
$\dfrac {x_1 + x_2 + \dotsm + x_{k - 1} + G_{k - 1} } k$ is the arithmetic mean of $\set {x_1, x_2, \ldots, x_{k - 1}, G_{k - 1} }$
We have that $\set {x_1, x_2, \ldots, x_{k - 1}, G_{k - 1} }$ has $k$ elements.
Hence by the induction hypothesis:

$\forall i, j \in \set {1, 2, \ldots, k - 1}: x_i = x_j = G_{k - 1}$
So $\map P k \implies \map P {k - 1}$ and the result follows by Forward-Backward Induction.

Therefore $A_n \ge G_n$ for all $n$.

$\forall n \in \N: A_n = G_n \implies \forall i, j \in \set {1, 2, \ldots, n}: x_i = x_j$
$\blacksquare$


Also known as
Cauchy's Mean Theorem is widely known as:

the Arithmetic-Geometric Mean Inequality
the AM-GM Inequality.
Some sources give this as Cauchy's formula, but this is too imprecise to be useful.


Also see
AM-HM Inequality
GM-HM Inequality


Source of Name
This entry was named for Augustin Louis Cauchy.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Relation Between Arithmetic, Geometric, Harmonic and Generalized Means: $3.2.1$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 36$: Inequalities: Inequalities involving Arithmetic, Geometric and Harmonic Means: $36.4$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): arithmetic-geometric mean inequality
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): geometric mean
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): arithmetic-geometric mean inequality
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): arithmetic-geometric mean inequality
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): arithmetic-geometric mean inequality
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): mean
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): arithmetic-geometric mean inequality
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): mean




