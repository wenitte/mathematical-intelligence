# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_plus_a_squared/Logarithm_Form/Proof_2

Theorem
$\ds \int \frac {\d x} {\sqrt {x^2 + a^2} } = \map \ln {x + \sqrt {x^2 + a^2} } + C$


Proof
Let $y^2 = a^2 + x^2$.
Then:














\(\ds 2 y \frac {\d y} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives, Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds y \frac {\d y} {\d x}\)

\(=\)







\(\ds x\)





simplification








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} x\)

\(=\)







\(\ds \frac {\d x} y\)




















\(\ds \)

\(=\)







\(\ds \frac {\d x + \d y} {x + y}\)






A specific link is needed here.In particular: We don't actually have a result for thisYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {x^2 + a^2} }\)

\(=\)







\(\ds \int \frac {\d x} y\)





substituting for $y$














\(\ds \)

\(=\)







\(\ds \frac {\d x + \d y} {x + y}\)





from above














\(\ds \)

\(=\)







\(\ds \ln \size {x + y} + C\)





Primitive of Function under its Derivative














\(\ds \)

\(=\)







\(\ds \ln \size {x + \sqrt {x^2 + a^2} } + C\)





substituting back














\(\ds \)

\(=\)







\(\ds \map \ln {x + \sqrt {x^2 + a^2} } + C\)





argument of $\ln$ always positive



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Algebraic Integration: $\text {IV}$.




