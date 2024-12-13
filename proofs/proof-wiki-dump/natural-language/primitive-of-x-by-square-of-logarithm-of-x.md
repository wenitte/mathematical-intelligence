# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Square_of_Logarithm_of_x

Theorem
$\ds \int x \ln^2 x \rd x = \dfrac {x^2 \ln^2 x} 2 - \dfrac {x^2 \ln x} 2 + \dfrac {x^2} 4 + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds x \cdot \dfrac \d {\d x} \ln x + \ln x \dfrac \d {\d x} x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds x \cdot \frac 1 x + \ln x \cdot 1\)





Derivative of Natural Logarithm, Derivative of Identity Function














\(\ds \)

\(=\)







\(\ds 1 + \ln x\)





simplifying




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x \ln x - x\)





Primitive of $\ln x$




Then:














\(\ds \int x \ln^2 x \rd x\)

\(=\)







\(\ds \int \paren {x \ln x} \paren {\ln x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {x \ln x} \paren {x \ln x - x} - \int \paren {x \ln x - x} \paren {1 + \ln x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x^2 \ln^2 x - x^2 \ln x - \int x \ln x \rd x + \int x \rd x - \int x \ln^2 x \rd x + \int x \ln x \rd x + C\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds 2 \int x \ln^2 x \rd x\)

\(=\)







\(\ds x^2 \ln^2 x - x^2 \ln x  + \int x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x^2 \ln^2 x - x^2 \ln x + \dfrac {x^2} 2 + C\)





Primitive of $x$








\(\ds \leadsto \ \ \)





\(\ds \int x \ln^2 x \rd x\)

\(=\)







\(\ds \dfrac {x^2 \ln^2 x} 2 - \dfrac {x^2 \ln x} 2 + \dfrac {x^2} 4 + C\)





simplifying



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $25$.




