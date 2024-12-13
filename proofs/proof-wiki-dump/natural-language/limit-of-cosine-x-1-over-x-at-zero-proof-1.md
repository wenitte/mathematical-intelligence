# 

Source: https://proofwiki.org/wiki/Limit_of_(Cosine_(X)_-_1)_over_X_at_Zero/Proof_1

Theorem
$\ds \lim_{x \mathop \to 0} \frac {\cos x - 1} x = 0$


Proof
This proof works directly from the definition of the cosine function:















\(\ds \cos x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)





Definition of Real Cosine Function














\(\ds \)

\(=\)







\(\ds \paren {-1}^0 \cdot \frac {x^{2 \cdot 0} } {\paren {2 \cdot 0}!} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)





Definition of Zero Factorial and Definition of Zeroth Power


















\(\ds \lim_{x \mathop \to 0} \frac {\cos x - 1} x\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {1 + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} - 1} x\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} } x\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {\sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n - 1} } {\paren {2 n - 1}!} } 1\)





Power Series is Differentiable on Interval of Convergence and L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n - 1} } {\paren {2 n - 1}!}\)










Now let:

$\map {f_n} x = \paren {-1}^n \dfrac {x^{2 n - 1} } {\paren {2 n - 1}!}$
Then for every $n \in \N_{> 0}$, and for all $x \in \closedint {\dfrac 1 2} {\dfrac 1 2}$:














\(\ds \map {f_n} x\)

\(\le\)







\(\ds \size {\paren {-1}^n \frac {x^{2 n - 1} } {\paren {2 n - 1}!} }\)

\(\ds \; = \frac { {\size x}^{2 n - 1} } {\paren {2 n - 1}!}\)



Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \frac 1 {2^{2 n - 1} \paren {2 n - 1}!}\)





Power Function is Strictly Increasing over Positive Reals














\(\ds \)

\(\le\)







\(\ds \frac 1 {2^{2 n - 1} }\)





because the factorial is strictly increasing














\(\ds \)

\(\le\)







\(\ds \frac 1 {2^n}\)





because $n \ge 1 \iff 2 n - 1 \ge n$




But from Sum of Infinite Geometric Sequence:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {2^n} = 2 < \infty$

By the Weierstrass M-Test, $\ds \sum_{n \mathop = 1}^\infty \map {f_n} x$ converges uniformly to some function $f$ on $\closedint {\dfrac 1 2} {\dfrac 1 2}$.
But from Real Polynomial Function is Continuous, and the Uniform Limit Theorem $f$ is continuous on $\closedint {\dfrac 1 2} {\dfrac 1 2}$.
So:

$\ds \lim_{x \mathop \to 0} \map f x = \map f 0 = \sum_{n \mathop = 1}^\infty \paren {-1} \frac {0^{2 n - 1} } {\paren {2 n - 1}!} = 0$
$\blacksquare$





