# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Millin_Series/Proof_2

Theorem
The Millin series has the closed form expression:

$\ds \sum_{n \mathop = 0}^\infty \frac 1 {F_{2^n} } = \frac {7 - \sqrt 5} 2$


Proof
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


Sources
1976: A.G. Shannon: Advanced Problems and Solutions: Sum Reciprocal! (Fibonacci Quart. Vol. 14, no. 2: pp. 186 – 187)




