# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Natural_Logarithm/Proof_2



Theorem
The following definitions of the concept of Real Natural Logarithm are equivalent:

Definition 1
The (natural) logarithm of $x$ is the real-valued function defined on $\R_{>0}$ as:

$\ds \forall x \in \R_{>0}: \ln x := \int_1^x \frac {\d t} t$
Definition 2
Let $x \in \R$ be a real number such that $x > 0$.
The (natural) logarithm of $x$ is defined as:

$\ln x := y \in \R: e^y = x$
where $e$ is Euler's number.

Definition 3
Let $x \in \R$ be a real number such that $x > 0$.
The (natural) logarithm of $x$ is defined as:

$\ds \ln x := \lim_{n \mathop \to \infty} n \paren {\sqrt [n] x - 1}$


Proof
Let $x \in \R$ be such that $x > 0$.
Let $y \in \R$ be the unique number such that:

$e^y = x$


Definition 1 iff Definition 2













\(\ds \int_1^x \dfrac {\rd t} t\)

\(=\)







\(\ds \int_0^y \dfrac {\map {\phi '} s \rd s} {\map \phi s}\)





by Integration by Substitution with $\map \phi s = e^s$














\(\ds \)

\(=\)







\(\ds \int_0^y \dfrac {e^s \rd s} {e^s}\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \int_0^y 1 \rd s\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits s 0 y\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds y - 0\)




















\(\ds \)

\(=\)







\(\ds y\)









$\Box$


Definition 3 iff Definition 2
We shall show:

$\ds \lim_{n \mathop \to \infty} n \paren {\sqrt [n] x - 1} = y$

If $y = 0$, then $x = e^0 = 1$.
Thus the claim is clear, as:

$\forall n \in \N : n \paren {\sqrt [n] x - 1} = 0$

If $y \ne 0$, then:














\(\ds \dfrac {n \paren {\sqrt [n] x - 1} } y\)

\(=\)







\(\ds \dfrac {n \paren {\sqrt [n] {e^y} - 1} } y\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {n \paren {e^{\frac y n} - 1} } y\)





Definition of Root of Number














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {e^{\frac y n} - 1} } {\dfrac y n}\)




















\(\ds \)

\(\to\)







\(\ds 1\)





as $n \to \infty$ by Derivative of Exponential at Zero



$\blacksquare$





