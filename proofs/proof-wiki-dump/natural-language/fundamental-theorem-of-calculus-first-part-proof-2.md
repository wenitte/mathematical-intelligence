# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus/First_Part/Proof_2

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Let $F$ be a real function which is defined on $\closedint a b$ by:

$\ds \map F x = \int_a^x \map f t \rd t$

Then $F$ is a primitive of $f$ on $\closedint a b$.


Proof













\(\ds \dfrac \d {\d x} \map F x\)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \frac 1 {\Delta x} \paren {\int_a^{x + \Delta x} \map f t \rd t - \int_a^x \map f t \rd t}\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \frac 1 {\Delta x} \paren {\int_x^a \map f t \rd t + \int_a^{x + \Delta x} \map f t \rd t}\)





because $\ds \int_a^b \map f x \rd x = -\int_b^a \map f x \rd x$














\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \frac 1 {\Delta x} \paren {\int_x^{x + \Delta x} \map f t \rd t}\)





Sum of Integrals on Adjacent Intervals for Continuous Functions




Suppose $\Delta x > 0$ and both $x$ and $x + \Delta x$ are in the closed interval $\closedint a b$.
By hypothesis, $f$ is continuous on the closed interval $\closedint a b$
Thus it is also continuous on the closed interval $\closedint x {x + \Delta x}$.
Thus the conditions of the Mean Value Theorem for Integrals are fulfilled.
So, by the Mean Value Theorem for Integrals, there exists some $k \in \closedint x {x + \Delta x}$ such that:

$\ds \int_x^{x + \Delta x} \map f x \rd x = \map f k \paren {x + \Delta x - x} = \map f k \Delta x$
Then:














\(\ds \lim_{\Delta x \mathop \to 0} \frac 1 {\Delta x} \paren {\int_x^{x + \Delta x} \map f t \rd t}\)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \frac 1 {\Delta x} \map f k \Delta x\)




















\(\ds \)

\(=\)







\(\ds \lim_{\Delta x \mathop \to 0} \map f k\)









By the definition of $k$:

$x \le k \le x + \Delta x$
which means that $k \to x$ as $\Delta x \to 0$.
So:














\(\ds \lim_{\Delta x \mathop \to 0} \map f k\)

\(=\)







\(\ds \lim_{k \mathop \to x} \map f k\)




















\(\ds \)

\(=\)







\(\ds \map f x\)





because $f$ is continuous



For $\Delta x < 0$, consider $k \in \closedint {x + \Delta x} x$, and the argument is similar.
Hence the result, by the definition of primitive.
$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 4.4$




