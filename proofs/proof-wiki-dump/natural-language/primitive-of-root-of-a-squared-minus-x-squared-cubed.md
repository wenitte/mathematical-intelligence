# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_a_squared_minus_x_squared_cubed



Theorem
$\ds \int \paren {\sqrt {a^2 - x^2} }^3 \rd x = \frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {3 a^2 x \sqrt {a^2 - x^2} } 8 + \frac {3 a^4} 8 \arcsin \frac x a + C$



This article is complete as far as it goes, but it could do with expansion.In particular: Proof using $x = a \sin \theta$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
Let:














\(\ds z\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \paren {\sqrt {a^2 - x^2} }^3 \rd x\)

\(=\)







\(\ds \int \frac {\paren {\sqrt {a^2 - z} }^3} {2 \sqrt z} \rd x\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {\sqrt z \paren {\sqrt {a^2 - z} }^3} 4 + \frac {3 a^2} 8 \int \frac {\sqrt {a^2 - z} } {\sqrt z} \rd x + C\)





Primitive of $\dfrac {\paren {p x + q}^n} {\sqrt{a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {\sqrt z \paren {\sqrt {a^2 - z} }^3} 4 + \frac {3 a^2} 8 \paren {\sqrt z \sqrt {a^2 - z} + \frac {a^2} 2 \int \frac {\d x} {\sqrt z \sqrt {a^2 - z} } } + C\)





Primitive of $\dfrac {\sqrt{p x + q} } {\sqrt{a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {3 a^2} 8 x \sqrt {a^2 - x^2} + \frac {3 a^4} 8 \int \frac {\d x} {\sqrt {a^2 - x^2} } + C\)





substituting for $z$ and simplifying














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {a^2 - x^2} }^3} 4 + \frac {3 a^2 x \sqrt {a^2 - x^2} } 8 + \frac {3 a^4} 8 \arcsin \frac x a + C\)





Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$



$\blacksquare$


Also see
Primitive of $\paren {\sqrt {x^2 + a^2} }^3$
Primitive of $\paren {\sqrt {x^2 - a^2} }^3$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a^2 - x^2}$: $14.258$




