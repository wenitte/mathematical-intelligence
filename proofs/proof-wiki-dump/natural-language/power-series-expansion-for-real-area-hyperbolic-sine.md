# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Area_Hyperbolic_Sine



Theorem
The (real) area hyperbolic sine function has a Taylor series expansion:














\(\ds \arsinh x\)

\(=\)







\(\ds \begin {cases}
\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1} & : \size x < 1 \\ 
\ds \ln 2 x + \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} x^{2 n} } } & : x \ge 1 \\ 
\ds -\ln \paren {-2 x} - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} x^{2 n} } } & : x \le -1 \\ 
\end {cases}\)





















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \begin {cases}
x - \dfrac {x^3} {2 \times 3} + \dfrac {1 \times 3 x^5} {2 \times 4 \times 5} - \dfrac {1 \times 3 \times 5 x^7} {2 \times 4 \times 6 \times 7} + \cdots & : \size x < 1 \\ 
\ln 2 x + \dfrac 1 {2 \times 2 x^2} - \dfrac {1 \times 3} {2 \times 4 \times 4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 x^6} + \cdots & : x \ge 1 \\ 
-\ln \paren {-2 x} - \paren {\dfrac 1 {2 \times 2 x^2} - \dfrac {1 \times 3} {2 \times 4 \times 4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 x^6} + \cdots} & : x \le -1 \\ 
\end {cases}\)












Proof
Lemma 1













\(\ds \dfrac 1 {\sqrt {x^2 + 1} }\)

\(=\)







\(\ds 1 - \frac 1 2 x^2 + \frac {1 \times 3} {2 \times 4} x^4 - \frac {1 \times 3 \times 5} {2 \times 4 \times 6} x^6 + \cdots\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} x^{2 n}\)









for $x \in \R: -1 < x < 1$.
$\Box$

From Power Series is Termwise Integrable within Radius of Convergence, $(1)$ can be integrated term by term:














\(\ds \int_0^x \frac 1 {\sqrt {t^2 + 1} } \rd t\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \int_0^x \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} t^{2 n} \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \arsinh x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1}\)





Derivative of Inverse Hyperbolic Sine



$\Box$

We will now prove that the series converges for $-1 < x < 1$.
By Stirling's Formula:














\(\ds \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1}\)

\(\sim\)







\(\ds \frac {\paren {-1}^n \paren {2 n}^{2 n} e^{-2 n} \sqrt {4 \pi n} } {2^{2 n} n^{2 n} e^{-2 n} 2 \pi n} \frac {x^{2 n + 1} } {2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n}  {\sqrt {\pi n} } \frac {x^{2 n + 1} } {2 n + 1}\)










Then:














\(\ds \size {\frac 1 {\sqrt {\pi n} } \frac {x^{2 n + 1} } {2 n + 1} }\)

\(<\)







\(\ds \size {\frac {x^{2 n + 1} } {n^{3/2} } }\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 {n^{3/2} }\)










Hence by Convergence of P-Series:

$\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^{3/2} }$
is convergent.

So by the Comparison Test, the Taylor series is convergent for $-1 \le x \le 1$.
$\Box$

Another lemma:

Lemma $2$
$\map \ln {1 + \sqrt {1 + x^2} } = \ln 2 + \dfrac 1 2 \cdot \dfrac {x^2} 2 - \dfrac {1 \times 3} {2 \times 4} \cdot \dfrac {x^4} 4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \cdot \dfrac {x^6} 6 - \cdots$
This holds for $x \in \R: \size x < 1$.
$\Box$

Let $x \ge 1$.
Let $z = \dfrac 1 x$.
Then we have:

$0 < \dfrac 1 z \le 1$
Now we consider:














\(\ds \map \arsinh {\dfrac 1 z} + \map \ln {2 z}\)

\(=\)







\(\ds \map \ln {2 z} + \map \ln {\dfrac 1 z + \sqrt {\dfrac 1 {z^2} + 1} }\)





Definition of Real Area Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \map \ln {2 z \paren {\dfrac 1 z + \dfrac {\sqrt {z^2 + 1} } z} }\)





