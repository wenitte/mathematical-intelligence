# 

Source: https://proofwiki.org/wiki/Negative_of_Logarithm_of_x_plus_Root_x_squared_plus_a_squared



Theorem
Let $x \in \R$ be a real number.
Then:

$-\map \ln {x + \sqrt {x^2 + a^2} } = \map \ln {-x + \sqrt {x^2 + a^2} } - \map \ln {a^2}$


Corollary
$-\map \ln {x + \sqrt {x^2 + a^2} } = \ln \size {x - \sqrt {x^2 + a^2} } - \map \ln {a^2}$


Proof
We have that $\sqrt {x^2 + a^2} > x$ for all $x$.
Thus:

$x + \sqrt {x^2 + a^2} > 0$
and so $\map \ln {x + \sqrt {x^2 + a^2} }$ is defined for all $x$.
Then we have:














\(\ds -\map \ln {x + \sqrt {x^2 + a^2} }\)

\(=\)







\(\ds \map \ln {\dfrac 1 {x + \sqrt {x^2 + a^2} } }\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac {x - \sqrt {x^2 + a^2} } {\paren {x + \sqrt {x^2 + a^2} } \paren {x - \sqrt {x^2 + a^2} } } }\)





multiplying top and bottom by $x - \sqrt {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac {x - \sqrt {x^2 + a^2} } {x^2 - \paren {x^2 + a^2} } }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac {-x + \sqrt {x^2 + a^2} } {a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \map \ln {-x + \sqrt {x^2 + a^2} } - \map \ln {a^2}\)





Difference of Logarithms



$\blacksquare$


Also see
Negative of Logarithm of x plus Root x squared minus a squared




