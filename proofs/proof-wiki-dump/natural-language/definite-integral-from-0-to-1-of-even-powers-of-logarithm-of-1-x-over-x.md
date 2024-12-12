# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Even_Powers_of_Logarithm_of_1_-_x_over_x

Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.


$\ds \int_0^1 \map {\ln^{2n} } {\dfrac {1 - x} x} \rd x = \paren {-1}^{n + 1} B_{2 n} \paren {2^{2 n} - 2} \pi^{2 n}$


where $B_{2 n}$ is the $2 n$th Bernoulli number.


Corollary
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.


$\ds \int_0^1 \map {\ln^{2n} } {\dfrac {1 - x} x} \rd x = 2 \map \zeta {2 n} \paren {2 n}! \paren {1 - \dfrac 1 {2^{2n-1} } }$


Proof
let:














\(\ds \map \ln {\dfrac {1 - x} x}\)

\(=\)







\(\ds -u\)





Integration by Substitution














\(\ds \dfrac {1 - x} x\)

\(=\)







\(\ds e^{-u}\)




















\(\ds \dfrac 1 x - 1\)

\(=\)







\(\ds e^{-u}\)




















\(\ds \dfrac 1 x\)

\(=\)







\(\ds 1 + e^{-u}\)




















\(\ds x\)

\(=\)







\(\ds \dfrac 1 {1 + e^{-u} }\)




















\(\ds \frac {\rd x} {\rd u}\)

\(=\)







\(\ds \dfrac { {e^{-u} } } {\paren { 1 + e^{-u} }^2 }\)





Power Rule for Derivatives, Chain Rule for Derivatives and Derivative of Exponential Function: Corollary 1



and also:














\(\ds \lim_{x \mathop \to 0} \map \ln {\dfrac {1 - x} x}\)

\(=\)







\(\ds \infty\)




















\(\ds \lim_{x \mathop \to 1} \map \ln {\dfrac {1 - x} x}\)

\(=\)







\(\ds -\infty\)









Then:














\(\ds \int_0^1 \map {\ln^{2n} } {\dfrac {1 - x} x} \rd x\)

\(=\)







\(\ds -\int_{\infty}^{-\infty} \dfrac { u^{2n} e^{-u} \rd u  } {\paren { 1 + e^{-u} }^2 }\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^{\infty} \dfrac { u^{2n} e^{-u} \rd u  } {\paren { 1 + e^{-u} }^2 }\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^0 \dfrac { u^{2n} e^{-u} \rd u  } {\paren { 1 + e^{-u} }^2 } + \int_0^{\infty} \dfrac { u^{2n} e^{-u} \rd u  } {\paren { 1 + e^{-u} }^2 }\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_0^{\infty} \dfrac { u^{2n} e^{u} \rd u  } {\paren { 1 + e^{u} }^2 } + \int_0^{\infty} \dfrac { u^{2n} e^{-u} \rd u  } {\paren { 1 + e^{-u} }^2 }\)





Rewriting the first integral














\(\ds \)

\(=\)







\(\ds \int_0^{\infty} \dfrac { u^{2n} e^{u} \rd u  } {\paren { 1 + e^{u} }^2 } \paren {\dfrac{e^{-2u} }{e^{-2u} } } + \int_0^{\infty} \dfrac { u^{2n} e^{-u} \rd u  } {\paren { 1 + e^{-u} }^2 }\)





Multiplying numerator and denominator by $e^{-2u}$














\(\ds \)

\(=\)







\(\ds 2\int_0^{\infty} \dfrac { u^{2n} e^{-u} \rd u  } {\paren { 1 + e^{-u} }^2 }\)










From Sum of Infinite Geometric Sequence, we have:

$\ds \sum_{k \mathop = 0}^\infty \paren {-1}^k \paren {e^{-u} }^k = \dfrac 1 {1 + e^{-u} }$
Taking the derivative of both sides, we have:














\(\ds \sum_{k \mathop = 0}^\infty \paren {-k} \paren {-1}^k e^{-ku} \rd u\)

\(=\)







\(\ds \dfrac { e^{-u} \rd u} {\paren {1 + e^{-u} }^2}\)




















\(\ds \sum_{k \mathop = 1}^\infty k \paren {-1}^{k + 1} e^{-ku} \rd u\)

\(=\)







\(\ds \dfrac {  e^{-u} \rd u} {\paren {1 + e^{-u} }^2}\)





simplifying




Therefore:














\(\ds \int_0^1 \map {\ln^{2n} } {\dfrac {1 - x} x} \rd x\)

\(=\)







\(\ds 2\int_0^{\infty} u^{2n} \paren { \sum_{k \mathop = 1}^\infty k \paren {-1}^{k + 1} e^{-ku} \rd u}\)




















\(\ds \)

\(=\)







\(\ds 2\sum_{k \mathop = 1}^\infty k \paren {-1}^{k + 1} \int_0^{\infty} u^{2n} e^{-ku} \rd u\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds 2\sum_{k \mathop = 1}^\infty k \paren {-1}^{k + 1} \bigintlimits {\frac {e^{-k u} } {-k} \paren {u^{2n} - \dfrac {2n u^{2n - 1} } {\paren {-k} } + \dfrac {2n \paren {2n - 1} u^{2n - 2} } { \paren {-k}^2 } - \dfrac {2n \paren {2n - 1} \paren {2n - 2} u^{2n - 3} } { \paren {-k}^3 } + \cdots + \dfrac {\paren {-1}^{2n} \paren {2n}!} { \paren {-k}^{2n} } } } 0 \infty\)





Primitive of Power of x by Exponential of a x














\(\ds \)

\(=\)







\(\ds 2\sum_{k \mathop = 1}^\infty k \paren {-1}^{k + 1} \paren{0 + \frac 1 k \paren{0 - 0 + 0 - 0 + \cdots + \dfrac {\paren {-1}^{2n} \paren {2n}!} { \paren {-k}^{2n} } } }\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {2n}! \sum_{k \mathop = 1}^\infty {-1}^{k + 1} \paren{\dfrac 1 { k^{2n} } }\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {2n}! \paren {\paren {-1}^{n + 1} \dfrac {B_{2 n} \paren {2^{2 n - 1} - 1} \pi^{2 n} } {\paren {2 n}!} }\)





Sum of Reciprocals of Even Powers of Integers Alternating in Sign














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} B_{2 n} \paren {2^{2 n} - 2} \pi^{2 n}\)










$\blacksquare$





