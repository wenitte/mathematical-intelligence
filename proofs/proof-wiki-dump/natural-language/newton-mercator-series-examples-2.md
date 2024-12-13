# 

Source: https://proofwiki.org/wiki/Newton-Mercator_Series/Examples/2

Theorem
The Newton-Mercator Series for $x = 1$ converges to the natural logarithm of $2$:














\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^\paren {n - 1} } n\)

\(=\)







\(\ds 1 - \frac 1 2 + \frac 1 3 - \frac 1 4 + \dotsb\)




















\(\ds \)

\(=\)







\(\ds \ln 2\)









This real number is known as Mercator's constant.


Proof
From the definition of the Newton-Mercator Series:














\(\ds \map \ln {1 + x}\)

\(=\)







\(\ds x - \dfrac {x^2} 2 + \dfrac {x^3} 3 - \dfrac {x^4} 4 + \cdots\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n x^n\)









This is valid for $-1 < x \le 1$.
Setting $x = 1$:














\(\ds \map \ln {1 + 1}\)

\(=\)







\(\ds 1 - \dfrac {1^2} 2 + \dfrac {1^3} 3 - \dfrac {1^4} 4 + \cdots\)














\(\ds \leadsto \ \ \)





\(\ds \ln 2\)

\(=\)







\(\ds 1 - \dfrac 1 2 + \dfrac 1 3 - \dfrac 1 4 + \dfrac 1 5 - \cdots\)









The fact that it does indeed converge is shown in Alternating Harmonic Series is Conditionally Convergent.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Series involving Reciprocals of Powers of Positive Integers: $19.14$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $0 \cdotp 693 \, 147 \, 180 \, 559 \, 945 \, 309 \, 417 \, 232 \, 121 \, 458 \, 176 \, 568 \, 075 \, 500 \, 134 \, 360 \ldots$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.3.2$: Power series
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 69314 \, 71805 \, 59945 \, 30941 \, 72321 \, 21458 \, 17656 \, 80755 \, 00134 \, 360 \ldots$




