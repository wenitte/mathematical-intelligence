# 

Source: https://proofwiki.org/wiki/Arcsine_Logarithmic_Formulation

Theorem
For any real number $x: -1 \le x \le 1$:

$\arcsin x = \dfrac 1 i \map \ln {i x + \sqrt {1 - x^2} }$
where $\arcsin x$ is the arcsine and $i^2 = -1$.


Proof
Assume $y \in \R$ where $-\dfrac \pi 2 \le y \le \dfrac \pi 2$.














\(\ds y\)

\(=\)







\(\ds \arcsin x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds \sin y\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac 1 {2 i} \paren {e^{i y} - e^{-i y} }\)





Euler's Sine Identity








\(\ds \leadstoandfrom \ \ \)





\(\ds 2 i x\)

\(=\)







\(\ds e^{i y} - e^{-i y}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 2 i x e^{i y}\)

\(=\)







\(\ds e^{2 i y} - 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds e^{2 i y} -2 i x e^{i y}\)

\(=\)







\(\ds 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds e^{2 i y} - 2 i x e^{i y} - x^2\)

\(=\)







\(\ds 1 - x^2\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {e^{i y} - i x}^2\)

\(=\)







\(\ds 1 - x^2\)














\(\ds \leadstoandfrom \ \ \)





\(\ds e^{i y} - i x\)

\(=\)







\(\ds \sqrt {1 - x^2}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds i y\)

\(=\)







\(\ds \map \ln {i x + \sqrt {1 - x^2} }\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac 1 i \map \ln {i x + \sqrt {1 - x^2} }\)









$\blacksquare$


Also see
Arccosine Logarithmic Formulation
Arctangent Logarithmic Formulation
Arccotangent Logarithmic Formulation
Arcsecant Logarithmic Formulation
Arccosecant Logarithmic Formulation




