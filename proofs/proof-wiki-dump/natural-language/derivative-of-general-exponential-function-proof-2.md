# 

Source: https://proofwiki.org/wiki/Derivative_of_General_Exponential_Function/Proof_2

Theorem
Let $a \in \R_{>0}$.
Let $a^x$ be $a$ to the power of $x$.

Then:

$\map {\dfrac \d {\d x} } {a^x} = a^x \ln a$


Proof













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





