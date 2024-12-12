# 

Source: https://proofwiki.org/wiki/Derivative_of_Sine_Function/Proof_1

Theorem
$\map {\dfrac \d {\d x} } {\sin x} = \cos x$


Proof
From the definition of the sine function, we have:

$\ds \sin x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}$
From Radius of Convergence of Power Series over Factorial, this series converges for all $x$.

From Power Series is Differentiable on Interval of Convergence:














\(\ds \map {\frac \d {\d x} } {\sin x}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)










The result follows from the definition of the cosine function.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.3 \ (1) \ \text{(vi)}$




