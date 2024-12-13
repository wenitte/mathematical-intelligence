# 

Source: https://proofwiki.org/wiki/Inverse_Hyperbolic_Sine_Logarithmic_Formulation

Theorem

This needs considerable tedious hard slog to complete it.In particular: The true story is more complicated than this. The inverse hyperbolic sine is a multifunction. So is $\ln$ in the complex plane. And $\sqrt {z^2 + 1}$ has two values, pos and neg, so you need to justify which one is taken. The best context to put this page is probably into Definition:Inverse Hyperbolic Sine/Complex/Principal Branch, where an explanation needs to be made as to why the principal value is taken thus.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
For any complex number $z \in \C$:

$\arsinh z = \map \ln {z + \sqrt {z^2 + 1} }$
where $\arsinh z$ is the inverse hyperbolic sine.


Proof













\(\ds z\)

\(=\)







\(\ds \sinh \arsinh z\)














\(\ds \leadstoandfrom \ \ \)





\(\ds z\)

\(=\)







\(\ds \frac {e^{\arsinh z} - e^{-\arsinh z} } 2\)





Definition of Inverse Hyperbolic Sine








\(\ds \leadstoandfrom \ \ \)





\(\ds 2 z e^{\arsinh z}\)

\(=\)







\(\ds e^{2 \arsinh z} - 1\)





Multiplication by $2 e^{\arsinh z}$








\(\ds \leadstoandfrom \ \ \)





\(\ds 0\)

\(=\)







\(\ds e^{2 \arsinh z} - 2 z e^{\arsinh z} - 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds e^{\arsinh z}\)

\(=\)







\(\ds z + \sqrt {z^2 + 1}\)





Quadratic Formula, $e^z > 0, \sqrt {z^2 + 1} > z$








\(\ds \leadstoandfrom \ \ \)





\(\ds \arsinh z\)

\(=\)







\(\ds \map \ln {z + \sqrt {z^2 + 1 } }\)









$\blacksquare$