Sum of Logarithms and simplification














\(\ds \)

\(=\)







\(\ds \map \ln {2 \paren {1 + \sqrt {z^2 + 1} } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \ln 2 + \map \ln {1 + \sqrt {z^2 + 1} }\)





Sum of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \map \arsinh {\dfrac 1 z}\)

\(=\)







\(\ds -\map \ln {2 z} + \ln 2 + \map \ln {1 + \sqrt {z^2 + 1} }\)





rearranging














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 {2 z} } + \ln 2 + \map \ln {1 + \sqrt {z^2 + 1} }\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 z} + \map \ln {1 + \sqrt {z^2 + 1} }\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 z} + \ln 2 + \dfrac 1 2 \cdot \dfrac {z^2} 2 - \dfrac {1 \times 3} {2 \times 4} \cdot \dfrac {z^4} 4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \cdot \dfrac {z^6} 6 - \cdots\)





Lemma $2$














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 2 z} + \dfrac 1 2 \cdot \dfrac {z^2} 2 - \dfrac {1 \times 3} {2 \times 4} \cdot \dfrac {z^4} 4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \cdot \dfrac {z^6} 6 - \cdots\)





Sum of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \arsinh x\)

\(=\)







\(\ds \map \ln {2 x} + \dfrac 1 {2 \times 2 x^2} - \dfrac {1 \times 3} {2 \times 4 \times 4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 x^6} - \cdots\)





substituting $x \gets \dfrac 1 z$




Now let $x \le -1$.
We have that Inverse Hyperbolic Sine is Odd Function.
That is:

$\arsinh x = -\map \arsinh {-x}$
Thus for $x \le -1$:














\(\ds \arsinh x\)

\(=\)







\(\ds -\map \arsinh {-x}\)




















\(\ds \)

\(=\)







\(\ds -\map \ln {-2 x} - \paren {\dfrac 1 {2 \times 2 \paren {-x}^2} - \dfrac {1 \times 3} {2 \times 4 \times 4 \paren {-x}^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 \paren {-x}^6} - \cdots}\)




















\(\ds \)

\(=\)







\(\ds -\map \ln {-2 x} - \paren {\dfrac 1 {2 \times 2 x^2} - \dfrac {1 \times 3} {2 \times 4 \times 4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 x^6} - \cdots}\)









Hence the result.
$\blacksquare$


Also presented as
This can also be presented as:














\(\ds \arsinh x\)

\(=\)







\(\ds \begin {cases}
\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2} \frac {x^{2 n + 1} } {2 n + 1} & : \size x < 1 \\ 
\ds \pm \paren {\ln \size {2 x} + \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {-1}^n \paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} x^{2 n} } } } & : \size x \ge 1  
\end {cases}\)





















\(\ds \)

\(\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds \begin {cases}
x - \dfrac 1 2 \dfrac {x^3} 3 + \dfrac {1 \times 3} {2 \times 4} \dfrac {x^5} 5 - \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \dfrac {x^7} 7 + \cdots & : \size x < 1 \\ 
\pm \paren {\ln 2 x + \dfrac 1 {2 \times 2 x^2} - \dfrac {1 \times 3} {2 \times 4 \times 4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 x^6} + \cdots} & : \size x \ge 1 
\end {cases}\)










where $\pm$ is $+$ for $x \ge 1$ and $-$ for $x \le -1$.


Also see
Power Series Expansion for Real Area Hyperbolic Cosine
Power Series Expansion for Real Area Hyperbolic Tangent
Power Series Expansion for Real Area Hyperbolic Cotangent
Power Series Expansion for Real Area Hyperbolic Secant
Power Series Expansion for Real Area Hyperbolic Cosecant


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Hyperbolic Functions: $20.39$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
Ma Joad (https://math.stackexchange.com/users/516814/ma-joad), Power Series Expansion for Real Inverse Hyperbolic Sine, URL (version: 2023-02-26): https://math.stackexchange.com/q/4647185
for a citation that looks like:





