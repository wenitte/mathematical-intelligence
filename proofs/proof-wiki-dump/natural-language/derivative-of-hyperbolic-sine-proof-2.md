# 

Source: https://proofwiki.org/wiki/Derivative_of_Hyperbolic_Sine/Proof_2

Theorem
$\map {\dfrac \d {\d x} } {\sinh x} = \cosh x$


Proof













\(\ds \map {\frac \d {\d x} } {\sinh x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \sinh {x + h} - \sinh x} h\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {2 \map \cosh {\frac {x + h + x} 2} \map \sinh {\frac {x + h - x} 2} } h\)





Hyperbolic Sine minus Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {2 \map \cosh {x + \frac h 2} \map \sinh {\frac h 2} } h\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \cosh {x + \frac h 2} \map \sinh {\frac h 2} } {\frac h 2}\)




















\(\ds \)

\(=\)







\(\ds \lim_{2 d \mathop \to 0} \frac {\map \cosh {x + d} \map \sinh d} d\)





where $d = \dfrac h 2$














\(\ds \)

\(=\)







\(\ds \lim_{d \mathop \to 0} \frac {\map \cosh {x + d} \map \sinh d} d\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac {\map \sinh d} d\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac {e^d - e^{-d} } {2 d}\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac {e^{2 d} - 1 } {2 d e^d}\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac 1 {e^d} \frac {e^{2 d} - 1} {2 d}\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac 1 {e^d} \lim_{d \mathop \to 0} \frac {e^{2 d} - 1} {2 d}\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac 1 {e^d} \lim_{2 d \mathop \to 0} \frac {e^{2 d} - 1} {2 d}\)




















\(\ds \)

\(=\)







\(\ds \cosh x \lim_{d \mathop \to 0} \frac 1 {e^d}\)





Derivative of Exponential at Zero














\(\ds \)

\(=\)







\(\ds \cosh x\)









$\blacksquare$





