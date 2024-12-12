# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Exponential_Function/Extension_of_Rational_Exponential_implies_Differential_Equation



Theorem
The following definition of the concept of the real exponential function:

As an Extension of the Rational Exponential
Let $e$ denote Euler's number.
Let $f: \Q \to \R$ denote the real-valued function defined as:

$\map f x = e^x$
That is, let $\map f x$ denote $e$ to the power of $x$, for rational $x$.

Then $\exp : \R \to \R$ is defined to be the unique continuous extension of $f$ to $\R$.
$\map \exp x$ is called the exponential of $x$.

implies the following definition:

As the Solution of a Differential Equation
The exponential function can be defined as the unique solution $y = \map f x$ to the first order ODE:

$\dfrac {\d y} {\d x} = y$
satisfying the initial condition $\map f 0 = 1$.


Proof
Let $\exp x$ be the real function defined as the extension of rational exponential.

Then we have:














\(\ds \map {D_x} {\exp x}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map \exp {x + h} - \exp x} h\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\exp x \cdot \exp h - \exp x} h\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\exp x \paren {\exp h - 1} } h\)




















\(\ds \)

\(=\)







\(\ds \exp x \paren {\lim_{h \mathop \to 0} \frac {\exp h - 1} h}\)





Multiple Rule for Limits of Real Functions, as $\exp x$ is constant














\(\ds \)

\(=\)







\(\ds \exp x\)





Derivative of Exponential at Zero: Proof 2




The application of Derivative of Exponential at Zero is not circular as the referenced proof does not depend on $D_x \exp x = \exp x$.
$\Box$















\(\ds \exp 0\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac 0 n}^n\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$





