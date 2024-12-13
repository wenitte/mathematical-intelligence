# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Area_Hyperbolic_Cosine



Theorem
The (real) area hyperbolic cosine function has a Taylor series expansion:














\(\ds \arcosh x\)

\(=\)







\(\ds \map \ln {2 x} - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} x^{2 n} } }\)




















\(\ds \)

\(=\)







\(\ds \map \ln {2 x} - \paren {\dfrac 1 {2 \times 2 x^2} + \dfrac {1 \times 3} {2 \times 4 \times 4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 x^6} + \cdots}\)









for $x \ge 1$.


Proof
Lemma 1













\(\ds \dfrac 1 {\sqrt {1 - x^2} }\)

\(=\)







\(\ds 1 + \frac 1 2 x^2 + \frac {1 \times 3} {2 \times 4} x^4 + \frac {1 \times 3 \times 5} {2 \times 4 \times 6} x^6 + \cdots\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2} x^{2 n}\)









for $x \in \R: -1 < x < 1$.
$\Box$

We have that the (real) area hyperbolic cosine is defined for $x \ge 1$.
Let $z = \dfrac 1 x$.
Then we have:

$0 < \dfrac 1 z \le 1$
Now we consider:














\(\ds \map \arcosh {\dfrac 1 z} + \map \ln {2 z}\)

\(=\)







\(\ds \map \ln {2 z} + \map \ln {\dfrac 1 z + \sqrt {\dfrac 1 {z^2} - 1} }\)





Definition of Real Area Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \map \ln {2 z \paren {\dfrac 1 z + \dfrac {\sqrt {1 - z^2} } z} }\)





Sum of Logarithms and simplification














\(\ds \)

\(=\)







\(\ds \map \ln {2 \paren {1 + \sqrt {1 - z^2} } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \ln 2 + \map \ln {1 + \sqrt {1 - z^2} }\)





Sum of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \map \arcosh {\dfrac 1 z}\)

\(=\)







\(\ds -\map \ln {2 z} + \ln 2 + \map \ln {1 + \sqrt {1 - z^2} }\)





rearranging














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 {2 z} } + \ln 2 + \map \ln {1 + \sqrt {1 - z^2} }\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 z} + \map \ln {1 + \sqrt {1 - z^2} }\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 z} + \ln 2 - \paren {\dfrac 1 2 \cdot \dfrac {z^2} 2 + \dfrac {1 \times 3} {2 \times 4} \cdot \dfrac {z^4} 4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \cdot \dfrac {z^6} 6 + \cdots}\)





Lemma $2$














\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 2 z} - \paren {\dfrac 1 2 \cdot \dfrac {z^2} 2 + \dfrac {1 \times 3} {2 \times 4} \cdot \dfrac {z^4} 4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \cdot \dfrac {z^6} 6 + \cdots}\)





Sum of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \arcosh x\)

\(=\)







\(\ds \map \ln {2 x} - \paren {\dfrac 1 {2 \times 2 x^2} + \dfrac {1 \times 3} {2 \times 4 \times 4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 x^6} + \cdots}\)





substituting $x \gets \dfrac 1 z$



$\blacksquare$


Also presented as
Some sources present this result in the form:














\(\ds \cosh^{-1} x\)

\(=\)







\(\ds \map \pm {\map \ln {2 x} - \paren {\sum_{n \mathop = 1}^\infty \frac {\paren {2 n}!} {2^{2 n} \paren {n!}^2 \paren {2 n} x^{2 n} } } }\)

\(\ds \begin {cases} \text {$+$ if $x \ge 1$} \\ \text {$-$ if $x \le -1$} \end {cases}\)


















\(\ds \)

\(=\)







\(\ds \map \pm {\map \ln {2 x} - \paren {\dfrac 1 {2 \times 2 x^2} + \dfrac {1 \times 3} {2 \times 4 \times 4 x^4} + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6 \times 6 x^6} + \cdots} }\)

\(\ds \begin {cases} \text {$+$ if $x \ge 1$} \\ \text {$-$ if $x \le -1$} \end {cases}\)







This takes into account the interpretation that $\cosh^{-1} x$ is a multifunction arising from the fact that $\cosh x = \map \cosh {-1}$ for $\size x \ge 1$.


Also see
Power Series Expansion for Real Area Hyperbolic Sine
Power Series Expansion for Real Area Hyperbolic Tangent
Power Series Expansion for Real Area Hyperbolic Cotangent
Power Series Expansion for Real Area Hyperbolic Secant
Power Series Expansion for Real Area Hyperbolic Cosecant


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Hyperbolic Functions: $20.40$
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions




