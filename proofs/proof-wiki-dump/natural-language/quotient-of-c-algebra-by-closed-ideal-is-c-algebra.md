# 

Source: https://proofwiki.org/wiki/Quotient_of_C*-Algebra_by_Closed_Ideal_is_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $I$ be a closed ideal of $A$.
Let $\struct {A/I, \norm {\, \cdot \,}_{A/I} }$ be the quotient normed algebra of $A$ modulo $I$.
Define $\ast : A/I \to A/I$ by:

$\paren {a + I}^\ast = a^\ast + I$
for each $a \in I$. 

Then $\struct {A/I, \ast, \norm {\, \cdot \,}_{A/I} }$ is a $\text C^\ast$-algebra.


Proof
We first show that $\ast$ is well-defined. 
That is, we show that:

$a + I = b + I$ implies that $a^\ast + I = b^\ast + I$.
That is:

$b - a \in I$ implies that $b^\ast - a^\ast \in I$.
From Closed Ideal of C*-Algebra is Self-Adjoint, $I$ is self-adjoint. 
Hence, if $b - a \in I$ then we have $b^\ast - a^\ast = \paren {b - a}^\ast \in I$ from $(\text C^\ast 2)$ in the definition of an involution.
So $a^\ast + I = b^\ast + I$.

From Sufficient Condition for C* Identity, it is enough to show:

$\norm {a + I}^2_{A/I} \le \norm {a a^\ast + I}_{A/I}$
Let $B_I$ be the closed unit ball of $I$.
Let $B_I^+ \subseteq B_I$ be the set of positive elements of $A$ contained in $B_I$.
Let $\struct {A_+, \ast, \norm {\, \cdot \,} }$ be the unitization of $A$.
We then have:














\(\ds \norm {a + I}^2\)

\(=\)







\(\ds \inf \set {\norm {a - a x}^2 : x \in B_I^+}\)





Quotient Norm on Quotient of C*-Algebra by Closed Ideal in terms of Positive Elements of Closed Unit Ball














\(\ds \)

\(=\)







\(\ds \inf \set {\norm {\tuple {a, 0} - \tuple {a, 0} \tuple {x, 0} }_\ast^2 : x \in B_I^+}\)





Definition of Unitization of C*-Algebra














\(\ds \)

\(=\)







\(\ds \inf \set {\norm {\tuple {a, 0} \paren {\tuple {0, 1} - \tuple {x, 0} } }_\ast^2 : x \in B_I^+}\)




















\(\ds \)

\(=\)







\(\ds \inf \set {\norm {\paren {\tuple {0, 1} - \tuple {x, 0} } \tuple {a^\ast a, 0} \paren {\tuple {0, 1} - \tuple {x, 0} } }^2_\ast : x \in B_I^+}\)









From Element of C*-Algebra is Positive iff Positive in Unitization, $\tuple {x, 0}$ is positive in $A_+$ for each $x \in B_I^+$.
From Spectrum of Element of Banach Algebra is Bounded, we therefore have $\map {\sigma_{A_+} } {\tuple {x, 0} } \subseteq \closedint 0 1$.
From the Spectral Mapping Theorem for Polynomials, we have $\map {\sigma_{A_+} } {\tuple {0, 1} - \tuple {x, 0} } \subseteq \closedint 0 1$.
Then, from Spectral Radius of Normal Element of C*-Algebra Equal to Norm we have $\norm {\tuple {0, 1} - \tuple {x, 0} }_\ast \le 1$.
We therefore have:














\(\ds \inf \set {\norm {\paren {\tuple {0, 1} - \tuple {x, 0} } \tuple {a^\ast a, 0} \paren {\tuple {0, 1} - \tuple {x, 0} } }^2_\ast : x \in B_I^+}\)

\(\le\)







\(\ds \inf \set {\norm {\tuple {0, 1} - \tuple {x, 0} }_\ast^2 \norm {\tuple {a^\ast a, 0} \paren {\tuple {0, 1} - \tuple {x, 0} } }^2_\ast : x \in B_I^+}\)





Definition of Norm on Algebra














\(\ds \)

\(\le\)







\(\ds \inf \set {\norm {\tuple {a^\ast a, 0} \paren {\tuple {0, 1} - \tuple {x, 0} } }^2_\ast : x \in B_I^+}\)




















\(\ds \)

\(=\)







\(\ds \inf \set {\norm {\tuple {a^\ast a, 0} - \tuple {a^\ast a x, 0} }_\ast^2 : x \in B_I^+}\)




















\(\ds \)

\(=\)







\(\ds \inf \set {\norm {\tuple {a^\ast a - a^\ast a x, 0} }_\ast^2 : x \in B_I^+}\)




















\(\ds \)

\(=\)







\(\ds \inf \set {\norm {a^\ast a - a^\ast a x}^2 : x \in B_I^+}\)





Definition of Unitization of C*-Algebra














\(\ds \)

\(=\)







\(\ds \inf \set {\norm {a^\ast a - a^\ast a x} : x \in B_I^+}^2\)




















\(\ds \)

\(=\)







\(\ds \norm {a^\ast a + I}_{A/I}^2\)





Quotient Norm on Quotient of C*-Algebra by Closed Ideal in terms of Positive Elements of Closed Unit Ball



Hence:

$\norm {a + I}^2_{A/I} \le \norm {a a^\ast + I}_{A/I}$
as desired.
$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Theorem $5.6$




