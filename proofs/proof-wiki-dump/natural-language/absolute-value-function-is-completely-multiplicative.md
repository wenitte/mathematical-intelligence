# 

Source: https://proofwiki.org/wiki/Absolute_Value_Function_is_Completely_Multiplicative



Theorem
Let $x, y \in \R$ be real numbers.

Then:

$\size {x y} = \size x \size y$
where $\size x$ denotes the absolute value of $x$.

Thus the absolute value function is completely multiplicative.


Proof 1
Let either $x = 0$ or $y = 0$, or both.
We have that $\size 0 = 0$ by definition of absolute value.
Hence:

$\size x \size y = 0 = x y = \size {x y}$

Let $x > 0$ and $y > 0$.
Then:














\(\ds x y\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \size {x y}\)

\(=\)







\(\ds x y\)





Definition of Absolute Value



and:














\(\ds x\)

\(=\)







\(\ds \size x\)





Definition of Absolute Value














\(\ds y\)

\(=\)







\(\ds \size y\)














\(\ds \leadsto \ \ \)





\(\ds \size x \size y\)

\(=\)







\(\ds x y\)




















\(\ds \)

\(=\)







\(\ds \size {x y}\)










Let $x < 0$ and $y < 0$.
Then:














\(\ds x y\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \size {x y}\)

\(=\)







\(\ds x y\)





Definition of Absolute Value



and:














\(\ds -x\)

\(=\)







\(\ds \size x\)





Definition of Absolute Value














\(\ds -y\)

\(=\)







\(\ds \size y\)














\(\ds \leadsto \ \ \)





\(\ds \size x \size y\)

\(=\)







\(\ds \paren {-x} \paren {-y}\)




















\(\ds \)

\(=\)







\(\ds xy\)




















\(\ds \)

\(=\)







\(\ds \size {x y}\)










The final case is where one of $x$ and $y$ is positive, and one is negative.
Without loss of generality, let $x < 0$ and $y > 0$.
Then:














\(\ds x y\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \size {x y}\)

\(=\)







\(\ds -\paren {x y}\)





Definition of Absolute Value



and:














\(\ds -x\)

\(=\)







\(\ds \size x\)





Definition of Absolute Value














\(\ds y\)

\(=\)







\(\ds \size y\)














\(\ds \leadsto \ \ \)





\(\ds \size x \size y\)

\(=\)







\(\ds \paren {-x} y\)




















\(\ds \)

\(=\)







\(\ds -\paren {x y}\)




















\(\ds \)

\(=\)







\(\ds \size {x y}\)









The case where $x > 0$ and $y < 0$ is the same.
$\blacksquare$


Proof 2
Let $x$ and $y$ be considered as complex numbers which are wholly real.
That is:

$x = x + 0 i, y = y + 0 i$
From Complex Modulus of Real Number equals Absolute Value, the absolute value of $x$ and $y$ equal the complex moduli of $x + 0 i$ and $y + 0 i$.
Thus $\cmod x \cmod y$ can be interpreted as the complex modulus of $x$ multiplied by the complex modulus of $y$.
By Complex Modulus of Product of Complex Numbers:

$\cmod x \cmod y = \cmod {x y}$
As $x$ and $y$ are both real, so is $x y$.
Thus by Complex Modulus of Real Number equals Absolute Value, $\cmod {x y}$ can be interpreted as the absolute value of $x y$ as well as its complex modulus.
$\blacksquare$


Proof 3













\(\ds \size {x y}\)

\(=\)







\(\ds \sqrt {\paren {x y}^2}\)





Definition 2 of Absolute Value














\(\ds \)

\(=\)







\(\ds \sqrt {x^2 y^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {x^2} \sqrt{y^2}\)




















\(\ds \)

\(=\)







\(\ds \size x \cdot \size y\)









$\blacksquare$


Proof 4
Follows directly from:

Real Numbers form Ordered Integral Domain
Product of Absolute Values on Ordered Integral Domain.
$\blacksquare$


Sources
2003: John H. Conway and Derek A. Smith: On Quaternions And Octonions ... (previous) ... (next): $\S 1$: The Complex Numbers: Introduction: $1.1$: The Algebra $\R$ of Real Numbers
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): absolute value: $\text {(i)}$




