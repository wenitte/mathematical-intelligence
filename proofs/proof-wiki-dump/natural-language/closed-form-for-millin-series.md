# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Millin_Series



Theorem
The Millin series has the closed form expression:

$\ds \sum_{n \mathop = 0}^\infty \frac 1 {F_{2^n} } = \frac {7 - \sqrt 5} 2$

where $F_k$ is the $k$th Fibonacci number.


Proof 1
First we will prove that:

$\ds \sum_{r \mathop = 0}^n \frac 1 {F_{2^r} } = 3 - \frac {F_{2^n - 1} } {F_{2^n} }$
for $n \ge 1$.

We see that:

$\dfrac 1 {F_1} + \dfrac 1 {F_2} = 2 = 3 - \dfrac {F_1} {F_2}$
so the proposition holds for $n = 1$.
Suppose the proposition is true for $n = k$.
Then:














\(\ds \sum_{r \mathop = 0}^{k + 1}  \frac 1 {F_{2^r} }\)

\(=\)







\(\ds 3 - \frac {F_{2^k - 1} } {F_{2^k} } + \frac 1 {F_{2^{k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^k - 1} F_{2^{k + 1} } - F_{2^k} } {F_{2^k} F_{2^{k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^k - 1} F_{2^k} \paren {F_{2^k + 1} + F_{2^k - 1} } - F_{2^k} } {F_{2^k} F_{2^{k + 1} } }\)





repeated Fibonacci recurrence formula on $F_{2^{k + 1} }$














\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^k - 1} F_{2^k + 1} + F_{2^k - 1}^2 - 1} {F_{2^{k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^k}^2 + F_{2^k - 1}^2} {F_{2^{k + 1} } }\)





Cassini's Identity














\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^{k + 1} - 1} } {F_{2^{k + 1} } }\)





repeated Fibonacci recurrence formula on $F_{2^{k + 1} - 1}$




Thus by Principle of Mathematical Induction, the proof is complete. 
$\Box$

Now taking the limit, we have:














\(\ds \sum_{r \mathop = 0}^\infty \frac 1 {F_{2^r} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{r \mathop = 0}^n \frac 1 {F_{2^r} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {3 - \frac {F_{2^n - 1} } {F_{2^n } } }\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac 2 {\sqrt 5 + 1 }\)





Ratio of Consecutive Fibonacci Numbers














\(\ds \)

\(=\)







\(\ds 3 - \frac 2 {\sqrt 5 + 1 } \paren {\frac {\sqrt 5 - 1 } {\sqrt 5 - 1 } }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds 3 - \frac {2 \paren {\sqrt 5 - 1 } } 4\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac {\sqrt 5 - 1} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {7 - \sqrt 5} 2\)









as required.
$\blacksquare$


Proof 2
Let:

$\ds \map F x := \sum_{k \mathop = 1}^\infty \frac {x^{2^{k - 1} } } {F_{2^k} }$
$\alpha := \dfrac {1 + \sqrt 5} 2$
$\beta := \dfrac {1 - \sqrt 5} 2$

Note that for $\size x \le 1$ we have:

$\size {\dfrac {x^{2^{k - 1} } } {F_{2^k} } } \le \dfrac 1 {F_{2^k} }$
Given that the Millin Series converges, by Comparison Test:

$\ds \map F x = \sum_{k \mathop = 1}^\infty \frac {x^{2^{k - 1} } } {F_{2^k} }$ converges for $\size x \le 1$

We have:

$\ds \map F {\alpha x} := \sum_{k \mathop = 1}^\infty \frac {\alpha^{2^{k - 1} } x^{2^{k - 1} } } {F_{2^k} }$
Hence:














\(\ds \map F {\alpha x} + \map F {\beta x}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {\alpha^{2^{k - 1} } + \beta^{2^{k - 1} } } {F_{2^k} } x^{2^{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {L_{2^{k - 1} } } {F_{2^k} } x^{2^{k - 1} }\)





Closed Form for Lucas Numbers














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac {x^{2^{k - 1} } } {F_{2^{k - 1} } }\)





Fibonacci Number 2n equals Fibonacci Number n by Lucas Number n














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {x^{2^k} } {F_{2^k} }\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \frac {x^{2^0} } {F_{2^0} } + \sum_{k \mathop = 1}^\infty \frac {\paren {x^2}^{2^{k - 1} } } {F_{2^k} }\)




















\(\ds \)

\(=\)







\(\ds x + \map F {x^2}\)









Since $\beta^2 = \dfrac {3 - \sqrt 5} 2 \le 1$, we can substitute $x = -\beta$:














\(\ds -\beta + \map F {\beta^2}\)

\(=\)







\(\ds \map F {-\beta^2} + \map F {-\alpha \beta}\)














\(\ds \leadsto \ \ \)





\(\ds \map F 1\)

\(=\)







\(\ds -\beta + 2 \beta^2\)





as $\alpha \beta = -1$ and $\map F {\beta^2} = \map F {-\beta^2} + 2 \beta^2$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^\infty \frac 1 {F_{2^k} }\)

\(=\)







\(\ds 1 + \map F 1\)




















\(\ds \)

\(=\)







\(\ds 1 - \beta + 2 \beta^2\)




















\(\ds \)

\(=\)







\(\ds 2 - \paren {1 + \beta - \beta^2} + \beta^2\)




















\(\ds \)

\(=\)







\(\ds 2 + \dfrac {3 - \sqrt 5} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {7 - \sqrt 5} 2\)









$\blacksquare$


Historical Note
The series which is now known as the Millin series appeared as a puzzle problem in The Fibonacci Quarterly in $1974$ under the byline D.A. Millin, identified as a high school student in Pennsylvania, US.
Millin was in fact a misprint for D.A. Miller, under which name the solution was published.
An outline by Irving John Good of a solution appeared in the following issue.
A full solution by Anthony Greville Shannon was published two years later in The Fibonacci Quarterly, and in that issue, Miller's name was reported correctly as D. A. Miller.
The identity was published on the Mathworld website under the name Millin series, from which it has since been further propagated.


Sources
1974: D.A. Millin: Advanced Problems and Solutions: H-237 (Fibonacci Quart. Vol. 12, no. 3: p. 309)
Weisstein, Eric W. "Millin Series." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/MillinSeries.html




