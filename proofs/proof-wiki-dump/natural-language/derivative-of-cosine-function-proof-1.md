# 

Source: https://proofwiki.org/wiki/Derivative_of_Cosine_Function/Proof_1

Theorem
$\map {\dfrac \d {\d x} } {\cos x} = -\sin x$


Proof
From the definition of the cosine function, we have:

$\ds \cos x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}$
Then:














\(\ds \map {\frac \d {\d x} } {\cos x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n 2 n \frac {x^{2 n - 1} } {\paren {2 n}!}\)





Power Series is Differentiable on Interval of Convergence














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n - 1} } {\paren {2 n - 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^{n + 1} \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)





changing summation index














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)










The result follows from the definition of the sine function.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 16.3 \ (1) \ \text{(v)}$




