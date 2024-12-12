# 

Source: https://proofwiki.org/wiki/Derivative_of_Power_of_Function



Theorem
Let $\map u x$ be a differentiable real function of $x$.
Let $n$ be a real number such that $n \ne -1$.
Then:

$\map {\dfrac \d {\d x} } {\map u x^n} = n \map u x^{n - 1} \map {\dfrac \d {\d x} } {\map u x}$


Proof 1













\(\ds \map {\frac \d {\d x} } {\map u x^n}\)

\(=\)







\(\ds \map {\frac \d {\d u} } {\map u x^n} \map {\frac \d {\d x} } {\map u x}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds n \map u x^{n - 1} \map {\frac {\d u} {\d x} } {\map u x}\)





Derivative of Hyperbolic Sine



$\blacksquare$


Proof 2













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


Also presented as
This can be (and usually is) presented more simply as:

$\map {\dfrac \d {\d x} } {u^n} = n u^{n - 1} \dfrac {\d u} {\d x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 13$: General Rules of Differentiation: $13.10$
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $4$. Derivatives: Derivatives of Special Functions: $2$




