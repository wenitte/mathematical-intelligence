# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Area_Hyperbolic_Cosecant

Theorem
The (real) area hyperbolic cosecant function has a Taylor series expansion:














\(\ds \arcsch x\)

\(=\)







\(\ds \begin {cases}
\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac 1 {\paren {2 n + 1} x^{2 n + 1} } & : \size x \ge 1 \\ 
\ds \ln \dfrac 2 x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n} } {2 n} } & : 0 < x \le 1 \\ 
\ds -\ln \paren {-\dfrac 2 x} + \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n} } {2 n} } & : -1 \le x < 0 \\ 
\end {cases}\)





















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \begin {cases}
\dfrac 1 x - \dfrac 1 2 \dfrac 1 {3 x^3} + \dfrac {1 \times 3} {2 \times 4} \dfrac 1 {5 x^5} - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac 1 {7 x^7} + \cdots & : \size x \ge 1 \\ 
\ln \dfrac 2 x - \paren {\dfrac 1 2 \dfrac {x^2} 2 + \dfrac {1 \times 3} {2 \times 4} \dfrac {x^4} 4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac {x^6} 6 + \cdots} & : 0 < x \le 1 \\ 
-\map \ln {-\dfrac 2 x} + \paren {\dfrac 1 2 \dfrac {x^2} 2 + \dfrac {1 \times 3} {2 \times 4} \dfrac {x^4} 4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac {x^6} 6 + \cdots} & : -1 \le x < 0 \\ 
\end {cases}\)












Proof
From Power Series Expansion for Real Area Hyperbolic Sine:














\(\ds \arsinh x\)

\(=\)







\(\ds \begin {cases}
\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1} & : \size x \le 1 \\ 
\ds \ln 2 x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} x^{2 n} } } & : x \ge 1 \\ 
\ds -\ln \paren {-2 x} + \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} x^{2 n} } } & : x \le -1 \\ 
\end {cases}\)





















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \begin {cases}
x - \dfrac 1 2 \dfrac {x^3} 3 + \dfrac {1 \times 3} {2 \times 4} \dfrac {x^5} 5 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac {x^7} 7 + \cdots & : \size x \le 1 \\ 
\ln 2 x - \paren {\dfrac 1 2 \dfrac 1 {2 x^2} + \dfrac {1 \times 3} {2 \times 4} \dfrac 1 {4 x^4} - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac 1 {6 x^6} + \cdots} & : x \ge 1 \\ 
-\ln \paren {-2 x} + \paren {\dfrac 1 2 \dfrac 1 {2 x^2} + \dfrac {1 \times 3} {2 \times 4} \dfrac 1 {4 x^4} - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac 1 {6 x^6} + \cdots} & : x \le -1 \\ 
\end {cases}\)











From Real Area Hyperbolic Sine of Reciprocal equals Real Area Hyperbolic Cosecant:

$\map \arsinh {\dfrac 1 x} = \arcsch x$

So:














\(\ds \arcsch x\)

\(=\)







\(\ds \begin {cases}
\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac 1 {\paren {2 n + 1} x^{2 n + 1} } & : \size x \ge 1 \\ 
\ds \ln \dfrac 2 x - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n} } {2 n} } & : 0 < x \le 1 \\ 
\ds -\ln \paren {-\dfrac 2 x} + \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n} } {2 n} } & : -1 \le x < 0 \\ 
\end {cases}\)





















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \begin {cases}
\dfrac 1 x - \dfrac 1 2 \dfrac 1 {3 x^3} + \dfrac {1 \times 3} {2 \times 4} \dfrac 1 {5 x^5} - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac 1 {7 x^7} + \cdots & : \size x \ge 1 \\ 
\ln \dfrac 2 x - \paren {\dfrac 1 2 \dfrac {x^2} 2 + \dfrac {1 \times 3} {2 \times 4} \dfrac {x^4} 4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac {x^6} 6 + \cdots} & : 0 < x \le 1 \\ 
-\map \ln {-\dfrac 2 x} + \paren {\dfrac 1 2 \dfrac {x^2} 2 + \dfrac {1 \times 3} {2 \times 4} \dfrac {x^4} 4 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac {x^6} 6 + \cdots} & : -1 \le x < 0 \\ 
\end {cases}\)










Hence the result.
$\blacksquare$


Also see
Power Series Expansion for Real Area Hyperbolic Sine
Power Series Expansion for Real Area Hyperbolic Cosine
Power Series Expansion for Real Area Hyperbolic Tangent
Power Series Expansion for Real Area Hyperbolic Cotangent
Power Series Expansion for Real Area Hyperbolic Secant




