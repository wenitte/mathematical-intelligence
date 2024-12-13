# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Root_of_x_squared_plus_a_squared



Theorem
$\ds \int x^2 \sqrt {x^2 + a^2} \rd x = \frac {x \paren {\sqrt {x^2 + a^2} }^3} 4 - \frac {a^2 x \sqrt {x^2 + a^2} } 8 - \frac {a^4} 8 \map \ln {x + \sqrt {x^2 + a^2} } + C$


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





\(\ds \int x^2 \sqrt {x^2 + a^2} \rd x\)

\(=\)







\(\ds \int \frac {z \sqrt {z + a^2} \rd z} {2 \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \sqrt z \sqrt {z + a^2} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 z + a^2} 4 \sqrt z \sqrt {z + a^2} - \frac {a^4} 8 \int \frac {\d z} {\sqrt z \sqrt {z + a^2} } } + C\)





Primitive of $\sqrt {\paren {a x + b} \paren {p x + q} }$














\(\ds \)

\(=\)







\(\ds \frac {2 z + a^2} 8 \sqrt z \sqrt {z + a^2} - \frac {a^4} {16} \paren {2 \map \ln {\sqrt {z + a^2} + \sqrt z} } + C\)





Primitive of $\dfrac 1 {\sqrt {\paren {a x + b} \paren {p x + q} } }$














\(\ds \)

\(=\)







\(\ds \frac {2 z + 2 a^2} 8 \sqrt z \sqrt {z + a^2} - \frac {a^2} 8 \sqrt z \sqrt {z + a^2} - \frac {a^4} 8 \map \ln {\sqrt {z + a^2} + \sqrt z} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {z + a^2} 4 \sqrt z \sqrt {z + a^2} - \frac {a^2} 8 \sqrt z \sqrt {z + a^2} - \frac {a^4} 8 \map \ln {\sqrt {z + a^2} + \sqrt z} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {x^2 + a^2} }^3} 4 - \frac {a^2 x \sqrt {x^2 + a^2} } 8 - \frac {a^4} 8 \map \ln {x + \sqrt {x^2 + a^2} } + C\)





substituting for $z$



$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int x^2 \sqrt {a^2 + x^2} \rd x = \frac {x \paren {a^2 + 2 x^2} \sqrt {a^2 + x^2} } 8 - \frac {a^4} 8 \arsinh \frac x a + C$


Also see
Primitive of $x^2 \sqrt {x^2 - a^2}$
Primitive of $x^2 \sqrt {a^2 - x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 + a^2}$: $14.191$




