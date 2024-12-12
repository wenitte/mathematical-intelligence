# 

Source: https://proofwiki.org/wiki/Derivative_of_General_Exponential_Function



Theorem
Let $a \in \R_{>0}$.
Let $a^x$ be $a$ to the power of $x$.

Then:

$\map {\dfrac \d {\d x} } {a^x} = a^x \ln a$


Proof 1













\(\ds \map {\frac \d {\d x} } {a^x}\)

\(=\)







\(\ds \map {\frac \d {\d x} } {e^{x \ln a} }\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \ln a e^{x \ln a}\)





Derivative of $e^{a x}$














\(\ds \)

\(=\)







\(\ds a^x \ln a\)









$\blacksquare$


Proof 2













\(\ds \lim_{h \mathop \to 0} \frac {a^{x + h} - a^x} h\)

\(=\)







\(\ds a^x \lim_{h \mathop \to 0} \frac {a^h - 1} h\)





Product of Powers














\(\ds \)

\(=\)







\(\ds a^x \lim_{h \mathop \to 0} \frac {\map \exp {h \ln a} - 1} h\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds a^x \lim_{h \mathop \to 0} \paren {\frac {\map \exp {h \ln a} - 1} {h \ln a} } \paren {\frac {h \ln a} h}\)




















\(\ds \)

\(=\)







\(\ds a^x \lim_{h \mathop \to 0} \paren {\frac {h \ln a} h}\)





Derivative of Exponential at Zero














\(\ds \)

\(=\)







\(\ds a^x \ln a\)









$\blacksquare$


Proof 3
Let $y = a^x$.
Then:














\(\ds \ln y\)

\(=\)







\(\ds x \ln a\)





Logarithm of Power








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 y \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \ln a\)





Derivative of Identity Function: Corollary








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 {a^x} \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \ln a\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds a^x \ln a\)









$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $1$: Derivatives
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $6$: Derivatives
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $7$: Derivatives




