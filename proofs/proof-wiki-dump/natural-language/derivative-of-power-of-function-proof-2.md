# 

Source: https://proofwiki.org/wiki/Derivative_of_Power_of_Function/Proof_2

Theorem
Let $\map u x$ be a differentiable real function of $x$.
Let $n$ be a real number such that $n \ne -1$.
Then:

$\map {\dfrac \d {\d x} } {\map u x^n} = n \map u x^{n - 1} \map {\dfrac \d {\d x} } {\map u x}$


Proof













\(\ds \map {\dfrac \d {\d x} } {\map u x^n}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\paren {\map u {x + h} }^n - \paren {\map u x}^n} h\)




















\(\ds \)

\(=\)







\(\ds \paren {\map u x}^n \lim_{h \mathop \to 0} \frac {\paren {\frac {\map u {x + h} } {\map u x} }^n - 1} h\)





Power of Product














\(\ds \)

\(=\)







\(\ds \paren {\map u x}^n \lim_{h \mathop \to 0} \frac {\exp \paren {n \ln \frac {\map u {x + h} } {\map u x} } - 1} h\)





Definition of Power to Real Number














\(\ds \)

\(=\)







\(\ds \paren {\map u x}^n \lim_{h \mathop \to 0} \paren {\frac {\map \exp {n \ln \frac {\map u {x + h} } {\map u x} } - 1} {n \ln \frac {\map u {x + h} } {\map u x} } } \paren {\frac {n \ln \frac {\map u {x + h} } {\map u x} } h}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map u x}^n \lim_{h \mathop \to 0} \frac {n \ln \frac {\map u {x + h} } {\map u x} } h\)





Derivative of Exponential at Zero














\(\ds \)

\(=\)







\(\ds n \paren {\map u x}^n \lim_{h \mathop \to 0} \frac {\ln \frac {\map u {x + h} } {\map u x} } h\)




















\(\ds \)

\(=\)







\(\ds n \paren {\map u x}^n \lim_{h \mathop \to 0} \frac {\map \ln {1 + \frac {\map u {x + h} - \map u x} {\map u x} } } h\)




















\(\ds \)

\(=\)







\(\ds n \paren {\map u x}^n \lim_{h \mathop \to 0} \paren {\frac {\map \ln {1 + \frac {\map u {x + h} - \map u x} {\map u x} } } {\frac {\map u {x + h} - \map u x} {\map u x} } } \paren {\frac {\frac {\map u {x + h} - \map u x} {\map u x} } h }\)




















\(\ds \)

\(=\)







\(\ds n \paren {\map u x}^n \lim_{h \mathop \to 0} \frac {\paren {\frac {\map u {x + h} - \map u x} {\map u x} } } h\)





Derivative of Logarithm at One














\(\ds \)

\(=\)







\(\ds n \paren {\map u x}^n \lim_{h \mathop \to 0} \frac 1 {\map u x} \frac {\map u {x + h} - \map u x} h\)




















\(\ds \)

\(=\)







\(\ds n \paren {\map u x}^{n - 1} \lim_{h \mathop \to 0} \frac {\map u {x + h} - \map u x} h\)





Product of Powers














\(\ds \)

\(=\)







\(\ds n \paren {\map u x}^{n - 1} \map {\dfrac \d {\d x} } {\map u x}\)









$\blacksquare$





