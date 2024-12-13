# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Logarithm_of_1_%2B_x/Corollary

Corollary to Power Series Expansion for $\map \ln {1 + x}$













\(\ds \map \ln {1 - x}\)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac {x^n} n\)




















\(\ds \)

\(=\)







\(\ds -x - \frac {x^2} 2 - \frac {x^3} 3 - \frac {x^4} 4 - \cdots\)









valid for $-1 \le x < 1$.


Proof
By Power Series Expansion for $\map \ln {1 + x}$:

$\ds \map \ln {1 + x} = \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {x^n} n$
Then:














\(\ds \map \ln {1 - x}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \frac {\paren {-x}^n} n\)





substituting $x \to -x$














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \paren {-1}^{2 n} \frac {x^n} n\)




















\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \frac {x^n} n\)









$\blacksquare$





