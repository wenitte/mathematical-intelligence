# 

Source: https://proofwiki.org/wiki/Green%27s_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\Gamma$ be a positively oriented piecewise smooth Jordan curve in $\R^2$.
Let $U = \Int \Gamma$, that is, the interior of $\Gamma$.
Let $A$ and $B$ be functions of $\tuple {x, y}$ defined on an open region containing $U$ and have continuous partial derivatives in such a set.
Then:

$\ds \oint_\Gamma \paren {A \rd x + B \rd y} = \iint_U \paren {\frac {\partial B} {\partial x} - \frac {\partial A} {\partial y} } \rd x \rd y$
where the left hand side is a contour integral.


Proof
It suffices to demonstrate the theorem for rectangular regions in the $x y$-plane.
The Riemann-sum nature of the double integral will then guarantee the proof of the theorem for arbitrary regions, because a Riemann-sum is technically a summation of the areas of arbitrarily small rectangles. 
As the proof is for a rectangle, the proof will work for arbitrary regions, which can be approximated by collections of ever smaller rectangles.


This article contains statements that are justified by handwavery.In particular: To do this formally involves the Monotone Convergence Theorem (Measure Theory) for $U$ and approximating $\Gamma$ by means of a "piecewise rectification". Its arduous, yet necessary.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Let $R = \set {\tuple {x, y}: a \le x \le b, c \le y \le d}$ be a rectangular region.
Let the boundary $C$ of $R$ be oriented counterclockwise.
We break the boundary into $4$ pieces:

$C_1$, which runs from $\tuple {a, c}$ to $\tuple {b, c}$
$C_2$, which runs from $\tuple {b, c}$ to $\tuple {b, d}$
$C_3$, which runs from $\tuple {b, d}$ to $\tuple {a, d}$
$C_4$, which runs from $\tuple {a, d}$ to $\tuple {a, c}$

Then:














\(\ds \iint_R \frac {\partial B} {\partial x} \rd x \rd y\)

\(=\)







\(\ds \int_c^d \int_a^b \frac {\partial B} {\partial x} \rd x \rd y\)




















\(\ds \)

\(=\)







\(\ds \int_c^d \paren {\map B {b, y} - \map B {a, y} } \rd y\)




















\(\ds \)

\(=\)







\(\ds \int_c^d  \map B {b, y} \rd y + \int_d^c \map B {a, y} \rd y\)




















\(\ds \)

\(=\)







\(\ds \int_{C_2} B \rd y + \int_{C_4} B \rd y\)










We note that $y$ is constant along $C_1$ and $C_3$.
So:

$\ds \int_{C_1} B \rd y = \int_{C_3} B \rd y = 0$
Hence:














\(\ds \int_{C_2} B \rd y + \int_{C_4} B \rd y\)

\(=\)







\(\ds \int_{C_1} B \rd y + \int_{C_2} B \rd y + \int_{C_3} B \rd y + \int_{C_4} B \rd y\)




















\(\ds \)

\(=\)







\(\ds \oint_C B \rd y\)










A similar argument demonstrates that:

$\ds \iint_R \frac {\partial A} {\partial y} \rd x \rd y = -\oint_C A \d x$
and hence:

$\ds \oint_C \paren {A \rd x + B \rd y} = \iint_R \paren {\frac {\partial B} {\partial x} - \frac {\partial A} {\partial y} } \rd x \rd y$
$\blacksquare$


Also see
Gauss-Ostrogradsky Theorem
Stokes' Theorem


Source of Name
This entry was named for George Green.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Green's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Green's theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Green, George (1793-1841)




