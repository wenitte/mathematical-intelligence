# 

Source: https://proofwiki.org/wiki/Limit_of_Sine_of_X_over_X_at_Zero/Proof_1

Theorem
$\ds \lim_{x \mathop \to 0} \frac {\sin x} x = 1$


Proof













\(\ds \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)





Definition of Real Sine Function














\(\ds \)

\(=\)







\(\ds \left({-1}\right)^0 \frac{x^{2 \cdot 0 + 1} } { \left({2 \cdot 0 + 1}\right)!} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds x + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}\)
























\(\ds \lim_{x \mathop \to 0} \frac {\sin x} x\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac {x + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!} } x\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac x x + \lim_{x \mathop \to 0} \frac{\sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!} } x\)




















\(\ds \)

\(=\)







\(\ds 1 + \lim_{x \mathop \to 0} \frac {\sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!} } 1\)





Power Series is Differentiable on Interval of Convergence and L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds 1 + \lim_{x \mathop \to 0} \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {0^{2 n} } {\paren {2 n}!}\)





Real Polynomial Function is Continuous














\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





