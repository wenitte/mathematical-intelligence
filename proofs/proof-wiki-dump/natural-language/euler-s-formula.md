# 

Source: https://proofwiki.org/wiki/Euler%27s_Formula

  This article was Featured Proof between 8 September 2008 and 14 September 2008.


Theorem
Let $z \in \C$ be a complex number.
Then:

$e^{i z} = \cos z + i \sin z$

where:

$e^{i z}$ denotes the complex exponential function
$\cos z$ denotes the complex cosine function
$\sin z$ denotes complex sine function
$i$ denotes the imaginary unit.


Real Domain
This result is often presented and proved separately for arguments in the real domain:

Let $\theta \in \R$ be a real number.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$


Corollary
$e^{-i z} = \cos z - i \sin z$


Proof
As Complex Sine Function is Absolutely Convergent and Complex Cosine Function is Absolutely Convergent, we have:














\(\ds \cos z + i \sin z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {z^{2 n} } {\paren {2 n}!} + i \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {z^{2 n + 1} } {\paren {2 n + 1}!}\)





Definition of Complex Cosine Function and Definition of Complex Sine Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\paren {-1}^n \dfrac {z^{2 n} } {\paren {2 n}!} + i \paren {-1}^n \dfrac {z^{2 n + 1} } {\paren {2 n + 1}!} }\)





Sum of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\dfrac {\paren {i z}^{2 n} } {\paren {2 n}!} + \dfrac {\paren {i z}^{2 n + 1} } {\paren {2 n + 1}!} }\)





Definition of Imaginary Unit














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {i z}^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds e^{i z}\)





Definition of Complex Exponential Function



$\blacksquare$


Examples
Example: $e^{i \pi / 4}$
$e^{i \pi / 4} = \dfrac {1 + i} {\sqrt 2}$


Example: $e^{i \pi / 2}$
$e^{i \pi / 2} = i$


Example: $e^{-i \pi / 2}$
$e^{-i \pi / 2} = -i$


Example: $e^{i \pi}$
$e^{i \pi} = -1$


Example: $e^{2 i \pi}$
$e^{2 i \pi} = 1$


Example: $e^{2 k i \pi}$
$\forall k \in \Z: e^{2 k i \pi} = 1$


Also known as
Euler's Formula in this and its corollary form, along with Euler's Sine Identity and Euler's Cosine Identity are also found referred to as Euler's Identities.
However, this allows for confusion with Euler's Identity:

$e^{i \pi} + 1 = 0$
It is wise when referring to it by name, therefore, to ensure that the equation itself is also specified.


Also see
Euler's Identity
Sum of Hyperbolic Sine and Cosine equals Exponential


Source of Name
This entry was named for Leonhard Paul Euler.


Historical Note
Leonhard Paul Euler famously published what is now known as Euler's Formula in $1748$.
However, it needs to be noted that Roger Cotes first introduced it in $1714$, in the form:

$\map \ln {\cos \theta + i \sin \theta} = i \theta$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euler's formula
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euler's identities
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's formula
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's identities
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Euler's formula
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $6$: Basic Algebra




