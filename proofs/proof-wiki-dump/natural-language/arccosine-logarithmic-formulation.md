# 

Source: https://proofwiki.org/wiki/Arccosine_Logarithmic_Formulation

Theorem
For any real number $x: -1 \le x \le 1$:

$\arccos x = \dfrac 1 i \map \ln {x + \sqrt {x^2 - 1} }$
where $\arccos x$ is the arccosine and $i^2 = -1$.


Proof
Assume $y \in \R$ such that $0 \le y \le \pi$.














\(\ds y\)

\(=\)







\(\ds \arccos x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds \cos y\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac 1 2 \paren {e^{-i y} + e^{i y} }\)





Euler's Cosine Identity








\(\ds \leadstoandfrom \ \ \)





\(\ds 2 x\)

\(=\)







\(\ds e^{-i y} + e^{i y}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 2 x e^{i y}\)

\(=\)







\(\ds 1 + e^{2 i y}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds e^{2 i y} - 2 x e^{i y}\)

\(=\)







\(\ds -1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds e^{2 i y} - 2 x e^{i y} + x^2\)

\(=\)







\(\ds x^2 - 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {e^{i y} - x}^2\)

\(=\)







\(\ds x^2 - 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds e^{i y} - x\)

\(=\)







\(\ds \sqrt {x^2 - 1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds i y\)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 - 1} }\)














\(\ds \leadstoandfrom \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac 1 i \map \ln {x + \sqrt {x^2 - 1} }\)









$\blacksquare$


Also see
Arcsine Logarithmic Formulation
Arctangent Logarithmic Formulation
Arccotangent Logarithmic Formulation
Arcsecant Logarithmic Formulation
Arccosecant Logarithmic Formulation




