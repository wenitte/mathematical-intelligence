# 

Source: https://proofwiki.org/wiki/Arc_Length_for_Parametric_Equations



Theorem
Let $x = \map f t$ and $y = \map g t$ be real functions of a parameter $t$. 
Let these equations describe a curve $\CC$ that is continuous for all $t \in \closedint a b$ and continuously differentiable for all $t \in \openint a b$.
Suppose that the graph of the curve does not intersect itself for any $t \in \openint a b$.

Then the arc length of $\CC$ between $a$ and $b$ is given by:

$\ds s = \int_a^b \sqrt {\paren {\frac {\d x} {\d t} }^2 + \paren {\frac {\d y} {\d t} }^2} \rd t$
for $\dfrac {\d x} {\d t} \ne 0$.


Proof













\(\ds s\)

\(=\)







\(\ds \int_a^b \sqrt {1 + \paren {\frac {\d y} {\d x} }^2} \rd x\)





Definition of Arc Length














\(\ds \)

\(=\)







\(\ds \int_a^b \sqrt {\paren {\frac {\frac {\d x} {\d t} } {\frac {\d x} {\d t} } }^2 + \paren {\frac {\frac {\d y}{\d t} } {\frac {\d x} {\d t} } }^2} \rd x\)





because $\paren {\dfrac {\frac {\d x} {\d t} } {\frac {\d x}{\d t} } }^2 = 1$, and from corollary to chain rule














\(\ds \)

\(=\)







\(\ds \int_a^b \sqrt {\paren {\frac {\d x} {\d t} }^2 + \paren {\frac {\d y} {\d t} }^2} \paren {\frac 1 {\frac {\d x} {\d t} } } \rd x\)





factoring $\dfrac {\d x} {\d t}$ out of the radicand. No absolute value is needed as length cannot be negative.














\(\ds \)

\(=\)







\(\ds \int_a^b \sqrt {\paren {\frac {\d x} {\d t} }^2 + \paren {\frac {\d y} {\d t} }^2} \frac {\d t} {\d x} \rd x\)





Derivative of Inverse Function














\(\ds \)

\(=\)







\(\ds \int_a^b \sqrt {\paren {\frac {\d x} {\d t} }^2 + \paren {\frac {\d y} {\d t} }^2} \rd t\)





Integration by Substitution



$\blacksquare$


Also see
Continuously Differentiable Curve has Finite Arc Length
Length of Arc of Cycloid


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): length
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 10.3$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): length
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): length of an arc




