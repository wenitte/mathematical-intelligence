# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Components_of_Complex_Number_no_greater_than_Root_2_of_Modulus


It has been suggested that this page be renamed.In particular: Root 2 of Modulus?To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $z = x + i y \in \C$ be a complex number.
Then:

$\size x + \size y \le \sqrt 2 \cmod z$
where:

$\size x$ and $\size y$ denote the absolute value of $x$ and $y$
$\cmod z$ denotes the complex modulus of $z$.


Proof
Let $z = x + i y \in \C$ be an arbitrary complex number.
Aiming for a contradiction, suppose the contrary:














\(\ds \size x + \size y\)

\(>\)







\(\ds \sqrt 2 \cmod z\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\size x + \size y}^2\)

\(>\)







\(\ds 2 \cmod z^2\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds \size x^2 + 2 \size x \, \size y + \size y^2\)

\(>\)







\(\ds 2 \cmod z^2\)





multiplying out








\(\ds \leadsto \ \ \)





\(\ds x^2 + 2 \size x \, \size y + y^2\)

\(>\)







\(\ds 2 \cmod z^2\)





Definition of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds x^2 + 2 \size x \, \size y + y^2\)

\(>\)







\(\ds 2 \paren {x^2 + y^2}\)





Definition of Complex Modulus








\(\ds \leadsto \ \ \)





\(\ds 2 \size x \, \size y\)

\(>\)







\(\ds x^2 + y^2\)














\(\ds \leadsto \ \ \)





\(\ds 2 \size x \, \size y\)

\(>\)







\(\ds \size x^2 + \size y^2\)





Definition of Absolute Value








\(\ds \leadsto \ \ \)





\(\ds \size x^2 - 2 \size x \, \size y + \size y^2\)

\(<\)







\(\ds 0\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \paren {\size x - \size y}^2\)

\(<\)







\(\ds 0\)





factoring



But as $\size x$ and $\size y$ are both real this cannot happen.
Thus our initial assumption $\size x + \size y > \sqrt 2 \cmod z$ is false.
Hence the result.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $138$




