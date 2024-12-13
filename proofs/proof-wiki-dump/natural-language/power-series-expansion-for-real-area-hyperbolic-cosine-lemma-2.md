# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Real_Area_Hyperbolic_Cosine/Lemma_2

Lemma for Power Series Expansion for Real Area Hyperbolic Cosine
$\map \ln {1 + \sqrt {1 - x^2} } = \ln 2 - \paren {\dfrac 1 2 \cdot \dfrac {x^2} 2 + \dfrac {1 \times 3} {2 \times 4} \cdot \dfrac {x^4} 4 + \dfrac {1 \times 3 \times 5} {2 \times 4 \times 6} \cdot \dfrac {x^6} 6 + \cdots}$
This holds for $x \in \R: \size x < 1$.


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















\(\ds \map {\dfrac \d {\d x} } {\map \ln {1 + \sqrt {1 - x^2} } }\)

\(=\)







\(\ds \dfrac 1 {1 + \sqrt {1 - x^2} } \cdot \dfrac 1 {2 \sqrt {1 - x^2} } \cdot \paren {-2 x}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-x} {1 - x^2 + \sqrt {1 - x^2} }\)





simplifying and multiplying out














\(\ds \)

\(=\)







\(\ds \dfrac {-x \paren {1 - x^2 - \sqrt {1 - x^2} } } {\paren {1 - x^2 + \sqrt {1 - x^2} } \paren {1 - x^2 - \sqrt {1 - x^2} } }\)





multiplying top and bottom by $1 - x^2 - \sqrt {1 - x^2}$














\(\ds \)

\(=\)







\(\ds \dfrac {x \paren {1 - x^2 - \sqrt {1 - x^2} } } {\paren {1 - x^2}^2 - \paren {1 - x^2} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \dfrac {x \paren {1 - x^2 - \sqrt {1 - x^2} } } {\paren {1 - x^2} \paren {1 - x^2 - 1} }\)





factoring $1 - x^2$ in denominator














\(\ds \)

\(=\)







\(\ds \dfrac {x \paren {1 - x^2} - x \sqrt {1 - x^2} } {x^2 \paren {1 - x^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {1 - \dfrac 1 {\sqrt {1 - x^2} } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 x \paren {1 - \paren {1 + \frac 1 2 x^2 + \frac {1 \times 3} {2 \times 4} x^4 + \frac {1 \times 3 \times 5} {2 \times 4 \times 6} x^6 + \cdots} }\)





Lemma $1$: for $0 < \size x < 1$














\(\ds \)

\(=\)







\(\ds -\paren {\frac 1 2 x + \frac {1 \times 3} {2 \times 4} x^3 + \frac {1 \times 3 \times 5} {2 \times 4 \times 6} x^5 + \cdots}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \map \ln {1 + \sqrt {1 - x^2} }\)

\(=\)







\(\ds C - \paren {\frac 1 2 \cdot \dfrac {x^2} 2 + \frac {1 \times 3} {2 \times 4} \cdot \dfrac {x^4} 4 + \frac {1 \times 3 \times 5} {2 \times 4 \times 6} \cdot \dfrac {x^6} 6 + \cdots}\)





Integrating with respect to $x$: Power Series is Termwise Integrable within Radius of Convergence



It remains to determine the value of the arbitrary constant $C$.
Let $x \to 0$.
Then we have:














\(\ds \lim_{x \mathop \to 0} \map \ln {1 + \sqrt {1 - x^2} }\)

\(=\)







\(\ds \map {\lim_{x \mathop \to 0} } {C - \paren {\frac 1 2 \cdot \dfrac {x^2} 2 + \frac {1 \times 3} {2 \times 4} \cdot \dfrac {x^4} 4 + \frac {1 \times 3 \times 5} {2 \times 4 \times 6} \cdot \dfrac {x^6} 6 + \cdots} }\)














\(\ds \leadsto \ \ \)





\(\ds \ln 2\)

\(=\)







\(\ds C\)









$\blacksquare$





