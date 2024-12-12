# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Complex_Exponential_Function/Power_Series_Expansion_equivalent_to_Definition_by_Real_Functions



Theorem
The following definitions of the concept of Complex Exponential Function are equivalent:

As a Power Series Expansion
The exponential function can be defined as a (complex) power series:










\(\ds \forall z \in \C: \, \)



\(\ds \exp z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds 1 + \frac z {1!} + \frac {z^2} {2!} + \frac {z^3} {3!} + \cdots + \frac {z^n} {n!} + \cdots\)









By Real Functions
The exponential function can be defined by the real exponential, sine and cosine functions:

$\exp z := e^x \paren {\cos y + i \sin y}$
where $z = x + i y$ with $x, y \in \R$.
Here, $e^x$ denotes the real exponential function, which must be defined first.


Proof
We have the result:

Power Series Expansion equivalent to Solution of Differential Equation
which gives that the definition of $\exp z$ as the power series:

$\exp z := \ds \sum_{n \mathop = 0}^\infty \frac {z^n} {n!}$
is equivalent to the definition of $\exp z$ as the solution of the differential equation:

$\dfrac {\d y} {\d z} = y$
satisfying the initial condition $y \paren 0 = 1$.

Let:

$e: \R \to \R$ denote the real exponential function
$\sin: \R \to \R$ denote the real sine function
$\cos: \R \to \R$ denote the real cosine function.

Then:














\(\ds \exp z\)

\(=\)







\(\ds \map \exp {x + i y}\)





where $x, y \in \R$














\(\ds \)

\(=\)







\(\ds \map \exp x \map \exp {i y}\)





Exponential of Sum: Complex Numbers














\(\ds \)

\(=\)







\(\ds e^x \map \exp {i y}\)





Definition (as Power Series Expansion) agrees with Definition of Real Exponential for all $x \in \R$














\(\ds \)

\(=\)







\(\ds e^x \paren {\cos y + i \sin y}\)





Euler's Formula, which can be proven using Definition as Power Series Expansion



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.5$. The Functions $e^z$, $\cos z$, $\sin z$




