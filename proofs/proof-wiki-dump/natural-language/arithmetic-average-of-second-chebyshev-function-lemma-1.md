# 

Source: https://proofwiki.org/wiki/Arithmetic_Average_of_Second_Chebyshev_Function/Lemma_1

Lemma
Let $x \ge 1$ be a real number.
Then: 

$\paren {x + 1} \map \ln {x + 1} - x \ln x \le 2 \map \ln {x + 1}$


Proof
Define a function $f : \hointr 1 \infty \to \R$ by: 

$\map f x = \paren {x + 1} \map \ln {x + 1} - x \ln x - 2 \map \ln {x + 1}$
for each $x \in \hointr 1 \infty$.
Note that: 

$\map f 1 = 2 \ln 2 - 1 \ln 1 - 2 \ln 2 = 0$
So it suffices to show that $f$ is decreasing for $x \ge 1$, then we will have $\map f x < 0$ for $x \ge 1$.
Note that $f$ is differentiable and: 














\(\ds \map {f'} x\)

\(=\)







\(\ds \frac {x + 1} {x + 1} + \map \ln {x + 1} - \frac x x - \ln x - \frac 2 {x + 1}\)





Product Rule for Derivatives, Derivative of Logarithm Function














\(\ds \)

\(=\)







\(\ds \map \ln {x + 1} - \ln x - \frac 2 {x + 1}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {1 + \frac 1 x} - \frac 2 {x + 1}\)





Difference of Logarithms














\(\ds \)

\(\le\)







\(\ds \frac 1 x - \frac 2 {x + 1}\)





Bounds of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \frac {1 - x} {x \paren {x + 1} }\)









We can now see that $\map {f'} x \le 0$ for $x \ge 1$. 
So, from Real Function with Negative Derivative is Decreasing:

$f$ is decreasing.
So, for $x \ge 1$, we have: 

$\paren {x + 1} \map \ln {x + 1} - x \ln x - 2 \map \ln {x + 1} \le \map f 1 = 0$
That is: 

$\paren {x + 1} \map \ln {x + 1} - x \ln x \le 2 \map \ln {x + 1}$
$\blacksquare$





