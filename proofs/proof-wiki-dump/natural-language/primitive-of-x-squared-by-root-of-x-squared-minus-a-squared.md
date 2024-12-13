# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Root_of_x_squared_minus_a_squared



Theorem
$\ds \int x^2 \sqrt {x^2 - a^2} \rd x = \frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 + \frac {a^2 x \sqrt {x^2 - a^2} } 8 - \frac {a^4} 8 \ln \size {x + \sqrt {x^2 - a^2} } + C$
for $\size x \ge a$.


Proof
We have that $\sqrt {x^2 - a^2}$ is defined only when $x^2 \ge a^2$, that is, either:

$x \ge a$
or:

$x \le -a$
where it is assumed that $a > 0$.

First let $x \ge a$.
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





\(\ds \int x^2 \sqrt {x^2 - a^2} \rd x\)

\(=\)







\(\ds \int \frac {z \sqrt {z - a^2} \rd z} {2 \sqrt z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int \sqrt z \sqrt {z - a^2} \rd z\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 z - a^2} 4 \sqrt z \sqrt {z - a^2} - \frac {a^4} 8 \int \frac {\d z} {\sqrt z \sqrt {z - a^2} } } + C\)





Primitive of $\sqrt {\paren {a x + b} \paren {p x + q} }$














\(\ds \)

\(=\)







\(\ds \frac {2 z - a^2} 8 \sqrt z \sqrt {z - a^2} - \frac {a^4} {16} \paren {2 \map \ln {\sqrt {z - a^2} + \sqrt z} } + C\)





Primitive of $\dfrac 1 {\sqrt {\paren {a x + b} \paren {p x + q} } }$














\(\ds \)

\(=\)







\(\ds \frac {2 z - 2 a^2} 8 \sqrt z \sqrt {z - a^2} + \frac {a^2} 8 \sqrt z \sqrt {z - a^2} - \frac {a^4} 8 \ln \paren {\sqrt {z - a^2} + \sqrt z} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {z - a^2} 4 \sqrt z \sqrt {z - a^2} + \frac {a^2} 8 \sqrt z \sqrt {z - a^2} - \frac {a^4} 8 \ln \paren {\sqrt {z - a^2} + \sqrt z} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 + \frac {a^2 x \sqrt {x^2 - a^2} } 8 - \frac {a^4} 8 \ln \paren {x + \sqrt {x^2 - a^2} } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 + \frac {a^2 x \sqrt {x^2 - a^2} } 8 - \frac {a^4} 8 \ln \size {x + \sqrt {x^2 - a^2} } + C\)





as $x + \sqrt {x^2 - a^2} > 0$




Now suppose $x \le -a$.
Let $z = -x$.
Then:

$\d x = -\d z$
and we then have:















\(\ds \int x^2 \sqrt {x^2 - a^2} \rd x\)

\(=\)







\(\ds -\int \paren {-z}^2 \sqrt {\paren {-z}^2 - a^2} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\int z^2 \sqrt {z^2 - a^2} \rd z\)





simplifying














\(\ds \)

\(=\)







\(\ds -\paren {\frac {z \paren {\sqrt {z^2 - a^2} }^3} 4 + \frac {a^2 z \sqrt {z^2 - a^2} } 8 - \frac {a^4} 8 \map \ln {z + \sqrt {z^2 - a^2} } } + C\)





from above














\(\ds \)

\(=\)







\(\ds -\frac {z \paren {\sqrt {z^2 - a^2} }^3} 4 - \frac {a^2 z \sqrt {z^2 - a^2} } 8 + \frac {a^4} 8 \map \ln {z + \sqrt {z^2 - a^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac {z \paren {\sqrt {z^2 - a^2} }^3} 4 - \frac {a^2 z \sqrt {z^2 - a^2} } 8 - \frac {a^4} 8 \paren {\map \ln {z - \sqrt {z^2 - a^2} } - \map \ln {a^2} } + C\)





Negative of $\map \ln {z + \sqrt {z^2 - a^2} }$














\(\ds \)

\(=\)







\(\ds -\frac {z \paren {\sqrt {z^2 - a^2} }^3} 4 - \frac {a^2 z \sqrt {z^2 - a^2} } 8 - \frac {a^4} 8 \paren {\map \ln {z - \sqrt {z^2 - a^2} } } + C\)





subsuming $\dfrac {a^4 \map \ln {-a^2} } 8$ into constant














\(\ds \)

\(=\)







\(\ds -\frac {\paren {-x} \paren {\sqrt {\paren {-x}^2 - a^2} }^3} 4 - \frac {a^2 \paren {-x} \sqrt {\paren {-x}^2 - a^2} } 8 - \frac {a^4} 8 \paren {\map \ln {\paren {-x} - \sqrt {\paren {-x}^2 - a^2} } } + C\)





substituting back for $x$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 + \frac {a^2 x \sqrt {x^2 - a^2} } 8 - \frac {a^4} 8 \map \ln {-\paren {x + \sqrt {x^2 - a^2} } } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {x^2 - a^2} }^3} 4 + \frac {a^2 x \sqrt {x^2 - a^2} } 8 - \frac {a^4} 8 \ln \size {x + \sqrt {x^2 - a^2} } + C\)





as $-\paren {x + \sqrt {x^2 - a^2} } > 0$: Definition of Absolute Value



$\blacksquare$


Also presented as
This result is also seen presented in the form:

$\ds \int x^2 \sqrt {x^2 - a^2} \rd x = \frac x 8 \paren {2 x^2 - a^2} \sqrt {x^2 - a^2} - \frac {a^4} 8 \arcosh \dfrac x a + C$


Also see
Primitive of $x^2 \sqrt {x^2 + a^2}$
Primitive of $x^2 \sqrt {a^2 - x^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {x^2 - a^2}$: $14.218$




