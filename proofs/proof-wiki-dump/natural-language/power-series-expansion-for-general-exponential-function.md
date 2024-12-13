# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_General_Exponential_Function

Theorem
Let $a \in \R_{> 0}$ be a (strictly) positive real number.
Then:

Then:










\(\ds \forall x \in \R: \, \)



\(\ds a^x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {x \ln a}^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + x \ln a + \frac {\paren {x \ln a}^2} {2!} + \frac {\paren {x \ln a}^3} {3!} + \cdots\)











Proof
By definition of a power to a real number:

$a^x = \map \exp {x \ln a}$
As $x \ln a$ is itself a real number, we can use Power Series Expansion for Exponential Function:










\(\ds \forall x \in \R: \, \)



\(\ds \exp x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + x + \frac {x^2} {2!} + \frac {x^3} {3!} + \cdots\)









substituting $x \ln a$ for $x$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Series for Exponential and Logarithmic Functions: $20.16$




