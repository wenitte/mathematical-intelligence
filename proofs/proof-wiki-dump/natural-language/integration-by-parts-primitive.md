# 

Source: https://proofwiki.org/wiki/Integration_by_Parts/Primitive



Theorem
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$.
Let $f$ and $g$ have primitives $F$ and $G$ respectively on $\closedint a b$.

Then:

$\ds \int \map f t \map G t \rd t = \map F t \map G t - \int \map F t \map g t \rd t$
on $\closedint a b$.


Corollary
Let $u$ and $v$ be real functions which are integrable on their domain.
Then:

$\ds \int u v \rd x = \paren {\int u \rd x} v - \int \paren {\int u \rd x} \dfrac {\d v} {\d x} \rd x$


Proof $1$













\(\ds \map {\dfrac \d {\d t} } {\map F t \map G t}\)

\(=\)







\(\ds \map f t \map G t + \map F t \map g t\)





Product Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \paren {\map f t \map G t + \map F t \map g t} \rd t\)

\(=\)







\(\ds \map F t \map G t\)





Fundamental Theorem of Calculus: integrating both sides with respect to $t$








\(\ds \leadsto \ \ \)





\(\ds \int \map f t \map G t \rd t + \int \map F t \map g t \rd t\)

\(=\)







\(\ds \map F t \map G t\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds \int \map f t \map G t \rd t\)

\(=\)







\(\ds \map F t \map G t - \int \map F t \map g t \rd t\)





rearranging



$\blacksquare$


Proof $2$
Let $\map u x$ and $\map v x$ be integrable functions defined on $\closedint a b$.
Then:














\(\ds \map {\dfrac \d {\d x} } {u v}\)

\(=\)







\(\ds u \dfrac {\d v} {\d x} + v \dfrac {\d u} {\d x}\)





Product Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds v \dfrac {\d u} {\d x}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {u v} - u \dfrac {\d v} {\d x}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \int v \dfrac {\d u} {\d x} \rd x\)

\(=\)







\(\ds \int \paren {\map {\dfrac \d {\d x} } {u v} - u \dfrac {\d v} {\d x} } \rd x\)





integrating both sides with respect to $x$














\(\ds \)

\(=\)







\(\ds \int \map {\dfrac \d {\d x} } {u v} \rd x - \int u \dfrac {\d v} {\d x} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds u v - \int u \dfrac {\d v} {\d x} \rd x\)





Fundamental Theorem of Calculus



$\blacksquare$


Also presented as
Integration by Parts is often seen presented in this sort of form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
or:

$\ds \int u \rd v = u v - \int v \rd u$
where it is understood that $u$ and $v$ are functions of the independent variable.


Proof Technique
The technique of solving an integral in the form $\ds \int \map f t \map G t \rd t$ in this manner is called integration by parts.
Its validity as a solution technique stems from the fact that it may be possible to choose $f$ and $G$ such that $G$ is easier to differentiate than to integrate.
Thus the plan is to reduce the integral to one such that $\ds \int \map F t \map g t \rd t$ is easier to solve than $\ds \int \map f t \map G t \rd t$.
It may be, of course, that one or more further applications of this technique are needed before the solution can be extracted.


Sources
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $3$.
For a video presentation of the contents of this page, visit the Khan Academy.




